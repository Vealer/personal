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
    this.text4 = en ? `"Welcome to my website! Here I would like to introduce myself as a passionate web developer and give you an insight into my work and skills. I invite you to learn more about my projects and my way of working."` : `
    "Herzlich willkommen auf meiner Webseite! Hier möchte ich mich als leidenschaftlicher Web Entwickler vorstellen und Ihnen einen Einblick in meine Arbeit und meine Fähigkeiten geben. 
     Ich lade Sie herzlich ein, mehr über meine Projekte und meine Arbeitsweise zu erfahren."`;
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
