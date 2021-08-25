import { Component, OnInit,Input,ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { InfoPagina } from '../../interfaces/info-pagina.interface';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @ViewChild('nombre') nameInput: ElementRef;
  @ViewChild('email') emailInput: ElementRef;
  @ViewChild('message') messageInput: ElementRef;
  @ViewChild('subject') subjectInput: ElementRef;
  
  info: InfoPagina = {};
  endpoint : string;
  mensaje = false;
  alert = false;
  mensaje_alerta:string;

  constructor(private http: HttpClient ) { 
    this.http = http;
  }

  ngOnInit(): void {


    this.endpoint = "https://etdevelopers.net/send_email/index.php";
  }

  onSubmit(event: any) {
    console.log(event.target.name.value);
 }

  sendEmail(){

    if (this.nameInput.nativeElement.value == '') {
      this.alert = true;
      this.mensaje_alerta = 'Name is Required'
    }else if(this.emailInput.nativeElement.value == ''){
      this.alert = true;
      this.mensaje_alerta = 'Email is Required'
    }else if(this.messageInput.nativeElement.value == ''){
      this.alert = true;
      this.mensaje_alerta = 'Message is Required'
    }else{
            let postVars = {
              email   : this.emailInput.nativeElement.value,
              name    : this.nameInput.nativeElement.value,
              message : this.messageInput.nativeElement.value,
              subject : this.subjectInput.nativeElement
            };

            //You may also want to check the response. But again, let's keep it simple.
            this.http.post(this.endpoint, postVars)
                .subscribe(
                    (response : InfoPagina)=> {
                      console.log(response.mensaje)
                      if (response.mensaje) {
                        this.mensaje = true;
                        this.emailInput.nativeElement.value = '';
                        this.nameInput.nativeElement.value= '';
                        this.subjectInput.nativeElement.value= '';
                        this.messageInput.nativeElement.value= '';
                      }
                    }           

            )
          }
  }

}
