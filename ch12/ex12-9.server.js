// 예제 12.9  서버에서의 리액트 라우터의 활용(server/server.js)

//...
import { renderToString } from 'react-dom/server';
import React from 'react';
import { match, RouterContext } from 'react-router';
import { Provider } from 'react-redux';

import configureStore from '../src/store/configureStore';
import initialReduxState from '../src/constants/initialState';
import { routes } from '../src/routes';
//...
app.use('*', (req, res) => {
  match({ routes: routes, location: req.originalUrl },
    async (err, redirectLocation, props) => {
      if (redirectLocation && req.originalUrl !== '/login') {
	return res.redirect(302, redirectLocation.pathname + redirectionLocation.search);
      }

      const store = configureStore(initialReduxState);
      const appHtml = renderToString(
	<Provider store={store}>
 	  <RouterContext {...props} />
	</Provider>
      );

      const html = `
        <!doctype html>
        <html>
          <head>
            <link rel="stylesheet" href="http://localhost:3100/static/styles.css" />
            <meta charset=utf-8/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <title>Letters Social | React In Action by Mark Thomas</title>
            <meta name="viewport" content="width=device-width,initial-scale=1">
          </head>
          <body>
            <div id="app">
              ${appHtml}
            </div>
            <script src="http://localhost:3100/bundle.js" type='text/javascript'></script>
          </body>
        </html>
      `.trim();
      res.setHeader('Content-Type', 'text/html');
      res.send(html).end();
    });
});

//... 에러 처리

export default app;
