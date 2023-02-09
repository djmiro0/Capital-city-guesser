import React from 'react'
//props.title props.description
//destructuring {title, description} = props;
export default function Post({postprop}) {
  return (
    <div className="card background-card">
    <div className="card-body">
       <h5 className="card-title">{postprop.title}</h5>
       <p className="card-text">{postprop.description}</p>

       <a href="#" className="btn btn-primary">Read More</a>
    </div>
  </div>
  )
}
