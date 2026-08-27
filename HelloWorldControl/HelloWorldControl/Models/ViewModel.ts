import { action, makeObservable, observable } from "mobx";

export class ViewModel {
  inputValue: string;
  boundValue: string;
  displayValues: string[];
  loading: boolean;
  refresh: () => void;

  constructor() {
    this.inputValue = "";
    this.boundValue = "";
    this.displayValues = [];
    this.loading = false;
    this.refresh = () => {};

    makeObservable(this, {
      inputValue: observable,
      boundValue: observable,
      displayValues: observable,
      loading: observable,
      set: action,
    });
  }

  set<K extends keyof this>(key: K, value: this[K]) {
    (this[key] as this[K]) = value;
  }
}
