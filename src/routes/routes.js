import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Home from '../Home/Home'


//Algorithm Page
import SortingVisualizer from '../SortingVisualizer/SortingVisualizer'

const SortingAlgorithmRoute = ({ match }) => (
    <div>
        <Route exact path={match.url} component={SortingVisualizer}/>
    </div>
)

let Routes = () => {
    return (<div>
        <BrowserRouter>
            <Route exact path="/" component={Home}/>
            <Route exact path="/sorting" component={SortingAlgorithmRoute}/>
        </BrowserRouter>
    </div>)
}


export default Routes