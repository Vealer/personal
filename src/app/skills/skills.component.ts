import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  cards=[{name:'HTML', src:'assets/html.png'}, {name:'CSS', src:'assets/css.png'},{name:'JavaScript', src:'assets/js.png'},{name:'Git', src:'assets/git.png'},{name:'API', src:'assets/api.png'},{name:'Angular', src:'assets/angular.png'},{name:'SCRUM', src:'assets/scrum.png'}, {name:'Firebase', src:'assets/firebase.png'},];

  constructor(private dataService: DataService) { 
    this.changeText();
  }

  english: boolean = false;
  text1: string = '';

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
    this.text1 = en ? `My Skills` : `Meine Erfahrungen`;
  }
}
