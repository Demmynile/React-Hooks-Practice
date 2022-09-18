import React , {useLayoutEffect , useRef , useEffect} from 'react'

const LayoutEffect = () => {
  const divRef = useRef(null)

 useLayoutEffect(() => {
     console.log(divRef.current.value)
 } , [])

 useEffect(() => {
	divRef.current.value = "HELLO"
} , [])



  return (
	<div className='App'>
  <input ref={divRef} value = "PEDRO" style = {{width : 400 , height : 50}} />

	</div>
  )
}

export default LayoutEffect