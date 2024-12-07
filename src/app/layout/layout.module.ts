import { NgModule, inject } from '@angular/core';
import { CommonModule, NgClass, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { EmptyLayoutComponent } from './layouts/empty/empty.component';
import { FuseLoadingBarComponent } from '@fuse/components/loading-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FuseHorizontalNavigationComponent, FuseVerticalNavigationComponent } from '@fuse/components/navigation';
import { FuseScrollbarDirective } from '@fuse/directives/scrollbar/scrollbar.directive';
import { FuseVerticalNavigationAsideItemComponent } from '@fuse/components/navigation/vertical/components/aside/aside.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { FuseVerticalNavigationBasicItemComponent } from '@fuse/components/navigation/vertical/components/basic/basic.component';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { FuseVerticalNavigationCollapsableItemComponent } from '@fuse/components/navigation/vertical/components/collapsable/collapsable.component';
import { FuseVerticalNavigationDividerItemComponent } from '@fuse/components/navigation/vertical/components/divider/divider.component';
import { FuseVerticalNavigationGroupItemComponent } from '@fuse/components/navigation/vertical/components/group/group.component';
import { FuseVerticalNavigationSpacerItemComponent } from '@fuse/components/navigation/vertical/components/spacer/spacer.component';
import { CenteredLayoutComponent } from './layouts/horizontal/centered/centered.component';
import { FuseHorizontalNavigationBasicItemComponent } from '@fuse/components/navigation/horizontal/components/basic/basic.component';
import { MatMenuModule } from '@angular/material/menu';
import { FuseHorizontalNavigationBranchItemComponent } from '@fuse/components/navigation/horizontal/components/branch/branch.component';
import { FuseHorizontalNavigationDividerItemComponent } from '@fuse/components/navigation/horizontal/components/divider/divider.component';
import { FuseHorizontalNavigationSpacerItemComponent } from '@fuse/components/navigation/horizontal/components/spacer/spacer.component';
import { MatButtonModule } from '@angular/material/button';
import { LanguagesComponent } from './common/languages/languages.component';
import { FuseFullscreenComponent } from '@fuse/components/fullscreen';
import { SearchComponent } from './common/search/search.component';
import { ShortcutsComponent } from './common/shortcuts/shortcuts.component';
import { MessagesComponent } from './common/messages/messages.component';
import { NotificationsComponent } from './common/notifications/notifications.component';
import { UserComponent } from 'app/layout/common/user/user.component';
import { EnterpriseLayoutComponent } from './layouts/horizontal/enterprise/enterprise.component';
import { ModernLayoutComponent } from './layouts/horizontal/modern/modern.component';
import { ClassicLayoutComponent } from './layouts/vertical/classic/classic.component';
import { ClassyLayoutComponent } from './layouts/vertical/classy/classy.component';
import { CompactLayoutComponent } from './layouts/vertical/compact/compact.component';
import { DenseLayoutComponent } from './layouts/vertical/dense/dense.component';
import { FuturisticLayoutComponent } from './layouts/vertical/futuristic/futuristic.component';
import { ThinLayoutComponent } from './layouts/vertical/thin/thin.component';
import { MaterialLayoutComponent } from './layouts/horizontal/material/material.component';

import {MatAutocompleteModule} from '@angular/material/autocomplete';

// import { SettingsComponent } from './common/settings/settings.component';
import { FuseDrawerComponent } from '@fuse/components/drawer';
import { MAT_AUTOCOMPLETE_SCROLL_STRATEGY } from '@angular/material/autocomplete';
import { Overlay } from '@angular/cdk/overlay';
import { SettingsComponent } from './common/settings/settings.component';
import { MatDividerModule } from '@angular/material/divider';
import { LayoutComponent } from './layout.component';
import { QuickChatComponent } from 'app/layout/common/quick-chat/quick-chat.component';



@NgModule({
  declarations: [
    // Commons Componentes
    LanguagesComponent,
    FuseDrawerComponent,
    MessagesComponent,
    NotificationsComponent,
    QuickChatComponent,
    SearchComponent,
    ShortcutsComponent,
    UserComponent,

    // Componentes de Fuse    
    FuseHorizontalNavigationComponent,
    FuseHorizontalNavigationBasicItemComponent,
    FuseHorizontalNavigationBranchItemComponent,
    FuseHorizontalNavigationDividerItemComponent,
    FuseHorizontalNavigationSpacerItemComponent,
    FuseLoadingBarComponent,
    FuseVerticalNavigationComponent,
    FuseVerticalNavigationAsideItemComponent,
    FuseVerticalNavigationBasicItemComponent,
    FuseVerticalNavigationCollapsableItemComponent,
    FuseVerticalNavigationDividerItemComponent,
    FuseVerticalNavigationGroupItemComponent,
    FuseVerticalNavigationSpacerItemComponent,
    // LanguagesComponent,
    // QuickChatComponent,
    // SearchComponent,
    // MessagesComponent,
    // NotificationsComponent,
    // UserComponent,
    ClassicLayoutComponent,
    ClassyLayoutComponent,
    CenteredLayoutComponent,
    CompactLayoutComponent,
    DenseLayoutComponent,
    EnterpriseLayoutComponent,
    EmptyLayoutComponent,
    FuseFullscreenComponent,
    FuturisticLayoutComponent,
    MaterialLayoutComponent,
    ModernLayoutComponent,
    LayoutComponent,
    ThinLayoutComponent,
    SettingsComponent
    
    
    

  ],
  exports:[
    FuseDrawerComponent
  ],
  imports: [
    CommonModule,
    FuseScrollbarDirective,
    NgClass,
    NgIf,
    NgFor,
    NgTemplateOutlet,
    MatButtonModule,
    MatDividerModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatIconModule,
    MatTooltipModule,
    MatProgressBarModule,
    RouterOutlet,
    RouterModule,
    RouterLink,
    RouterLinkActive,
  ],
  providers    : [
    {
        provide   : MAT_AUTOCOMPLETE_SCROLL_STRATEGY,
        useFactory: () =>
        {
            const overlay = inject(Overlay);
            return () => overlay.scrollStrategies.block();
        },
    },
],
})
export class LayoutModule { }
