import React from "react";
import axios from "axios";
import { Route, Link, BrowserRouter, Switch } from "react-router-dom";
import Home from "./components/common/Home";
import Register from "./components/user/Register";
import Login from "./components/user/Login";
import NotesShow from "./components/notes/notesShow";
import NotesForm from "./components/notes/Form";
import CategoryShow from "./components/category/categoryShow";
import Logout from "./components/user/Logout";
import CategoryAdd from "./components/category/categoryAdd";

function App() {
  const handleSubmit = (e) => {
    axios.delete("http://localhost:3025/users/logout", {
      headers: {
        "x-auth": localStorage.getItem("authToken")
      }
    });
    localStorage.removeItem("authToken");
    this.props.history.push("/");
    window.location.reload();
  };
  return (
    <BrowserRouter>
      <div>
        <h1 align="right">Notes App</h1>
        <div align="right">
          {localStorage.getItem("authToken") ? (
            <div>
              <Link to="/">Home</Link>&nbsp;|
              <Link to="/notes">Notes</Link>&nbsp;|
              <Link to="/category">Category</Link>&nbsp;|
              <Link to="/" onCLick={handleSubmit}>
                Logout
              </Link>
            </div>
          ) : (
            <div>
              <Link to="/">Home</Link>&nbsp;|
              <Link to="/users/register">Register</Link>&nbsp;|
              <Link to="/users/login">Login</Link>
            </div>
          )}
        </div>
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/users/register" component={Register} />
          <Route path="/users/login" component={Login} />
          <Route path="/users/logout" component={Logout} />
          <Route path="/notes" component={NotesShow} exact={true} />
          <Route path="/notes/add" component={NotesForm} />
          <Route path="/category" component={CategoryShow} exact={true} />
          <Route path="/category/add" component={CategoryAdd} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
