

https://github.com/yerin512/movie_app/commits?author=yerin512
onenote 0417

```javascript
import PropTypes from 'prop-types';
import React from 'react';
import { unstable_concurrentAct } from 'react-dom/test-utils';

class App extends React.Component{
  constructor(props){
    super(props);
    console.log("hello");
  }
  state = {
    count : 0
  };
  add = () => {
    this.setState((current)=> ({count:current.count + 1}));
  }
  minus = () => {
    this.setState((current)=> ({count:current.count - 1}));
  }
  componentDidMount(){
    console.log("component rendered")
  }
  componentDidUpdate(){
    console.log("I just updated");
  }
  componentWillUnmount(){
    console.log("Good bye Creul world")
  }
  render(){
    console.log("i'm rendering")
    return (
    <div>
      <h1>The numer is: {this.state.count}</h1>
      <button onClick={this.add}>add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
    )
  }
}

export default App;
```
