import { Component, OnInit} from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})

export class SecondComponent implements OnInit {


  username:string;
  age:number;

  constructor(private router : ActivatedRoute , private route : Router) {
    this.username=this.router.snapshot.params['name'];
   }
   checkVote(age)
   {
   this.route.navigate(['/third/' + age]);
  
   }

  ngOnInit() {
  }

}
