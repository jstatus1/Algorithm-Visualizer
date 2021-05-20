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
      FINISH_NODE_COL: 35
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

  handleMouseDown(row, col) 
  {
    const newGrid = getNewGridWithWallToggled(this.state.grid, row, col);
    this.setState({grid: newGrid, mouseIsPressed: true});
  }

  handleMouseEnter(row, col) {
    if (!this.state.mouseIsPressed) return;
    const newGrid = getNewGridWithWallToggled(this.state.grid, row, col);
    this.setState({grid: newGrid});
  }

  handleMouseUp() {
    this.setState({mouseIsPressed: false});
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
    const {grid} = this.state;
    const startNode = grid[this.state.START_NODE_ROW][this.state.START_NODE_COL];
    const finishNode = grid[this.state.FINISH_NODE_ROW][this.state.FINISH_NODE_COL];
    const visitedNodesInOrder = dijkstra(grid, startNode, finishNode);
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
    this.animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
  }

  clearGrid()
  {
    for(let y = 0; y < this.state.grid.length; y++)
    {
        for(let x= 0; x < this.state.grid[y].length; x++)
        {
         
          document.getElementById(`node-${y}-${x}`).className = 'node'
        }
    }
    //set up the position for start and finish
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

