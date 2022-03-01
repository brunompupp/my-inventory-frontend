import {useEffect, useState} from 'react'
function Button(props){
  const [size, setSize] = useState('small');
  const [style, setStyle] = useState('primary');
  const [type, setType] = useState('button');
  const [text, setText] = useState('Button');

  useEffect(()=>{
    if(props.size){
      setSize(props.size)
    }
    if(props.style){
      setStyle(props.style)
    }
    if(props.type){
      setType(props.type)
    }
    if(props.text){
      setText(props.text)
    }
  },[props])

  return (
    <button 
      className={size + ' ' + style} 
      type={type}
    >{text}</button>
  )
}

export default Button;