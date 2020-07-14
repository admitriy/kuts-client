import {Component, OnInit} from '@angular/core';
import {ItemNodeTest} from '../../http-client/response/test/item-node-test';
import {NavigationBarService} from '../../http-client/navigation-bar.service';
import {ActivatedRoute} from '@angular/router';
import {ItemQuestion} from '../../http-client/response/test/item-question';
import {ItemChoice} from '../../http-client/response/test/item-choice';
import {GetNavigationBarItemsResponse} from '../../http-client/response/get-navigation-bar-items-response';
import {Location} from '@angular/common';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.css']
})
export class AddTestComponent implements OnInit {

  test: ItemNodeTest;

  constructor(private navigationBarService: NavigationBarService,
              private routeSub: ActivatedRoute,
              private location: Location,
              private _snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.test = {} as ItemNodeTest;
    this.routeSub.params.subscribe((param) => {
       if (param.nodeId) {
        this.navigationBarService.getTest(param.nodeId).subscribe(test => {
          if (test) {
            this.test = test;
          } else {
            this.test.node = {} as GetNavigationBarItemsResponse;
            this.test.node.id = param.nodeId;
          }
        });
       }
    });
  }

  save() {
    this.navigationBarService.saveTest(this.test).subscribe(e => {
      this.back();
    }, (error => { this.openSnackBar(error.error.message, 'OK'); }));
  }

  removeTest() {
    this.navigationBarService.removeTest(this.test.id).subscribe(e => {
      this.back();
    });
  }

  back() {
    this.location.back();
  }

  addQuestion() {
    if (!this.test.questions) {
      this.test.questions = [] as ItemQuestion[];
    }
    this.test.questions.push({} as ItemQuestion);
  }

  addChoice(question: ItemQuestion) {
    if (!question.choices) {
      question.choices = [] as ItemChoice[];
    }
    question.choices.push({} as ItemChoice);
  }

  removeChoice(questionIndex: any, choiceIndex: any) {
    this.test.questions[questionIndex].choices.splice(choiceIndex, 1);
  }

  removeQuestion(questionIndex: any) {
    this.test.questions.splice(questionIndex, 1);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
