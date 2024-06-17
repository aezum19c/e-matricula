import { TutorModel } from "../../tutores/model/tutor.model";
import { DeportistaModel } from "../model/deportista.model";

export const LISTADODEPORTISTAS: DeportistaModel[] = [
  {
    codigo: "D0001",
    nombre: "Julio Bendezú Cutipa",
    tipoDocumento: "DNI",
    numeroDocumento: "60502032",
    fechaNacimiento: "15/05/2005",
    correo: "julio1120@gmail.com",
    celular: "932658745",
    club: "Club de Natación",
    tutores: "Tutor Principal, Tutor Secundario",
    estado: true
  },
  {
    codigo: "D0002",
    nombre: "Ernesto Baldeon Meneses",
    tipoDocumento: "DNI",
    numeroDocumento: "70405232",
    fechaNacimiento: "04/07/2003",
    correo: "baldeon.peru@gmail.com",
    celular: "978451254",
    club: "Club de Patinaje",
    tutores: "Tutor Principal",
    estado: true
  },
];