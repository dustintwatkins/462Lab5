import * as React from 'react'
import './Header.css'
import ClientCommunicator from '../../ClientCommunicator/ClientCommunicator'
import Model from '../../Model/Model'

class Header extends React.Component {

  goToHome = (): void => {
    location.hash = ''
  }

  goToProfile = async (): Promise<void> => {
    Model.get_instance().setProfile(await ClientCommunicator.getProfile())
    location.hash = '#profile'
  }

  render(): JSX.Element {
    return (
     <section>
       <div className={'header'}>
           <h3>Pico Temperatures</h3>
         <div className={'header-right-container'}>
           <div className={'header-right'}>
             <div className={'header-right'}>
               <h4 id={'go-home'} onClick={this.goToHome}>Home</h4>
               <div className={'divider-header'}/>
               <h4 id={'go-reviews'} onClick={this.goToProfile}>Profile</h4>
             </div>
           </div>
         </div>
       </div>
     </section>
    )
  }
}

export default Header