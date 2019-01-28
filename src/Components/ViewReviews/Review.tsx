import * as React from 'react'
import './Review.css'

interface props {
  rating: number,
  publish_date: string,
  id: string,
  body: string,
  author: string
}

class Review extends React.Component<props, {}> {
  constructor(props) {
    super(props)
  }

  createDateString(date: Date) {
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
  }

  render (): JSX.Element {
    const date = new Date(this.props.publish_date)
    return (
      <section>
        <div className={'card'}>
          <div className={'title-review'}>
              <h3>Author: {this.props.author}</h3>
            <div className={'sub-title'}>
              <p>Date: {this.createDateString(date)}</p>
              <div className={'title-divider'}/>
              <div className={'rating'}>
                <p>Rating: {this.props.rating} / 5 Stars</p>
              </div>
            </div>
          </div>
          <div className={'review-content'}>
            <p>"{this.props.body}"</p>
          </div>
        </div>
      </section>
    )
  }
}

export default Review
