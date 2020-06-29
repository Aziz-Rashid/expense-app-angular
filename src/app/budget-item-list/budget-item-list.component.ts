import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {BudgetItem} from '../../shared/module/budget-item'

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.css']
})
export class BudgetItemListComponent implements OnInit {
  @Input() budgetItem: BudgetItem[];
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>()
  constructor() { }

  ngOnInit(): void {
  }
  // Delete transaction function 
  onDelete(item: BudgetItem){
    this.delete.emit(item)
  }

}
