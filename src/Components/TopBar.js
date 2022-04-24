import { FiSearch } from 'react-icons/fi';
import avatar from '../assets/avatar.svg';
import '../styles/topbar.css';


function TopBar({ title, placeholder = 'Buscar produto' }) {
  return (
    <header id="topbar" className='flex acenter jbetween'>
      <h1>{title}</h1>
      <div id="search" className='flex acenter jend'>
        <input type="search" placeholder={placeholder}/>
        <div className="btn-search flex acenter jcenter">
          <FiSearch size={22} />

        </div>
      </div>
      <div className="avatar">
        <img src={avatar} alt="" />
      </div>
    </header>
  )
}

export default TopBar;