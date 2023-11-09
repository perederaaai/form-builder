import { HttpErrorResponse } from '@angular/common/http';
import { createReducer, on } from '@ngrx/store';
import { getQuizResult, getQuizResultFailed, getQuizResultSuccess } from './result.action';
import { IAnswerData } from '../../interfaces/interface';

export interface IAnswerResult {
  result: IAnswerData[],
  error?: HttpErrorResponse | null
}

export const initialResultArr: IAnswerResult = {
  result: [],
  error: null
}

export const resultState = 'result';

export const showAnswerResult = createReducer(
  initialResultArr,
  on(getQuizResult, (state) => {
    return ({
      ...state,
    })
  }),
  on(getQuizResultSuccess, (state, {result}) => {
    return ({
      ...state,
      result: result
    })
  }),
  on(getQuizResultFailed, (state) => {
    return ({
      ...state
    })
  })
)
