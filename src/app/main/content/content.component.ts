import {ApplicationRef, Component, NgZone, OnInit} from '@angular/core';
import {NavigationBarService} from '../../http-client/navigation-bar.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NavigationBarItemContent} from '../../http-client/response/content/navigation-bar-item-content';
import { download } from 'electron-dl';
import { remote, ipcRenderer } from 'electron';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  content: NavigationBarItemContent;
  currentNode: any;
  hasTest: boolean;
  percentDownload: number;
  totalMb: number;
  currentMb: number;
  downloadComplete: boolean;

  constructor(
    private routeSub: ActivatedRoute,
    private navigationBarService: NavigationBarService,
    private router: Router,
    private ref: ApplicationRef,
    private ngZone: NgZone) {
  }

  ngOnInit() {
    this.routeSub.params.subscribe((param) => {
      this.content = null;
      this.percentDownload = 0;
      this.totalMb = 0;
      this.currentMb = 0;
      this.downloadComplete = false;
      this.navigationBarService.getContentByNodeId(param.nodeId).subscribe(content => {
        if (content) {
          ipcRenderer.send('download', {
            content: content.content,
            contentType: content.contentType
          });

          ipcRenderer.on('download', (e, args) => {
            let complete = false;
            if (args.percent) {
              this.percentDownload = +(args.percent * 100).toFixed(2);
              this.totalMb = +(args.totalBytes / 1048576).toFixed(2);
              this.currentMb = +(args.transferredBytes / 1048576).toFixed(2);
              complete = this.percentDownload === 100 && this.currentMb === this.totalMb;
            } else if (args.exist) {
              complete = true;
            }

            this.downloadComplete = complete;

            this.ref.tick();
          });
        }
        this.content = content;
        this.currentNode = param.nodeId;
        this.hasTest = param.hasTest;
      });
    });
  }

  navigateToTest() {
    this.ngZone.run(() => this.router.navigate(['/test', this.currentNode])).then();
  }

  fullScreen() {
    const elem: any = document.getElementsByClassName('flash-class')[0];
    elem.webkitRequestFullscreen();
  }
}


