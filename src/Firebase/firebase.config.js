// const firebaseConfig = {
//     apiKey: "AIzaSyDhhkJUV0IRHRes7y0-Zt4FkYnQ0yogeBU",
//     authDomain: "smart-shop-pos.firebaseapp.com",
//     projectId: "smart-shop-pos",
//     storageBucket: "smart-shop-pos.appspot.com",
//     messagingSenderId: "985453297716",
//     appId: "1:985453297716:web:efc7b72848301437fd4a61"
// };

// export default firebaseConfig;


const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
};

export default firebaseConfig;