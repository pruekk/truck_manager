import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'

import DomainsHome from '../../domains/Home'
import DomainsAbout from '../../domains/About'

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={DomainsHome} />
      <Route path="/about" component={DomainsAbout} />
    </Switch>
    </BrowserRouter>
  )
}

export default App
