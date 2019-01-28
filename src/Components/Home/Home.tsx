import * as React from 'react'
import './Home.css'
import Header from '../Header/Header'
import Action from '../Action/Action'
import set = Reflect.set


class Home extends React.Component {

  render (): JSX.Element {
    return (
      <section>
        <Action/>
      </section>
    )
  }
}

export default Home
