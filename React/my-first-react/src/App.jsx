import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './Actor'
import Gpu from './Gpu'

function App() {

  const device = ['Mobile','PC','Laptop','SmartWatch'];
  const gpu = [
    {name:'RTX 5090', company:'Nvidia'},
    {name:'RX 7090', company:'AMD'},
    {name:'Arc 580', company:'Intel'},
    {name:'RTX Quadro T6000', company:'Nvidia'}
    
  ]


  return (
    <>
      <Person></Person>
      <Actor name={"Soyab"}></Actor>
      {
        device.map(device =><Actor name={device}></Actor> )
      }
      {
        gpu.map(gpu=><Gpu ></Gpu>)
      }
      {/* <Country></Country> */}
      {/* <Student></Student> */}
      {/* <Device name="Laptop" price="55k"></Device>
      <Device name="Mobile" price="20k"></Device>
      <Device name="PC" price="1.2L"></Device>
      <StudentData></StudentData> */}
      {/* <Todo task='Learn React' isDone={true}></Todo>
      <Todo task='Now Learnig JSX' isDone={false}></Todo> */}
    </>
  )
}
function Person (){
  return <h1 className='person'>Soyab Aktar {34}</h1>
}
function Country(){
  const countryCss = {
    color : `cyan`,
    margin : `12px`
  }
  return (
    <h3 style={countryCss}>My Country is INDIA</h3>
  )
}
function Student(){
  const name = "Soyab Aktar";
  const rollNumber = 21;
  const course = "BCA";

  return (
    <h2 className='person'>My Name is {name}, My roll number is {rollNumber}, I am in {course} course.</h2>
  )
}

// Props
function Device(props) {
  console.log(props);
  return(
    <h4>This Device: {props.name}, Price:{props.price}</h4>
  )
}

const {nameSudent,score} = {nameSudent: "Soyab Aktar" , score:"A+"};
function StudentData(){
  return(
    <div className='person'>
      <p>Name: {nameSudent}</p>
      <p>Score: {score}</p>
    </div>
  )
}

export default App
