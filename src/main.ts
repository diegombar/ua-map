/// <reference types="@workadventure/iframe-api-typings" />

import {bootstrapExtra} from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ', WA.player.tags)

    const spaces = {
        "popUpEiffel": "Tour Eiffel",
        "popUpOrsay": "Orsay",
        "popUpVelo": "Velo",
        "popUpMontparnasse": "Montparnasse",
        "popUpAvenueDesOps": "Avenue Des Ops",
        "popUpOps": "Ops",
        "popUpOpsTraining": "Ops Training",
        "popUpNotreDame": "Notre Dame",
        "popUpCoffre": "Salle des coffres",
        "popUpSacreCoeur": "Sacre Coeur",
        "popUpBeaubourg": "Beaubourg",
        "popUpCentrale": "Centrale",
        "popUpCantine": "Cantine",
        "popUpRevenues": "Revenues",
        "popUpCCnX": "CC&X",
        "popUpDataProduct": "Data Product",
        "popUpLouvre": "Louvre",
        "popUpCSE": "CSE",
        "popUpBastille": "Bastille",
        "popUpChill": "Chill Zone",
        "popUpTech": "Tech",
    }

    for (const key in spaces) {
        WA.ui.openPopup(key, spaces[key], []);
    }

    WA.room.onEnterLayer('clockZone').subscribe(() => {
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes();
        currentPopup = WA.ui.openPopup("clockPopup", "It's " + time, []);
    })

    WA.room.onLeaveLayer('clockZone').subscribe(closePopUp)

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

function closePopUp() {
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

export {};
