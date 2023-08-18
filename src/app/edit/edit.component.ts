import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  constructor(private route: ActivatedRoute){}

  ngOnInit(): void{
    const routeid = this.route.snapshot.paramMap.get('id');
    console.log(routeid);
  }

}
