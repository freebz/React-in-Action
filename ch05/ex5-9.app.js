// 예제 5.9  포스트 전송 처리하기(src/app.js)

import * as API from '.shared/http';
//...
export default class App extends Component {
  //...
  this.setState(prevState => {
                 return {
		   posts: orderBy(prevState.posts.concat(newPost), 'date', 'desc')
		 };
             });
  }
  //...
}
