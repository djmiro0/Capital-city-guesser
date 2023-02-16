import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import ListPosts from './components/ListPosts/ListPosts';


function App() {
  const [showPosts, setShowPosts] = useState(true);
  return (
    <div>
      <Header />
      <div className='content'>
         <button className='btn btn-primary' 
                 onClick={() => setShowPosts(show => !show)}>
                  {showPosts ? 'Hide posts' : 'Show posts'}
          </button>

          
        <ContentPosts />
      </div>
    </div>
  );

  function ContentPosts(){
    if(showPosts){
      return <ListPosts />
    } else {
      return <p>Posts are hidden.</p>
    }
  }
}

export default App;
