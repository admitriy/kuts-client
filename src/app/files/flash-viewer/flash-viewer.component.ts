import {Component, OnInit, Input, ViewChild, SecurityContext} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationBarService } from '../../http-client/navigation-bar.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-flash-viewer',
  templateUrl: './flash-viewer.component.html',
  styleUrls: ['./flash-viewer.component.css']
})
export class FlashViewerComponent implements OnInit {
  objectSwf;
  flashLink;
  link = 'http://18.222.201.152:8084/api/1/file/'; //TODO

  @ViewChild('swfDiv') swfDiv;

  constructor(
    private routeSub: ActivatedRoute,
    private navigationBarService: NavigationBarService,
    private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.routeSub.params.subscribe((param) => {
      this.navigationBarService.getItem(param.nodeId).subscribe(node => {
        this.flashLink = this.link + node.content.content;
        this.objectSwf = '<object type="application/x-shockwave-flash" width="700px" height="700px" *ngIf="flashLink">\n' +
          '  <param name="wmode" value="transparent" />\n' +
          '  <param name="movie" value="'+this.flashLink+'" />\n' +
          '</object>';
        this.swfDiv.nativeElement.innerHTML = this.sanitizer.sanitize(SecurityContext.HTML, this.sanitizer.bypassSecurityTrustHtml(this.objectSwf));
      });
    });
  }
}
