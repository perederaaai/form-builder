import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { FormArray } from '@angular/forms';
import { IQuizAnswer } from '../store/select-answer/answer.reducer';
import { IQuizQuestion } from '../store/create-quiz/quiz.reducer';
import { IAnswerData } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  public answerArr: BehaviorSubject<any | null> = new BehaviorSubject<any[] | null>(null);

  saveQuestionResult(array: FormArray): void {
    this.answerArr.next(array.value);
  };

  createQuiz(quiz: IQuizQuestion | null): Observable<any> {
    return of(quiz)
  };

  getQuizData(data: IQuizAnswer[]): Observable<any> {
    return of(data)
  };

  getResult(result: IAnswerData[]): Observable<IAnswerData[]> {
    return of(result)
  };

}
