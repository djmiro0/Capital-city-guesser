import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navigation/Navbar';
import { useState } from 'react';
import PostList from './components/PostList/PostList';

function App() {
  const [posts, setPosts] = useState([{title:'Hello', description:'This is a test description'}, {title:'Hello', description:'This is a test description'}]);

  return (
    <div className="App">
        <Navbar title="Homepage - Welcome" language="DE" color="red" />

        <div className='container'>
          <PostList postsprop={posts} />
        </div>
    </div>
  );
}

export default App;
