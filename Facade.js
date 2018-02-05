var Music = /** @class */ (function () {
    function Music() {
    }
    Music.prototype.turnOnMusic = function () {
        console.log('Wlaczylem muzyke');
    };
    Music.prototype.turnOffMusic = function () {
        console.log('Wylaczylemm muzyke');
    };
    return Music;
}());
var Chips = /** @class */ (function () {
    function Chips() {
        this.chipsStatus = true;
    }
    Chips.prototype.open = function () {
        if (this.chipsStatus == true) {
            console.log("Otworzylem chipsy");
        }
        else {
            console.log("Otwieram nowa paczke chipsow");
            this.chipsStatus = true;
        }
    };
    Chips.prototype.trash = function () {
        console.log("Robie porzadek");
        this.chipsStatus = false;
    };
    return Chips;
}());
var PartyFacade = /** @class */ (function () {
    function PartyFacade(chips, music) {
        this.chips = chips;
        this.music = music;
    }
    PartyFacade.prototype.startParty = function () {
        this.music.turnOnMusic();
        this.chips.open();
    };
    PartyFacade.prototype.endParty = function () {
        this.music.turnOffMusic();
        this.chips.trash();
    };
    return PartyFacade;
}());
var chips = new Chips();
var music = new Music();
var partyFacade = new PartyFacade(chips, music);
partyFacade.startParty();
partyFacade.endParty();
