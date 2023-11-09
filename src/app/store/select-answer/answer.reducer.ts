import { createReducer, on } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { getQuizQuestion, getQuizQuestionFailed, getQuizQuestionSuccess } from './answer.action';

export interface IQuizAnswer {
  quiz:[{
    radioType: string | null,
    question: string | null,
    answerOption: [] | null,
    ownAnswer: boolean,
    requiredFailed: boolean
  }]  | null
  error?: HttpErrorResponse | null | undefined,
}

export const initialQuizQuestion: IQuizAnswer = {
  quiz: [{
    radioType: '',
    question: '',
    answerOption: [],
    ownAnswer: false,
    requiredFailed: false
  }],
  error: null,
}

export const answerState = 'getQuiz'

export const getQuestion = createReducer(
  initialQuizQuestion,
  on(getQuizQuestion, (state) => {
    return ({
      ...state
    })
  }),
  on(getQuizQuestionSuccess, (state, {quizArr}) => {
    return ({
      ...state,
      quiz: quizArr

    })
  }),
  on(getQuizQuestionFailed, (state) => {
    return ({
      ...state
    })
  })
)
