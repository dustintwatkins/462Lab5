import * as React from 'react'
import Home from './Components/Home/Home'
import ViewReviews from './Components/ViewReviews/ViewReviews'


interface Route {
  [s: string]: JSX.Element
}

const routes: Route = {
  '': <Home />,
  '#read-reviews': <ViewReviews/>
}

export default routes