function Button(props){
  return (
    <button class={props.size + ' ' + props.color} type={props.type}>{props.text}</button>
  )
}

export default Button;