import { GenericoModel } from "../models/generico.model";

export const PAGINACION: GenericoModel[] = [
  { id: 10, name: "10" },
  { id: 25, name: "25" },
  { id: 50, name: "50" },
];

export const ANIOS: GenericoModel[] = [
  { id: 1, name: "2023" },
  { id: 2, name: "2022" },
  { id: 3, name: "2021" },
];

export const TIEMPO: GenericoModel[] = [
  { id: 1, name: "Últimos 30 días" },
  { id: 2, name: "Últimos 90 días" },
  { id: 3, name: "Mensual" },
  { id: 4, name: "Semestral" },
  { id: 5, name: "Trimestral" },
  { id: 6, name: "Anual" },
];

export const MESES: GenericoModel[] = [
  { id: 1, name: "Noviembre" },
  { id: 2, name: "Octubre" },
  { id: 3, name: "Setiembre" },
];

export const ESTADOS: GenericoModel[] = [
  { id: 1, name: "Todos" },
  { id: 2, name: "Activo" },
  { id: 3, name: "Inactivo" },
];

export const LISTADOCONDICIONES: GenericoModel[] = [
  { id: 1, name: "Día laborable" },
  { id: 2, name: "Descanso" },
];

export const LISTADOPROVEEDORES: GenericoModel[] = [
  { id: 0, name: "Todos" },
  { id: 1, name: "Xiaomi" },
  { id: 2, name: "Fitbit" },
];

export const LISTADOROLES: GenericoModel[] = [
  { id: 0, name: "Seleccionar" },
  { id: 1, name: "Administrador" },
  { id: 2, name: "Helpdesk" },
  { id: 3, name: "contrata" },
  { id: 4, name: "sede" },
  { id: 5, name: "cliente" },
];

export const LISTADOROLESFILTRO: GenericoModel[] = [
  { id: 0, name: "todos" },
  { id: 1, name: "Administrador" },
  { id: 2, name: "Helpdesk" },
  { id: 3, name: "contrata" },
  { id: 4, name: "sede" },
  { id: 5, name: "cliente" },
];

export const LISTADOEMPRESAS: GenericoModel[] = [
  { id: 0, name: "TODOS" },
  { id: 1, name: "COSAPI" },
  { id: 2, name: "LINEA" },
  { id: 3, name: "PRIMAX" },
  { id: 4, name: "MOTA ENGIL" },
  { id: 5, name: "SAN RAFAEL" },
  { id: 6, name: "FAMESA" },
  { id: 7, name: "JJC" },
  { id: 8, name: "CLINICA INTERNACIONAL" },
  { id: 9, name: "ECOP S.A.C" },
  { id: 10, name: "ANGLOAMERICAN" },
  { id: 11, name: "HUDBAY" },
  { id: 12, name: "AMBIPAR" },
  { id: 13, name: "STRACON" },
  { id: 14, name: "AJANI" },
  { id: 15, name: "OSS-Primax Peru" },
];

export const LISTADOCONFIGURACION: GenericoModel[] = [
  { id: 0, name: "Sede" },
  { id: 1, name: "Oficina" },
  { id: 2, name: "Grupo" },
];

export const LISTADODIAS: GenericoModel[] = [
  { id: 0, name: "Domingo", state: false },
  { id: 1, name: "Lunes", state: false },
  { id: 2, name: "Martes", state: false },
  { id: 3, name: "Miércoles", state: false },
  { id: 4, name: "Jueves", state: false },
  { id: 5, name: "Viernes", state: false },
  { id: 6, name: "Sábado", state: false },
];

export const LISTAPROGRAMAS: GenericoModel[] = [
  { id: 0, name: "Seleccione" },
  { id: 1, name: "LTS" },
  { id: 2, name: "BRIDGE" }
];

export const LISTASUBPROGRAMAS: GenericoModel[] = [
  { id: 0, name: "Seleccione" },
  { id: 1, name: "1.1 Regular" },
  { id: 2, name: "1.2 Alto Rendimiento" }
];

export const LISTATIPOCALENDARIO: GenericoModel[] = [
  { id: 1, name: "Mensual" },
  { id: 2, name: "Semanal" }
];

export const LISTANIVELES: GenericoModel[] = [
  { id: 0, name: 'Seleccione', tipo: 2, state: true },
  { id: 1, name: 'BRIDGE > Advance', tipo: 2, state: true },
  { id: 2, name: 'BRIDGE > Básico', tipo: 2, state: true },
  { id: 3, name: 'BRIDGE > ESPACIO LIBRE', tipo: 2, state: true },
  { id: 4, name: 'BRIDGE > Free Skate', tipo: 2, state: true },
  { id: 5, name: 'Free Practice', tipo: 1, state: true },
  { id: 6, name: 'LTS > Basicos', tipo: 1, state: true },
  { id: 7, name: 'LTS > ESPACIO LIBRE', tipo: 1, state: true },
  { id: 8, name: 'LTS > Inclusivos', tipo: 1, state: true },
  { id: 9, name: 'LTS > Intermedios', tipo: 1, state: true },
  { id: 10, name: 'LTS > Nuevos', tipo: 1, state: true },
  { id: 11, name: 'Lugar > Pista', tipo: 1, state: true }
];

