import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  text1: string = '';
  english: boolean = false;

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
    this.text1 = en ? `Privacy` : `Datenschutz`;
  }

}
