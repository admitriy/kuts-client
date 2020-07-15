import {Component, OnInit, Input, ApplicationRef} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationBarService } from '../../../http-client/navigation-bar.service';
import {NavigationBarItemContent} from '../../../http-client/response/content/navigation-bar-item-content';
import { remote, ipcRenderer } from 'electron';

@Component({
  selector: 'app-zip-viewer',
  templateUrl: './zip-viewer.component.html',
  styleUrls: ['./zip-viewer.component.css']
})
export class ZipViewerComponent implements OnInit {
  zipLink;
  link = 'files';
  @Input() content: NavigationBarItemContent;
  zipComplete: boolean;

  fileIndex;
  fileCount;

  constructor(
    private routeSub: ActivatedRoute,
    private navigationBarService: NavigationBarService,
    private ref: ApplicationRef) { }

  ngOnInit() {
    this.fileCount = 0;
    this.fileIndex = 0;
    if (this.content) {
      ipcRenderer.send('decompress', {file: this.content.content});

      ipcRenderer.on('decompress', (event, decompressData) => {
        if (decompressData.done && !this.zipComplete) {
          if (decompressData.done === 'NEW') {
            setTimeout(() => {
              this.zipComplete = true;
              this.ref.tick();
              }, 2000);
          } else {
            this.zipComplete = true;
            this.ref.tick();
          }
        }

        if (decompressData.progress && !this.zipComplete) {
          this.fileCount = decompressData.fileCount;
          this.fileIndex = decompressData.fileIndex;
          this.ref.tick();
        }
      });
    }
  }

  openFile() {
    ipcRenderer.send('openFile', {path: 'ZIP-' + this.content.content + '\\' + this.content.executeFile});
  }
}
