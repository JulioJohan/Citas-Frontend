import { NgModule, inject } from '@angular/core';
import { CommonModule, NgTemplateOutlet, NgFor, NgClass, NgIf, DatePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { EmptyLayoutComponent } from '../layouts/empty/empty.component';
import { CenteredLayoutComponent } from '../layouts/horizontal/centered/centered.component';
import { EnterpriseLayoutComponent } from '../layouts/horizontal/enterprise/enterprise.component';
import { MaterialLayoutComponent } from '../layouts/horizontal/material/material.component';
import { ModernLayoutComponent } from '../layouts/horizontal/modern/modern.component';
import { ClassicLayoutComponent } from '../layouts/vertical/classic/classic.component';
import { ClassyLayoutComponent } from '../layouts/vertical/classy/classy.component';
import { CompactLayoutComponent } from '../layouts/vertical/compact/compact.component';
import { DenseLayoutComponent } from '../layouts/vertical/dense/dense.component';
import { FuturisticLayoutComponent } from '../layouts/vertical/futuristic/futuristic.component';
import { ThinLayoutComponent } from '../layouts/vertical/thin/thin.component';
import { SettingsComponent } from './settings/settings.component';
import { LanguagesComponent } from './languages/languages.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MessagesComponent } from './messages/messages.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { FuseScrollbarDirective } from '@fuse/directives/scrollbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TextFieldModule } from '@angular/cdk/text-field';
import { QuickChatComponent } from './quick-chat/quick-chat.component';
import { MAT_AUTOCOMPLETE_SCROLL_STRATEGY, MatAutocompleteModule } from '@angular/material/autocomplete';
import { Overlay } from '@angular/cdk/overlay';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { RouterLink } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ShortcutsComponent } from './shortcuts/shortcuts.component';
import { UserComponent } from './user/user.component';
import { FuseLoadingBarComponent } from '@fuse/components/loading-bar';
import { FuseDrawerComponent } from '@fuse/components/drawer';



@NgModule({
  declarations: [
    // Commons Componentes
    // LanguagesComponent,
    // FuseDrawerComponent,
    // MessagesComponent,
    // NotificationsComponent,
    // QuickChatComponent,
    // SearchComponent,
    // Componente requiere un componente fuera de otro modulo
    // SettingsComponent,
    // ShortcutsComponent,
    // UserComponent,
    // Layouts
    
    

  ],
  exports:[   
    // FuseDrawerComponent
  ],
//   imports: [
    
//     CommonModule,
//     DatePipe,
//     FormsModule,
//     FuseScrollbarDirective,
//     NgTemplateOutlet,
//     NgClass,
//     NgIf,
//     NgFor,
//     TextFieldModule,  
//     MatAutocompleteModule,  
//     MatButtonModule,
//     MatFormFieldModule,
//     MatInputModule,
//     MatMenuModule,
//     MatIconModule, 
//     MatTooltipModule,
//     MatOptionModule,
//     MatSlideToggleModule,
//     ReactiveFormsModule,
//     RouterLink,
//   ],  
//   providers    : [
//     {
//         provide   : MAT_AUTOCOMPLETE_SCROLL_STRATEGY,
//         useFactory: () =>
//         {
//             const overlay = inject(Overlay);
//             return () => overlay.scrollStrategies.block();
//         },
//     },
// ],
})
export class CommonsModule { }
