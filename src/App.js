
import './App.css';
import Encabezado from './componentes/compartidos/Encabezado';
import Principal from './componentes/compartidos/Principal';
import Pie from './componentes/compartidos/Pie';
import Meta from './componentes/lista/Meta';

function App() {
  return (
    <div className="App">
    <Encabezado></Encabezado>
    <Principal>
        <Meta></Meta>
    </Principal>
    <Pie></Pie>
    </div>
  );
}

export default App;
