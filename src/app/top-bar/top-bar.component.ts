import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent implements OnInit {

  constructor(private dataService: DataService ) {
    this.changeText();
  }

  english: boolean = false;
  aboutme: string = '';
  skills: string = '';
  contact: string = '';
  text: string = '';

  changeText() {
    let en: boolean = this.english;
    this.text = en ? 'English' : 'Deutsch';
    this.aboutme = en ? 'About Me' : 'Über mich';
    this.skills = en ? 'Skills' : 'Erfahrungen';
    this.contact = en ? 'Contact me' : 'Kontakt';
  }

  change(){
    this.dataService.change();
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
