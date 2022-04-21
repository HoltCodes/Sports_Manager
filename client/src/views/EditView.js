import { navigate } from "@reach/router";
import axios from "axios";
import React, { useState, useEffect } from "react";
import DeleteButton from "../components/DeleteButton";
import Form from "../components/Form";

const EditView = props => {
  const { id } = props;
  const [athlete, setAthlete] =  useState({});
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    axios.get('http://localhost:8000/api/athletes/' + id)
    .then(response => {
      setAthlete(response.data)
      setLoaded(true);
    })
    .catch(err => {
      console.log(err);
    })
  })
  const onSubmitHandler = (e, data) => {
    e.preventDefault();
    axios.put("http://localhost:8000/api/athletes/" +id, data)
    .then(response => {
      navigate('/');
    })
    .catch(err => {
      console.log(err);
    })
  }
  return(
    <div>
      <h1>Edit {athlete.firstName} {athlete.lastName}'s Information </h1>
     { loaded &&
      <Form 
          onSubmitHandler={onSubmitHandler} 
      />
     }
      <DeleteButton />
    </div>
  )
}

export default EditView;