import {COLORS} from '../../constants';
import {photos} from '../../assets';

export const ONBOARD_DATA = [
  {
    title: 'Save time by tracking your studies',
    text: 'Schedule your classes, assignments, quizzes and more',
    image: photos.onboard1,
  },
  {
    title: 'Stay on top of your education',
    text: 'Reduce your stress, increase your productivity',
    image: photos.onboard2,
  },
  {
    title: 'Spend more time doing the things you love',
    text: 'Get started within five minutes',
    image: photos.onboard3,
  },
];

export const DATA_POSTS = [
  {
    id: '1',
    image: photos.user1,
    title: 'Headshet',
    content:
      'He will want to use your yacht, and I do not want this thing smelling like fish.',
    time: '8m ago',
  },
  {
    id: '2',
    image: photos.user2,
    title: 'Homing',
    content:
      'He will want to use your yacht, and I do not want this thing smelling like fish.',
    time: '8m ago',
  },
  {
    id: '3',
    image: photos.user5,
    title: 'Vlog',
    content:
      'He will want to use your yacht, and I do not want this thing smelling like fish.',
    time: '8m ago',
  },
  {
    id: '4',
    image: photos.user4,
    title: 'Blogger',
    content:
      'He will want to use your yacht, and I do not want this thing smelling like fish.',
    time: '8m ago',
  },
];

export const DATA_CONTENT = [
  {
    id: '1',
    image: photos.user5,
    title: 'Heading',
    content:
      'He will want to use your yacht, and I do not want this thing smelling like fish.',
    time: '8m ago',
  },
  {
    id: '2',
    image: photos.user1,
    title: 'Linking',
    content:
      'He will want to use your yacht, and I do not want this thing smelling like fish.',
    time: '8m ago',
  },
  {
    id: '3',
    image: photos.user2,
    title: 'Ting ting',
    content:
      'He will want to use your yacht, and I do not want this thing smelling like fish.',
    time: '8m ago',
  },
  {
    id: '4',
    image: photos.user4,
    title: 'Floating',
    content:
      'He will want to use your yacht, and I do not want this thing smelling like fish.',
    time: '8m ago',
  },
];

export const DATA_PRODUCTS = [
  {
    id: '1',
    image: photos.user1,
    name: 'Headshet 01',
    price: '$19.99',
  },
  {
    id: '2',
    image: photos.user4,
    name: 'Headshet 02',
    price: '$29.99',
  },

  {
    id: '3',
    image: photos.user2,
    name: 'Headshet 03',
    price: '$39.99',
  },

  {
    id: '4',
    image: photos.user5,
    name: 'Headshet 04',
    price: '$49.99',
  },
];

const sources = {
  ONBOARD_DATA,
  DATA_POSTS,
  DATA_CONTENT,
  DATA_PRODUCTS,
};
export default sources;
