
import './App.css';
import Encabezado from './componentes/compartidos/Encabezado';
import Principal from './componentes/compartidos/Principal';
import Pie from './componentes/compartidos/Pie';
import Lista from './componentes/lista/Lista';


function App() {
  return (
    <div className="App">
    <Encabezado></Encabezado>
    <Principal>
        <Lista></Lista>
    </Principal>
    <Pie></Pie>
    </div>
  );
}

export default App;
