class RequestClient {
  async request(url: string): Promise<any> {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (e) {
      return null;
    }
  }
}

class LoggedRequest {
  loggee: RequestClient;

  constructor(loggee: RequestClient) {
    this.loggee = loggee;
  }

  async request(url: string): Promise<any> {
    console.log(`Performed request to ${url}`);
    return await this.loggee.request(url);
  }
}
