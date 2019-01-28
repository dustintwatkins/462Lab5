import * as React from 'react'
import "./Header.css"

const logo = 'public/assets/shakespeare1.png'

class Header extends React.Component {

  goToHome = (): void => {
    location.hash = ''
  }

  goToReviews = (): void => {
    location.hash = '#read-reviews'
  }

  render(): JSX.Element {
    return (
     <section>
       <div className={'header'}>
           <img src={logo}/>
           <h2>Shakespeare</h2>
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