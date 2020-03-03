// 예제 5.10  콜백 함수를 속성으로 전달하기(src/app.js)

import CreatePost from './post/Create';
export default class App extends Component {
  //...
  render() {
    return (
      //...
      <CreatePost onSubmit={this.createNewPost} />
      //...
    )
  }
  //...
}
