import React from "react";
//import Button from "semantic-ui-react";
import { Table, TableHeader } from "semantic-ui-react";
import { LayoutRoutes } from "../layout";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Read() {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios
      .get("https://645b61a8a8f9e4d6e766c4b2.mockapi.io/userdata")
      .then((res) => setAPIData(res.data))
      .catch((e) => console.error(e));
  }, []);
const setData=(data)=>{
    let { id, firstName, lastname, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastname);
        localStorage.setItem('Checkbox Value', checkbox)
      
}
//onDelete will delete the particular id data from the table 
const onDelete=(id)=>{
    axios.delete(`https://645b61a8a8f9e4d6e766c4b2.mockapi.io/userdata/${id}`).then(res=>reLoadData())
}

const reLoadData=()=>{
    axios.get(`https://645b61a8a8f9e4d6e766c4b2.mockapi.io/userdata`)
    .then((res)=>setAPIData(res.data))
    .catch((e)=>console.error(e))
}

  return (
    <div className="main">
      <LayoutRoutes />
      <Table singleLine>
        <TableHeader>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Check box</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </TableHeader>
        <Table.Body>
          {APIData.map((data) => {
            return (
              <Table.Row>
                <Table.Cell>{data.firstName}</Table.Cell>
                <Table.Cell>{data.lastname}</Table.Cell>
                <Table.Cell>{data.checkbox ? "Checked" : "Not Checked"}</Table.Cell>
                <Table.Cell><Link to="/update"><button onClick={()=>setData(data)}>update</button></Link></Table.Cell>
                <Table.Cell><button onClick={()=>onDelete(data.id)}>delete</button></Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
