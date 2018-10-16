import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { EndlessListComponent } from './endless-list/endless-list.component';
import { PagedListComponent } from './paged-list/paged-list.component';
import { EnrichedTextareaComponent } from './enriched-textarea/enriched-textarea.component';
import { SimpleWidgetComponent } from './simple-widget/simple-widget.component';
import { DialogAskConfirmationComponent } from './dialog-ask-confirmation/dialog-ask-confirmation.component';
import { IconCompletenessComponent } from './icon-completeness/icon-completeness.component';
import { SearchBoxComponent } from './search-box/search-box.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CarouselComponent, EndlessListComponent, PagedListComponent, EnrichedTextareaComponent, SimpleWidgetComponent, DialogAskConfirmationComponent, IconCompletenessComponent, SearchBoxComponent]
})
export class CoreComponentsModule {}
