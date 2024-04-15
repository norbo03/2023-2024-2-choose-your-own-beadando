import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TaskSelectorComponent} from './task-selector/task-selector.component';
import {TaskComponent} from './task/task.component';
import {NavigatorComponent} from './navigator/navigator.component';
import {MarkdownModule} from "ngx-markdown";
import {Task1AComponent} from './tasks/1/A/task1-a.component';
import {Task1BComponent} from './tasks/1/B/task1-b.component';
import {RouterModule} from "@angular/router";
import {SummaryComponent} from './summary/summary.component';
import {PreviewComponent} from './preview/preview.component';
import {Task2AComponent} from "src/app/tasks/2/A/task2-a.component";
import {Task2BComponent} from "src/app/tasks/2/B/task2-b.component";
import {Task3AComponent} from "src/app/tasks/3/A/task3-a.component";
import {Task3BComponent} from "src/app/tasks/3/B/task3-b.component";
import {Task4AComponent} from "src/app/tasks/4/A/task4-a.component";
import {Task4BComponent} from "src/app/tasks/4/B/task4-b.component";
import {Task5AComponent} from "src/app/tasks/5/A/task5-a.component";
import {Task5BComponent} from "src/app/tasks/5/B/task5-b.component";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzIconModule} from "ng-zorro-antd/icon";
import {BorderOutline, CheckSquareOutline} from '@ant-design/icons-angular/icons';
import {NzListModule} from "ng-zorro-antd/list";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzModalModule} from "ng-zorro-antd/modal";
import {NzFormModule} from "ng-zorro-antd/form";
import {FormsModule} from "@angular/forms";
import {NzSliderComponent} from "ng-zorro-antd/slider";
import {NzTooltipDirective} from "ng-zorro-antd/tooltip";
import {EmployeeCardComponent} from "./employee-card/employee-card.component";
import {NzSwitchComponent} from "ng-zorro-antd/switch";
import {EncryptPipe} from "./_pipes/encrypt.pipe";
import {NzOptionComponent, NzSelectComponent} from "ng-zorro-antd/select";
import {PermissionDirective} from "./_directives/permission.directive";

const zorroModules = [
  NzButtonModule,
  NzCardModule,
  NzDividerModule,
  NzIconModule.forChild([BorderOutline, CheckSquareOutline]),
  NzFormModule,
  NzLayoutModule,
  NzListModule,
  NzMenuModule,
  NzModalModule,
  NzSliderComponent,
  NzTooltipDirective
]

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    NavigatorComponent,
    Task1AComponent,
    Task1BComponent,
    Task2AComponent,
    Task2BComponent,
    Task3AComponent,
    Task3BComponent,
    Task4AComponent,
    Task4BComponent,
    Task5AComponent,
    Task5BComponent,
    TaskSelectorComponent,
    SummaryComponent,
    PreviewComponent,
    EmployeeCardComponent,
    PermissionDirective
  ],
  imports: [
    ...zorroModules,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MarkdownModule.forRoot(),
    RouterModule,
    FormsModule,
    NzSwitchComponent,
    EncryptPipe,
    NzSelectComponent,
    NzOptionComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
