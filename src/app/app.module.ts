import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LiquidacionesComponent } from './liquidaciones/liquidaciones.component';
import { TarifasComponent } from './tarifas/tarifas.component';
import { NuevaliquidacionComponent } from './nuevaliquidacion/nuevaliquidacion.component';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    LiquidacionesComponent,
    TarifasComponent,
    NuevaliquidacionComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
       { path: '', component: InicioComponent },
      { path: 'liquidaciones', component: LiquidacionesComponent },
      { path: 'tarifas', component: TarifasComponent },
      { path: 'nuevaliquidacion', component: NuevaliquidacionComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
