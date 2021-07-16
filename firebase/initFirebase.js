import firebase from 'firebase/app'
// the below imports are option - comment out what you don't need
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/analytics'
import 'firebase/performance'

const clientCredentials = {
    apiKey: "AIzaSyB41LhoVmWPCHSMpJ1r5qesNmUbzGdSSDE",
    authDomain: "auth-development-f1620.firebaseapp.com",
    projectId: "auth-development-f1620",
    storageBucket: "auth-development-f1620.appspot.com",
    messagingSenderId: "581508123043",
    appId: "1:581508123043:web:4fc95cf8b0d48ba80cf216"
}

export default function initFirebase() {
    if (!firebase.apps.length) {
        firebase.initializeApp(clientCredentials)
        // Check that `window` is in scope for the analytics module!
        if (typeof window !== 'undefined') {
            // Enable analytics. https://firebase.google.com/docs/analytics/get-started
            if ('measurementId' in clientCredentials) {
                firebase.analytics()
                firebase.performance()
            }
        }
        console.log('Firebase was successfully init.')
    }
}