import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
// 	apiKey: "AIzaSyBscBycJQJgiq6ecVmxpDKmuJvYwCvwUeg",
// 	authDomain: "penguinnoafraidflood.firebaseapp.com",
// 	projectId: "penguinnoafraidflood",
// 	storageBucket: "penguinnoafraidflood.appspot.com",
// 	messagingSenderId: "726192918955",
// 	appId: "1:726192918955:web:ffa67e0ee294518ed542ee",
// };

const firebaseConfig = {
	apiKey: "AIzaSyCIbB1rIR5WhyB-_Wp9VwAzFEsR7glM6Pk",
	authDomain: "themorethemerrierapp.firebaseapp.com",
	projectId: "themorethemerrierapp",
	storageBucket: "themorethemerrierapp.appspot.com",
	messagingSenderId: "563269076578",
	appId: "1:563269076578:web:a891b8192b78eccd41f33b",
	measurementId: "G-FNTQBCR2D6",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export default app;
