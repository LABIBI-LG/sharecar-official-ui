import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { STATIC_ROUTES } from './core/constant/routes.constant';

const routes: Routes = [
  /**首頁 */
  {
    path: '',
    loadComponent: () => import('./pages/page-home/page-home.component')
      .then(c => c.PageHomeComponent)
  },
  /**樣板頁 */
  {
    path: STATIC_ROUTES.TEMPLATE,
    loadComponent: () => import('./pages/page-template/page-template.component')
      .then(c => c.PageTemplateComponent)
  },
  /**服務說明頁 */
  {
    path: STATIC_ROUTES.DESCRIPTION,
    loadComponent: () => import('./pages/page-description/page-description.component')
      .then(c => c.PageDescriptionComponent)
  },
  /**據點查詢頁 */
  {
    path: STATIC_ROUTES.AREA_QUERY,
    loadComponent: () => import('./pages/page-area-query/page-area-query.component')
      .then(c => c.PageAreaQueryComponent)
  },
  /**Q&A */
  {
    path: STATIC_ROUTES.FAQ,
    loadComponent: () => import('./pages/page-faq/page-faq.component')
      .then(c => c.PageFaqComponent)
  },
  /**聯絡我們 */
  {
    path: STATIC_ROUTES.CONTACT,
    loadComponent: () => import('./pages/page-contact/page-contact.component')
      .then(c => c.PageContactComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
