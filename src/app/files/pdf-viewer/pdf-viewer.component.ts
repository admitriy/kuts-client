import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationBarService } from '../../http-client/navigation-bar.service';
import {NavigationBarItemContent} from '../../http-client/response/content/navigation-bar-item-content';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})
export class PdfViewerComponent implements OnInit {
  pdfLink;
  link = 'http://18.222.201.152/api/1/file/'; //TODO
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
