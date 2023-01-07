import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'contact',
    pathMatch: 'full'
  },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        children: [
        
          {
            path: 'account',
            loadChildren: () =>
              import('../avatar/avatar-routing.module').then(m => m.AvatarPageRoutingModule)
          },
          
          {
            path: '',
            children: [

              {
                path: 'contact',
                loadChildren: () =>
                    import('../list/list-routing.module').then(m => m.ListPageRoutingModule)
              }

            ]
          },
          {
            path: '',
            children: [

              {
                path: 'settings',
                loadChildren: () =>
                    import('../infinite-scroll/infinite-scroll.module').then(m => m.InfiniteScrollPageModule)
              }

            ]
          }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
