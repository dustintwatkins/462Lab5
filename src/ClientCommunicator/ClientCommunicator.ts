class ClientCommunicator {
  private static server_cloud = 'http://localhost:8080/sky/cloud'
  private static server_event = 'http://localhost:8080/sky/event'
  private static channel = 'joz65VK6uXB4a4aPaeM3s'

  public static async getTemps (): Promise<any> {
    const url: string = `${this.server_cloud}/${this.channel}/temperature_store/temperatures`
    let headers = new Headers()

    const request = new Request(url, {
      method: 'GET',
      headers
    })

    return this.fetch(request)
  }

  public static async getViolations (): Promise<any> {
    const url: string = `${this.server_cloud}/${this.channel}/temperature_store/threshold_violations`
    let headers = new Headers()

    const request = new Request(url, {
      method: 'GET',
      headers
    })

    return this.fetch(request)
  }

  public static async getProfile (): Promise<any> {
    const url: string = `${this.server_cloud}/${this.channel}/sensor_profile/get_profile`
    const headers = new Headers()

    const request = new Request(url, {
      method: 'GET',
      headers
    })

    return this.fetch(request)
  }

  public static async setProfile (sname, lname, temp, number): Promise<void> {
    let url: string = `${this.server_event}/${this.channel}/${this.generateId()}/sensor/profile_updated?`
    url += `name=${sname}&location=${lname}&number=${number}&high=${temp}`

    console.log('url', url)
    const headers = new Headers()

    const request = new Request(url, {
      method: 'GET',
      headers
    })

    return this.fetch(request)
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

  private static generateId (): string {
    let id: string = ''
    for (let i: number = 0; i < 10; i++) {
      id += Math.floor((Math.random() * 100) + 1)
    }
    return id
  }
}

export default ClientCommunicator
