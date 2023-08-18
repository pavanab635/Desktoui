import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  constructor(private route: ActivatedRoute){}

  ngOnInit(): void{
    const routeid = this.route.snapshot.paramMap.get('id');
    console.log(routeid);
  }

}
