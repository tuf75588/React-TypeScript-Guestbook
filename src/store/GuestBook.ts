import GuestBookModel from '../interfaces/GuestBookModel';

const GuestBook: GuestBookModel = {
  entries: [
    { name: 'Andrew', created: new Date(), content: 'Hello!', id: Date.now() },
  ],
};

export default GuestBook;
