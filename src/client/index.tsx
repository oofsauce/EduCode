import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { DefaultLayout } from './layouts/default'
import { Navigation } from './components/nav'
import { Home } from './pages/home';
import { Login } from './pages/login';
import { Room } from './pages/room';

import '../../public/style/default.scss';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  useLocation,
} from 'react-router-dom';
import {
  useState,
} from 'react'
import { Rooms } from './pages/rooms';
import { Signup } from './pages/signup';
import { CreateRoom } from './pages/createroom';

export const UserContext = React.createContext({ user: null, setUser: () => { } })

function Main() {
  const [user, setUser] = useState(null)
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <header>
          <Navigation user={user} />
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/createroom">
              <CreateRoom />
            </Route>
            <Route exact path="/room/:id">
              <Room />
            </Route>
            <Route exact path="/rooms">
              <Rooms />
            </Route>
          </Switch>
        </main>
      </Router>
    </UserContext.Provider>
  )
}

ReactDOM.render(<Main></Main>, document.querySelector(".react"));