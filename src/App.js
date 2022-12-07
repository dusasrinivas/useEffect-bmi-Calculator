import {useState, useEffect} from 'react'


const App=()=>{

  const storedHeight =JSON.parse(localStorage.getItem('height'))
  const storedWeight = JSON.parse(localStorage.getItem('weight'))
  console.log(storedHeight)

  const [weight, setWeight]= useState(storedWeight ===null ? 60 : storedWeight)
  const [height, setHeight]= useState(storedHeight ===null ? 170 : storedHeight)

  const getBmi =(height, weight)=>{
    const heightInMeters = height/100
    const bmi = weight/heightInMeters **2
    return bmi.toFixed(2)
  }

useEffect(()=>{
  document.title=`Your BMI: ${getBmi(height, weight)}`
  console.log('Browser title updated')
  

}, [height, weight])


useEffect(()=>{
  
  localStorage.setItem("height", JSON.stringify(height))
  console.log('height updated in localstorage')

  

}, [height])

useEffect(()=>{
  
  localStorage.setItem("weight", JSON.stringify(weight))
  console.log('weight updated in localstorage')

}, [weight])

const increaseWeight=()=>{
  setWeight(preState=>preState+1)

}

const decreaseWeight=()=>{
  setWeight(preState=>preState-1)

}

const increaseheight=()=>{
  setHeight(preState=>preState+1)

}

const decreaseheight=()=>{
  setHeight(preState=>preState-1)

}
  return (
    <>
    <h1> Bmi calculator</h1>
    <div>
      <p>Weight: {weight}</p>
      <button onClick={increaseWeight}>+</button>
      <button onClick={decreaseWeight}>-</button>
    </div>
    <div>
      <p>{height}</p>
      <button onClick={increaseheight}>+</button>
      <button onClick={decreaseheight}>-</button>
    </div>

    <h1>bmi:{getBmi(height, weight)}</h1>

    </>
  )
  

}

export default App