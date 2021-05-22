import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Home from '../Home/Home'


//Algorithm Page
import SortingVisualizer from '../SortingVisualizer/SortingVisualizer'
import PathFindingVisualizer from '../PathfindingVisualizer/PathfindingVisualizer'
import HeapVisualizer from '../HeapVisualizer/HeapVisualizer'
import SVG from '../SVG/svg'

const SortingAlgorithmRoute = ({ match }) => (
    <div>
        <Route exact path={match.url} component={SortingVisualizer}/>
    </div>
)

let Routes = () => {
    return (<div>
        <BrowserRouter>
            <Route exact path="/" component={Home}/>
            <Route exact path="/Algorithm-Visualizer" component={Home}/>
            <Route exact path="/sorting" component={SortingAlgorithmRoute}/>
            <Route exact path="/pathfinding" component={PathFindingVisualizer}/>
            <Route exact path="/heaps" component={HeapVisualizer}/>
            <Route exact path="/SVG" component={SVG}/>
        </BrowserRouter>
    </div>)
}


export default Routes