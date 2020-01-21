import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class NotesShow extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: []
    };
  }
  componentDidMount = () => {
    axios
      .get("http://localhost:3025/notes", {
        headers: {
          "x-auth": localStorage.getItem("authToken")
        }
      })
      .then((response) => {
        console.log("notes", response);
      });
  };
  render() {
    return (
      <div>
        <h2>List Of Notes</h2>
        <Link to="/notes/add">Add Notes</Link>
      </div>
    );
  }
}
