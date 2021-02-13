import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('todo')
@observer
class applelist extends Component {
 
    render () {
      const { currentCount, currentWeight, todos, eatApple,lostCount, lostWeight} = this.props.todo;
      return (
        
        <div className="container">
        <h2>苹果篮子</h2>
     
         <ul className="status-ul">
           <li>
           <h3>当前</h3>
           <div>{currentCount}个苹果，{currentWeight}克</div>
           </li>
           <li>
           <h3>已吃掉</h3>
           <div>{lostCount}个苹果，{lostWeight}克</div>
           </li>
         </ul>
         <div className="main">
        
            <ul className="main-list">
            { 
              todos.map((todo, index)=>{
                return(
                <li key={todo.number}>
                <img src="images/1.jpg"/>
                <div><h3>红苹果{todo.number}号</h3>
                <span>{todo.weight}g</span></div>
                <button onClick={()=>eatApple(index, todo)}>吃掉</button>
                </li>
                )
              })
             }
             
             
            </ul>
         </div>
        
      </div>
     
      )
  }
}
export default applelist;