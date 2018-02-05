class Music {
    turnOnMusic() {
        console.log('Wlaczylem muzyke');
    }
    turnOffMusic() {
        console.log('Wylaczylemm muzyke');
    }

}
class Chips {
    chipsStatus: boolean;

    constructor() {
        this.chipsStatus = true;
    }
    open() {
        if (this.chipsStatus == true) {
            console.log("Otworzylem chipsy");
        } else {
            console.log("Otwieram nowa paczke chipsow");
            this.chipsStatus = true;
        }
    }
    trash() {
        console.log("Robie porzadek");
        this.chipsStatus = false;
    }

}
class PartyFacade {
    private chips: Chips;
    private music: Music;

    constructor(chips: Chips, music: Music) {
        this.chips = chips;
        this.music = music;
    }

    startParty() {
        this.music.turnOnMusic();
        this.chips.open();
    }

    endParty() {
        this.music.turnOffMusic();
        this.chips.trash();
    }
}

let chips = new Chips();
let music = new Music();

let partyFacade  = new PartyFacade(chips, music);

partyFacade.startParty();
partyFacade.endParty();