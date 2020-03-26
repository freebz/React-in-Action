// 예제 12.17  비동기 서버 측 렌더링(server/server.js)

res.setHeader('Content-type', 'text/html');
res.write(HTML.start());
const renderStream = renderToNodeStream(
  <Provider store={store}>
    <RouterContext {...props} />
  </Provider>
);
renderStream.pipe(res, { end: false });
renderStream.on('end', () => {
  res.write(HTML.end(store.getState()));
  res.end();
});
