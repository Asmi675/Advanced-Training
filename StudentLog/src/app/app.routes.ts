import { Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { AddNewComponent } from './add-new/add-new.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent} from './delete/delete.component';
export const routes: Routes = 
[
    // {path:"",redirectTo:"Stud",pathMatch:"full"},
    {path: "Stud", component:StudentsComponent},
    {path:"Add", component: AddNewComponent},
    {path: "List", component: ListComponent},
    {path: "Details",component:DetailsComponent},
    {path: "Delete",component:DeleteComponent},
    {path:"Upd",component:UpdateComponent}

];
