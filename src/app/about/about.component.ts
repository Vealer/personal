import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  text1: string = '';
  text2: string = '';
  english: boolean = false;

  journey = [
    {
      src: 'assets/walking.png',
      title: 'The JOURNEY began',
      titel: 'Die Reise began',
      english: 'I started programming as a hobby a few years ago and I still enjoy programming immensely.',
      deutsch: 'Vor ein paar Jahren fing ich mit dem programmieren als Hobby an. Bis heute programmiere ich sehr gerne.',
    },
    {
      src: 'assets/heart.png',
      title: 'Become pleasures',
      titel: 'Interesse erwachte',
      english: 'I really enjoy developing software. For this reason I want to turn my hobby into my profession.',
      deutsch: 'Mein Interesse an Software-Entwicklung erwachte. Mir wurde klar, dass ich mehr wollte.',
    },
    {
      src: 'assets/lupe.png',
      title: 'Search for more',
      titel: 'Suche nach mehr',
      english: 'I realized I wanted more. I wanted to turn my hobby into my job. So I went looking and found the Developer Academy.',
      deutsch: ' Ich wollte mein Hobby zum Beruf machen. Also habe ich mich auf die Suche gemacht und die Developer Academy gefunden.',
    },
    {
      src: 'assets/takeoff.png',
      title: 'Ready to takeoff',
      titel: 'Bereit zu starten',
      english: 'I am now looking for new challenges to work as a Front End developer or build software with JavaScript.',
      deutsch: 'Ich suche jetzt nach neuen Herausforderungen, um als Frontend-Entwickler zu arbeiten oder Software mit JavaScript zu erstellen.',
    },
  ];

  constructor(private dataService: DataService) { 
    this.changeText();
  }

  ngOnInit() {
    this.dataService
      .langChanged
      .subscribe(() => {
        this.english = this.dataService.get();
        this.changeText();
      });
  }

  changeText() {
    let en: boolean = this.english;
    this.text1 = en ? `About Me` : `Über mich`;
    this.text2 = en
      ? `In April 2022, I decided to use my interest in the IT sector
    professionally. So I started further training at the Developer Academy. 
    I'm working hard to make my dream come true, to turn my hobby into a job.`
      : `Im April 2022 began ich mein Interesse an der IT zu vertiefen. Deswegen habe ich privat eine Weiterbildung zum Webentwickler an der Developer Academy begonnen. 
    Ich arbeite regelmäßig daran, meinen Traum zu verwirklichen und mein Hobby zum Beruf zu machen.`;
  }
}
