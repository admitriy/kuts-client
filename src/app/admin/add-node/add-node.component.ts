import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {NavigationBarService} from '../../http-client/navigation-bar.service';
import {GetNavigationBarItemsResponse} from '../../http-client/response/get-navigation-bar-items-response';
import {NavigationBarItemContent} from '../../http-client/response/content/navigation-bar-item-content';
import {ActivatedRoute} from '@angular/router';
import {NavigationBarComponent} from '../../navigation-bar/navigation-bar.component';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './add-node.component.html',
  styleUrls: ['./add-node.component.css']
})
export class AddNodeComponent implements OnInit {
  uploaded = false;
  node: GetNavigationBarItemsResponse;

  constructor(private location: Location,
              private navigationBarService: NavigationBarService,
              private routeSub: ActivatedRoute,
              private navigationBarComponent: NavigationBarComponent) { }

  ngOnInit() {
    this.node = {} as GetNavigationBarItemsResponse;
    this.node.content = {} as NavigationBarItemContent;
    this.routeSub.params.subscribe((param) => {
      this.node.parentNode = param.parentId;
    });
  }

  uploadFile(event: any, upload: any) {
    upload._disabled = true;
    this.navigationBarService.uploadFile(event.target.files[0]).subscribe(e => {
      this.node.content.content = e;
      upload.color = 'accent';
      this.uploaded = true;
      upload._disabled = false;
    });
  }

  save() {
    this.navigationBarService.saveNode(this.node).subscribe(e => {
      this.back();
    });
  }

  back() {
    this.location.back();
  }

  removeContent(upload: any) {
    upload.color = 'basic';
    this.uploaded = false;
    this.node.content.content = '';
    console.log("Контент удалён (НЕТ)");
  }
}
