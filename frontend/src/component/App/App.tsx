import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import 'antd/dist/antd.css';

import DomainsHome from '../../domains/Home'
import DomainsAbout from '../../domains/About'
import DomainsLogin from '../../domains/Login'

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={DomainsHome} />
      <Route path="/about" component={DomainsAbout} />
      <Route path="/login" component={DomainsLogin} />
    </Switch>
    </BrowserRouter>
  )
}

export default App
