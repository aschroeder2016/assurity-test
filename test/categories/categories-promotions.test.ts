//Suite tests the promotions associated to categories for the Categories API
//Original by: Ashley Schroeder 30/01/2019
//Last updated by: Ashley Schroeder 30/01/2019 

import * as global from '../../global.conf'; //global file with resources required for multiple tests
import { sandboxEndpoint } from '../../data/endpoints.json'; //abstracted endpoints so they can be updated for all tests in one file
import * as testCategories from '../../data/categories-sandbox.json'; //abstracted category data so it can be reused across tests

const request = global.request;
const expect = global.chai.expect;

//Validates the promotion data is correct given a specific category id
describe('validate that promotions associated to specific categories return correct data', () => {

    //Validates the Gallery promotion has 2x larger image in the description for id 6327
    //Pulls id for the endpoint from categories-sandbox.json so that it can be changed in one file to updated multiple tests if needed
    //Sets galleryIndex as the index number of the object within the response Promotions array that has "Name": "Gallery"
    //Gets the Gallery promotion description by index number and compares description to the CarbonCredits description in categories-sandbox.json
    it('should return the correct description for the Gallery promotion in category id 6327', (done) => {
        request(sandboxEndpoint)
            .get('/Categories/' + testCategories['CarbonCredits']['CategoryId'] + '/Details.json')
            .query({ catalogue: false })
            .expect(200)
            .then(response => {

                let promotionsArray = response.body.Promotions
                let galleryIndex = promotionsArray.findIndex(x => x.Name === "Gallery")

                expect(response.body.Promotions[galleryIndex].Description).to.include(testCategories['CarbonCredits']['Promotions']["Gallery"]["Description"])
                done()
            });
    });
});
