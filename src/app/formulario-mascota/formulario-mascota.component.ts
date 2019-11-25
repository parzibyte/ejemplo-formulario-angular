import { Component, OnInit } from "@angular/core";
import { Mascota } from "../mascota";

@Component({
  selector: "app-formulario-mascota",
  templateUrl: "./formulario-mascota.component.html",
  styleUrls: ["./formulario-mascota.component.css"]
})
export class FormularioMascotaComponent implements OnInit {
  // El modelo ligado al formulario, por defecto vacío
  mascotaModel = new Mascota("", "", undefined);

  constructor() {}

  ngOnInit() {}

  formularioEnviado(){
    /*
    Aquí el formulario ha sido enviado, ya sea
    por presionar el botón, presionar Enter, etcétera
    */
    console.log("El formulario fue enviado y la mascota es: ", this.mascotaModel)
    alert("Enviado");
  }
}
