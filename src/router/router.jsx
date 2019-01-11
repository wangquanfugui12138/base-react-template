import React, { Component } from 'react'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import Loadable from 'react-loadable'

const MyLoadingComponent = ({ isLoading, error }) => {
  return ''
}
const Nav = Loadable({
  loader: () => import(/* webpackChunkName: "Nav" , webpackPrefetch: true  */'../components/Nav'),
  loading: MyLoadingComponent
})
const Login = Loadable({
  loader: () => import(/* webpackChunkName: "Login" , webpackPrefetch: true */'../pages/Login'),
  loading: MyLoadingComponent
})
const Index = Loadable({
  loader: () => import(/* webpackChunkName: "Index" , webpackPrefetch: true */'../pages/Index'),
  loading: MyLoadingComponent
})
const Contact = Loadable({
  loader: () => import(/* webpackChunkName: "Contact" , webpackPrefetch: true */ '../pages/Contact'),
  loading: MyLoadingComponent
})
const NotFound = Loadable({
    loader: () => import('../pages/NotFound'),
    loading: MyLoadingComponent
  })
class Routers extends Component {
  render() {
    return (
        <Router>
            <div>
              <Nav/>
              <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/contact" component={Contact} />
                <Route component={NotFound} />
              </Switch>
            </div>
        </Router>
    )
  }
}

export default Routers
