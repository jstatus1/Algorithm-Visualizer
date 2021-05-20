import React from 'react'
import { Link } from 'react-router-dom';


class Home extends React.Component
{
    render()
    {
        return(<div className="container ">
            <h1>WELCOME TO THE HOME OF VISUALIZED ALGORITHMS</h1>
            <Link to="/sorting"><button type="button" class="btn btn-primary">Sorting Algorithms</button></Link>
            <Link to="/pathfinding"><button type="button" class="btn btn-primary">Path Finding Algorithms</button></Link>
        </div>)
    }
}


export default Home