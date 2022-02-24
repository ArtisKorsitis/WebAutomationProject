import UserData from "./data/userData";

class Data {
    constructor() {
        this.userData = new UserData();
    }
}

export const data = new Data();