import * as React from 'react'
import './Action.css'
import ClientCommunicator from '../../ClientCommunicator/ClientCommunicator'
import Model from '../../Model/Model'

class Action extends React.Component<React.SFC<{}>> {
  state = {
    currentTemp: 69.65
  }

  refresh = async () => {
    let res = await ClientCommunicator.getTemps()
    let res2 = await ClientCommunicator.getViolations()
    if (res !== null) {
      Model.get_instance().setTemps(res)
      let temp = Model.get_instance().getMostRecentTemp()
      this.setState({currentTemp: temp.temperature})
    }
    if (res2 !== null) {
      Model.get_instance().setViolations(res2)
    }
  }

  render (): JSX.Element {
    return (
      <section className={'action-container'}>
        <div className={'current-card'}>
          <div className={'title'}>
            <h2>Current temperature in my bedroom is {this.state.currentTemp}</h2>
          </div>
          <div className={'btn-container'}>
            <button onClick={this.refresh}>Refresh</button>
          </div>
        </div>
        <div className={'divider'}>
        </div>
        <div className={'past-card'}>
          <div className={'title'}>
            <h2>Past temperatures</h2>
          </div>
          {Model.get_instance().getLastThreeTemps().map((temp) => {
            return <h4>Temperature: {temp.temperature} Time: {temp.timestamp}</h4>
          })}
        </div>
        <div className={'divider'}>
        </div>
        <div className={'violation-card'}>
          <div className={'title'}>
            <h2>Temperature Violations</h2>
          </div>
          {
            Model.get_instance().getLastThreeViolations().length > 0 ? Model.get_instance().getLastThreeViolations().map((temp) => {
              return <h4>Temperature: {temp.temperature} Time: {temp.timestamp}</h4>
            }) : <h4>No temperature violations</h4>
          }
        </div>
      </section>
    )
  }
}

export default Action