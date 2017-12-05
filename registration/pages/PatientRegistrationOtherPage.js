/**
 * Created by edrisse on 9/6/17.
 */
const PatientRegistrationConfirmationPage = require('./PatientRegistrationConfirmationPage');

class PatientRegistrationOtherPage {

    constructor() {
        this.provenience = element(by.id('Proveniência'));
        this.phone1 = element(by.id('Numero de Telefone 1'));
    }

    visitNextStep() {
        const nextStepButton = element(by.id('next-step'));
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(nextStepButton), 10000, 'other next-step must become clickable');
        nextStepButton.click();
        return new PatientRegistrationConfirmationPage();
    }


}

module.exports = PatientRegistrationOtherPage;