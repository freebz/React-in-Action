// 예제 7.3  Router 컴포넌트의 뼈대 코드(src/components/router/Router.js)

export default class Router extends Component {
  static propTypes = {
    children: PropTypes.object,
    location: PropTypes.string.isRequired
  };
  constructor(props) {
    super(props);
    this.routes = {};
  }
  render() {}
}
