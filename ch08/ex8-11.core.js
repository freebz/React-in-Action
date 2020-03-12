// 예제 8.11  파이어베이스 백엔드의 설정 코드(src/backend/core.js)

import firebase from 'firebase';

const config = {
  apiKey: process.env.GOOGLE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN
};

try {
  firebase.initializeApp(config);
} catch(e) {
  console.log('Error initializing firebase - check your source code');
}

export { filebase };
