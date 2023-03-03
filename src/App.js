import logo from './logo.svg';
import './App.css';
import Table from './Table';
import Tablemale from './Tablemale';
import Tablefemale from './Tablefemale';
import Tablesalary from './Tablesalary';
import Tableonlymale from './Tableonlymale';

function App() {
  return(
    <div>
      <Table></Table>
      <hr></hr>
      <Tablemale></Tablemale>
      <hr></hr>
      <Tablefemale></Tablefemale>
      <hr></hr>
      <Tablesalary></Tablesalary>
      <hr></hr>
      <Tableonlymale></Tableonlymale>
    </div>
  )
}


export default App;
