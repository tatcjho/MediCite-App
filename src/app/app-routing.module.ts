import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  {
    path: 'welcome',
    loadChildren: './welcome/welcome.module#WelcomePageModule'
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  {
    path: 'register',
    loadChildren: './register/register.module#RegisterPageModule'
  },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  {
    path: 'account',
    loadChildren: './account/account.module#AccountPageModule'
  },
  {
    path: 'schedule',
    loadChildren: './schedule/schedule.module#SchedulePageModule'
  },
  {
    path: 'news',
    loadChildren: './news/news.module#NewsPageModule'
  },
  {
    path: 'marketplace',
    loadChildren: './marketplace/marketplace.module#MarketplacePageModule'
  },
  {
    path: 'notifications',
    loadChildren: './notifications/notifications.module#NotificationsPageModule'
  },
  {
    path: 'videos',
    loadChildren: './videos/videos.module#VideosPageModule'
  },
  {
    path: 'assistant',
    loadChildren: './assistant/assistant.module#AssistantPageModule'
  },
  {
    path: 'referrals',
    loadChildren: './referrals/referrals.module#ReferralsPageModule'
  },
  {
    path: 'wallet',
    loadChildren: './wallet/wallet.module#WalletPageModule'
  },
  { path: 'error', loadChildren: './error/error.module#ErrorPageModule' },
  /*revisar como hacer un meto de mostrar la pagina 404*/
  // tslint:disable-next-line:max-line-length
  { path: 'medicamento-detalle', loadChildren: './medicamento-detalle/medicamento-detalle.module#MedicamentoDetallePageModule' },
  { path: 'receta', loadChildren: './receta/receta.module#RecetaPageModule' },
  { path: 'diagnostico', loadChildren: './diagnostico/diagnostico.module#DiagnosticoPageModule' },
  { path: 'certificado', loadChildren: './certificado/certificado.module#CertificadoPageModule' },
  { path: 'archivo', loadChildren: './archivo/archivo.module#ArchivoPageModule' },
  { path: 'expediente', loadChildren: './expediente/expediente.module#ExpedientePageModule' },
  { path: 'factura', loadChildren: './factura/factura.module#FacturaPageModule' },
  { path: 'caja-diario', loadChildren: './caja-diario/caja-diario.module#CajaDiarioPageModule' },
  { path: 'reporte', loadChildren: './reporte/reporte.module#ReportePageModule' },
  { path: 'pacientes', loadChildren: './pacientes/pacientes.module#PacientesPageModule' },
  // tslint:disable-next-line:max-line-length
  { path: 'crear-consulta', loadChildren: './consulta/crear-consulta/crear-consulta.module#CrearConsultaPageModule' },
  { path: 'crear-medicamento', loadChildren: './medicamentos/crear-medicamento/crear-medicamento.module#CrearMedicamentoPageModule' },
  { path: 'listar-medicamento', loadChildren: './medicamentos/listar-medicamento/listar-medicamento.module#ListarMedicamentoPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
