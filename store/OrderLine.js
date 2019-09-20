import {
  observable,
  computed,
  action
} from "mobx";

export default new class OrderLine {
  @observable price = 0;
  @observable amount = 1;
  // 计算属性  
  @computed
  get total() {
    return this.price * this.amount;
  }

  @observable length = 2;
  @computed
  get squared() {
    return this.length * this.length;
  }
  set squared(value) {
    // 这是一个自己的动作，不需要注解
    this.length = Math.pow(2, value);
  }

  @action.bound
  resize() {
    this.price++;
  }
}