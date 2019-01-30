import * as React from 'react'
import Swal from 'sweetalert2'
import './LeaveReview.css'


class LeaveReview extends React.Component {

  formIsFilled(): boolean {
    let fname = document.getElementById('fname') as HTMLInputElement
    let lname = document.getElementById('lname') as HTMLInputElement
    let play = document.getElementById('play') as HTMLInputElement
    let review = document.getElementById('review') as HTMLInputElement

    return fname.value !== '' &&
        lname.value !== '' &&
        play.value !== '' &&
        review.value !== ''
  }

  submitForm = (): void => {
    if (this.formIsFilled()) {
      location.hash = '#submitted'
    } else {
      Swal.fire('Please fill out the entire review before submitting')
    }
  }

  render (): JSX.Element {
    return (
      <section>
        <div className={'review-container'}>
          <div className={'review-card'}>
            <form>
              <label>First Name</label>
              <input type='text' id={'fname'} className={'fname'} placeholder='Your name..'/>
                <label>Last Name</label>
                <input type='text' id={'lname'} className={'lname'} placeholder='Your last name..'/>
                <label>Name of Play</label>
                <input type='text' id={'play'} className={'play'} placeholder='Macbeth'/>
                  <label>Rating</label>
                  <select className={'rating'}>
                    <option value='1'>1 Star</option>
                    <option value='2'>2 Stars</option>
                    <option value='3'>3 Stars</option>
                    <option value='4'>4 Stars</option>
                    <option value='5'>5 Stars</option>
                  </select>
                  <label htmlFor='subject'>Subject</label>
                  <textarea id={'review'} className={'review'} placeholder='Shakespeare illustrates an epic...' ></textarea>
                  <input type='submit' value='Submit' onClick={this.submitForm}/>
            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default LeaveReview
