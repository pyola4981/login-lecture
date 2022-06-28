"use strict";

class UserStorage {
    static #users = {
        id: ["dldngus", "dldngus2", "dldngus3"],
        psword: ["1234", "12345", "123456"],
        name: ["짱구", "철수", "맹구"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;