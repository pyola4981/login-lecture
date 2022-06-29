"use strict";

class UserStorage {
    static #users = {
        id: ["dldngus", "dldngus2", "dldngus3"],
        psword: ["1234", "12345", "123456"],
        name: ["짱구", "철수", "맹구"],
    };

    static getUsers(...fields) {
        console.log(fields);
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userInfo = Object.keys(users).reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }
}

module.exports = UserStorage;