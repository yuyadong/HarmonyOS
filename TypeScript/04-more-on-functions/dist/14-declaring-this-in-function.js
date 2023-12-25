"use strict";
const db = {
    fiterUsers: (filter) => {
        let user1 = {
            admin: true,
        };
        let user2 = {
            admin: false,
        };
        return [user1, user2];
    },
};
const admins = db.fiterUsers(function () {
    return this.admin;
});
console.log(admins);
