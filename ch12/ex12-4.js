// 예제 12.4  서버 측 렌더링 맛보기

app.use('/api', backend);
app.use(favicon(resolve(__dirname, '..', 'static', 'assets', 'meta', 'favico')));
app.use('*', (req, res, next) => {
  const componentResponse = ReactDOMServer.renderToString(
    React.createElement(
      'div',
      null,
      'Rendered on the server at ${newDate()}'
    )
  );
  res.send(componentResponse).end();
})
