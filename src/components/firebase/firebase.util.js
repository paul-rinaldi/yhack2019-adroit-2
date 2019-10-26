import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDEJG6QhLCUUWus0C0NR-4kE4T9puiDGl0',
  authDomain: 'yhack-adroit.firebaseapp.com',
  databaseURL: 'https://yhack-adroit.firebaseio.com',
  projectId: 'yhack-adroit',
  storageBucket: 'yhack-adroit.appspot.com',
  messagingSenderId: '318699708866',
  appId: '1:318699708866:web:fc7917a3a815b87feaf65b',
  measurementId: 'G-HJG2D7S15W'
};

firebase.initializeApp(firebaseConfig);

export const fetchResultsAsync = async () => {
  const resultRef = firestore.collection('results');
  try {
    const snapshot = await resultRef.get();
    return snapshot;
  } catch (error) {
    console.log('Error getting documents', error);
  }
};

export const firestore = firebase.firestore();
export default firebase;
