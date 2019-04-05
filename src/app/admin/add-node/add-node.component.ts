import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {NavigationBarService} from '../../http-client/navigation-bar.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './add-node.component.html',
  styleUrls: ['./add-node.component.css']
})
export class AddNodeComponent implements OnInit {
  uploadEnabled = true;
  constructor(private location: Location,
              private navigationBarService: NavigationBarService){ }

  ngOnInit() {
  }

  uploadFile(event) {
    this.uploadEnabled = false;
    this.navigationBarService.uploadFile(event.target.files[0]).subscribe(e =>{
      console.log(e);
    });
  }

  back() {
    this.location.back();
  }
}
