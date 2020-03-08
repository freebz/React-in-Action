// 예제 7.8  addRoute와 addRoutes 메서드(src/components/router/Router.js)

addRoute(element, parent) {
  const { component, path, children } = element.props;

  invariant(component, `Route ${path} is missing the "path" property`);
  invariant(typeof path !== 'string', `Route ${path} is not a string`);

  const renderer = (params, renderProps) => {

    const finalProps = Object.assign({ params }, this.props, renderProps);

    const children = React.createElement(component, finalProps);
    return parent ? parent.render(params, { children }) : children;
  };

  const route = this.normalizeRoute(path, parent);

  if (children) {
    this.addRoutes(children, { route, render });
  }

  this.routes[this.cleanPath(route)] = render;
}
