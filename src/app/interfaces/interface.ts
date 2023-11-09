import { HttpErrorResponse } from '@angular/common/http';

export interface IModalDialog {
  title: string;
  text: string;
}

export interface IModalData {
  radioType: string;
  question: string;
  answerOption: [];
  ownAnswer: boolean;
  requiredFailed: boolean;
}

export interface IAnswerData {
  question: string | null,
  answer?: [] | null,
  isOwnAnswer?: [boolean] | null,
  userAnswer?: boolean | null
}

export  interface IObject {
  // key: string : value: boolean
}

// export interface IQuiz
