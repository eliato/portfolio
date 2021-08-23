import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  show:boolean = false;
  constructor( public infoPaginaService: InfoPaginaService ) { }

  ngOnInit(): void {
  }

 toggleCollapse() {
    this.show = !this.show
  }

  //funcion para que el scroll sea hasta el top
  onDeactivate() {
    document.body.scrollTop = 0;
    // Alternatively, you can scroll to top by using this other call:
    // window.scrollTo(0, 0)
  }

}
