import { Navigate } from "react-router-dom";
import React, { useState } from 'react';
import Form from '../components/Form';
import axios from 'axios';

const CreateView = props => {
  const [errors, setErrors] = useState([]);
  const onSubmitHandler = (e, data) => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/athletes", data)
    .then(response => {
      Navigate('/');
    })
    .catch(err => {
      console.log(err);
      const errorResponse = err.response.data.errors;
      const errorArr = [];

      for (const key of Object.key(errorResponse)) {
        errorArr.push(errorResponse[key].message);
      }
      setErrors(errorArr);
    })
  }
  return (
    <div>
      <h1>Create a new Athlete</h1>
      {errors.map((error, index) => {
        return (
          <p key={ index }>{error}</p>
        )
      })}
      <Form 
        onSubmitHandler={onSubmitHandler}
        initialFirstName=""
        initialLastName=""
        initialSport=""
        initialTeam=""
      />
    </div>
  )
}

export default CreateView;