import React , {useState} from 'react'

const InputState = () => {
	const [inputValue , setInputValue] = useState("pedro")

  return (
	<div>
          <input placeholder='enter something ...' onChange={(e) => setInputValue(e.target.value)} />
		  {inputValue}

	</div>
    )
}

export default InputState