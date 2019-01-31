//Suite tests the name field for the Categories API
//Original by: Ashley Schroeder 30/01/2019
//Last updated by: Ashley Schroeder 30/01/2019 

import * as global from '../../global.conf'; //global file with resources required for multiple tests
import { sandboxEndpoint } from '../../data/endpoints.json'; //abstracted endpoints so they can be updated for all tests in one file.
import * as testCategories from '../../data/categories-sandbox.json'; //abstracted category data so it can be reused across test files

const request = global.request;
const expect = global.chai.expect;

//Validates the name field is correct given a specific category id
describe('validate that the name field returns the expected result', () => {

    //Validates that "Carbon Credits" is returned for id 6327
    //Pulls id for the endpoint from categories-sandbox.json so that it can be changed in one file to updated multiple tests if needed
    it('should return the correct name for category id 6327', (done) => {
        request(sandboxEndpoint)
            .get('/Categories/' + testCategories['CarbonCredits']['CategoryId'] + '/Details.json')
            .query({ catalogue: false })
            .expect(200)
            .then(response => {
                expect(response.body.Name).to.equal(testCategories['CarbonCredits']['Name'])
                done()
            });
    });

    //Validates that "Badges" is returned for id 6328
    it('should return the correct name for category id 6328', (done) => {
        request(sandboxEndpoint)
            .get('/Categories/' + testCategories['Badges']['CategoryId'] + '/Details.json')
            .query({ catalogue: false })
            .expect(200)
            .then(response => {
                expect(response.body.Name).to.equal(testCategories['Badges']['Name'])
                done()
            });
    });
});
