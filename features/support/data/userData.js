const { faker } = require('@faker-js/faker');

export default class UserData {
    constructor() {
        this.oracleUser = new OracleUser(
            faker.internet.email(),
            "Aaaa1234$",
            "Latvia",
            faker.name.firstName(),
            faker.name.lastName(),
            faker.company.companyName(),
            faker.phone.phoneNumber(),
            faker.company.companyName(),
            faker.address.streetAddress(),
            faker.address.city(),
            faker.address.zipCode(),
            "Cesu"
        );

    }
}

class OracleUser {
    constructor(email, password, country, firstName, lastName, jobTitle, phone, company, address, city, postCode, state) {
        this.email = email;
        this.password = password;
        this.country = country;
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        this.phone = phone;
        this.company = company;
        this.address = address;
        this.city = city;
        this.postCode = postCode;
        this.state = state;
    }
}