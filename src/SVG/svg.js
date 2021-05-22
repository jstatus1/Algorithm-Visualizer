import React from 'react'

class SVG extends React.Component
{

    renderJapanFlag()
    {
        return (
        <svg width="100" height="100" viewBox="0 0 100 100" style={{border:"1px solid gray"}} >
            <circle cx="50" cy="50" r="25" fill="red" stroke="black"></circle>
        </svg>)
    }


    renderOrnament()
    {
        return(
            <svg width="200" height="200" viewBox="-100 -100 200 200">
                <circle cx="0" cy="20" r="70" fill="#D1495B"></circle>
                <circle cx="0" cy="-75" r="12" fill="none" stroke="#F79257" stroke-width="2"></circle>
                <rect x="-17.5" y="-65" width="35" height="20" fill="#F79257"></rect>
            </svg>)
    }

    render()
    {
        return(<React.Fragment>
            <div className="container">
                <h1>Scalable Vector Graphic</h1>
                {this.renderJapanFlag()}
                {this.renderOrnament()}
            </div>
        </React.Fragment>)
    }
}


export default SVG;