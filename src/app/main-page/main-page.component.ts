import { Component, OnInit } from '@angular/core';
import { BudgetItem } from 'src/shared/module/budget-item';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
budgetItem: BudgetItem[] = new Array<BudgetItem>()
totalBudget: number = 0
  constructor() { }

  ngOnInit(): void {
  }
  // Add Transaction in the history
  addItem(newItem: BudgetItem){
    this.budgetItem.push(newItem)
    this.totalBudget += newItem.amount
  }

  // Deleted item in the array using splice method 
  
  deleteItem(item: BudgetItem){
    let index = this.budgetItem.indexOf(item)
    this.budgetItem.splice(index,1)
    this.totalBudget -= item.amount
  }
}
