import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('todo')
@observer
class AddTodo extends Component {
    render () {

     const { pickApple} = this.props.todo;
     return (
   <footer>
        <button className="pick-apple" onClick={pickApple}>摘苹果</button>
        </footer>
      )
  }
}
export default AddTodo;