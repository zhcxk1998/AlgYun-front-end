import { action, observable, configure } from 'mobx';

configure({ enforceActions: 'observed' });

class UiStore {
  @observable collapsed=true;

  // @action toggleCollapse() {
  //   this.collapsed = !this.collapsed;
  // }

  @action siderNavUnfold() {
    this.collapsed = false;
  }

  @action siderNavFold() {
    this.collapsed = true;
  }
}

export default new UiStore();
