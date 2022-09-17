import React , {useRef} from 'react'

const UseRef = () => {
	const inputRef = useRef(null)
	const Click = () => {
	  inputRef.current.focus()
    }
  return (
	
	<div>
        <h1>Balogun</h1>
		<input type = "" placeholder='' ref={inputRef}/>
		<button onClick = {Click}>Change Name</button>

	</div>
  )
}

export default UseRef