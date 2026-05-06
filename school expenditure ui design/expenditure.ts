import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { BreadcrumbComponent, BreadcrumbItemComponent } from "@coreui/angular";

@Component({
  selector: "app-school-expenditure",
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    BreadcrumbComponent,
    BreadcrumbItemComponent,
  ],
  templateUrl: "./school-expenditure.component.html",
  styleUrl: "./school-expenditure.component.scss",
})
export class SchoolExpenditureComponent {

 

  //  Tabs
  activeTab: "all" | "today" = "all";

  //Data
  expenditureList: any[] = [];

  // Filtered data 
  filteredExpenditureList: any[] = [];

  
  searchText: string = '';


  selectedFilter: string = 'all';

  // Form toggle
  showForm: boolean = false;

  ngOnInit() {
    // initialize filtered list
    this.filteredExpenditureList = this.expenditureList;
  }

  //  Toggle form
  toggleForm() {
    this.showForm = !this.showForm;
  }

  // 🔹Search
  onSearch() {
    const value = this.searchText.toLowerCase();

    this.filteredExpenditureList = this.expenditureList.filter(item =>
      item.description?.toLowerCase().includes(value) ||
      item.amount?.toString().includes(value) ||
      item.date?.toLowerCase().includes(value)
    );
  }
}