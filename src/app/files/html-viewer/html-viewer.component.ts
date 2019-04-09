import {Component, OnInit, Input, ViewChild, SecurityContext} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationBarService } from '../../http-client/navigation-bar.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-html-viewer',
  templateUrl: './html-viewer.component.html',
  styleUrls: ['./html-viewer.component.css']
})
export class HtmlViewerComponent implements OnInit {
  objecthtml;
  htmlLink;
  link = 'http://18.222.201.152:8084/api/1/file/';

  @ViewChild('htmlDiv') swfDiv;

  constructor(
    private routeSub: ActivatedRoute,
    private navigationBarService: NavigationBarService,
    private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.routeSub.params.subscribe((param) => {
      this.navigationBarService.getItem(param.nodeId).subscribe(node => {
        this.htmlLink = this.link + node.content.content;
        this.objecthtml = '<iframe src="'+this.htmlLink+'"></iframe>';
        this.swfDiv.nativeElement.innerHTML = this.sanitizer.sanitize(SecurityContext.HTML, this.sanitizer.bypassSecurityTrustHtml(this.objecthtml));
      });
    });
  }
}
