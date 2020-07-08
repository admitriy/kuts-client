import {Component, OnInit} from '@angular/core';
import {NavigationBarService} from '../../http-client/navigation-bar.service';
import {ActivatedRoute} from '@angular/router';
import {NavigationBarItemContent} from '../../http-client/response/content/navigation-bar-item-content';
import {GetNavigationBarItemsResponse} from '../../http-client/response/get-navigation-bar-items-response';
import {Location} from '@angular/common';

@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.css']
})
export class AddContentComponent implements OnInit {

  content: NavigationBarItemContent;

  constructor(private navigationBarService: NavigationBarService,
              private routeSub: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit() {
    this.content = {} as NavigationBarItemContent;
    this.routeSub.params.subscribe((param) => {
      if (param.nodeId) {
        this.navigationBarService.getContentByNodeId(param.nodeId).subscribe(content => {
          if (content) {
            this.content = content;
          } else {
            this.content.node = {} as GetNavigationBarItemsResponse;
            this.content.node.id = param.nodeId;
          }
        });
      }
    });
  }

  uploadFile(event: any, upload: any) {
    upload._disabled = true;
    this.navigationBarService.uploadFile(event.target.files[0]).subscribe(e => {
      this.content.content = e;
      upload._disabled = false;
    });
  }

  removeContent(upload: any) {
    upload._disabled = true;
    this.navigationBarService.deleteFile(this.content.content).subscribe(e => {
      this.content.content = '';
      upload._disabled = false;
    });
  }

  save() {
    this.navigationBarService.saveContent(this.content).subscribe(e => {
      this.back();
    });
  }

  removeContentEntity() {
    this.navigationBarService.removeContentEntity(this.content.id).subscribe(e => {
      this.back();
    });
  }

  back() {
    this.location.back();
  }
}
