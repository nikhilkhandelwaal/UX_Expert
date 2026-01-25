import React from 'react'

export default function Card(props) {
    console.log(props.uname);
    return (
        <>
            <div className='box'>
                <h2>Name :{props.uname}</h2>
                <h4>email:{props.uemail} </h4>
                <h5>Age: {props.uage}</h5>
            </div>
        </>
    )
}
