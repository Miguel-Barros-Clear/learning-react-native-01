import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';

const app = initializeApp({
  apiKey: 'AIzaSyDmk6xwpDJXE9AAUB2u4vJweifOoz2bN8w',
  authDomain: 'todoapprn-9666a.firebaseapp.com',
  projectId: 'todoapprn-9666a',
  storageBucket: 'todoapprn-9666a.appspot.com',
  messagingSenderId: '872514286860',
  appId: '1:872514286860:web:04be505c0bc5f88e378529',
  measurementId: 'G-P6VNQZG1PL',
});
const analytics = getAnalytics(app);

export default app;
