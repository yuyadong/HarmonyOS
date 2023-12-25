interface User {
  admin: boolean;
}

interface DB {
  fiterUsers(filter: (this: User) => boolean): User[];
}

const db: DB = {
  fiterUsers: (filter: (this: User) => boolean) => {
    let user1: User = {
      admin: true,
    };
    let user2: User = {
      admin: false,
    };

    return [user1, user2];
  },
};

const admins = db.fiterUsers(function (this: User) {
  return this.admin;
});

console.log(admins);
