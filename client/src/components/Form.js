import React from "react";

const Form = props => {
  return(
    <form>
      <p>
        <label> First Name </label>
        <input type="text" name="firstName"/>
      </p>
      <p>
        <label> Last Name </label>
        <input type="text" name="lastName"/>
      </p>
      <p>
        <label> Sports </label>
        <input type="text" name="sports"/>
      </p>
      <p>
        <label> Team </label>
        <input type="text" name="team"/>
      </p>
      <input type="submit" />
    </form>
  )
}

export default Form;