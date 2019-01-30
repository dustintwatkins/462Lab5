import Review from './Review'


class Model {
  static _instance: Model
  private _reviews: Review[]

  private constructor () {
    this._reviews = []
  }

  public static get_instance ():Model {
    if (!Model._instance){
      Model._instance = new Model()
    }
    return Model._instance
  }

  public setReviews (reviews: object[]): void {
    console.log('before adding', reviews)
    if (reviews.length > 0) {
      for (let i: number = 0; i < reviews.length; i++) {
        console.log('hi', reviews[i])
        this._reviews.push(new Review(reviews[i]['rating'], reviews[i]['publish_date'], reviews[i]['id'], reviews[i]['body'], reviews[i]['author']))
      }
    }
    console.log('after', this.reviews)
  }


  get reviews (): Review[] {
    return this._reviews
  }

  public clearReviews ():void {
    this._reviews = []
  }
}

export default Model
