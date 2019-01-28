import * as React from 'react'
import './ViewReviews.css'
import Header from '../Header/Header'
import res from '../../../public/assets/JSON'
import Review from './Review'

class ViewReviews extends React.Component {
  constructor(props) {
    super(props)
  }

  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  render (): JSX.Element {
    return (
      <section>
        <div className={'reviews-container'}>
          <button className={'to-top-btn'} onClick={this.topFunction}>Back to Top</button>
          {
            res.map((review) => {
              return <Review rating={review.rating}
                             publish_date={review.publish_date}
                             id={review.id}
                             body={review.body}
                             author={review.author}
                      />
            })
          }
        </div>
      </section>
    )
  }
}

export default ViewReviews
