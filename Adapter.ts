interface NewApi {
    sendBySftp();
}
interface OldApi {
    sendByFtp();
}

class NewEndpoint implements NewApi {
    sendBySftp() {
        console.log('Wysyłam przez SFTP');
    }
}
class OldEndpoint implements OldApi {
    sendByFtp() {
        console.log('Wysyłam przez FTP');
    }
}

class OldApiAdapter implements OldApi {
  private newEndpoint: NewEndpoint;

  constructor(newEndpoint: NewEndpoint) {
    this.newEndpoint = newEndpoint;
  }

  sendByFtp() {
      console.log('Parsowanie wszystkiego do SFTP');
      this.newEndpoint.sendBySftp();
  }
}

let newEndpoint = new NewEndpoint();
let oldEndpoint = new OldEndpoint();

let oldEndpointAdapter = new OldApiAdapter(newEndpoint);
oldEndpointAdapter.sendByFtp();