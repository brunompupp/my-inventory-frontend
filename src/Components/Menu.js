import { FiMonitor, FiFolder, FiTag, FiBookOpen, FiEdit, FiRotateCcw, FiBook, FiExternalLink, FiUsers, FiUser, FiPower, FiPackage } from 'react-icons/fi'
import logotipo from '../assets/imgMiniLogotipoBco.svg';

import '../styles/menu.css';

function Menu() {
  return (
    <>
      <div id="menu">
        <div className="icon-bar">
          <img src={logotipo} alt="My Inventory" title='Dashboard'/>
        </div>
        <ul>
          <li>
            <a href="">
              <FiMonitor />
              <span>Painel</span>
            </a>
          </li>
          <li>
            <a href="">
              <FiFolder />
              <span>Categ.</span>
            </a>
          </li>
          <li>
            <a href="">
              <FiPackage />
              <span>Prod.</span>
            </a>
          </li>
          <li>
            <a href="">
              <FiTag />
              <span>Tipos</span>
            </a>
          </li>
          <li className='divider'></li>
          <li>
            <a href="">
              <FiBookOpen />
              <span>Empres.</span>
            </a>
          </li>
          <li>
            <a href="">
              <FiEdit />
              <span>+ Empres.</span>
            </a>
          </li>
          <li>
            <a href="">
              <FiRotateCcw />
              <span>Devolução</span>
            </a>
          </li>
          <li>
            <a href="">
              <FiBook />
              <span>Consum.</span>
            </a>
          </li>
          <li>
            <a href="">
              <FiExternalLink />
              <span>+ Consum.</span>
            </a>
          </li>
          <li className="divider"></li>
          <li>
            <a href="">
              <FiUsers />
              <span>Usuários</span>
            </a>
          </li>
          <li>
            <a href="">
              <FiUser />
              <span>Perfil</span>
            </a>
          </li>
          <li>
            <a href="">
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