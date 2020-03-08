// 예제 7.9  addRoute 메서드(/src/components/router/Router.js)

constructor(props) {
  super(porps);
  this.routes = {};
  this.addRoutes(props.children);
  this.router = enroute(this.routes);
}

addRoutes(routes, parent) {
  React.Children.forEach(routes, route => this.addRoute(route, parent));
}
