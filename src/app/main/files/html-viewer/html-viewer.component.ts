import {Component, OnInit, Input, ViewChild, SecurityContext} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationBarService } from '../../../http-client/navigation-bar.service';
import {DomSanitizer} from '@angular/platform-browser';
import {NavigationBarItemContent} from '../../../http-client/response/content/navigation-bar-item-content';
import {remote} from 'electron';

@Component({
  selector: 'app-html-viewer',
  templateUrl: './html-viewer.component.html',
  styleUrls: ['./html-viewer.component.css']
})
export class HtmlViewerComponent implements OnInit {
  objecthtml;
  htmlLink;
  @Input() content: NavigationBarItemContent;

  @ViewChild('htmlDiv') swfDiv;

  constructor(
    private routeSub: ActivatedRoute,
    private navigationBarService: NavigationBarService,
    private sanitizer: DomSanitizer) { }

  ngOnInit() {
    if (this.content) {
      this.htmlLink = ('file:\\\\\\' + remote.app.getAppPath() + '\\files\\' + this.content.content).replace('\\', '/');
      this.objecthtml = '<iframe src="' + this.htmlLink + '"></iframe>';
      this.swfDiv.nativeElement.innerHTML = this.sanitizer.sanitize(SecurityContext.HTML, this.sanitizer.bypassSecurityTrustHtml(this.objecthtml));
    }
  }
}
