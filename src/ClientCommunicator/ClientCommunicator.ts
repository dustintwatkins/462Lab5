import res from '../../public/assets/JSON'


const authToken = 'H3TM28wjL8R4#HTnqk?c'

class ClientCommunicator {
  private static server_url = 'https://shakespeare.podium.com/api/reviews'

  public static getReviews (): any {
    const url: string = `${ClientCommunicator.server_url}/poll`
    let headers = new Headers()
    headers.append('x-api-key', authToken)
    headers.append('Access-Control-Allow-Origin', '*')
    headers.append('Access-Control-Allow-Headers', 'true')

    const request = new Request(url, {
      method: 'GET',
      headers
    })

    // return fetch(request)
    //   .then(response => {
    //     return response
    //   })
    //   .catch((error) => {
    //     location.hash = ''
    //     console.log('Fetch error:', error)
    //     return null
    //   })


    return res
  }
}

export default ClientCommunicator
