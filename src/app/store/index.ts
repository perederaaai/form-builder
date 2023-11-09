import { ActionReducerMap, createSelector } from '@ngrx/store';
import { quizSelector } from './create-quiz/quiz.selector';
import { IQuizQuestion, quizState, sendQuizQuestion } from './create-quiz/quiz.reducer';
import { answerState, getQuestion, IQuizAnswer } from './select-answer/answer.reducer';
import { answerSelector } from './select-answer/answer.select';
import { IAnswerResult, resultState, showAnswerResult } from './show-result/result.reducer';
import { resultSelect } from './show-result/result.select';

export interface IQuiz {
  [quizState]: IQuizQuestion,
  [answerState]: IQuizAnswer,
  [resultState]: IAnswerResult,
}

export const reducers: ActionReducerMap<IQuiz, any> = {
  [quizState]: sendQuizQuestion,
  [answerState]: getQuestion,
  [resultState]: showAnswerResult,
}

export const sendQuizData = (state: IQuiz) => state[quizState];
export const selectQuizData = createSelector(sendQuizData, quizSelector);

export const getQuizData = (state: IQuiz) => state[answerState];
export const selectGetQuiz = createSelector(getQuizData, answerSelector);

export const getResult = (state: IQuiz) => state[resultState];
export const selectResultQuiz = createSelector(getResult, resultSelect);


