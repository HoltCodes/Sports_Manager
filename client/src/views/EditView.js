import React from "react";
import DeleteButton from "../components/DeleteButton";
import Form from "../components/Form";

const EditView = props => {
  const { id } = props;
  return(
    <div>
      <h1>We are editing Athlete: {id} </h1>
      <Form />
      <DeleteButton />
    </div>
  )
}

export default EditView;