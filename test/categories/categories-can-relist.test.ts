//Suite tests the can relist field for the Categories API
//Original by: Ashley Schroeder 30/01/2019
//Last updated by: Ashley Schroeder 30/01/2019 

import * as global from '../../global.conf'; //global file with resources required for multiple tests
import { sandboxEndpoint } from '../../data/endpoints.json'; //abstracted endpoints so they can be updated for all tests in one file.
import * as testCategories from '../../data/categories-sandbox.json'; //abstracted category data so it can be reused across test files

const request = global.request;
const expect = global.chai.expect;

//Validates the can relist field is correct given a specific category id
describe('validate that the can relist field returns the expected result', () => {

    //Validates that true is returned when CanRelist=true for a given category
    //Pulls id for the endpoint from categories-sandbox.json so that it can be changed in one file to updated multiple tests if needed
    it('should return true for category id 6327', (done) => {
        request(sandboxEndpoint)
            .get('/Categories/' + testCategories['CarbonCredits']['CategoryId'] + '/Details.json')
            .query({ catalogue: false })
            .expect(200)
            .then(response => {
                expect(response.body.CanRelist).to.equal(testCategories['CarbonCredits']['CanRelist'])
                done()
            });
    });

    //Validates that false is returned when CanRelist=false for a given category
    it('should return false for category id 6331', (done) => {
        request(sandboxEndpoint)
            .get('/Categories/' + testCategories['AutomotiveAviation']['CategoryId'] + '/Details.json')
            .query({ catalogue: false })
            .expect(200)
            .then(response => {
                expect(response.body.CanRelist).to.equal(testCategories['AutomotiveAviation']['CanRelist'])
                done()
            });
    });
});
