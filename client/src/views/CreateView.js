import { navigate } from '@reach/router';
import React from 'react';
import Form from '../components/Form';
import axios from 'axios';

const CreateView = props => {
  const onSubmitHandler = (e, data) => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/athletes", data)
    .then(response => {
      navigate('/');
    })
    .catch(err => {
      console.log(err);
    })
  }
  return (
    <div>
      <h1>Create a new Athlete</h1>
      <Form 
        onSubmitHandler={onSubmitHandler}
      />
    </div>
  )
}

export default CreateView;