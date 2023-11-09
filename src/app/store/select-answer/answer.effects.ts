import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { QuestionService } from '../../services/question.service';
import { catchError, map, of, switchMap } from 'rxjs';
import { getQuizQuestion, getQuizQuestionFailed, getQuizQuestionSuccess } from './answer.action';

@Injectable()
export class AnswerEffects {

  constructor(
    private actions$: Actions,
    private questionService: QuestionService,
  ) {
  }

  getQuiz$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getQuizQuestion),
      switchMap((action) =>
        this.questionService.getQuizData(action.quizArr).pipe(
          map((response) => {
            return getQuizQuestionSuccess({quizArr: response})
          }),
          catchError((err) => {
            return of(getQuizQuestionFailed({error: err}))
          })
        ))
    )
  );


}
