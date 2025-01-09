import {faker} from "@faker-js/faker";

describe("Faker", () => {
    it('Fake Data creating',()=>{
        cy.writeFile('cypress\\fixtures\\fakeData.json', 
            {firstname:faker.name.firstName(),
                lastname:faker.name.lastName(),
                phone:faker.phone.number('##########')})
    });
});
