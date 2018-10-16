import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HiddenMenuComponent } from './hidden-menu/hidden-menu.component';
import { VerticalMenuComponent } from './vertical-menu/vertical-menu.component';
import { HorizontalMenuComponent } from './horizontal-menu/horizontal-menu.component';
import { TreeMenuComponent } from './tree-menu/tree-menu.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { BrandingComponent } from './branding/branding.component';
import { AccessMenuComponent } from './access-menu/access-menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { IconizedMenuItemComponent } from './menu-item/iconized-menu-item/iconized-menu-item.component';
import { SimpleMenuItemComponent } from './menu-item/simple-menu-item/simple-menu-item.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HiddenMenuComponent, VerticalMenuComponent, HorizontalMenuComponent, TreeMenuComponent, FooterComponent, HeaderComponent, LayoutComponent, BrandingComponent, AccessMenuComponent, MenuItemComponent, IconizedMenuItemComponent, SimpleMenuItemComponent]
})
export class CoreLayoutModule {}
