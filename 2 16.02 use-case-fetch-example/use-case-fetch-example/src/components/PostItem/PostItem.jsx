import './postitem.css'
import React from 'react'

export default function PostItem({post}) {
  return (
    <div className='card mb-2'>
        <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{`Written by user ${post.userId}`}</h6>
            <p className="card-text">{post.body}</p>
        </div>
    </div>
  )
}
