import {FiLock, FiUser, FiArrowRight} from 'react-icons/fi';
import Button from '../Components/Button';

import imgLogin from '../assets/imgLogin.svg';
import logotipo from '../assets/imgLogotipoBco.svg';

import '../styles/login.css';

function Login() {
  return (
    <div className="dark flex acenter" id="page-login">
      <div className="container flex acenter jbetween">

        <div className="left flex acenter jstart">
          <img src={imgLogin} alt="Bem vind@" title='Bem vind@' />
        </div>
        <div className="right flex acenter jcenter fcolumn">
          <img src={logotipo} alt="My Inventory" title='My Inventory' />
          <form action="" id="login">
            <div className="group-inputs flex acenter jbetween">
              <label htmlFor="emailLogin" className='flex acenter jcenter'>
                <FiUser size={16}/>
              </label>
              <input type="email" id="emailLogin" />
            </div>
            <div className="group-inputs flex acenter jbetween">
              <label htmlFor="passLogin" className='flex acenter jcenter'>
                <FiLock size={16}/>
              </label>
              <input type="password" id="passlLogin" />
            </div>
            <div id="forgotPassword" className='flex acenter jend'>
              <a href="/" className='default'>
                <FiArrowRight size={10}/>
                <span>Esqueceu a senha?</span>
                <span className="border"></span>
              </a>

            </div>

            <Button 
              size="large"
              style="primary success"
              type="submit"
              text="Acessar"
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;