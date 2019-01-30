import * as React from 'react'
import Home from './Components/Home/Home'
import ViewReviews from './Components/ViewReviews/ViewReviews'
import LeaveReview from './Components/LeaveReview/LeaveReview'
import Submitted from './Components/LeaveReview/Submitted'


interface Route {
  [s: string]: JSX.Element
}

const routes: Route = {
  '': <Home/>,
  '#read-reviews': <ViewReviews/>,
  '#leave-review': <LeaveReview/>,
  '#submitted': <Submitted/>
}

export default routes