// 예제 8.12  인증 도구의 구현(src/backend/auth.js)

import { firebase } from './core';

const github = new firebase.auth.GithubAuthProvider();
github.addScope('user:email');

export function logUserOut() {
  return firebase.auth().signout();
}

export function loginWithGithub() {
  return firebase.auth().signInWithPopup(github);
}

export function getFirebaseUser() {
  return new Promise(resolve => firebase.auth().onAuthStateChanged(user => resolve(user)));
}

export function getFirebaseToken() {
  const currentUser = firebase.auth().currentUser;
  if (!currentUser) {
    return Promise.resolve(null);
  }
  return currentUser.getIdToken(true);
}
