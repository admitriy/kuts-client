import {Component, OnInit} from '@angular/core';
import {NavigationBarService} from '../../http-client/navigation-bar.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NavigationBarItemContent} from '../../http-client/response/content/navigation-bar-item-content';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  content: NavigationBarItemContent;
  currentNode: any;
  hasTest: boolean;

  constructor(
    private routeSub: ActivatedRoute,
    private navigationBarService: NavigationBarService,
    private router: Router) {
  }

  ngOnInit() {
    this.routeSub.params.subscribe((param) => {
      this.content = null;
      this.navigationBarService.getContentByNodeId(param.nodeId).subscribe(content => {
        this.content = content;
        this.currentNode = param.nodeId;
        this.hasTest = param.hasTest;
      });
    });
  }

  navigateToTest() {
    this.router.navigate(['/test', this.currentNode]);
  }

  fullScreen() {
    const elem = document.getElementById('flash-id');
    elem.requestFullscreen();
  }
}
