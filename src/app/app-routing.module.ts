import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// layouts
import { AdminComponent } from "./layouts/admin/admin.component";
import { AuthComponent } from "./layouts/auth/auth.component";

// admin views
import { DashboardComponent } from "./views/admin/dashboard/dashboard.component";
import { MapsComponent } from "./views/admin/maps/maps.component";

// auth views
import { LoginComponent } from "./views/auth/login/login.component";

// no layouts views
import { IndexComponent } from "./views/index/index.component";
import { LandingComponent } from "./views/landing/landing.component";
import { ProfileComponent } from "./views/profile/profile.component";
import { SamComponent } from "./views/profile/sam.component";
import { AnnaComponent } from "./views/profile/anna.component";
import { MattComponent } from "./views/profile/matt.component";
import { TaylorComponent } from "./views/profile/taylor.component";
import { JordanComponent } from "./views/profile/jordan.component";
import { GodfatherComponent } from "./views/profile/godfather.component";
import { JoshComponent } from "./views/profile/josh.component";
import { DougComponent } from "./views/profile/doug.component";

const routes: Routes = [
  // admin views
  {
    path: "admin",
    component: AdminComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "maps", component: MapsComponent },
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
    ],
  },
  // auth views
  {
    path: "auth",
    component: AuthComponent,
    children: [
      { path: "login", component: LoginComponent },
      { path: "", redirectTo: "login", pathMatch: "full" },
    ],
  },
  { path: "profile", component: ProfileComponent },
  { path: "profile/sam", component: SamComponent },
  { path: "profile/doug", component: DougComponent },
  { path: "profile/josh", component: JoshComponent },
  { path: "profile/taylor", component: TaylorComponent },
  { path: "profile/anna", component: AnnaComponent },
  { path: "profile/godfather", component: GodfatherComponent },
  { path: "profile/jordan", component: JordanComponent },
  { path: "profile/matt", component: MattComponent },
  { path: "landing", component: LandingComponent },
  { path: "", component: IndexComponent },
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
