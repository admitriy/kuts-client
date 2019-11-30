import {Component, OnInit} from '@angular/core';
import {NavigationBarService} from '../../http-client/navigation-bar.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Group} from '../../http-client/response/auth/group';
import {User} from '../../http-client/response/auth/user';
import {TestResult} from '../../http-client/response/test/test-result';
import {TestResultShow} from '../../http-client/response/test/test-result-show';

@Component({
  selector: 'test-result',
  templateUrl: './test-result.component.html',
  styleUrls: ['./test-result.component.css']
})
export class TestResultComponent implements OnInit {

  dataSource: TestResultShow[];
  displayedColumns: string[] = ['userName', 'testName', 'allQuestions', 'rightQuestions', 'createDate'];

  constructor(private navigationBarService: NavigationBarService,
              private routeSub: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.getTestResults();
  }

  showResults(param) {
    this.router.navigate(['panel/add-group/', param]);
  }

  getTestResults() {
    this.routeSub.params.subscribe((param) => {
      if (param.userId) {
        this.navigationBarService.getTestResultByUserID(param.userId).subscribe(testResults => {
          if (testResults) {
            let results = [];
            testResults.forEach(testResult => {
              let rightQuestions = 0;
              let allNumber = 0;
              Object.keys(testResult.resultTest).map((key, value) => {
                if (testResult.resultTest[key]) {
                  rightQuestions += 1;
                }
                allNumber += 1;
              });
              let result = {} as TestResultShow;
              result.testName = testResult.test.testName;
              result.createDate = testResult.createDate;
              result.allQuestion = allNumber;
              result.rightAnswer = rightQuestions;
              result.userName = testResult.user.name;
              results.push(result);
            });
            this.dataSource = results;
          }
        });
      }
    });
  }
}
