// 예제 10.7  exampleUse 파일 가져오기(src/index.js)

import React from 'react';
import { render } from 'react-dom';

import { App } from '.containers/App';
import { Home, SinglePost, Login, NotFound, Profile } from './containers';
import { Router, Route } from './components/router';
import { history } from './history';
import { firebase } from './backend';
import configureStore from './store/configureStore';
import initialReduxState from './constants/initialState';

import './store/exampleUse';
