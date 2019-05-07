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

  constructor(
    private routeSub: ActivatedRoute,
    private navigationBarService: NavigationBarService,
    private router: Router) {
  }

  ngOnInit() {
    this.routeSub.params.subscribe((param) => {
      this.navigationBarService.getContentByNodeId(param.nodeId).subscribe(content => {
        this.content = content;
        this.currentNode = param.nodeId;
      });
    });
  }

  navigateToTest() {
    this.router.navigate(['/test', this.currentNode]);
  }
}
