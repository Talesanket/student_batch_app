import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentListComponent } from './student-list/student-list.component';
import { BatchListComponent } from './batch-list/batch-list.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { BatchDetailComponent } from './batch-detail/batch-detail.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'students', component: StudentListComponent },
  { path: 'students/:id', component: StudentDetailComponent },
  { path: 'batches', component: BatchListComponent },
  { path: 'batches/:id', component: BatchDetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route to home
  { path: '**', redirectTo: '/home' }  // Wildcard route in case of wrong URL
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
