import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationBarService } from '../../http-client/navigation-bar.service';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})
export class PdfViewerComponent implements OnInit {
  pdfLink;
  link = 'http://18.222.201.152:8084/api/1/file/'; //TODO

  constructor(
    private routeSub: ActivatedRoute,
    private navigationBarService: NavigationBarService) { }

  ngOnInit() {
    this.routeSub.params.subscribe((param) => {
        this.navigationBarService.getItem(param.nodeId).subscribe(node => {
          this.pdfLink = this.link + node.content.content;
        });
    });
  }
}
