/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)
    WA.ui.openPopup("popUpEiffel","Tour Eiffel",[]);
    WA.ui.openPopup("popUpOrsay","Orsay",[]);
    WA.ui.openPopup("popUpVelo","Velo",[]);
    WA.ui.openPopup("popUpMontparnasse","Montparnasse",[]);
    WA.ui.openPopup("popUpAvenueDesOps","Avenue Des Ops",[]);
    WA.ui.openPopup("popUpOps","Ops",[]);
    WA.ui.openPopup("popUpOpsTraining","Ops Training",[]);
    WA.ui.openPopup("popUpNotreDame","Notre Dame",[]);
    WA.ui.openPopup("popUpCoffre","Salle des Coffres",[]);
    WA.ui.openPopup("popUpSacreCoeur","Sacre Coeur",[]);
    WA.ui.openPopup("popUpBeaubourg","Beaubourg",[]);
    WA.ui.openPopup("popUpCentrale","Centrale",[]);
    WA.ui.openPopup("popUpCantine","Cantine",[]);
    WA.ui.openPopup("popUpRevenues","Revenues",[]);
    WA.ui.openPopup("popUpCCnX","CC&X",[]);
    WA.ui.openPopup("popUpDataProduct","Data Product",[]);
    WA.ui.openPopup("popUpLouvre","Louvre",[]);
    WA.ui.openPopup("popUpCSE","CSE",[]);
    WA.ui.openPopup("popUpBastille","Bastille",[]);
    WA.ui.openPopup("popUpChill","Chill Zone",[]);
    WA.ui.openPopup("popUpTech","Tech",[]);

    WA.room.onEnterLayer('clockZone').subscribe(() => {
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes();
        currentPopup = WA.ui.openPopup("clockPopup","It's " + time,[]);
    })

    WA.room.onLeaveLayer('clockZone').subscribe(closePopUp)

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

export {};
