// 예제 12.13  서버에 파이어베이스 플랫폼 통합하기(server/server.js)

//...
import * as firebase from 'firebase-admin';
import config from 'config';

// 파이어베이스 초기화
firebase.initializeApp({
  credential: firebase.credential.cert(JSON.parse(process.env.LETTERS_FIREBASE_ADMIN_KEY)),
  databaseUrl: 'https://letters-cosial.firebaseio.com'
});

// const serviceAccount = require("path/to/serviceAccountKey.json");
// admin.initializeApp({
//  credential: firebase.credential.cert(serviceAccount),
//  databaseUrl: "https://test-8d685.firebaseio.com"
// });

// 모조 데이터베이스 백엔드
import DB from '../db/DB';

//...
