import {Component, OnInit, ViewChild} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {NavigationBarService} from '../http-client/navigation-bar.service';
import {ActivatedRoute} from '@angular/router';
import {NavigationBarItemContent} from '../http-client/response/content/navigation-bar-item-content';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  content: NavigationBarItemContent;

  constructor(
    private routeSub: ActivatedRoute,
    private navigationBarService: NavigationBarService) {
  }

  ngOnInit() {
    this.routeSub.params.subscribe((param) => {
      this.navigationBarService.getContentByNodeId(param.nodeId).subscribe(content => {
        this.content = content;
      });
    });
  }
}
