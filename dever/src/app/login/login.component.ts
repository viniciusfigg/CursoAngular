import { stringify } from '@angular/compiler/src/util';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild("user", { static: true }) user: ElementRef<HTMLInputElement>;
  @ViewChild("pass", { static: true }) pass: ElementRef<HTMLInputElement>;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  login() {

    let usuario = {
      nome: this.user.nativeElement.value,
      senha: this.pass.nativeElement.value
    };

    let listaUsuarios = JSON.parse(sessionStorage.getItem("listaUsuarios"));
    for (let user of listaUsuarios) {
      if (usuario.nome.toLowerCase() == user.nome.toLowerCase() && usuario.senha == user.senha) {
        sessionStorage.setItem("usuario", JSON.stringify({
                                                          nome: user.nome,
                                                          estado: true
                                                          }));

        this.router.navigate(["/main"]);
      }else{
        document.getElementById("alerta").innerHTML="Usuário ou senha inválidos."
        document.getElementById("alerta").style.display = "block";
      }

    }
  }
}
