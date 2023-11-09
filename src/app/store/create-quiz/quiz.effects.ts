import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { createQuizQuestion, createQuizQuestionFailed, createQuizQuestionSuccess } from './quiz.action';
import { catchError, map, of, switchMap } from 'rxjs';
import { QuestionService } from '../../services/question.service';

@Injectable()
export class QuizEffects {

  constructor(
    private actions$: Actions,
    private questionService: QuestionService,
  ) {
  }

  createQuiz$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createQuizQuestion),
      switchMap((action) =>
        this.questionService.createQuiz(action.quiz).pipe(
          map((response) => {
            return createQuizQuestionSuccess({quiz: response})
          }),
          catchError((err) => {
            return of(createQuizQuestionFailed({error: err}))
          })
        ))
    )
  );


}
