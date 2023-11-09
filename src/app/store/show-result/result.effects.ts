import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { QuestionService } from '../../services/question.service';
import { catchError, map, of, switchMap } from 'rxjs';
import { getQuizResult, getQuizResultFailed, getQuizResultSuccess } from './result.action';

@Injectable()
export class ResultEffects {

  constructor(
    private actions$: Actions,
    private questionService: QuestionService,
  ) {
  }

  getResult$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getQuizResult),
      switchMap((action) =>
        this.questionService.getResult(action.result).pipe(
          map((response) => {
            return getQuizResultSuccess({result: response})
          }),
          catchError((err) => {
            return of(getQuizResultFailed({error: err}))
          })
        ))
    )
  );


}
