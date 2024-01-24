import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import TaskReward from './views/task-reward'
import Withdraw from './views/withdraw'
import Recharge from './views/recharge'
import Login from './views/login'
import Home from './views/home'
import CreateAccount from './views/create-account'
import Invite from './views/invite'
import My from './views/my'
import Parity from './views/parity'
import NotFound from './views/not-found'
import Pari from './views/Pari'
import MobileLayout from './views/MobileLayout'
import { UserProvider } from './user-context/user-context'
const App = () => {
  return (
    <UserProvider>
      <Router>
        <Switch>
          <Route component={TaskReward} exact path="/task-reward" />
          <Route component={Withdraw} exact path="/withdraw" />
          <Route component={Recharge} exact path="/recharge" />
          <Route component={Home} exact path="/" />
          <Route component={Login} exact path="/login" />
          <Route component={Home} exact path="/home" />
          <Route component={CreateAccount} exact path="/create-account" />
          <Route component={Invite} exact path="/invite" />
          <Route component={My} exact path="/my" />
          <Route component={Parity} exact path="/parity" />
          <Route component={Pari} exact path="/pari" />

          <Route component={NotFound} path="**" />

          <Redirect to="**" />
        </Switch>
      </Router>
    </UserProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
