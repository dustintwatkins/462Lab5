
const authToken = 'H3TM28wjL8R4#HTnqk?c'

class ClientCommunicator {
  private static server_url = 'https://shakespeare.podium.com/api/reviews'

  public static getReviews (): any {
    const url: string = `${ClientCommunicator.server_url}/poll`
    let headers = new Headers()
    headers.append('x-api-key', authToken)

    const request = new Request(url, {
      method: 'GET',
      headers
    })

    return fetch(request)
      .then(response => {
        return response
      })
      .catch((error) => {
        location.hash = ''
        console.log('Fetch error:', error)
        return null
      })
  }
}

export default ClientCommunicator
