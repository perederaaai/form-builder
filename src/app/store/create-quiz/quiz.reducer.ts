import { createReducer, on } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { createQuizQuestion, createQuizQuestionFailed, createQuizQuestionSuccess } from './quiz.action';
import { IModalData } from '../../interfaces/interface';

export interface IQuizQuestion {
  quiz: IModalData | null
  error?: HttpErrorResponse | null,
}

export const initialQuizQuestion: IQuizQuestion = {
  quiz: {
    radioType: '',
    question: '',
    answerOption: [],
    ownAnswer: false,
    requiredFailed: false
  },
  error: null,
}
export const quizState = 'createQuiz'

export const sendQuizQuestion = createReducer(
  initialQuizQuestion,
  on(createQuizQuestion, (state) => {
    return ({
      ...state,
    })
  }),
  on(createQuizQuestionSuccess, (state, {quiz}) => {
    return ({
      ...state,
      quiz: quiz.quiz
    })
  }),
  on(createQuizQuestionFailed, (state) => {
    return ({
      ...state
    })
  })
)
