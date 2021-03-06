import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { BreadcrumsComponent } from "./breadcrums/breadcrums.component";
import { SidebarComponent } from "./sidebar/sidebar.component";

@NgModule ({
	declarations: [
		HeaderComponent,
    	SidebarComponent,
    	BreadcrumsComponent
	],
	exports: [
		HeaderComponent,
    	SidebarComponent,
    	BreadcrumsComponent
	]
})

export class SharedModule { }