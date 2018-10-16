import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { HomeBenefitsComponent } from './home-benefits/home-benefits.component';
import { TopBenefitsComponent } from './top-benefits/top-benefits.component';
import { TopUserBenefitsComponent } from './top-user-benefits/top-user-benefits.component';
import { HowApplyComponent } from './how-apply/how-apply.component';
import { ConfirmApplyComponent } from './confirm-apply/confirm-apply.component';
import { AllBenefitsComponent } from './all-benefits/all-benefits.component';
import { AvailableBenefitsComponent } from './available-benefits/available-benefits.component';
import { ActiveBenefitsComponent } from './active-benefits/active-benefits.component';
import { ActiveBenefitDetailComponent } from './active-benefit-detail/active-benefit-detail.component';
import { BenefitCardComponent } from './benefit-card/benefit-card.component';
import { GoApplyComponent } from './how-apply/go-apply/go-apply.component';
import { SimpleBenefitCardComponent } from './benefit-card/simple-benefit-card/simple-benefit-card.component';
import { BenefitIconComponent } from './benefit-card/benefit-icon/benefit-icon.component';
import { ComplexBenefitCardComponent } from './benefit-card/complex-benefit-card/complex-benefit-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeBenefitsComponent,
    TopBenefitsComponent,
    TopUserBenefitsComponent,
    HowApplyComponent,
    ConfirmApplyComponent,
    AllBenefitsComponent,
    AvailableBenefitsComponent,
    ActiveBenefitsComponent,
    ActiveBenefitDetailComponent,
    BenefitCardComponent,
    GoApplyComponent,
    SimpleBenefitCardComponent,
    BenefitIconComponent,
    ComplexBenefitCardComponent
  ],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot([], { initialNavigation: 'enabled' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
