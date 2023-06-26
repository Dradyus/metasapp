
import './App.css';
import Encabezado from './componentes/compartidos/Encabezado';
import Principal from './componentes/compartidos/Principal';
import Pie from './componentes/compartidos/Pie';

function App() {
  return (
    <div className="App">
    <Encabezado></Encabezado>
    <Pie></Pie>
    <Principal></Principal>

    </div>
  );
}

export default App;
