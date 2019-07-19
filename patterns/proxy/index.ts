// interface for real subject and proxy
interface Subject {
  request(url: string): Promise<any>;
}

class RequestClient implements Subject {
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

// proxy with modified behavior
class LoggedRequest implements Subject {
  loggee: RequestClient;

  constructor(loggee: RequestClient) {
    this.loggee = loggee;
  }

  checkAccess(): boolean {
    console.log('proxy check access');
    return true;
  }

  async request(url: string): Promise<any> {
    if (this.checkAccess()) {
      console.log(`Performed request to ${url}`);
      return await this.loggee.request(url);
    }
  }
}