export const LISTASUBNIVELES: GenericoModel[] = [
  { id: 0, name: 'Seleccione', tipo: 2, state: true },
  { id: 1, name: 'BRIDGE > Básico B Kids', tipo: 2, state: true },
  { id: 2, name: 'BRIDGE > Básicos A', tipo: 2, state: true },
  { id: 3, name: 'BRIDGE > Básicos A FDS', tipo: 2, state: true },
  { id: 4, name: 'BRIDGE > Básicos A Kids', tipo: 2, state: true },
  { id: 5, name: 'BRIDGE > Básicos B', tipo: 2, state: true },
  { id: 6, name: 'BRIDGE > Básicos B FDS', tipo: 2, state: true },
  { id: 7, name: 'BRIDGE > Free Skate A (Lu-Mi-Sa)', tipo: 4, state: true },
  { id: 8, name: 'BRIDGE > Free Skate A (Mi-Sa-Do)', tipo: 4, state: true },
  { id: 9, name: 'BRIDGE > Free Skate B (Lu-Mi-Do)', tipo: 4, state: true },
  { id: 10, name: 'BRIDGE > Free Skate B (Lu-Mi-Sa)', tipo: 4, state: true },
  { id: 11, name: 'LTS > Nuevos Mayo 2024', tipo: 10, state: true },
  { id: 12, name: 'LTS > Nuevos Adultos', tipo: 10, state: true },
  { id: 13, name: 'LTS > Nuevos KIds', tipo: 10, state: true }
];

export const LISTAHORARIOS: GenericoModel[] = [
  { id: 1, name: "FREE PRACTICE 01/04/2024 5:00-7:00" },
  { id: 2, name: "Free practice Coaches 01/04/2024 7:00-8:30" },
  { id: 3, name: "FREE PRACTICE 01/04/2024 8:30-10:15" },
  { id: 4, name: "espacio libre hielo 01/04/2024 15:45-16:30" },
  { id: 5, name: "ON ICE BRIDGE BASICOS KIDS B 01/04/2024 16:30-17:15" },
  { id: 6, name: "ON ICE BRIDGE BASICOS KIDS A 01/04/2024 16:30-17:15" },
  { id: 7, name: "ON ICE BRIDGE BASICOS A 01/04/2024 17:15-18:00" },
  { id: 8, name: "ON ICE BRIDGE BASICOS B 01/04/2024 17:15-18:00" },
  { id: 9, name: "BALLET 01/04/2024 17:30-18:15" },
  { id: 0, name: "On Ice Jumps Free Skate B (Lu-Mi-Sa) 01/04/2024 18:00-19:00" }
];

export const LISTADOMESES: GenericoModel[] = [
  { id: 0, name: "Seleccione" },
  { id: 1, name: "Enero" },
  { id: 2, name: "Febrero" },
  { id: 3, name: "Marzo" },
  { id: 4, name: "Abril" },
  { id: 5, name: "Mayo" },
  { id: 6, name: "Junio" },
  { id: 7, name: "Julio" },
  { id: 8, name: "Agosto" },
  { id: 9, name: "Setiembre" },
  { id: 10, name: "Octubre" },
  { id: 11, name: "Noviembre" },
  { id: 12, name: "Diciembre" },
];

export const LISTACLUBES: GenericoModel[] = [
  { id: 0, name: "Seleccione" },
  { id: 1, name: "Club Natación" },
  { id: 2, name: "Club Patinaje" }
];

export const LISTABANCO: GenericoModel[] = [
  { id: 0, name: "Seleccione" },
  { id: 1, name: "Banco de Crédito" },
  { id: 2, name: "BBVA Continental" },
  { id: 3, name: "Interbank" },
  { id: 4, name: "Scotiabank Perú" }
];

export const LISTATIPOCUENTA: GenericoModel[] = [
  { id: 0, name: "Seleccione" },
  { id: 1, name: "Cuenta de Ahorros" },
  { id: 2, name: "Cuenta Corriente" },
  { id: 3, name: "Cuenta Mancomunada" }
];

export const LISTATIPOMONEDA: GenericoModel[] = [
  { id: 0, name: "Seleccione" },
  { id: 1, name: "Soles" },
  { id: 2, name: "Dólares" },
  { id: 3, name: "Euros" }
];

export const LISTATIPODOCUMENTO: GenericoModel[] = [
  { id: 0, name: "Seleccione" },
  { id: 1, name: "DNI" },
  { id: 2, name: "Carnet Extranjería" }
];