import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'create-todo',
    loadChildren: () =>
      import('./create-todo/create-todo.module').then(
        (m) => m.CreateTodoPageModule
      ),
  },
  {
    path: 'edit-todo/:id',
    loadChildren: () =>
      import('./edit-todo/edit-todo.module').then((m) => m.EditTodoPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
