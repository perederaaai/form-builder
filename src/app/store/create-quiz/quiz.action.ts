import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { IQuizQuestion } from './quiz.reducer';
import { IModalData } from '../../interfaces/interface';

export const CREATE_QUIZ = '[CREATE_QUIZ] create quiz ';
export const CREATE_QUIZ_SUCCESS = '[CREATE_QUIZ] create quiz success ';
export const CREATE_QUIZ_FAILED = '[CREATE_QUIZ] create quiz failed ';

export const createQuizQuestion = createAction(
  CREATE_QUIZ,
  props<{
    quiz: IQuizQuestion
  }>()
);
export const createQuizQuestionSuccess = createAction(
  CREATE_QUIZ_SUCCESS,
  props<{
    quiz: IQuizQuestion
  }>()
);
export const createQuizQuestionFailed = createAction(
  CREATE_QUIZ_FAILED,
  props<{
    error: HttpErrorResponse
  }>()
);

