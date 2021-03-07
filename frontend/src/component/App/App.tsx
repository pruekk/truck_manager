import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Layout } from 'antd'
import './App.css'
import 'antd/dist/antd.css';

import ContextProvider from "../../contexts";
import Navbar from '../Navbar'
import PrivateRoute from "../PrivateRoute";

import DomainsHome from '../../domains/Home'
import DomainsAbout from '../../domains/About'
import DomainsLogin from '../../domains/Login'

function App() {
  const {Header,Content,Footer} = Layout
  return (
    <ContextProvider>
        <BrowserRouter>
            <Header>
                <Navbar/>
            </Header>
            <Content className="content-app">
                <Switch>
                    <Route exact path="/" component={DomainsHome} />
                    <Route path="/about" component={DomainsAbout} />
                    <PrivateRoute exact path="/user/me" component={DomainsAbout} />
                    <Route path="/login" component={DomainsLogin} />
                </Switch>
            </Content>
            <Footer>
                Footer is here
            </Footer>
        </BrowserRouter>
    </ContextProvider>
  )
}

export default App
