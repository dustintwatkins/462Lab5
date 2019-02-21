import * as React from 'react'
import Home from './Components/Home/Home'
import Profile from './Components/Profile/Profile'

interface Route {
  [s: string]: JSX.Element
}

const routes: Route = {
  '': <Home/>,
  '#profile': <Profile/>
}

export default routes