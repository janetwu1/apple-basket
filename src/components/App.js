import react, { Component } from 'react';
import Applelist from './applelist';
import PickApple from './pickApple'

class App extends Component {
  render () {
    return <section className="todoapp">
      <Applelist />
      <PickApple />
    </section>
  }
}

export default App;
