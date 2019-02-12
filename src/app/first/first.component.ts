import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {



  constructor(private router:Router , private ds : DataService) { }
  SecondPage(name)
  {
    this.router.navigate(['/second/' + name]);
    this.ds.name(name);

  }
  
  ngOnInit() {
  }

}
