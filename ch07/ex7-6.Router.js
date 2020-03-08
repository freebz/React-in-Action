// 예제 7.6  완성된 라우터(src/components/router/Router.js)

import enroute from 'enroute';
import invariant from 'invariant';

export class Router extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    location: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);

    // Router 컴포넌트에 라우트를 저장한다.
    this.routes = {};

    // 매칭 및 라우팅을 위해 라우터를 설정한다.
    this.router = enroute(this.routes);
  }

  render() {
    const { location } = this.props;
    invariant(location, '<Router /> needs a location to work');
    return this.router(location);
  }
}
