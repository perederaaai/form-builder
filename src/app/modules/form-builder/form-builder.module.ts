import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms/forms.component';
import { RouterModule, Routes } from '@angular/router';
import { AddQuestionsComponent } from './components/add-questions/add-questions.component';
import { AnswersComponent } from './components/answers/answers.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: FormsComponent
  },
  {
    path: 'question',
    component: AddQuestionsComponent
  },
  {
    path: 'answer',
    component: AnswersComponent
  },

]

@NgModule({
  declarations: [
    FormsComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    SharedModule

  ],
  exports: [RouterModule]
})
export class FormBuilderModule {
}
