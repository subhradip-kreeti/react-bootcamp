import { MdPeopleAlt, MdPolicy } from 'react-icons/md';
import { IoBookSharp } from 'react-icons/io5';

export const MENU_ITEMS = [
  {
    module: 'Books',
    to: '/books',
    icon: IoBookSharp,
    label: 'Books',
  },
  {
    module: 'Authors',
    to: '/authors',
    icon: MdPeopleAlt,
    label: 'Authors',
  },
  {
    module: 'Policies',
    to: '/policies',
    icon: MdPolicy,
    label: 'Policies',
  },
];
