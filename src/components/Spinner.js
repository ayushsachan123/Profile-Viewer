import React from 'react'
import loading from "../Loading.gif";

const Spinner = () =>{
    return (
      <div className="text-center">
         <img className="my-3" style={{height:'45px', width:'45px' }} src = {loading} alt="loading"/>
      </div>
    )
  }

export default Spinner
