class Review {

  private _rating: number
  private _publishDate: string
  private _id: string
  private _body: string
  private _author: string

  public constructor (rating: number, pDate: string, id: string, body: string, author: string) {
    this._rating = rating
    this._publishDate = pDate
    this._id = id
    this._body = body
    this._author = author
  }

  get rating (): number {
    return this._rating
  }

  set rating (value: number) {
    this._rating = value
  }

  get publishDate (): string {
    return this._publishDate
  }

  set publishDate (value: string) {
    this._publishDate = value
  }

  get id (): string {
    return this._id
  }

  set id (value: string) {
    this._id = value
  }

  get body (): string {
    return this._body
  }

  set body (value: string) {
    this._body = value
  }

  get author (): string {
    return this._author
  }

  set author (value: string) {
    this._author = value
  }
}

export default Review
