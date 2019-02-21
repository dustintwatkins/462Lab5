import * as React from 'react'
import './Profile.css'
import ClientCommunicator from '../../ClientCommunicator/ClientCommunicator'
import Model from '../../Model/Model'

class Profile extends React.Component<React.SFC<{}>> {

  formIsFilled(): boolean {
    let fname = document.getElementById('sname') as HTMLInputElement
    let lname = document.getElementById('lname') as HTMLInputElement
    let play = document.getElementById('temp') as HTMLInputElement
    let review = document.getElementById('number') as HTMLInputElement

    return fname.value !== '' &&
      lname.value !== '' &&
      play.value !== '' &&
      review.value !== ''
  }

  submitForm = async (): Promise<void> => {
    const sname = (document.getElementById('sname') as HTMLInputElement).value
    const lname = (document.getElementById('lname') as HTMLInputElement).value
    const temp = (document.getElementById('temp') as HTMLInputElement).value
    const number = (document.getElementById('number') as HTMLInputElement).value
    ClientCommunicator.setProfile(sname, lname, temp, number)
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
    location.hash = ''
  }

  render (): JSX.Element {
    return (
      <section>
        <div className={'review-container'}>
          <div className={'review-card'}>
            <h1>Current Profile</h1>
            <h2>Sensor name: {Model.get_instance().profile.name}</h2>
            <h2>Sensor location: {Model.get_instance().profile.location}</h2>
            <h2>Violation Temperature: {Model.get_instance().profile.high}</h2>
            <h2>Phone number: {Model.get_instance().profile.number}</h2>
          </div>
          <div className={'divider'}>
          </div>
          <div className={'review-card'}>
            <form>
              <label>Sensor name</label>
              <input type='text' id={'sname'} className={'fname'} placeholder='Sensor name...'/>
              <label>Sensor location</label>
              <input type='text' id={'lname'} className={'lname'} placeholder='Sensor location...'/>
              <label>Temperature Violation</label>
              <input type='text' id={'temp'} className={'play'} placeholder='Temperature...'/>
              <label>Phone number</label>
              <input type='text' id={'number'} className={'play'} placeholder='Phone number...'/>
              <input type='submit' value='Submit' onClick={this.submitForm}/>
            </form>
          </div>
        </div>
      </section>
    )
  }

}

export default Profile
