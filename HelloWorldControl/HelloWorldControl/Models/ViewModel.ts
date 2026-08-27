import { action, makeObservable, observable } from "mobx";

export class ViewModel {
  inputValue: string;
  boundValue: string;
  refresh: () => void;

  constructor() {
    this.inputValue = "";
    this.boundValue = "";
    this.refresh = () => {};

    makeObservable(this, {
      inputValue: observable,
      boundValue: observable,
      set: action,
    });
  }

  set<K extends keyof this>(key: K, value: this[K]) {
    (this[key] as this[K]) = value;
  }
}
