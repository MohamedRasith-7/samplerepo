import React, { useState } from 'react'


const App = () => {
  const [weight,setWeight]=  useState()
  const [height,setHeight]=  useState()
  const [bmi,setBmi]=useState(null)
  const[bmistatus,setBmistatus]=useState()
  const [error,setError]=useState()
  function CalculateBmi(){
    if(weight && height){
        let heightInMeters=height/100;
        let BmiValue=weight/(heightInMeters*heightInMeters);
        console.log(BmiValue)
        setBmi(BmiValue.toFixed(2))
        if(BmiValue<=18.4){
            setBmistatus("Under weight") 
        }
        else if(BmiValue>=18.5 && BmiValue <=25){
            setBmistatus("Normal weight") 
        }
        else if(BmiValue>=25.1 && BmiValue <=29.9){
            setBmistatus("Over weight") 
        }
        else{
            setBmistatus("Obese") 
        }
        setHeight("")
        setWeight("")
        setError("")
    }
    else{
        setWeight("")
        setHeight("")
        setBmi(null)
        setBmistatus("")
        setError("Pls Enter valid data")
    }
  }
  return (
    <>
    <div class="container" className="text-center">
        <h1 className='text-center text-primary'>BMI CALCULATOR</h1>
        <div className="form-group">
        <label htmlFor="">Weight(KG) :</label>
        <input type="text" placeholder='Weight in Kg'  onChange={(e)=>{setWeight(e.target.value)}} value={weight}/>
        </div>
        <div className="form-group">
        <label htmlFor="">Height(Cm) :</label>
        <input type="text" placeholder='Height in Cm'  onChange={(e)=>{setHeight(e.target.value)}} value={height}/>
        </div>
        <div>
            <button className='btn btn-primary' onClick={CalculateBmi}>Bmi Calculator</button>
        </div>
        <h4 className='text-danger'>{error}</h4>
       {bmi!=null &&  <div>
            <h2>Your Bmivalue is :{bmi}</h2>
            <h2>Your BmiStatus is :{bmistatus}</h2>
        </div>}
    </div>
    </>
  )
}

export default App