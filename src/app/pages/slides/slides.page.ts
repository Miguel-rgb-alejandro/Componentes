import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {
ocultar = '';
  slides: { img: string, titulo: string, desc: string } [] = [
{
  img:'/assets/slides/photos.svg.svg',
  titulo: 'comparte fotos',
  desc: 'Mira y comparte increibles fotos de todo el mundo'

},
{
  img:'/assets/slides/music-player-2.svg.svg',
  titulo: 'Escucha Musica',
  desc: 'Toda tu música favorita está aqui'

  
},
{
  img:'/assets/slides/calendar.svg.svg',
  titulo: 'nunca olvides nada',
  desc: 'El mejor calendario del mundo a tu disposición'

  
},
{
  img:'/assets/slides/placeholder-1.svg.svg',
  titulo: 'Tu ubicación',
  desc: 'Siempre sabre donde estas'
  
}
];
  constructor( private navCtrl: NavController) { }

  ngOnInit() {
  }
 onClick(){
  this.ocultar = 'animated fadeOut fast';
  this.navCtrl.navigateBack('/');
 }

}