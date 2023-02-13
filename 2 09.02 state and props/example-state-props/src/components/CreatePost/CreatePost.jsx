import React, { useState, Fragment }  from "react";

export default function CreatePost({ postsprop, setPosts }) {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const addPost = () => {
    setPosts([...postsprop, { title, description }]);
  };

  return (
    <Fragment>
    <div>
      <div className="row">
        <div className="col">
          <label for="exampleFormControlInput1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setTitle(e.target.value)}
          />
          <label for="exampleFormControlInput1" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button onClick={addPost} className="btn btn-primary">
          Create post
        </button>
      </div>
    </div>
    </Fragment>
  );
}




