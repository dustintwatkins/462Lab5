import * as React from 'react'
import './Header.css'
import ClientCommunicator from '../../ClientCommunicator/ClientCommunicator'
import Model from '../../Model/Model'

class Header extends React.Component {

  goToHome = (): void => {
    location.hash = ''
  }

  goToReviews = async (): Promise<void> => {
    Model.get_instance().clearReviews()
    Model.get_instance().setReviews(await ClientCommunicator.getReviews())
    location.hash = '#read-reviews'
    location.hash = '#read-reviews'
  }

  render(): JSX.Element {
    return (
     <section>
       <div className={'header'}>
           <h3>Shakespeare</h3>
         <div className={'header-right-container'}>
           <div className={'header-right'}>
             <h4 id={'go-home'} onClick={this.goToHome}>Home</h4>
             <div className={'divider-header'}/>
             <h4 id={'go-reviews'} onClick={this.goToReviews}>Reviews</h4>
           </div>
         </div>
       </div>
     </section>
    )
  }
}

export default Header