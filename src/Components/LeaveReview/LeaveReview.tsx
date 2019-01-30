import * as React from 'react'
import './LeaveReview.css'


class LeaveReview extends React.Component {

  submitForm = (): void => {
    location.hash = '#submitted'
  }

  render (): JSX.Element {
    return (
      <section>
        <div className={'review-container'}>
          <div className={'review-card'}>
            <form>
              <label>First Name</label>
              <input type='text' className={'fname'} placeholder='Your name..'/>
                <label>Last Name</label>
                <input type='text' className={'lname'} placeholder='Your last name..'/>
                <label>Name of Play</label>
                <input type='text' className={'play'} placeholder='Macbeth'/>
                  <label>Rating</label>
                  <select className={'rating'}>
                    <option value='1'>1 Star</option>
                    <option value='2'>2 Stars</option>
                    <option value='3'>3 Stars</option>
                    <option value='4'>4 Stars</option>
                    <option value='5'>5 Stars</option>
                  </select>
                  <label htmlFor='subject'>Subject</label>
                  <textarea  className={'review'} placeholder='Shakespeare illustrates an epic...' ></textarea>
                  <input type='submit' value='Submit' onClick={this.submitForm}/>
            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default LeaveReview
