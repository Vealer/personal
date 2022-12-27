import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
english: boolean = false;
public langChanged = new EventEmitter<Object>();
  constructor() { }

  get() {
    return this.english;
  };

  change(): void {
    this.english = !this.english;
    this.langChanged.emit(this.english);
  };
}
