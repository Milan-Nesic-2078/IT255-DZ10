import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-id',
  templateUrl: './form-id.component.html',
  styleUrls: ['./form-id.component.css']
})
export class FormIdComponent implements OnInit {

  public nId: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    let id = parseInt(this.route.snapshot.paramMap.get('id'));

    this.nId = id;

  }

}
