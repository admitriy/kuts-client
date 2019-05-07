import {Component, OnInit, ViewChild} from '@angular/core';
import {NavigationBarService} from '../../http-client/navigation-bar.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ItemNodeTest} from '../../http-client/response/test/item-node-test';
import {ItemQuestion} from '../../http-client/response/test/item-question';
import {ItemChoice} from '../../http-client/response/test/item-choice';
import {ItemTestValidate} from '../../http-client/response/test/item-test-validate';

@Component({
  selector: 'app-pass-test',
  templateUrl: './pass-test.component.html',
  styleUrls: ['./pass-test.component.css']
})
export class PassTestComponent implements OnInit {
  test: ItemNodeTest;
  currentQuestion: number;
  nodeId: any;
  result: ItemTestValidate;
  rightQuestions: number;

  constructor(
    private routeSub: ActivatedRoute,
    private navigationBarService: NavigationBarService,
    private router: Router) {
  }

  ngOnInit() {
    this.routeSub.params.subscribe((param) => {
      this.navigationBarService.getPassTest(param.nodeId).subscribe(test => {
        this.test = test;
        this.nodeId = param.nodeId;
        if (this.test != null && this.test.questions != null) {
          this.currentQuestion = 0;
        }
      });
    });
  }

  selectedChoice(choice: ItemChoice) {
    choice.correct = !choice.correct;
  }

  nextQuestion() {
    console.log(this.currentQuestion);
    console.log(this.test.questions.length - 1);
    if (this.currentQuestion === (this.test.questions.length - 1)) {
      this.navigationBarService.validateTest(this.nodeId, this.test).subscribe(e => {
        this.result = e;
        this.rightQuestions = 0;
        Object.keys(this.result.resultTest).map((key, value) => {
            if (this.result.resultTest[key]) {
              this.rightQuestions += 1;
            }
          }
        );
      });
    } else {
      this.currentQuestion += 1;
    }
  }

  backToConent() {
    this.router.navigate(['/content', this.nodeId]);
  }
}
