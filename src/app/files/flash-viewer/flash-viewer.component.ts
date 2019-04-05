import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationBarService } from '../../http-client/navigation-bar.service';

@Component({
  selector: 'app-flash-viewer',
  templateUrl: './flash-viewer.component.html',
  styleUrls: ['./flash-viewer.component.css']
})
export class FlashViewerComponent implements OnInit {
  flashLink;
  link = 'http://18.222.201.152:8084/api/1/file/'; //TODO

  constructor(
    private routeSub: ActivatedRoute,
    private navigationBarService: NavigationBarService) { }

  ngOnInit() {
    this.routeSub.params.subscribe((param) => {
      this.navigationBarService.getItem(param.nodeId).subscribe(node => {
        this.flashLink = this.link + node.content.content;
        console.log(this.flashLink);
      });
    });
  }
}
