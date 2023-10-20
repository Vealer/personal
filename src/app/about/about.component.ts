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
      title: 'Education',
      titel: 'Bildung',
      english: 'I studied mechanical engineering and have been working in software development for over 10 years. My background allows me to look at technical challenges from different perspectives and develop innovative solutions.',
      deutsch: 'Ich habe Maschinenbau studiert und arbeite seit über 10 Jahren in der Softwareentwicklung. Mein Hintergrund ermöglicht es mir, technische Herausforderungen aus verschiedenen Perspektiven zu betrachten und innovative Lösungen zu entwickeln.',
    },
    {
      src: 'assets/heart.png',
      title: 'Pleasures',
      titel: 'Interesse',
      english: 'With strong analytical skills, I am good at solving problems. In my spare time, I enjoy solving puzzles and am passionate about playing chess, which further strengthens my problem-solving skills.',
      deutsch: 'Mit starken analytischen Fähigkeiten bin ich gut darin, Probleme zu lösen. In meiner Freizeit löse ich gerne Rätsel und spiele leidenschaftlich gerne Schach, was meine Problemlösungsfähigkeiten weiter stärkt.',
    },
    {
      src: 'assets/lupe.png',
      title: 'Search for more',
      titel: 'Suche nach mehr',
      english: 'In addition to my main job, I have completed further training to become a web developer, as I use Javascript professionally and it has become my passion to program with it.',
      deutsch: 'Zusätzlich zu meiner Haupttätigkeit habe ich eine Weiterbildung zum Webdeveloper absolviert, da ich beruflich Javascript nutze und es meine Leidenschaft geworden ist, damit zu programmieren. ',
    },
    {
      src: 'assets/takeoff.png',
      title: 'Ready to takeoff',
      titel: 'Bereit für Neues',
      english: 'I am looking for a new challenge in the areas of software development or automation that will allow me to fully utilize my acquired skills and knowledge.',
      deutsch: 'Ich strebe nach einer neuen Herausforderung in den Bereichen Softwareentwicklung oder Automatisierung, die mir ermöglicht, meine erworbenen Fähigkeiten und Kenntnisse vollständig einzusetzen. ',
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
      : `Im April 2022 habe ich beschlossen, meine Fähigkeiten im Bereich der IT zu vertiefen. Um mein Ziel zu erreichen, habe ich mich für eine private Weiterbildung zum Webentwickler an der Developer Academy entschieden. Seitdem arbeite ich hart und konzentriert daran, meine Kenntnisse und Fertigkeiten zu verbessern.`;
  }
}
