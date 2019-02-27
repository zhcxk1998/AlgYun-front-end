import { action, observable, configure } from 'mobx';

configure({ enforceActions: 'observed' });

class UiStore {
  @observable collapsed=false;

  @action toggleCollapse() {
    this.collapsed = !this.collapsed;
  }
}

export default new UiStore();
