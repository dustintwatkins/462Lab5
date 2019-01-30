import * as React from 'react'
import './Submitted.css'

class Submitted extends React.Component<React.SFC<{}>> {

  goHome = (): void => {
    location.hash = ''
  }

  render (): JSX.Element {
    return (
      <section>
        <div className={'submitted-container'}>
          <div className={'submitted-card'}>
            <h1>Thank you for submitting your review!</h1>
            <button onClick={this.goHome}>Go Home</button>
          </div>
        </div>
      </section>
    )
  }
}

export default Submitted
