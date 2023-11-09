import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddQuestionsComponent } from './modules/form-builder/components/add-questions/add-questions.component';
import { AnswersComponent } from './modules/form-builder/components/answers/answers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from './shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { QuizEffects } from './store/create-quiz/quiz.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AnswerEffects } from './store/select-answer/answer.effects';
import { ResultEffects } from './store/show-result/result.effects';


@NgModule({
  declarations: [
    AppComponent,
    AddQuestionsComponent,
    AnswersComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDialogModule,
    FormsModule,
    SharedModule,
    MatIconModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([QuizEffects, AnswerEffects, ResultEffects]),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !isDevMode()}),
  ],
  providers: [],
  exports: [
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
