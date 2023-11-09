import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IModalDialog } from '../../../../interfaces/interface';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { createQuizQuestion } from '../../../../store/create-quiz/quiz.action';
import { IQuizQuestion } from '../../../../store/create-quiz/quiz.reducer';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IQuiz, selectQuizData } from '../../../../store';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.scss']
})
export class AddQuestionsComponent implements OnInit {
  @ViewChild('checkList') check: ElementRef<HTMLInputElement>;

  public question: string;
  public form: FormGroup;
  public modalTitle: string = 'Add a new question';
  public quiz$: Observable<IQuizQuestion>;


  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: IModalDialog,
    public dialogRef: MatDialogRef<AddQuestionsComponent>,
    private fb: FormBuilder,
    private store$: Store<IQuiz>,
  ) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group({
      radioType: ['checkList', Validators.required],
      question: ['', [Validators.required]],
      answerOption: this.fb.array([]),
      ownAnswer: [false],
      requiredFailed: [false]
    });
  };

  addAnswerOption(): void {
    this.answerOption.push(this.fb.control('', [Validators.required]));
  };

  get answerOption() {
    return this.form.controls['answerOption'] as FormArray;
  };

  submit(): void {
    const userData = this.form.value;
    this.dialogRef.close(userData);
    this.quiz$ = this.store$.select(selectQuizData)
    this.store$.dispatch(createQuizQuestion({quiz: this.form.value}));
  };

  checkRadio(): void {
    !this.check.nativeElement.checked ? this.form.get('ownAnswer')?.setValue(true) : null;
  };

  closeDialog(): void {
    this.dialogRef.close();
  };

}
