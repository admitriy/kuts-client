import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationBarService } from '../../../http-client/navigation-bar.service';
import {NavigationBarItemContent} from '../../../http-client/response/content/navigation-bar-item-content';
import {remote} from 'electron';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})
export class PdfViewerComponent implements OnInit {
  pdfLink;
  @Input() content: NavigationBarItemContent;

  constructor(
    private routeSub: ActivatedRoute,
    private navigationBarService: NavigationBarService) { }

  ngOnInit() {
    if (this.content) {
      this.pdfLink = ('file:\\\\\\' + remote.app.getAppPath() + '\\files\\' + this.content.content).replace('\\', '/');
    }
  }
}
