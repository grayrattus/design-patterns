var SendedState = /** @class */ (function () {
    function SendedState(mailer) {
        this.mailer = mailer;
    }
    SendedState.prototype.mailSend = function () {
        console.log('Mail is sending');
    };
    SendedState.prototype.mailCancel = function () {
        console.log('Canceling mail...');
        this.mailer.setState(this.mailer.canceled);
    };
    SendedState.prototype.mailSuspend = function () {
        console.log('Suspending mail...');
        this.mailer.setState(this.mailer.suspended);
    };
    return SendedState;
}());
var CanceledState = /** @class */ (function () {
    function CanceledState(mailer) {
        this.mailer = mailer;
    }
    CanceledState.prototype.mailSend = function () {
        console.log('Sending mail...');
        this.mailer.setState(this.mailer.sended);
    };
    CanceledState.prototype.mailCancel = function () {
        console.log('Mail was canceled.');
    };
    CanceledState.prototype.mailSuspend = function () {
        console.log('Suspending mail');
        this.mailer.setState(this.mailer.suspended);
    };
    return CanceledState;
}());
var SuspendedState = /** @class */ (function () {
    function SuspendedState(mailer) {
        this.mailer = mailer;
    }
    SuspendedState.prototype.mailSend = function () {
        console.log('You cant send suspended mail');
    };
    SuspendedState.prototype.mailCancel = function () {
        console.log('Canceling mail');
        this.mailer.setState(this.mailer.canceled);
    };
    SuspendedState.prototype.mailSuspend = function () {
        console.log('Mail was suspended before');
    };
    return SuspendedState;
}());
var Mailer = /** @class */ (function () {
    function Mailer() {
        this.sended = new SendedState(this);
        this.canceled = new CanceledState(this);
        this.suspended = new SuspendedState(this);
        this.current = this.canceled;
    }
    Mailer.prototype.setState = function (state) {
        return this.current = state;
    };
    Mailer.prototype.getState = function () {
        return this.current;
    };
    return Mailer;
}());
var mailer = new Mailer();
mailer.getState().mailSend();
mailer.getState().mailCancel();
mailer.getState().mailSuspend();
mailer.getState().mailSend();
