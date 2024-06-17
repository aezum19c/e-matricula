import { MenuModel } from "./sidebar.model";

export const MENU: MenuModel[] = [
  {
    name: "REGISTRO",
    active: true,
    items: [
      {
        name: "Matriculados",
        url: "matricula",
        icon: "layers",
        active: true,
        items: undefined
      }
    ]
  },
  {
    name: "CONFIGURACION",
    active: true,
    items: [
      {
        name: "Club",
        url: "club",
        icon: "zap",
        active: true,
        items: undefined
      },
      {
        name: "Deportistas",
        url: "deportistas",
        icon: "user",
        active: true,
        items: undefined
      },
      {
        name: "Tutores",
        url: "tutores",
        icon: "users",
        active: true,
        items: undefined
      }
    ]
  },
  /*{
    name: "General",
    active: true,
    items: [
      {
        name: "Estadísticas",
        url: "estadisticas",
        icon: "pie-chart",
        active: true,
        items: undefined,
      },
      {
        name: "Monitoreo",
        url: "monitoreo",
        icon: "activity",
        active: true,
        items: undefined,
      },
      {
        name: "Reportes",
        url: "reportes",
        icon: "bar-chart-2",
        active: true,
        items: undefined,
      },
    ],
  },
  {
    name: "Configuración",
    active: true,
    items: [
      {
        name: "Empresas",
        url: "empresas",
        icon: "home",
        active: true,
        items: [
          {
            name: "Sedes",
            url: "sedes",
            icon: "git-commit",
            active: true,
          },
          {
            name: "Oficinas",
            url: "oficinas",
            icon: "git-commit",
            active: true,
          },
          {
            name: "Grupos",
            url: "grupos",
            icon: "git-commit",
            active: true,
          },
          {
            name: "Programaciones",
            url: "programacion",
            icon: "git-commit",
            active: true,
          },
        ],
      },
      {
        name: "Turnos",
        url: "turnos",
        icon: "clock",
        active: true,
        items: undefined,
      },
      {
        name: "Operarios",
        url: "operarios",
        icon: "users",
        active: true,
        items: undefined,
      },
      {
        name: "Dipositivos",
        url: "dispositivos",
        icon: "watch",
        active: true,
        items: undefined,
      },
    ],
  },
  {
    name: "Mantenimiento",
    active: true,
    items: [
      {
        name: "Usuarios",
        url: "usuarios",
        icon: "user",
        active: true,
        items: undefined,
      },
      {
        name: "Roles",
        url: "roles",
        icon: "key",
        active: true,
        items: undefined,
      },
      {
        name: "Módulos",
        url: "modulos",
        icon: "layers",
        active: true,
        items: undefined,
      },
      {
        name: "Dominios",
        url: "dominios",
        icon: "globe",
        active: true,
        items: undefined,
      },
      {
        name: "Proveedores",
        url: "proveedores",
        icon: "truck",
        active: true,
        items: undefined,
      },
    ],
  },*/
];
