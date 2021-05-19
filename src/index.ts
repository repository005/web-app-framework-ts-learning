// import { User } from './User';

// const user = new User({ name: 'Xana', age: 30 });

// user.on('change', () => {
//   console.log('change 1');
// });
// user.on('change', () => {
//   console.log('change 1');
// });
// user.on('save', () => {
//   console.log('save 1');
// });

// user.trigger('change')

import axios from 'axios';

axios.get('http://localhost:3000/users/1');