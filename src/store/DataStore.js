import { action, observable, configure } from 'mobx';

configure({ enforceActions: 'observed' });

class DataStore {
  @observable count=0;

  @action increment() {
    this.count = this.count + 1;
  }

  @action decrement() {
    this.count = this.count - 1;
  }
}

export default new DataStore();
