import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss']
})
  export class ThirdComponent {

  ageage : number;
  name : string;
  message : string;

  constructor(private router:Router , private route : ActivatedRoute , private ds : DataService) 
  {
    this.ageage = this.route.snapshot.params['age'];
    this.name = this.ds.namename;

    console.log(""+this.ageage);

     if( this.ageage >= 18 )
   {
     this.message = ("Congratulations " + this.name +  "! You can vote!"); 
   } else {
     this.message =( "Sorry " + this.name + "! You cannot vote!");
   }
  }

   first()
   {
     this.router.navigate(['/first/']);
   }

  


}
