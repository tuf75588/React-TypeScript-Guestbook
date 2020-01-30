import { Action } from 'easy-peasy';
import GuestBookEntry from './GuestBookEntry';
// describing how our store will work

interface GuestBookModel {
  entries: GuestBookEntry[];
  // guestbook model as first param, guest book entry as 2nd param
  addEntry: Action<GuestBookModel, GuestBookEntry>;
}

export default GuestBookModel;
