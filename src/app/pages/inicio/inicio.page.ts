import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/interfaces/interfaces';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Observable<Componente[]>;

  constructor( private menuCtrl: MenuController,
               private DataService: DataService) { }

  ngOnInit() {

    this.componentes = this.DataService.getMenuOpts();
  
  }

  toggleMenu(){
     this.menuCtrl.toggle();
  }


}


