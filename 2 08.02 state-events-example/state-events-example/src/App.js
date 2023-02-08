import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AutoType from './components/AutoType';
import CheckComponent from './components/CheckComponent';
import ListComponent from './components/ListComponent';
import RandomNumber from './components/RandomNumber';

function App() {
  return (
    <>
      <h1>Events & State</h1>
      <div className='container'>
         <div className='row mb-3'>
               <div className='column'>
                  <RandomNumber />
               </div>
         </div>
         <div className='row mb-3'>
               <div className='column'>
                  <CheckComponent />
               </div>
         </div>
         <div className='row mb-3'>
               <div className='column'>
                  <AutoType />
               </div>
         </div>
         <div className='row mb-3'>
               <div className='column'>
                  <ListComponent />
               </div>
         </div>
      </div>
    </>
  );
}

export default App;
