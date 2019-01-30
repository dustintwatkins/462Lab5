
const authToken = 'H3TM28wjL8R4#HTnqk?c'

class ClientCommunicator {
  private static server_url = 'https://shakespeare.podium.com/api'

  public static async getReviews (): Promise<any> {
    const url: string = `${this.server_url}/reviews`
    let headers = new Headers()
    headers.append('x-api-key', authToken)

    const request = new Request(url, {
      method: 'GET',
      headers
    })

    return this.fetch(request)
  }

  public static async getReview (id: string): Promise<any> {
    if (id) {
      const url: string = `${this.server_url}/reviews${id}`
      let headers = new Headers()
      headers.append('x-api-key', authToken)

      const request = new Request(url, {
        method: 'GET',
        headers
      })

      return this.fetch(request)
    }
    return null
  }

  private static fetch (request): any {
    return fetch(request)
      .then(response => {
        return response.json()
      })
      .catch((error) => {
        location.hash = ''
        console.log('Fetch error:', error)
        return null
      })
  }
}

export default ClientCommunicator
