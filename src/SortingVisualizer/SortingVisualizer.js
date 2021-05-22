import React from 'react'
import './SortingVisualizer.css'

//IMPORTS
import NavBar from '../Navbar/Navbar'
import FooterBar from '../FooterBar/footerbar'
import Bar from './Bar/Bar'

//ALGORITHM IMPORTS
import {getMergeSortAnimations} from '../Algorithms/Sorting/MergeSort';



function randomIntFromInterval(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)+min)
}

export default class SortingVisualizer extends React.Component{
    constructor(props)
    {
        super(props)

        this.state = {
            array: [],
            primaryColor: 'turquoise',
            secondaryColor: 'red',
            animationSpeed: 1
        }
    }



    componentDidMount()
    {
        this.resetArray()
    }

    resetArray()
    {
        const array = []
        let barAmount = Math.floor(window.screen.height/5)
        let maxHeight = Math.floor(window.screen.height - 150)
        for(let i  = 0; i < barAmount; i++)
        {
            let value = randomIntFromInterval(5, maxHeight)
            //array.push(<Bar value={value} idx={i} primaryColor={this.state.primaryColor}></Bar>)
            array.push(value);
        }

        this.setState({array})
    }

    mergeSort()
    {
        const {animations, endingAnimations} = getMergeSortAnimations(this.state.array);
        
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('array-bar');
          const isColorChange = i % 3 !== 2;
          if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? this.state.secondaryColor : this.state.primaryColor;
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * this.state.animationSpeed);
          } else {
            setTimeout(() => {
              const [barOneIdx, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight}px`;
            }, i * this.state.animationSpeed);
          }
        }

        setTimeout(() => {
            for (let i = 0; i < endingAnimations.length; i++) {
                const arrayBars = document.getElementsByClassName('array-bar');
                const isColorChange = i % 3 !== 2;
                if (isColorChange) {
                  const [barOneIdx, barTwoIdx] = endingAnimations[i];
                  const barOneStyle = arrayBars[barOneIdx].style;
                  const barTwoStyle = arrayBars[barTwoIdx].style;
                  const color = i % 3 === 0 ? this.state.secondaryColor : this.state.primaryColor;
                  setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                    barOneStyle.backgroundColor = "black";
                    barTwoStyle.backgroundColor = "black";
                  }, i * this.state.animationSpeed);
                } else {
                  setTimeout(() => {
                    const [barOneIdx, newHeight] = endingAnimations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                    barOneStyle.backgroundColor = "black";
                  }, i * this.state.animationSpeed);
                }
              }
        }, (animations.length * this.state.animationSpeed)+100)

        
    }

    bubbleSort()
    {

    }

    heapSort()
    {

    }

    bubbleSort()
    {
        
    }


    render()
    {
       
        
        return(
            <React.Fragment >
                
                <NavBar></NavBar>
                <div className="container"> 
                    <div className="array-container">
                       {/* {this.state.array.map(value => {
                           return value
                       })} */}
                       {this.state.array.map((value, idx) => (
                        <div
                            className="array-bar"
                            key={idx}
                            style={{
                            backgroundColor: this.state.primaryColor,
                            height: `${value}px`,
                            }}></div>
                        ))}
                    </div>
                </div>
                
                <button onClick={() => {this.resetArray()}}>Generate Random Array</button>
                <button onClick={() => {this.mergeSort()}}>Merge Sort</button>
                <button onClick={() => {this.bubbleSort()}}>Bubble Sort</button>
                <FooterBar></FooterBar>
            </React.Fragment>
        )
    }

    
}