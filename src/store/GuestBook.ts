import { action } from 'easy-peasy';
import GuestBookModel from '../interfaces/GuestBookModel';

const GuestBook: GuestBookModel = {
  entries: [],
  addEntry: action((state, payload) => {
    payload.id = Date.now();
    payload.created = new Date();
    state.entries.push(payload);
  }),
};

export default GuestBook;
