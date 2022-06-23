import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavComponent } from './shared/nav/nav.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { CommentiformPage } from './commenti/commentiform/commentiform.page';
import { AuthInterceptor } from './shared/auth.interceptor';
import { ErrorIntercept } from './shared/error.interceptor';
import { AuthGuard } from './auth/auth.guard';
@NgModule({
  declarations: [AppComponent, NavComponent, ToolbarComponent, CommentiformPage],
  entryComponents: [CommentiformPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, HttpClientModule],


  providers: [
    // {
    //   provide: RouteReuseStrategy,
    //   useClass: IonicRouteStrategy ,
    //   multi: true
    // },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorIntercept,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {

}

