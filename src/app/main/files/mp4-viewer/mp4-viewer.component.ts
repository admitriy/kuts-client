import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationBarService } from '../../../http-client/navigation-bar.service';
import {NavigationBarItemContent} from '../../../http-client/response/content/navigation-bar-item-content';
import {AppSettings} from '../../../constants/AppSettings';

@Component({
  selector: 'app-mp4-viewer',
  templateUrl: './mp4-viewer.component.html',
  styleUrls: ['./mp4-viewer.component.css']
})
export class Mp4ViewerComponent implements OnInit {
  pdfLink;
  link = AppSettings.API + 'file/';
  @Input() content: NavigationBarItemContent;

  constructor(
    private routeSub: ActivatedRoute,
    private navigationBarService: NavigationBarService) { }

  ngOnInit() {
    if (this.content) {
      this.pdfLink = this.link + this.content.content;
    }
  }
}
