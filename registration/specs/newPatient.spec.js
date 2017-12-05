/**
 * Created by edrisse on 9/6/17.
 */

const {createPatient} = require('../../common/util');

describe('test new patient registration', () => {

    const patient = {
        identifier: '11223344/11/12391',
        givenName: 'Hassam',
        surname: 'Mussá',
        middleName: 'Adamo Sulemane',
        birthdate: '1973-10-07',
        years: 40,
        months: 10,
        days: 29,
        locality: 'Matola Rio',
        district: 'Boane',
        province: 'Maputo',
        country: 'Mocambique',
        phone1: '846179380',
        provenience: 'PRIVATE PROVIDER'
    };

    it('should create new patient', () => {
        const registrationDashboardPage = createPatient(patient);
        const searchPage = registrationDashboardPage.visitHome().visitRegistration();
        searchPage.searchField.sendKeys('hassam');

        const patientIdentifiers = searchPage.getPatientIdentifiers();
        expect(patientIdentifiers.count()).toEqual(1);
        expect(patientIdentifiers.get(0).getText()).toBe('11223344/11/12391');
    });
});
