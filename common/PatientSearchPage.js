/**
 * Created by edrisse on 9/6/17.
 */

class PatientSearchPage {

    constructor() {
        this.newPatientButton = element(by.id('new-patient'));
        this.searchField = element(by.model('searchText'));
    }

    visitNewPatient() {
        browser.sleep(1000);
        this.newPatientButton.click();
    }

    getPatientIdentifiers() {
        return element.all(by.css('.patient-identifier'));
    }

    search(query) {
        this.searchField.sendKeys(query);
    }
}

module.exports = PatientSearchPage;