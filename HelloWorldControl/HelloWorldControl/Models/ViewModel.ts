import { action, makeObservable, observable, makeAutoObservable } from "mobx";
import { CustomApiResponseModel } from "./CustomApiResponseModel";

export class ViewModel {
  loading: boolean;
  boundValue: string;
  inputValue: string;
  displayValues: string[];
  title: string;
  apiResponse: string;
  apiError: string | null;
  apiGuids: string[];
  contactsList: string | null;

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
    this.apiError = null;
    this.apiGuids = [];
    this.contactsList = null;

    makeObservable(this, {
      loading: observable,
      displayValues: observable,
      boundValue: observable,
      inputValue: observable,
      apiResponse: observable,
      apiError: observable,
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

  setCustomApiResponse(json: string) {
    const response = JSON.parse(json) as CustomApiResponseModel;
    this.apiResponse = response.HelperText;
    this.apiGuids = response.AccountIds;
    this.apiError = null;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  reset(): void {}
}
