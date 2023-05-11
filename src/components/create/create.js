import React, { useState } from "react";
import { Button, Form, Checkbox } from "semantic-ui-react";
import { LayoutRoutes } from "../layout";
import axios from "axios";

export default function Create() {
  const [firstName, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  function postData() {
    axios
      .post(`https://645b61a8a8f9e4d6e766c4b2.mockapi.io/userdata`, {
        firstName,
        lastname,
        checkbox,
      })
      .then((res) =>{resetForm(); console.log(res.data)})
      .catch((e) => console.log(e, "error is "));
    alert("data inserted");
  }

  const resetForm=()=>{
    setFirstName("")
    setLastName("")
    setCheckbox(false)
    
  }

  return (
    <div className="main">
      <LayoutRoutes />
      <Form className="create-form">
        <Form.Field>
          <label>First Name</label>
          <input value={firstName}
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input value={lastname}
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="I agree to the Terms and Conditions"
            onClick={(e) => setCheckbox(!checkbox)}
          />
        </Form.Field>
        <Button type="submit" onClick={postData}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
