import { User } from './User';

const user = new User({});
user.set({ age: 999 });

console.log(user.get('name'));
console.log(user.get('age'));
