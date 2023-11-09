import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddQuestionsComponent } from '../components/add-questions/add-questions.component';
import { IModalData } from '../../../interfaces/interface';
import { Router } from '@angular/router';
import { QuestionService } from '../../../services/question.service';
import { Observable } from 'rxjs';
import { IQuiz, selectGetQuiz } from '../../../store';
import { Store } from '@ngrx/store';
import { getQuizQuestion } from '../../../store/select-answer/answer.action';
import { IQuizAnswer } from '../../../store/select-answer/answer.reducer';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  public title: string = 'Hi, come to create some quiz!';
  public modalData: IModalData;
  public form: FormGroup;
  public answerFormGroup: FormGroup;
  public Object = Object;
  public quiz$: Observable<IQuizAnswer[]>
  public test: IQuizAnswer[] = [];


  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private router: Router,
    private service: QuestionService,
    private store$: Store<IQuiz>
  ) {
  };

  ngOnInit(): void {
    this.openDialog();
    this.initForm();
  };

  initForm(): void {
    this.answerFormGroup = this.fb.group({
      answerFormArray: this.fb.array([])
    });
  };

  openDialog(): void {
    let dialogRef = this.dialog.open(AddQuestionsComponent, {
      width: '25rem',
      height: 'max-content'
    });
    dialogRef.afterClosed().subscribe(resp => {
      if (!resp) return;

      this.test.push(resp)
      this.quiz$ = this.store$.select(selectGetQuiz)
      this.store$.dispatch(getQuizQuestion({quizArr:[ ...this.test]}))
      this.modalData = resp;

      const result: any = this.fb.group({
        question: this.modalData.question,
      });

      (resp.radioType === 'checkList') ? this.doIfCheckList(result) : this.doIfParagraph(result);

    });
  };

  get answerFormArray() {
    return this.answerFormGroup.get('answerFormArray') as FormArray;
  };

  doIfCheckList(periodicFG: FormGroup): void {
    periodicFG.addControl('answer', this.fb.array([]));
    this.modalData.ownAnswer ? this.addOwnAnswerControls(periodicFG) : null;
    this.makeFormGroup(this.modalData.answerOption, periodicFG.get('answer'));
    this.answerFormArray.push(periodicFG);
  };

  doIfParagraph(periodicFG: FormGroup): void {
    this.addOwnAnswerControls(periodicFG);
    this.answerFormArray.push(periodicFG);
  };

  addOwnAnswerControls(periodicFG: FormGroup): void {
    periodicFG.addControl('isOwnAnswer', this.fb.control([true]));
    periodicFG.addControl('userAnswer', this.fb.control(''));
  };

  makeFormGroup(arr: [], formArray: FormArray | any): void {
    let formGroup: FormGroup = this.fb.group({})
    arr.forEach(item => {
      formGroup.setControl(item, this.fb.control(false))
    });
    formArray.push(formGroup);
  };

  submit(): void {
    this.router.navigate(['form', 'answer']);
    this.service.saveQuestionResult(this.answerFormArray);
  };
}
