import React, {Component} from 'react';
import Node from './Node/Node';
import NavBar from '../Navbar/Navbar'


import './PathfindingVisualizer.css';

//Algorithm Imports
import {dijkstra, getNodesInShortestPathOrder} from '../Algorithms/PathFinding Algorithms/dijkstra';



const getNewGridWithWallToggled = (grid, row, col) => {
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  const newNode = {
      ...node,
      isWall: !node.isWall,
  };
  newGrid[row][col] = newNode;
  return newGrid;
};

export default class PathfindingVisualizer extends Component {
  constructor() {
    super();
    this.state = {
      grid: [],
      row: 25,
      col: 50,
      mouseIsPressed: false,
      START_NODE_ROW: 10,
      START_NODE_COL: 15,
      FINISH_NODE_ROW: 10,
      FINISH_NODE_COL: 35,
      mouseOnStartNode: false,
      mouseOnFinishNode: false
    };
  }

  getInitialGrid = () => {
      const grid = [];
      for (let row = 0; row < this.state.row; row++) {
          const currentRow = [];
          for (let col = 0; col < this.state.col; col++) {
              currentRow.push(this.createNode(col, row));
          }
          grid.push(currentRow);
      }
      return grid;
  };

  createNode = (col, row) => {
      return {
          col,
          row,
          isStart: row === this.state.START_NODE_ROW && col === this.state.START_NODE_COL,
          isFinish: row === this.state.FINISH_NODE_ROW && col === this.state.FINISH_NODE_COL,
          distance: Infinity,
          isVisited: false,
          isWall: false,
          previousNode: null,
      };
  };

  componentDidMount() {
    const grid = this.getInitialGrid();
    this.setState({grid});
  }

  updateStartNode(row, col)
  {
    const newGrid = this.state.grid.slice();


    //set old to none, set new to start
    const new_node = newGrid[row][col];
    const old_node = newGrid[this.state.START_NODE_ROW][this.state.START_NODE_COL]

    const oldNode = {
      ...old_node,
      isWall: false,
      isStart:false,
    };
    newGrid[this.state.START_NODE_ROW][this.state.START_NODE_COL] = oldNode;

    this.setState({START_NODE_ROW: row, START_NODE_COL:col})
    const newNode = {
        ...new_node,
        isWall: false,
        isStart: true,
    };
    newGrid[row][col] = newNode;

    return newGrid;
  }

  updateFinishNode(row, col)
  {
    const newGrid = this.state.grid.slice();


    //set old to none, set new to start
    const new_node = newGrid[row][col];
    const old_node = newGrid[this.state.FINISH_NODE_ROW][this.state.FINISH_NODE_COL]

    const oldNode = {
      ...old_node,
      isWall: false,
      isFinish:false,
    };
    newGrid[this.state.FINISH_NODE_ROW][this.state.FINISH_NODE_COL] = oldNode;

    this.setState({FINISH_NODE_ROW: row, FINISH_NODE_COL:col})
    const newNode = {
        ...new_node,
        isWall: false,
        isFinish: true,
    };
    newGrid[row][col] = newNode;

    return newGrid;
  }

  handleMouseDown(row, col) 
  {
    //check if it is start node or finish node
    if(row == this.state.START_NODE_ROW && col == this.state.START_NODE_COL)
    {
      this.setState({mouseIsPressed: true, mouseOnStartNode:true})
      return
    }else if(row == this.state.FINISH_NODE_ROW && col == this.state.FINISH_NODE_COL)
    {
      this.setState({mouseIsPressed: true, mouseOnFinishNode:true})
      return
    }

    //else it is a wall you want to toggle on or off
    const newGrid = getNewGridWithWallToggled(this.state.grid, row, col);
    this.setState({grid: newGrid, mouseIsPressed: true});
  }

  handleMouseEnter(row, col) {
    if (!this.state.mouseIsPressed) return;

    if(this.state.mouseOnStartNode)
    {
      const newGrid = this.updateStartNode(row,col)
      this.setState({grid: newGrid});
    }else if(this.state.mouseOnFinishNode)
    {
      const newGrid = this.updateFinishNode(row,col)
      this.setState({grid: newGrid});
    }else{
      const newGrid = getNewGridWithWallToggled(this.state.grid, row, col);
      this.setState({grid: newGrid});
    }
  }

  handleMouseUp() {
    this.setState({mouseIsPressed: false, mouseOnStartNode:false, mouseOnFinishNode:false});
  }

  animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder) {
    for (let i = 0; i <= visitedNodesInOrder.length; i++) {
        if (i === visitedNodesInOrder.length) {
          setTimeout(() => {
            this.animateShortestPath(nodesInShortestPathOrder);
          }, 10 * i);
          return;
        }
        setTimeout(() => {
          const node = visitedNodesInOrder[i];
          document.getElementById(`node-${node.row}-${node.col}`).className =
            'node node-visited';
        }, 10 * i);
    }
  }

  animateShortestPath(nodesInShortestPathOrder) {
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
      setTimeout(() => {
        const node = nodesInShortestPathOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          'node node-shortest-path';
      }, 50 * i);
    }
  }

  visualizeDijkstra() {
    const startNode = this.state.grid[this.state.START_NODE_ROW][this.state.START_NODE_COL];
    const finishNode = this.state.grid[this.state.FINISH_NODE_ROW][this.state.FINISH_NODE_COL];
    const visitedNodesInOrder = dijkstra(this.state.grid, startNode, finishNode);
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
    this.animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
  }

  clearGrid()
  {
    let grid = []
    for(let y = 0; y < this.state.grid.length; y++)
    {
        let currentRow = []
        for(let x= 0; x < this.state.grid[y].length; x++)
        {
          document.getElementById(`node-${y}-${x}`).className = 'node'
          currentRow.push(this.createNode(x, y))
        }
        grid.push(currentRow)
    }

    
    //set up the position for start and finish
    this.setState({grid})
    document.getElementById(`node-${this.state.START_NODE_ROW}-${this.state.START_NODE_COL}`).className = 'node node-start'
    document.getElementById(`node-${this.state.FINISH_NODE_ROW}-${this.state.FINISH_NODE_COL}`).className = 'node node-finish'
  }

  render() {
    return (
      <>
      <NavBar></NavBar>
        <button onClick={() => this.visualizeDijkstra()}>
          Visualize Dijkstra's Algorithm
        </button>
        <button onClick={() => this.clearGrid()}>
          Clear Grid
        </button>
        <div className="container">
            <div className=" grid">
                {this.state.grid.map((row, rowIdx) => {
                    return (
                    <div key={rowIdx}>
                        {row.map((node, nodeIdx) => {
                        const {row, col, isFinish, isStart, isWall} = node;
                        return (
                            <Node
                                key={nodeIdx}
                                col={col}
                                isFinish={isFinish}
                                isStart={isStart}
                                isWall={isWall}
                                mouseIsPressed={this.state.mouseIsPressed}
                                onMouseDown={(row, col) => this.handleMouseDown(row, col)}
                                onMouseEnter={(row, col) =>
                                    this.handleMouseEnter(row, col)
                                }
                                onMouseUp={() => this.handleMouseUp()}
                                row={row}>
                            </Node>
                        );
                        })}
                    </div>
                    );
                })}
            </div>
        </div>
      </>
    );
  }
}

