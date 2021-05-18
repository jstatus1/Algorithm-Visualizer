import React from 'react'
import './SortingVisualizer.css'

//IMPORTS
import NavBar from '../Navbar/Navbar'
import FooterBar from '../FooterBar/footerbar'

function randomIntFromInterval(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)+min)
}

export default class SortingVisualizer extends React.Component{
    constructor(props)
    {
        super(props)

        this.state = {
            array: []
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
            array.push(randomIntFromInterval(5, maxHeight))
        }

        this.setState({array})
        console.log("Window Height:" , )
    }

    mergeSort()
    {

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
        const {array} = this.state
        
        return(
            <React.Fragment >
                
                <NavBar></NavBar>
                <div className="container"> 
                    <div className="array-container">
                        {console.log(array)}
                        {array.map((value, idx) => (
                            <div
                                className="array-bar"
                                key={idx}
                                style={{height: `${value}px`}}
                                >       
                            </div>
                        ))}
                    </div>
                </div>
                
                <button onClick={() => {this.resetArray()}}>Generate Random Array</button>
                <FooterBar></FooterBar>
            </React.Fragment>
        )
    }

    
}