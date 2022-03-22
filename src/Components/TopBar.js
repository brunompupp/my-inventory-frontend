import avatar from '../assets/avatar.svg';
import '../styles/topbar.css';


function TopBar(props){
  return (
    <header className='flex acenter jbetween'>
      <h1>{props.title}</h1>
      <input type="search" />
      <div className="avatar">
        <img src={avatar} alt="" />
      </div>
    </header>
  )
}

export default TopBar;