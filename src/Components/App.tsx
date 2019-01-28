import * as React from 'react'
import './App.css'
import Header from './Header/Header'
import routes from '../Routes'


class App extends React.Component<React.SFC<{}>> {
  state = {
    path: location.hash,
  }

  componentDidMount (): void {
    window.onhashchange = (event: HashChangeEvent): void => {
      if (location.hash == '' || location.hash == '#') {
        document.getElementById('go-home').style.borderTop = 'solid white'
        document.getElementById('go-home').style.borderBottom = 'solid white'
        document.getElementById('go-reviews').style.borderTop = 'none'
        document.getElementById('go-reviews').style.borderBottom = 'none'
      } else if (location.hash == '#read-reviews') {
        document.getElementById('go-home').style.borderTop = 'none'
        document.getElementById('go-home').style.borderBottom = 'none'
        document.getElementById('go-reviews').style.borderTop = 'solid white'
        document.getElementById('go-reviews').style.borderBottom = 'solid white'
      }
      this.setState({ path: location.hash })
    }
  }

  public render (): JSX.Element {
    return (
      <section>
        <Header/>
        <div className={'body'}>
          { routes[this.state.path] }
        </div>
      </section>
    )
  }
}

export default App
