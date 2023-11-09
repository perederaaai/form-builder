import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { IAnswerResult } from './result.reducer';
import { IAnswerData } from '../../interfaces/interface';

export const GET_RESULT = '[GET_RESULT] get result ';
export const GET_RESULT_SUCCESS = '[GET_RESULT_SUCCESS] get result success ';
export const GET_RESULT_FAILED = '[GET_RESULT_FAILED] get result failed ';

export const getQuizResult = createAction(
  GET_RESULT,
  props<{
    result: IAnswerData[]
  }>()
);
export const getQuizResultSuccess = createAction(
  GET_RESULT_SUCCESS,
  props<{
    result: IAnswerData[]
  }>()
);
export const getQuizResultFailed = createAction(
  GET_RESULT_FAILED,
  props<{
    error: HttpErrorResponse
  }>()
);
