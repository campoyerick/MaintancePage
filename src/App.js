import { ToastContainer, toast } from 'react-toastify';
import './App.css';

function App() {
  const notify = () => {
    toast.error(
      <div>
        <strong>Servidores Offline!</strong><br />
        Servidores estão fora do ar.
      </div>,
      {
        position: "top-right",
        autoClose: 1350,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme:'dark',
        progress: undefined,
      }
    );
  };

  return (
    <div className="container">
      <div className="bolinhas"></div>

      <div className="d-flex flex-column justify-content-center align-items-center vh-100 text-center">
        <div className="col-lg-6 mx-auto">
          <h2 className="textoprincipal">SITE EM MANUTENÇÃO!</h2>
          <p className="textosegundario">Os nossos sistemas estão fora do ar, infelizmente não temos hora de retorno! Por favor verifique no botao abaixo.</p>
          <button className="btn btn-primario" onClick={notify}>Verificar Status</button>
        </div>
      </div>

      <ToastContainer 
        limit={1}
      />
    </div>
  );
}


export default App;
