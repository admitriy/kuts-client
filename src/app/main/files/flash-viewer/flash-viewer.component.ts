import {Component, OnInit, Input, ViewChild, SecurityContext} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationBarService } from '../../../http-client/navigation-bar.service';
import {DomSanitizer} from '@angular/platform-browser';
import {NavigationBarItemContent} from '../../../http-client/response/content/navigation-bar-item-content';
import {AppSettings} from '../../../constants/AppSettings';
import {remote} from 'electron';

@Component({
  selector: 'app-flash-viewer',
  templateUrl: './flash-viewer.component.html',
  styleUrls: ['./flash-viewer.component.css']
})
export class FlashViewerComponent implements OnInit {
  objectSwf;
  flashLink;
  link = AppSettings.API + 'file/';
  @Input() content: NavigationBarItemContent;

  @ViewChild('swfDiv') swfDiv;

  constructor(
    private routeSub: ActivatedRoute,
    private navigationBarService: NavigationBarService,
    private sanitizer: DomSanitizer) { }

  ngOnInit() {

    if (this.content) {
      this.flashLink = this.link + this.content.content;
      // this.flashLink = (remote.app.getAppPath() + '\\files\\' + this.content.content);
      this.objectSwf = '' +
        '<object type="application/x-shockwave-flash" width="700px" height="700px" id="flash-id" class="flash-class">\n' +
        '  <param name="wmode" />\n' +
        '  <param name="movie" value="' + this.flashLink + '" />\n' +
        '</object>';

      this.swfDiv.nativeElement.innerHTML = this.sanitizer.sanitize(SecurityContext.HTML, this.sanitizer.bypassSecurityTrustHtml(this.objectSwf));
    }
  }
}
