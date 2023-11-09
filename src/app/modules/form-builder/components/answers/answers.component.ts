import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../../../services/question.service';
import { Observable } from 'rxjs';
import { IAnswerResult } from '../../../../store/show-result/result.reducer';
import { Store } from '@ngrx/store';
import { IQuiz, selectResultQuiz } from '../../../../store';
import { getQuizResult } from '../../../../store/show-result/result.action';
import { IAnswerData } from '../../../../interfaces/interface';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.scss']
})
export class AnswersComponent implements OnInit {
  public answerData: IAnswerData[];
  public result$: Observable<IAnswerResult[]>;

  constructor(
    private answerService: QuestionService,
    private store$: Store<IQuiz>,
  ) {
  }

  ngOnInit(): void {
    this.initForm();
  };

  initForm(): void {
    if (!this.answerService.answerArr.value) return;
    this.answerData = this.answerService.answerArr.value;
    this.result$ = this.store$.select(selectResultQuiz);
    // console.log('this.answerData', this.answerData);
    this.store$.dispatch(getQuizResult({result: this.answerData}));
    // console.log('test', this.result$)
  };

  getOptionKey(option: {[key: string] : boolean}): string[] | null{
    return Object.keys(option).filter((key) => option[key]);
  };

}
