import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HelpComponent } from './help/help.component';
import { LoadingComponent } from './loading/loading.component';
import { ModalComponent } from './modal/modal.component';
import { NgbCollapseModule, NgbDateParserFormatter, NgbDatepickerModule, NgbDropdownModule, NgbPaginationModule, NgbPopoverModule, NgbToastModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { SwitchComponent } from './switch/switch.component';
import { HistoryComponent } from './history/history.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';
import { DatasearchComponent } from './datasearch/datasearch.component';
import { DataimportComponent } from './dataimport/dataimport.component';
import { ButtominfoComponent } from './buttominfo/buttominfo.component';
import { LeyendaComponent } from './leyenda/leyenda.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    HelpComponent,
    LoadingComponent,
    ModalComponent,
    SwitchComponent,
    HistoryComponent,
    AlertComponent,
    DatasearchComponent,
    DataimportComponent,
    ButtominfoComponent,
    LeyendaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgbTooltipModule,
    NgbDropdownModule,
    NgbPaginationModule,
    NgSelectModule,
    NgbCollapseModule,
    NgbDatepickerModule,
    NgbPopoverModule,
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    HelpComponent,
    LoadingComponent,
    ModalComponent,
    SwitchComponent,
    HistoryComponent,
    AlertComponent,
    DatasearchComponent,
    DataimportComponent,
    ButtominfoComponent,
  ],
})
export class SharedModule {}
