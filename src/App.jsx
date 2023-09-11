import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Team from './Team'
import Users from './Users'
import Firends from './Friends'

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Firends></Firends>
      <Users></Users>
      <Person></Person>
      <Student></Student>
      <Team></Team>
    </>
  )
}
function Person(){
  const Age =25;
  const Person ={Name:'sagor' ,Age:21}
  return <h3>i am a {Person.Name} with age:{Person.Age}</h3>
}
function Student(){
    return (
      <div>
        <h3>hello</h3>
        <p>how are you</p>
      </div>
    )
}

export default App
