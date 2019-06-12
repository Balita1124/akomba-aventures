import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {error} from '@angular/compiler/src/util';

@Component({
  selector: 'app-excursion',
  templateUrl: './excursion.component.html',
  styleUrls: ['./excursion.component.css']
})
export class ExcursionComponent implements OnInit {

  excursion: Excursion;
  isDataAvailable = false;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    console.log('===In Excusion component===');
    this.getData(this.route.snapshot.params.url).subscribe(hero => this.excursion = hero);
    console.log(this.excursion);
    if (!this.excursion) {
      this.router.navigateByUrl('404', {skipLocationChange: true});
    }
    this.isDataAvailable = true;
  }

  getData(url): Observable<Excursion> {
    return of(EXCURSION.find(ex => ex.url === url));
  }

}

export class Excursion {
  url: string;
  title: string;
  alias: string;
  description: string;
  imageUrl1: string;
  imageUrl2: string;
  imageUrl3: string;
}

export const EXCURSION: Excursion[] = [
  {
    url: 'nosy-sakatia',
    title: 'Nosy sakatia',
    alias: 'Iles aux orchidées',
    imageUrl1: 'assets/img/sakatia-16-9.jpg',
    imageUrl2: 'assets/img/sakatia-16-9-2.jpg',
    imageUrl3: 'assets/img/sakatia-16-9-3.jpg',
    description: 'Nosy Sakatia se situe sur la cote ouest de Nosy Be. Aussi appelée Iles aux orchidées, l’ile est classée au\n' +
      '            patrimoine de l’environnement. Elle abrite les grandes tortues vertes âgées de plusieurs dizaines d’années.\n' +
      '            Ces derniers se laisseront approcher d’assez prés. Et si la chance est au rendez-vous, des dauphins viendront\n' +
      '            vous saluer lors de votre visite.'
  }
];
