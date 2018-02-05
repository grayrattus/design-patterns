interface State {
    mailer: Mailer;
    mailSend();
    mailCancel();
    mailSuspend();
}

class SendedState implements State {
    mailer: Mailer;

    constructor(mailer: Mailer) {
        this.mailer = mailer;
    }

    mailSend() {
        console.log('Mail is sending');
    }
    mailCancel() {
        console.log('Canceling mail...');
        this.mailer.setState(this.mailer.canceled);
    }
    mailSuspend() {
        console.log('Suspending mail...')
        this.mailer.setState(this.mailer.suspended);
    }
}
class CanceledState implements State {
    mailer: Mailer;

    constructor(mailer: Mailer) {
        this.mailer = mailer;
    }

    mailSend() {
        console.log('Sending mail...');
        this.mailer.setState(this.mailer.sended);
    }
    mailCancel() {
        console.log('Mail was canceled.');
    }
    mailSuspend() {
        console.log('Suspending mail');
        this.mailer.setState(this.mailer.suspended);
    }
}
class SuspendedState implements State {
    mailer: Mailer;

    constructor(mailer: Mailer) {
        this.mailer = mailer;
    }

    mailSend() {
        console.log('You cant send suspended mail');
    }
    mailCancel() {
        console.log('Canceling mail');
        this.mailer.setState(this.mailer.canceled);
    }
    mailSuspend() {
        console.log('Mail was suspended before');
    }
}

class Mailer {
    sended: State;
    canceled: State;
    suspended: State;

    current: State;

    constructor() {
        this.sended = new SendedState(this);
        this.canceled = new CanceledState(this);
        this.suspended = new SuspendedState(this);

        this.current = this.canceled;
    }

    setState(state: State) {
        return this.current = state;
    }
    getState() {
        return this.current;
    }
}

let mailer = new Mailer();

mailer.getState().mailSend();
mailer.getState().mailCancel();
mailer.getState().mailSuspend();
mailer.getState().mailSend();