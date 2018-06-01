import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProblemListComponent } from './components/problem-list/problem-list.component';
import { ProblemDetailComponent} from './components/problem-detail/problem-detail.component';
import { DataService } from './services/data.service';
import { AuthService } from './services/auth.service';
import { AuthGuardService} from './services/auth-guard.service'
import { InputService } from './services/input.service'
import { CollaborationService } from './services/collaboration.service'
import { routing } from './app.routes';
import { NewProblemComponent } from './components/new-problem/new-problem.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpModule } from '@angular/http';
import {ProfileComponent} from "./components/profile/profile.component";
import { EditorComponent } from './components/editor/editor.component';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProblemListComponent,
    ProfileComponent,
    ProblemDetailComponent,
    NewProblemComponent,
    NavbarComponent,
    EditorComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule,
    ReactiveFormsModule

  ],
  providers: [{
    provide: 'data',
    useClass: DataService
  },
    {
      provide: 'auth',
      useClass: AuthService
    },
    {
      provide: 'authGuard',
      useClass: AuthGuardService
    },
    {
      provide: 'collaboration',
      useClass: CollaborationService
    },
    {
      provide: 'input',
      useClass: InputService
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
