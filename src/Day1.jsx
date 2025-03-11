import React from 'react'
import "./Day1.css"

const Day1 = () => {
  
  return (
    <>
    <form action="for">
    <div class="container" className='text-center'>
      <div className="name">
      <h1>LOGIN PAGE</h1><hr /></div>
      <label htmlFor="">USERNAME : </label>
      <input type="text" placeholder='enter your name'/><br />
      <label htmlFor="">PASSWORD : </label>
      <input type="password" placeholder='enter your password' maxLength={5} /><br /><br />
      <button className='btn btn-primary'>submit</button>

    </div>
    </form>
    </>
  )
}

export default Day1
