/// < reference types="cypress" />

describe("JSON Object", () => {
  it("JSON Object", () => {
    //cy.visit("https://www.google.com");

    const jsonObj = {
      firstName: "John",
      lastName: "Doe",
      age: 25,
    };

    console.log(jsonObj.firstName);
    console.log(jsonObj.lastName);
    console.log(jsonObj.age);

    const simpleArrayOfValue = ["one", "two", "three"];
    console.log(simpleArrayOfValue[0]);
    console.log(simpleArrayOfValue[1]);
    console.log(simpleArrayOfValue[2]);

    const arrayObject = [
      { key1: "value1" },
      { key2: "value2" },
      { key3: "value3" },
    ];
    console.log(arrayObject[0].key1);
    console.log(arrayObject[1].key2);
    console.log(arrayObject[2].key3);

    const dataType = { string: "metin", number: 5, boolean: true, null: null };

    console.log(dataType.string);
    console.log(dataType.number);
    console.log(dataType.boolean);
    console.log(dataType.null);

    const body = {
      Student: [
        { name: "Mike", age: 23, class: "12th" },
        { name: "Alex", age: 21, class: "10th" },
        { name: "Emma", age: 24, class: "11th" },
      ],
    };
    console.log(body.Student[0].name);
    console.log(body.Student[1].name);
    console.log(body.Student[2].name);

  });
});
