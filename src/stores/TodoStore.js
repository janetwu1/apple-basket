import { observable, action, computed } from 'mobx'


class TodoStore {
  // todo列表
  @observable todos = [];
  @observable number = 0;
  @observable currentCount = 0;
  @observable currentWeight = 0;
  @observable lostCount = 0;
  @observable lostWeight = 0;


  // 摘苹果
  @action.bound pickApple (number) {
    this.number = this.number + 1
    const weight = randomNum(200,300);
    this.todos.push({
      number: this.number,
      weight: weight
    })
    this.currentCount = this.currentCount + 1;
    this.currentWeight = this.currentWeight + weight;
  }
  
  @action.bound eatApple(index, todo) {
    this.todos.splice(index, 1);
    this.lostCount = this.lostCount + 1;
    this.lostWeight =this.lostWeight + todo.weight;
    this.currentWeight = this.currentWeight - todo.weight;
    this.currentCount = this.currentCount - 1;
  }

}

//生成从minNum到maxNum的随机数
function randomNum(minNum, maxNum) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * minNum + 1, 10);
      break;
    case 2:
      return parseInt(Math.random() * ( maxNum - minNum + 1 ) + minNum, 10);
      //或者 Math.floor(Math.random()*( maxNum - minNum + 1 ) + minNum );
      break;
    default:
      return 0;
      break;
  }
} 

const todo = new TodoStore();

export default todo;