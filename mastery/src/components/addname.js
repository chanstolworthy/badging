import React from 'react'

export default function(){
    return (
        <div>
            <h1>LETS MATCH IT</h1>
            <h1>{this.props.match.params.name}</h1>
        </div>
    )
}