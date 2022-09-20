import React, {useState , useCallback} from 'react'
import axios from 'axios'
import Child from './Child'


const UseCallback = () => {
	const [toggle , setToggle] = useState(false)
	const [data , setData] = useState("Yo pls sub to my channel")

	const returnComment = useCallback((name) => {
		return data + name
	} , [data])



  return (
	<div className='App'>
     <Child returnComment = {returnComment} />
	

	<button
	 onClick = {() => {
		setToggle(!toggle)
	 }}
	>
	{""}
	toggle

	</button>

	{toggle && <h1>toggle</h1>}
	</div>
  )
}

export default UseCallback