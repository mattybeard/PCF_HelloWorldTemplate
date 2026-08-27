import { action, makeObservable, observable } from "mobx";

export class ViewModel {
  inputValue: string;
  refresh?: () => void;

  constructor() {
    this.inputValue = "";

    makeObservable(this, {
      inputValue: observable,
      set: action,
    });
  }

  set<K extends keyof this>(key: K, value: this[K]) {
    (this[key] as this[K]) = value;
  }
}
