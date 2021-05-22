import React from 'react'

class Bar extends React.Component
{

    render()
    {
        const{
            value,
            idx,
            primaryColor
        } = this.props
        
        return(<div
            className="array-bar"
            key={idx}
            style={{height: `${value}px`, backgroundColor: primaryColor}}
            >       
        </div>)
    }
}


export default Bar