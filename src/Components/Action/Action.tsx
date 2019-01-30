import * as React from 'react'
import './Action.css'
import ClientCommunicator from '../../ClientCommunicator/ClientCommunicator'
import Model from '../../Model/Model'


class Action extends React.Component<React.SFC<{}>> {

  leaveReview = async () => {
    location.hash = '#leave-review'
  }

  readReviews = async () => {
    Model.get_instance().clearReviews()
    Model.get_instance().setReviews(await ClientCommunicator.getReviews())
    location.hash = '#read-reviews'
  }

  render (): JSX.Element {
    return (
      <section className={'action-container'}>
        <div className={'card'}>
          <div className={'title'}>
            <h2>What would you like to do?</h2>
          </div>
          <div className={'btn-container'}>
            <button onClick={this.readReviews}>Read Reviews</button>
            <div className={'btn-divider'}/>
            <button onClick={this.leaveReview}>Leave Review</button>
          </div>
        </div>
      </section>
    )
  }
}

export default Action