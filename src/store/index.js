import {action,observable} from 'mobx';

class Store {
  @observable count=0;

  @action increment(){
    this.count++;
  }

  @action decrement(){
    this.count--;
  }
}

export default new Store();