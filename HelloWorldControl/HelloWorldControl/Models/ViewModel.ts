import { action, makeObservable, observable, makeAutoObservable } from "mobx";

export class ViewModel {
  loading: boolean;
  boundValue: string;
  inputValue: string;
  displayValues: string[];
  title: string;
  apiResponse: string;
  apiGuids: string[];
  contactsList: string;

  refresh: () => void;
  allocatedWidth: number;
  allocatedHeight: number;

  constructor() {
    this.loading = false;
    this.boundValue = "";
    this.inputValue = "";
    this.displayValues = [];
    this.title = "Hello World Tallinn 2026";
    this.apiResponse = "";
    this.apiGuids = [];
    this.contactsList = "";

    makeObservable(this, {
      loading: observable,
      displayValues: observable,
      boundValue: observable,
      inputValue: observable,
      apiResponse: observable,
      apiGuids: observable,
      contactsList: observable,
      setAllocatedSize: action,
      set: action,
      setCustomApiResponse: action,
    });
  }

  setAllocatedSize(width: number, height: number) {
    this.allocatedWidth = width;
    this.allocatedHeight = height;
  }

  // Generic setter action
  set<K extends keyof this>(key: K, value: this[K]) {
    (this[key] as this[K]) = value;
  }

  // setCustomApiResponse(json: string) {
  //   const response = JSON.parse(json) as CustomApiResponseModel;
  //   this.apiResponse = response.HelperText;
  //   this.apiGuids = response.AccountIds;
  //   this.loading = false;
  // }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  reset(): void {}
}
