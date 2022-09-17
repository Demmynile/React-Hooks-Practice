import React , {useState} from 'react'

//the reason why useState  is used instead of a global variable is because it RE-RENDERS.

const StateTutorial = () => {

	const [counter , setCounter] = useState(0)
	
	const increment = () => {
		setCounter( counter + 1 )
	}

	const decrement = () => {
		if(counter > 0){
            setCounter( counter - 1 )
		}
		else {
			alert("counter cannot be less than 0")
		}
		
	}

	return (
	<>
      <div >
       <div>{counter}</div>
	   <br/>
	   <button onClick = {increment}>increment</button>
	   <button onClick ={decrement}>decrement</button>
	  </div>
	</>
	)
}

export default StateTutorial