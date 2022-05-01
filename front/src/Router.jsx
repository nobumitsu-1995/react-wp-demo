import React, { Component } from 'react';
import {Switch, Route} from 'react-router';
import { Top, Idol, Drama, Variety, Post, Content } from "./components/pages";

export default class Router extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Top}/>
        <Route exact path="/category/idol" component={Idol}/>
        <Route exact path="/category/drama" component={Drama}/>
        <Route exact path="/category/variety" component={Variety}/>
        <Route path="/post/:id" component={Post }/>
        <Route path="/content/:id" component={Content}/>
      </Switch>
    )
  }
}
