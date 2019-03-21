import firebase from 'firebase';

if (process.env.NODE_ENV === 'production') {
    firebase.initializeApp(require('./keys_prod'));
} else {
    firebase.initializeApp(require('./keys_dev'));
}
