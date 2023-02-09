import React from 'react'
import './postlist.css';
import Post from '../Post/Post';

export default function PostList({postsprop}) {
  return (
    <div className='flex-grid'>
      {/* array with different posts [{title:'test', description:'testing'}, {title:'test2',description:'test'}}] */}
        {postsprop.map((post, index) => {
           return (
             <div className='col' key={index}>
                <Post postprop={post} />
             </div> 
           );
        })}
    </div>
  )
}
