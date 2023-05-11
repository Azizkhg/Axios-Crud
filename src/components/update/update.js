import { Table, TableHeader } from "semantic-ui-react"
import React from "react"
import { useState,useEffect } from "react"
import { LayoutRoutes } from "../layout"
import {Form,Button,Checkbox} from "semantic-ui-react"
import axios from "axios"

export default function Update()
{
    const [firstName,setFirstName]=useState("");
    const [lastname,setLastName]=useState("");
    const [checkbox,setCheckbox]=useState(false);
    const [id, setID] = useState(null);
    const [APIData,setAPIData]=useState([]);
    

useEffect(() => {
        setID(localStorage.getItem('ID'));
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setCheckbox(localStorage.getItem('Checkbox Value'));
}, []);


    useEffect(() => {
        axios
          .get("https://645b61a8a8f9e4d6e766c4b2.mockapi.io/userdata")
          .then((res) => setAPIData(res.data))
          .catch((e) => console.error(e));
      }, []);
     
      const updateAPIData = () => {
        axios.put(`https://645b61a8a8f9e4d6e766c4b2.mockapi.io/userdata/${id}`, {
            firstName,
             lastname,
             checkbox
        })
        alert("data updated!!")
    }

    return(
       <div className="main">
        <LayoutRoutes/>
        <h1>update page</h1>
        <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' value={lastname} onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' checked={checkbox} onChange={(e) => setCheckbox(!checkbox)}/>
                </Form.Field>
                <Button type='submit' onClick={updateAPIData}>Update</Button>
            </Form>
       </div>
    )
}