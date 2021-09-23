import React from "react";
import { Container } from "@material-ui/core";
import Header from "./components/Header";
import Menu from "./components/Menu";

import { makeStyles } from "@material-ui/core/styles";

import Box1 from "./components/Box1";

import Data from "./components/Data";

import Form from "./components/Form";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(20),
  },
}));

export default function App() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = React.useState(true);

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const handleDrawerChange = () => {
    !openDrawer ? setOpenDrawer(true) : setOpenDrawer(false);
  };

  return (
    <Router>
      <Header handleDrawerChange={handleDrawerChange} open={openDrawer} />
      <Menu open={openDrawer} handleDrawerClose={handleDrawerClose} />
      <Container className={classes.content}>
        <Switch>
          <Route path="/box1" component={Box1} />
          <Route path="/data" component={Data} />
          <Route path="/form" component={Form} />
          <Route path="/signIn" component={SignIn} />
          <Route path="/signUp" component={SignUp} />
          <Route path="/form" component={Form} />
          <Route
            exact={true}
            path="/"
            component={() => <Redirect to="/login" />}
          />{" "}
        </Switch>
      </Container>
    </Router>
  );
}
