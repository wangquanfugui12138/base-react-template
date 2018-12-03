import React, { Component } from 'react'
import { BrowserRouter as Router,Switch,Route,Redirect } from 'react-router-dom'
import Loadable from 'react-loadable'

const MyLoadingComponent = ({ isLoading, error }) => {
  return ''
}
const Login = Loadable({
  loader: () => import('../pages/Login'),
  loading: MyLoadingComponent
})
const SecRouters = Loadable({
  loader: () => import('./secRouter'),
  loading: MyLoadingComponent
})

class Routers extends Component {
  render() {
    return (
        <Router>
            <Switch>
              <Route exact path="/" component={SecRouters} />
              <Route exact path="/login" component={Login} />
              <Redirect exact strict from="/*" to="/"  />
            </Switch>
        </Router>
    )
  }
}

export default Routers
