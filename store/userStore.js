import {
    observable,
    computed,
    action
} from 'mobx';
export default new class userStoreClass {
    // 被观察者
    @observable name = '浮云先生'

    @action
    changeName = name => {
        this.name = name
    }
}
//状态中必须实例化对象 组件中才能使用