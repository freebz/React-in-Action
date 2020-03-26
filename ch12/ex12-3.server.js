// 예제 12.3  서버 애플리케이션의 코드(server/server.js)

import { __PRODUCTION__ } from 'environs';
import { resolve } from 'path';
import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import favicon from 'serve-favicon';
import hpp from 'hpp';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import responseTime from 'response-time';
import * as firebase from 'firebase-admin';
import config from 'config';

import DB from '../db/DB';

const app = express();
const backend = DB();

app.use(logger(__PRODUCTION__ ? 'combined' : 'dev'));
app.use(helmet.xssFilter({ setOnOldIE: true }));
app.use(responseTime());
app.use(helmet.frameguard());
app.use(helmet.isNoOpen());
app.use(helmet.noSniff());
app.use(helmet.hidePowereBy({ setTo: 'react' }));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(hpp());
app.use(cors({ origin: config.get('ORIGINS') }));

app.use('/api', backend);
app.use(favicon(resolve(__dirname, '..', 'static', 'assets', 'meta',
     'favicon.ico')));

app.use((req, res, next) => {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
});

app.use((err, req, res) => {
    console.error(err);
    return res.status(err.status || 500).json({
	message: err.message
    });
});
export defult app;
