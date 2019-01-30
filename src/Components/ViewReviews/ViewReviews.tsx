import * as React from 'react'
import './ViewReviews.css'
import Review from './Review'
import Model from '../../Model/Model'

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
            Model.get_instance().reviews.map((review) => {
              return <Review rating={review.rating}
                             publish_date={review.publishDate}
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
