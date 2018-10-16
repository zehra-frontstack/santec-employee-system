import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentNotificationsComponent } from './current-notifications/current-notifications.component';
import { NotificationIconComponent } from './notification-icon/notification-icon.component';
import { NotificationCardComponent } from './notification-card/notification-card.component';
import { SimpleNotificationCardComponent } from './notification-card/simple-notification-card/simple-notification-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CurrentNotificationsComponent, NotificationIconComponent, NotificationCardComponent, SimpleNotificationCardComponent]
})
export class CoreNotificationModule {}
