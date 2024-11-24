import { Routes } from "@angular/router";
import { VehicleDasboardComponent } from "./pages/vehicle-dasboard/vehicle-dasboard.component";
import { VehicleEditComponent } from "./pages/vehicle-edit/vehicle-edit.component";
import { VehicleDetailComponent } from "./pages/vehicle-detail/vehicle-detail.component";
import { adminRoleGuard } from "@core/guards/admin-role.guard";

export const VEHICLE_ROUTES: Routes = [
  { path: 'detail/:id/edit', component: VehicleEditComponent, canActivate: [adminRoleGuard] },
  { path: 'detail/:id', component: VehicleDetailComponent, canActivate: [adminRoleGuard]},
  { path: 'create', component: VehicleEditComponent, canActivate: [adminRoleGuard]},
  { path: '', component: VehicleDasboardComponent },
];
