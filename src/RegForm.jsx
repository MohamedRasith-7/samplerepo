import { useState } from 'react';
import "./Reg.css"


const RegForm = () => {
  const [User, setUser] = useState({
    name: "Rasith",
    age: 21,
    gender: "Male",
    isMarried: "true"
  });

  return (
    <>
    <div className="container">
    <table>
      <tbody>
        <tr>
          <td>Name </td>
          <td>{User.name}</td>
        </tr>
        <tr>
          <td>Age </td>
          <td>{User.age} </td>
        </tr>
        <tr>
          <td>Gender </td>
          <td>{User.gender} </td>
        </tr>
        <tr>
          <td>Marital status </td>
          <td>{User.isMarried ?  "Married" : "NotMarried" }</td>
        </tr>
      </tbody>
    </table><br /><hr /></div>
     
    <h1>Student Info :</h1>
    <form action="">
    <input type="text" placeholder='First Name' />
    <input type="text"  placeholder='Last Name'/><br /><br />
    <div className="gender">
      <label htmlFor="male">Male</label>
    <input type="radio" name='gender' id='male'/>
    <label htmlFor="Female">Female</label>
    <input type="radio" name='gender' id='Female'/>
    </div>
    </form>
    </>
      
    
  );
}

export default RegForm;
