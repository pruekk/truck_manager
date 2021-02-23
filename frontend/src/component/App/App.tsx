import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Layout } from 'antd'
import './App.css'
import 'antd/dist/antd.css';

import Navbar from '../Navbar'

import DomainsHome from '../../domains/Home'
import DomainsAbout from '../../domains/About'
import DomainsLogin from '../../domains/Login'

function App() {
  const {Header,Content,Footer} = Layout
  return (
    <BrowserRouter>
    <Header>
      <Navbar/>
    </Header>
    <Content className="content-app">
    <Switch>
      <Route exact path="/" component={DomainsHome} />
      <Route path="/about" component={DomainsAbout} />
      <Route path="/login" component={DomainsLogin} />
    </Switch>
    </Content>
    <Footer>
      Footer is here
    </Footer>
    </BrowserRouter>
  )
}

export default App
