import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { IQuizAnswer } from './answer.reducer';

export const GET_QUIZ = '[GET_QUIZ] get quiz ';
export const GET_QUIZ_SUCCESS = '[GET_QUIZ] get quiz success ';
export const GET_QUIZ_FAILED = '[GET_QUIZ] get quiz failed ';

export const getQuizQuestion = createAction(
  GET_QUIZ,
  props<{
    quizArr: IQuizAnswer[]
  }>()
);
export const getQuizQuestionSuccess = createAction(
  GET_QUIZ_SUCCESS,
  props<{
    quizArr: IQuizAnswer[] | any
  }>()
);
export const getQuizQuestionFailed = createAction(
  GET_QUIZ_FAILED,
  props<{
    error: HttpErrorResponse
  }>()
);

