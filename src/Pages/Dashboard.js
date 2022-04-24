import { FiFolder, FiBookOpen, FiRotateCcw, FiPackage, FiArrowDown, FiArrowUp } from 'react-icons/fi'
import Menu from '../Components/Menu';
import TopBar from '../Components/TopBar';
import Cards from '../Components/Cards';
import Button from '../Components/Button';


import '../styles/main.css';

function Dashboard() {
  return (
    <>
      <Menu />
      <TopBar title="Dashboard" placeholder='Buscar produto' />
      <main>
        <div className="row flex">

          <Cards
            title="Categorias"
            value={7}
            icon={<FiFolder size={45} />}
          />
          <Cards
            title="Produtos"
            value={12}
            icon={<FiPackage size={45} />}
          />
          <Cards
            title="Empréstimos"
            value={150}
            icon={<FiBookOpen size={45} />}
          />
          <Cards
            title="Devoluções"
            value={8}
            icon={<FiRotateCcw size={45} />}
          />
        </div>

        <div className="row flex">
          <div className="deskTables flex astart jbetween">
            <div className="table-card">
              <div className="table-header flex acenter jbetween">
                <h5>Últimos empréstimos</h5>
                <a href="">ver todos</a>
              </div>
              <table>
                <thead>
                  <tr>
                    <td>Id</td>
                    <td>Produto</td>
                    <td>Usuário</td>
                    <td className='flex acenter jcenter'>Qtd</td>
                    <td>Data</td>
                    <td className='flex acenter jcenter'>Status</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>9998</td>
                    <td>Notebook Dell i7 prata 8GB 500 Gb</td>
                    <td>Bruno M Pupp</td>
                    <td className='flex acenter jcenter'>9999</td>
                    <td>21/02/2022</td>
                    <td className='flex acenter jcenter'><FiArrowDown /></td>
                  </tr>
                  <tr>
                    <td>9997</td>
                    <td>Notebook Dell i7 prata 8GB 500 Gb</td>
                    <td>Bruno M Pupp</td>
                    <td className='flex acenter jcenter'>9999</td>
                    <td>21/02/2022</td>
                    <td className='flex acenter jcenter'><FiArrowUp /></td>
                  </tr>
                  <tr>
                    <td>9996</td>
                    <td>Notebook Dell i7 prata 8GB 500 Gb</td>
                    <td>Bruno M Pupp</td>
                    <td className='flex acenter jcenter'>9999</td>
                    <td>21/02/2022</td>
                    <td className='flex acenter jcenter'><FiArrowUp /></td>
                  </tr>
                  <tr>
                    <td>9995</td>
                    <td>Notebook Dell i7 prata 8GB 500 Gb</td>
                    <td>Bruno M Pupp</td>
                    <td className='flex acenter jcenter'>9999</td>
                    <td>21/02/2022</td>
                    <td className='flex acenter jcenter'><FiArrowDown /></td>
                  </tr>
                  <tr>
                    <td>9994</td>
                    <td>Notebook Dell i7 prata 8GB 500 Gb</td>
                    <td>Bruno M Pupp</td>
                    <td className='flex acenter jcenter'>9999</td>
                    <td>21/02/2022</td>
                    <td className='flex acenter jcenter'><FiArrowDown /></td>
                  </tr>
                </tbody>
              </table>

            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Dashboard;