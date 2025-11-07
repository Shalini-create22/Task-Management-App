
/*
import  './App.css'; 
import Header from './Components/Header'; 
function App() {
  return (
<div className="Main">
<Header/>
<div className="inputSection">

</div>
<div className="cardSection">

</div>*/
       
import './App.css';
import Header from './Components/Header';
import TaskList from './Components/TaskList';

function App() {
  return (
    <div className="main">
      <Header />
      <TaskList />
    </div>
  );
}

export default App;
