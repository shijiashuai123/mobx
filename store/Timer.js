import {
    observable,
    computed,
    action
} from "mobx";

export default new class Timer {
    // 被观察者
    @observable name = '浮云先生'
    @observable todos = [{
            title: "todo标题",
            done: false,
        },
        {
            title: "已经完成 todo 的标题",
            done: true,
        }
    ]

    @computed get
    finishedTodos() {
        return this.todos.filter((todo) => todo.done)
    }
}

// 通过 @computed + getter 函数来定义衍生值（