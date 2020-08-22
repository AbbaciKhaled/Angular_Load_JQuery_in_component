import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DesignService } from 'src/app/services/design.service';

declare const ok: any;
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
  host: { 'window:beforeunload': 'ScrollTop' }
})
export class AccueilComponent implements OnInit {




  constructor(private elementRef: ElementRef, @Inject(DOCUMENT) private doc, private $design: DesignService) {

  }
  ngOnInit(): void {


    //load scripts
    for (let i = 0; i < this.$design.getScripts().length; i++) {
      var s1 = document.createElement("script");
      s1.type = "text/javascript";
      s1.src = this.$design.getScripts()[i].src;
      this.elementRef.nativeElement.appendChild(s1);
    }


  }



}
