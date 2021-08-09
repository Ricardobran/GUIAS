import {useState, useEffect} from 'react';
import './App.css';


function App() {
  const [dolar, setdolar] = useState(0);
  const [euro, seteuro] = useState(0);
  const [bitcoin, setbitcoin] = useState(0);

  
  

  const [tipo, setTipo] = useState(1);
  const [total, setTotal] = useState(0);
  

  useEffect(() => {
    setdolar((total * tipo) );
    seteuro((total * tipo*0.85) );
    setbitcoin((total * tipo*0.000022) );
    
  }, [total, tipo]);








  const handleTotalChange = e => {
    if (!isNaN(e.target.value)) {
      setTotal(e.target.value);
    }
  };


  return (
    <div className="App">
      <h1>DIVISAS</h1>

      <p>Dolar: {dolar}</p>
      <p>Euro: {euro}</p>
      <p>Bitcoin: {bitcoin}</p>
    

      <hr />

      <h3>{total}</h3>
      

      <h3><label>Coloca la cantidad que deseas convertir</label></h3>



     
      <input onChange={handleTotalChange} value={total} />
    </div>


             
  );
}

export default App;
