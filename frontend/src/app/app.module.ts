import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {HttpModule, Http, RequestOptions} from "@angular/http";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ToastModule} from "ng2-toastr";
import {appRoutes} from "./app.routes";
import {AppComponent} from "./app.component";
import {AuthHttp, AuthConfig} from "angular2-jwt";
import {CacheService} from "ionic-cache/ionic-cache";
import {
  PrivatePageGuard,
  PublicPageGuard,
  AdminPageGuard,
  RequestService,
  RecoverService,
  AuthService,
  UserService,
  UserPageGuard,
  ManagerPageGuard
} from "./service/barrel";
import {FooterComponent, NavbarComponent, NoContentComponent, SideBarComponent} from "./components/barrel";
import {GravatarModule} from "./shared/gravatar/gravatar.module";
import {SideBarDirective} from "./directive/sidebar.directive";
import {RoleService} from "./service/role.service";
import {TopicService} from "./service/topic.service";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    NoContentComponent,
    SideBarComponent,
    SideBarDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    GravatarModule,
    ToastModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    TopicService,
    UserService,
    RoleService,
    AuthService,
    CacheService,
    PrivatePageGuard,
    PublicPageGuard,
    AdminPageGuard,
    RequestService,
    RecoverService,
    ManagerPageGuard,
    UserPageGuard,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig(), http, options);
}
