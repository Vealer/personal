import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
})
export class StartComponent implements OnInit {
  english: boolean = false;

  constructor(private dataService: DataService) {
    this.changeText();
  }

  text1: string = '';
  text2: string = '';
  text3: string = '';
  text4: string = '';
  text5: string = '';

  changeText() {
    let en: boolean = this.english;
    this.text1 = en ? `Hi! I'm Val` : `Hi! Ich bin Val`;
    this.text2 = en ? `a w` : `ein W`;
    this.text3 = en ? `develop` : `Entwickl`;
    this.text4 = en ? `Frontend developer` : `Frontend Entwickler`;
    this.text5 = en ? `Scroll down!` : `runterscrollen`;
  }

  ngOnInit() {
    this.dataService
      .langChanged
      .subscribe(() => {
        this.english = this.dataService.get();
        this.changeText();
      });
  }
}
