class FetchApi {
  constructor(private baseURL: string) {}
  async post(url: string, body: any) {
    const result = await fetch(`${this.baseURL + url}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return await result.json()
  }
}
const fetchApi = new FetchApi(process.env.NEXT_PUBLIC_API_URL as string)
export default fetchApi
