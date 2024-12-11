import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Day1.css'
const Product = () => {
 const[data,setData]= useState([])
const[input,setInput]= useState("")
  // let myPromise=fetch("https://dummyjson.com/users");
  // //console.log(myPromise)
  // myPromise.then((res)=>{
  //   return res.json()
  // }).then((finalData)=>{
  //   console.log(finalData)
  // })

  //asyn function
  // async function fetchData(){
  //   let myFetch=await fetch("https://dummyjson.com/users")
  //   let finalData=await myFetch.json();
  //   console.log(finalData)
  // }
  // fetchData()

  async function fetchData(){
   let myFetch=await axios.get(`https:dummyjson.com/products/search?q=${input}`)
   let finalData=myFetch.data.products;
   setData(finalData)
  }
  useEffect(()=>{
    if(input){
      fetchData()
    }
    fetchData()
  },[input])
  console.log(data)
  return (
    <>
    <div className="container">
      <h1 className='text-black text-center'>PRODUCT LIST</h1>
      <div><input type="text" placeholder='Search Product' onChange={(e)=>{setInput(e.target.value)}}/></div>
      <div className="mycontainer">
        <div className="all">
        {data.map((curval,index)=>{
          const {title,description,price,rating,thumbnail
          }=curval;
            return (
              <>
              
              <div className="product">
              <img src={thumbnail} alt="" />
              <h3>{title}</h3>
              <p>{description}</p>
              <p>Price:{price}</p>
              <p>Rating:{rating}</p>
              </div>
              
             
              </>
            )
        })}
      </div>
      </div>

    </div>
    </>
  )
}

export default Product