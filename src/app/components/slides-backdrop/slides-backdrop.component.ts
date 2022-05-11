import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Movies } from 'src/app/interfaces/interfaces';
import { DataMoviesService } from 'src/app/services/data-movies.service';
import { DetailsComponent } from '../details/details.component';


@Component({
  selector: 'app-slides-backdrop',
  templateUrl: './slides-backdrop.component.html',
  styleUrls: ['./slides-backdrop.component.scss'],
})
export class SlidesBackdropComponent implements OnInit {

  @Input() discover: Movies[] = []

  constructor(private modalController: ModalController) { }

  ngOnInit(): void {

  };

  async showDetails(id: number){
    const modal = await this.modalController.create({
      component: DetailsComponent,
      componentProps: {
        id
      }
    })
    modal.present();
    
  }
}
  

