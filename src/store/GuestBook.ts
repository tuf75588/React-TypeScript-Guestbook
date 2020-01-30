import { action } from 'easy-peasy';
import GuestBookModel from '../interfaces/GuestBookModel';

const GuestBook: GuestBookModel = {
  entries: [
    { name: 'Andrew', created: new Date(), content: 'Hello!', id: Date.now() },
  ],
  addEntry: action((state, payload) => {
    payload.id = Date.now();
    payload.created = new Date();
    state.entries.push(payload);
  }),
};

export default GuestBook;
