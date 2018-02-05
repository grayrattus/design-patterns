var NewEndpoint = /** @class */ (function () {
    function NewEndpoint() {
    }
    NewEndpoint.prototype.sendBySftp = function () {
        console.log('Wysyłam przez SFTP');
    };
    return NewEndpoint;
}());
var OldEndpoint = /** @class */ (function () {
    function OldEndpoint() {
    }
    OldEndpoint.prototype.sendByFtp = function () {
        console.log('Wysyłam przez FTP');
    };
    return OldEndpoint;
}());
var OldApiAdapter = /** @class */ (function () {
    function OldApiAdapter(newEndpoint) {
        this.newEndpoint = newEndpoint;
    }
    OldApiAdapter.prototype.sendByFtp = function () {
        console.log('Parsowanie wszystkiego do SFTP');
        this.newEndpoint.sendBySftp();
    };
    return OldApiAdapter;
}());
var newEndpoint = new NewEndpoint();
var oldEndpoint = new OldEndpoint();
var oldEndpointAdapter = new OldApiAdapter(newEndpoint);
oldEndpointAdapter.sendByFtp();
