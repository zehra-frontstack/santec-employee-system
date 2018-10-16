import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessionalComponent } from './professional/professional.component';
import { TrainingComponent } from './training/training.component';
import { SkillsComponent } from './skills/skills.component';
import { QuestionsComponent } from './questions/questions.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LocationComponent } from './location/location.component';
import { ResumeComponent } from './resume/resume.component';
import { SimpleBasicAuthComponent } from './login-form/simple-basic-auth/simple-basic-auth.component';
import { SimpleProfileCardComponent } from './profile-card/simple-profile-card/simple-profile-card.component';
import { IconizedProfileCardComponent } from './profile-card/iconized-profile-card/iconized-profile-card.component';
import { ComplexProfileCardComponent } from './profile-card/complex-profile-card/complex-profile-card.component';
import { SkillCardComponent } from './skills/skill-card/skill-card.component';
import { TrainingCardComponent } from './training/training-card/training-card.component';
import { EmploymentCardComponent } from './professional/employment-card/employment-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ProfessionalComponent, TrainingComponent, SkillsComponent, QuestionsComponent, ProfileCardComponent, LoginFormComponent, LocationComponent, ResumeComponent, SimpleBasicAuthComponent, SimpleProfileCardComponent, IconizedProfileCardComponent, ComplexProfileCardComponent, SkillCardComponent, TrainingCardComponent, EmploymentCardComponent]
})
export class CoreProfileModule {}
