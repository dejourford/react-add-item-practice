import "./app.css"
import React from "react"
import { useState } from "react"


export default function App () {
  const [thingsArray, setThingsArray] = React.useState(['Thing 1', 'Thing 2']) 
  const thingsElements = thingsArray.map(function(item) {
    return <p key={item}>{item}</p>
  })
  
  const addNewItem = () => {
    setThingsArray(prevThingsArray => {

     return [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`]
    })
  }

  return (
    <div className="container">
      <button onClick={addNewItem}>Add Item</button>
      <div className="itemList">
        {thingsElements}
      </div>
    </div>
  )
}