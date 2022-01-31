import logo from './logo.svg';
import './App.css';

function App() {

   let tasks= [
     {
       title: 'golfing',
       people: 'this is what people do',
       
     },
     {
       title: 'Not Golfing'
     }
   ]   
 
 

  let name = 'Hogan';
 

  return (
   <div>
     My name is {name} and the task is {tasks[1].title}
   </div>
  );
}

export default App;
