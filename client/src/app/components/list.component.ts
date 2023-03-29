import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Character } from '../models/character';
import { MarvelCharService } from '../services/marvel-char.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy{
  charName =  "";
  param$! :  Subscription;
  characters! : Character[]
  constructor(private activatedRoute: ActivatedRoute, 
    private marvelCharSvc: MarvelCharService, private router: Router){

  }

  ngOnInit(): void {
    this.param$ = this.activatedRoute.params.subscribe(
      async (params) => {
        this.charName = params['charName'];
        console.log(this.charName);
        const l = await this.marvelCharSvc.getCharacters(this.charName, 0, 20);
        console.log(l);
        if (l === undefined || l.length == 0) {
          this.router.navigate(['/'])
        }else{
            this.characters = l;
        }
        
      }
    );

  }


  ngOnDestroy(): void{
    console.log("destroy sub");
    this.param$.unsubscribe();
  }
}