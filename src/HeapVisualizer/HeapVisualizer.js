import React from 'react'
import NavBar from '../Navbar/Navbar'

//css
import './HeapVisualizer.css'


class HeapVisualizer extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            array: []
        }
    }

    renderGraph()
    {
        return(<svg width="1000" height="600">
            <g id="edge">
                <path id="e2" class="ude" d="M434.2469998754255,52.800533355479914L240.75300012457453,87.19946664452009" stroke="#333" stroke-width="3"></path>
                <path id="e3" class="ude" d="M465.7530001245745,52.800533355479914L659.2469998754254,87.19946664452009" stroke="#333" stroke-width="3"></path>
                <path id="e4" class="ude" d="M209.92456495553375,95.36015468247689L127.57543504446625,124.63984531752311" stroke="#333" stroke-width="3"></path>
                <path id="e5" class="ude" d="M240.07543504446625,95.36015468247689L322.42456495553375,124.63984531752311" stroke="#333" stroke-width="3"></path>
                <path id="e6" class="ude" d="M659.9245649555337,95.36015468247689L577.5754350444663,124.63984531752311" stroke="#333" stroke-width="3"></path>
                <path id="e7" class="ude" d="M690.0754350444663,95.36015468247689L772.4245649555337,124.63984531752311" stroke="#333" stroke-width="3"></path>
                <path id="e8" class="ude" d="M99.46071480689992,139.27238058176005L69.28928519310008,160.72761941823995" stroke="#333" stroke-width="3"></path>
                <path id="e9" class="ude" d="M125.53928519310008,139.27238058176005L155.71071480689992,160.72761941823995" stroke="#333" stroke-width="3"></path>
                <path id="e10" class="ude" d="M324.46071480689994,139.27238058176005L294.2892851931001,160.72761941823995" stroke="#333" stroke-width="3"></path>\
            </g>

            <g id="vertex">
                <circle class="v1" cx="56.25" cy="170" x="40.25" y="154" fill="#333333" r="16" stroke="#333333" stroke-width="2" height="32" width="32"></circle>
                <circle class="v1" cx="56.25" cy="170" x="41.25" y="155" fill="#eee" r="14" width="30" height="30" stroke="#fff" stroke-width="0"></circle>
                <circle class="v2" cx="562.5" cy="130" x="546.5" y="114" fill="#333333" r="16" stroke="#333333" stroke-width="2" height="32" width="32"></circle>
                <circle class="v2" cx="562.5" cy="130" x="547.5" y="115" fill="#eeeeee" r="14" width="30" height="30" stroke="#fff" stroke-width="0"></circle>
                <circle class="v3" cx="337.5" cy="130" x="321.5" y="114" fill="#333333" r="16" stroke="#333333" stroke-width="2" height="32" width="32"></circle>
                <circle class="v3" cx="337.5" cy="130" x="322.5" y="115" fill="#eeeeee" r="14" width="30" height="30" stroke="#fff" stroke-width="0"></circle>
                <circle class="v4" cx="112.5" cy="130" x="96.5" y="114" fill="#333333" r="16" stroke="#333333" stroke-width="2" height="32" width="32"></circle>
                <circle class="v4" cx="112.5" cy="130" x="97.5" y="115" fill="#eeeeee" r="14" width="30" height="30" stroke="#fff" stroke-width="0"></circle>
                <circle class="v5" cx="281.25" cy="170" x="265.25" y="154" fill="#333333" r="16" stroke="#333333" stroke-width="2" height="32" width="32"></circle>
                <circle class="v5" cx="281.25" cy="170" x="266.25" y="155" fill="#eeeeee" r="14" width="30" height="30" stroke="#fff" stroke-width="0"></circle>
                <circle class="v6" cx="675" cy="90" x="659" y="74" fill="#333333" r="16" stroke="#333333" stroke-width="2" height="32" width="32"></circle>
                <circle class="v6" cx="675" cy="90" x="660" y="75" fill="#eeeeee" r="14" width="30" height="30" stroke="#fff" stroke-width="0"></circle>
                <circle class="v7" cx="787.5" cy="130" x="771.5" y="114" fill="#333333" r="16" stroke="#333333" stroke-width="2" height="32" width="32"></circle>
                <circle class="v7" cx="787.5" cy="130" x="772.5" y="115" fill="#eeeeee" r="14" width="30" height="30" stroke="#fff" stroke-width="0"></circle>
                <circle class="v8" cx="450" cy="50" x="434" y="34" fill="#333333" r="16" stroke="#333333" stroke-width="2" height="32" width="32"></circle>
                <circle class="v8" cx="450" cy="50" x="435" y="35" fill="#eeeeee" r="14" width="30" height="30" stroke="#fff" stroke-width="0"></circle>
                <circle class="v9" cx="168.75" cy="170" x="152.75" y="154" fill="#333333" r="16" stroke="#333333" stroke-width="2" height="32" width="32"></circle>
                <circle class="v9" cx="168.75" cy="170" x="153.75" y="155" fill="#eeeeee" r="14" width="30" height="30" stroke="#fff" stroke-width="0"></circle>
                <circle class="v10" cx="225" cy="90" x="209" y="74" fill="#333333" r="16" stroke="#333333" stroke-width="2" height="32" width="32"></circle>
                <circle class="v10" cx="225" cy="90" x="210" y="75" fill="#eeeeee" r="14" width="30" height="30" stroke="#fff" stroke-width="0"></circle>
            </g>
            <g id="vertexText">
                <text class="v1" x="56.25" y="175.33333333333334" fill="#333333" font-family="'PT Sans', sans-serif" font-size="16" font-weight="bold" text-anchor="middle">2</text>
                <text class="v1" x="56.25" y="201.33333333333334" fill="red" font-family="'PT Sans', sans-serif" font-size="16" font-weight="bold" text-anchor="middle">8</text>
                <text class="v2" x="562.5" y="135.33333333333334" fill="#333333" font-family="'PT Sans', sans-serif" font-size="16" font-weight="bold" text-anchor="middle">7</text>
                <text class="v2" x="562.5" y="161.33333333333334" fill="red" font-family="'PT Sans', sans-serif" font-size="16" font-weight="bold" text-anchor="middle">6</text>
                <text class="v3" x="337.5" y="135.33333333333334" fill="#333333" font-family="'PT Sans', sans-serif" font-size="16" font-weight="bold" text-anchor="middle">26</text>
                <text class="v3" x="337.5" y="161.33333333333334" fill="red" font-family="'PT Sans', sans-serif" font-size="16" font-weight="bold" text-anchor="middle">5</text>
                <text class="v4" x="112.5" y="135.33333333333334" fill="#333333" font-family="'PT Sans', sans-serif" font-size="16" font-weight="bold" text-anchor="middle">25</text>
                <text class="v4" x="112.5" y="161.33333333333334" fill="red" font-family="'PT Sans', sans-serif" font-size="16" font-weight="bold" text-anchor="middle">4</text>
                <text class="v5" x="281.25" y="175.33333333333334" fill="#333333" font-family="'PT Sans', sans-serif" font-size="16" font-weight="bold" text-anchor="middle">19</text>
                <text class="v5" x="281.25" y="201.33333333333334" fill="red" font-family="'PT Sans', sans-serif" font-size="16" font-weight="bold" text-anchor="middle">10</text>
                <text class="v6" x="675" y="95.33333333333333" fill="#333333" font-family="'PT Sans', sans-serif" font-size="16" font-weight="bold" text-anchor="middle">17</text>
                <text class="v6" x="675" y="121.33333333333333" fill="red" font-family="'PT Sans', sans-serif" font-size="16" font-weight="bold" text-anchor="middle">3</text>
                <text class="v7" x="787.5" y="135.33333333333334" fill="#333333" font-family="'PT Sans', sans-serif" font-size="16" font-weight="bold" text-anchor="middle">1</text>
                <text class="v7" x="787.5" y="161.33333333333334" fill="red" font-family="'PT Sans', sans-serif" font-size="16" font-weight="bold" text-anchor="middle">7</text>
                <text class="v8" x="450" y="55.333333333333336" fill="#333333" font-family="'PT Sans', sans-serif" font-size="16" font-weight="bold" text-anchor="middle">90</text>
                <text class="v8" x="450" y="81.33333333333334" fill="red" font-family="'PT Sans', sans-serif" font-size="16" font-weight="bold" text-anchor="middle">1</text>
                <text class="v9" x="168.75" y="175.33333333333334" fill="#333333" font-family="'PT Sans', sans-serif" font-size="16" font-weight="bold" text-anchor="middle">3</text>
                <text class="v9" x="168.75" y="201.33333333333334" fill="red" font-family="'PT Sans', sans-serif" font-size="16" font-weight="bold" text-anchor="middle">9</text>
                <text class="v10" x="225" y="95.33333333333333" fill="#333333" font-family="'PT Sans', sans-serif" font-size="16" font-weight="bold" text-anchor="middle">36</text>
                <text class="v10" x="225" y="121.33333333333333" fill="red" font-family="'PT Sans', sans-serif" font-size="16" font-weight="bold" text-anchor="middle">2</text>
            </g>

        </svg>)
    }

    renderVisualizedArray()
    {

    }

    componentDidMount()
    {
        this.generateRandomArray()
    }

    generateRandomArray()
    {
        let array = []

        while(array.length < 10)
        {
            let num = Math.floor((Math.random() * 100) + 1);
            array.push(num)
        }

        this.setState({array})
    }

    outputStringArray(array)
    {
        let output = ''
        array.map((value, index) => {

            (index != array.length-1)? output += (value + ', ') : output += (value)
        })

        return output
    }
    
    render()
    {
        return(<React.Fragment>
        <NavBar></NavBar>
        <h1>
            Heap
        </h1>
        <button>Min Heap</button>
        <button>Max Heap</button>
        <button onClick={() => {this.generateRandomArray()}}>Generate Random Array</button>
        <div id="viz">
            {this.renderGraph()}
        </div>
        <h1>Previous Array: {"["} {this.outputStringArray(this.state.array)} {"]"}</h1> 
        </React.Fragment>)
    }
}


export default HeapVisualizer