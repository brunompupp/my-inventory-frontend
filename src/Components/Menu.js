import { FiMonitor, FiFolder, FiTag, FiBookOpen, FiEdit, FiRotateCcw, FiBook, FiExternalLink, FiUsers, FiUser, FiPower, FiPackage } from 'react-icons/fi'
import logotipo from '../assets/imgMiniLogotipoBco.svg';

import '../styles/menu.css';

function Menu() {
  return (
    <>
      <div id="menu">
        <div className="icon-bar flex acenter jcenter">
          <img src={logotipo} alt="My Inventory" title='Dashboard'/>
        </div>
        <ul className='flex acenter jbetween fcolumn'>
          <li className='flex acenter jcenter'>
            <a href="" className='flex acenter jcenter fcolumn'>
              <FiMonitor />
              <span>Painel</span>
            </a>
          </li>
          <li className='flex acenter jcenter'>
            <a href="" className='flex acenter jcenter fcolumn'>
              <FiFolder />
              <span>Categ.</span>
            </a>
          </li>
          <li className='flex acenter jcenter'>
            <a href="" className='flex acenter jcenter fcolumn'>
              <FiPackage />
              <span>Prod.</span>
            </a>
          </li>
          <li className='flex acenter jcenter'>
            <a href="" className='flex acenter jcenter fcolumn'>
              <FiTag />
              <span>Tipos</span>
            </a>
          </li>
          <li className='divider flex acenter jcenter'></li>
          <li className='flex acenter jcenter'>
            <a href="" className='flex acenter jcenter fcolumn'>
              <FiBookOpen />
              <span>Empres.</span>
            </a>
          </li>
          <li className='flex acenter jcenter'>
            <a href="" className='flex acenter jcenter fcolumn'>
              <FiEdit />
              <span>+ Empres.</span>
            </a>
          </li>
          <li className='flex acenter jcenter'>
            <a href="" className='flex acenter jcenter fcolumn'>
              <FiRotateCcw />
              <span>Devolução</span>
            </a>
          </li>
          <li className='flex acenter jcenter'>
            <a href="" className='flex acenter jcenter fcolumn'>
              <FiBook />
              <span>Consum.</span>
            </a>
          </li>
          <li className='flex acenter jcenter'>
            <a href="" className='flex acenter jcenter fcolumn'>
              <FiExternalLink />
              <span>+ Consum.</span>
            </a>
          </li>
          <li className='divider flex acenter jcenter'></li>
          <li className='flex acenter jcenter'>
            <a href="" className='flex acenter jcenter fcolumn'>
              <FiUsers />
              <span>Usuários</span>
            </a>
          </li>
          <li className='flex acenter jcenter'>
            <a href="" className='flex acenter jcenter fcolumn'>
              <FiUser />
              <span>Perfil</span>
            </a>
          </li>
          <li className='flex acenter jcenter'>
            <a href="" className='flex acenter jcenter fcolumn'>
              <FiPower />
              <span>Sair</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Menu;