import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  
  getmethod: any = [];
  addItemForm: FormGroup;
  editItemForm: FormGroup;
  selectedItem: any = null;



  constructor(private fb: FormBuilder, private madhu: ApiService, private kumar:ApiService) {
    this.addItemForm = this.fb.group({
      itemName: ['', Validators.required],
    });

    this.editItemForm = this.fb.group({
      itemName: ['', Validators.required],
    });
  }
  
  obser1:any;
  obser(){
    this.madhu.Observable$.subscribe(res=>{
      console.log(res,"this observable");
      this.obser1=res;
    })
  }
  save:any;
  savedata(){
    this.madhu.Observable$.next(this.save);
  }


  ngOnInit() {
    this.getitems();
    this.obser();
  }

  getitems() {
    this.madhu.getusers().subscribe((res) => {
      this.getmethod = res;
    });
  }

  onAddItem() {
    const newItem = { name: this.addItemForm.value.itemName };
    this.madhu.postusers(newItem).subscribe(() => {
      this.getitems();
      this.addItemForm.reset();
    });
  }

  onEditItem(item: any) {
    this.selectedItem = item;
    this.editItemForm.patchValue({ itemName: item.name });
  }

  onUpdateItem() {
    if (this.selectedItem && typeof this.selectedItem.id === 'string') {
      const updatedItem = { name: this.editItemForm.value.itemName };
      this.madhu.putusers(this.selectedItem.id, updatedItem).subscribe(() => {
        this.getitems();
        this.selectedItem = null;
      });
    } else {
      console.error('Invalid selectedItem or ID is not a number');
    }
  }
  

  cancelEdit() {
    this.selectedItem = null;
  }

  deleteitems(id: any) {
    this.madhu.deleteusers(id).subscribe(() => {
      this.getitems();
    });
  }

}
