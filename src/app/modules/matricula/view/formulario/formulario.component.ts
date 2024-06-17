import { Component, LOCALE_ID, inject, signal } from '@angular/core';
import { GenericoModel } from 'src/app/core/models/generico.model';
import { LISTAHORARIOS, LISTANIVELES, LISTAPROGRAMAS, LISTASUBNIVELES, LISTASUBPROGRAMAS, LISTATIPOCALENDARIO } from 'src/app/core/utils/generico';
import { ModalConstants } from "src/app/shared/modal/modal";
import { Alert } from "src/app/shared/alert/alert.model";
import { AlertService } from "src/app/shared/alert/alert.service";
import { Modal } from "src/app/shared/modal/modal.model";
import { CalendarDateFormatter, CalendarEvent, CalendarEventTimesChangedEvent, CalendarView } from 'angular-calendar';
import { Subject } from 'rxjs';
import { addDays, isSameDay, isSameMonth, startOfDay, subDays } from 'date-fns';
import { CustomDateParserFormatter } from 'src/app/core/utils/calendar.util';
import localeEs from '@angular/common/locales/es';
import localeEsExtra from '@angular/common/locales/extra/es';
import { registerLocaleData } from '@angular/common';
import { EventColor } from 'calendar-utils';

const colors: Record<string, EventColor> = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
  green: {
    primary: '#0CAA4A',
    secondary: '#E8FDE7',
  },
};

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
  providers: [
    {
      provide: CalendarDateFormatter,
      useClass: CustomDateParserFormatter,
    },
    {
      provide: LOCALE_ID,
      useValue: 'es-PE'
    }
  ]
})
export class FormularioComponent {
  active = 1;
  programaSelect = 0;
  subprogramaSelect = 0;
  nivelSelect = 0;
  subnivelSelect = 0;
  tipoCalendario = 1;
  horarioSelect = 0;

  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  viewDate: Date = new Date();
  events: CalendarEvent[] = [];
  /*[
    {
      start: new Date(2024, 5, 7, 16, 30, 0), //subDays(startOfDay(new Date()), 1),
      end: new Date(2024, 5, 7, 17, 30, 0), //addDays(new Date(), 1),
      title: 'Clase: Baile, Lugar: Sala, Horario: 16:30-17:30',
      color: { ...colors['red'] }
      / *actions: this.actions,
      allDay: true,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: false,* /
    },
    { start: new Date(2024, 5, 9, 16, 30, 0), end: new Date(2024, 5, 9, 17, 30, 0), title: 'Clase: Baile, Lugar: Sala, Horario: 16:30-17:30', color: { ...colors['red'] } },
    { start: new Date(2024, 5, 11, 7, 15, 0), end: new Date(2024, 5, 11, 8,  0, 0), title: 'Clase: Prepa física, Lugar: Sala, Horario: 07:15-08:00', color: { ...colors['yellow'] } },
    { start: new Date(2024, 5, 11, 8, 45, 0), end: new Date(2024, 5, 11, 9, 30, 0), title: 'Clase: On Ice Bridge Básicos A FDS, Lugar: Sala, Horario: 08:45-09:30', color: { ...colors['blue'] } },
    { start: new Date(2024, 5, 11, 9, 45, 0), end: new Date(2024, 5, 11, 10, 30, 0), title: 'Clase: Ballet, Lugar: Grass, Horario: 09:45-10:30', color: { ...colors['green'] } },
    { start: new Date(2024, 5, 12, 7, 15, 0), end: new Date(2024, 5, 12, 8,  0, 0), title: 'Clase: Prepa física, Lugar: Sala, Horario: 07:15-08:00', color: { ...colors['yellow'] } },
    { start: new Date(2024, 5, 12, 8, 45, 0), end: new Date(2024, 5, 12, 9, 30, 0), title: 'Clase: On Ice Bridge Básicos A FDS, Lugar: Sala, Horario: 08:45-09:30', color: { ...colors['blue'] } },
    { start: new Date(2024, 5, 12, 9, 45, 0), end: new Date(2024, 5, 12, 10, 30, 0), title: 'Clase: Ballet, Lugar: Grass, Horario: 09:45-10:30', color: { ...colors['green'] } },
    { start: new Date(2024, 5, 14, 16, 30, 0), end: new Date(2024, 5, 14, 17, 30, 0), title: 'Clase: Baile, Lugar: Sala, Horario: 16:30-17:30', color: { ...colors['red'] } },
    { start: new Date(2024, 5, 16, 16, 30, 0), end: new Date(2024, 5, 16, 17, 30, 0), title: 'Clase: Baile, Lugar: Sala, Horario: 16:30-17:30', color: { ...colors['red'] } },
    { start: new Date(2024, 5, 18, 7, 15, 0), end: new Date(2024, 5, 18, 8,  0, 0), title: 'Clase: Prepa física, Lugar: Sala, Horario: 07:15-08:00', color: { ...colors['yellow'] } },
    { start: new Date(2024, 5, 18, 8, 45, 0), end: new Date(2024, 5, 18, 9, 30, 0), title: 'Clase: On Ice Bridge Básicos A FDS, Lugar: Sala, Horario: 08:45-09:30', color: { ...colors['blue'] } },
    { start: new Date(2024, 5, 18, 9, 45, 0), end: new Date(2024, 5, 18, 10, 30, 0), title: 'Clase: Ballet, Lugar: Grass, Horario: 09:45-10:30', color: { ...colors['green'] } },
    { start: new Date(2024, 5, 19, 7, 15, 0), end: new Date(2024, 5, 19, 8,  0, 0), title: 'Clase: Prepa física, Lugar: Sala, Horario: 07:15-08:00', color: { ...colors['yellow'] } },
    { start: new Date(2024, 5, 19, 8, 45, 0), end: new Date(2024, 5, 19, 9, 30, 0), title: 'Clase: On Ice Bridge Básicos A FDS, Lugar: Sala, Horario: 08:45-09:30', color: { ...colors['blue'] } },
    { start: new Date(2024, 5, 19, 9, 45, 0), end: new Date(2024, 5, 19, 10, 30, 0), title: 'Clase: Ballet, Lugar: Grass, Horario: 09:45-10:30', color: { ...colors['green'] } },
    { start: new Date(2024, 5, 21, 16, 30, 0), end: new Date(2024, 5, 21, 17, 30, 0), title: 'Clase: Baile, Lugar: Sala, Horario: 16:30-17:30', color: { ...colors['red'] } },
    { start: new Date(2024, 5, 23, 16, 30, 0), end: new Date(2024, 5, 23, 17, 30, 0), title: 'Clase: Baile, Lugar: Sala, Horario: 16:30-17:30', color: { ...colors['red'] } },
    { start: new Date(2024, 5, 25, 7, 15, 0), end: new Date(2024, 5, 25, 8,  0, 0), title: 'Clase: Prepa física, Lugar: Sala, Horario: 07:15-08:00', color: { ...colors['yellow'] } },
    { start: new Date(2024, 5, 25, 8, 45, 0), end: new Date(2024, 5, 25, 9, 30, 0), title: 'Clase: On Ice Bridge Básicos A FDS, Lugar: Sala, Horario: 08:45-09:30', color: { ...colors['blue'] } },
    { start: new Date(2024, 5, 25, 9, 45, 0), end: new Date(2024, 5, 25, 10, 30, 0), title: 'Clase: Ballet, Lugar: Grass, Horario: 09:45-10:30', color: { ...colors['green'] } },
    { start: new Date(2024, 5, 26, 7, 15, 0), end: new Date(2024, 5, 26, 8,  0, 0), title: 'Clase: Prepa física, Lugar: Sala, Horario: 07:15-08:00', color: { ...colors['yellow'] } },
    { start: new Date(2024, 5, 26, 8, 45, 0), end: new Date(2024, 5, 26, 9, 30, 0), title: 'Clase: On Ice Bridge Básicos A FDS, Lugar: Sala, Horario: 08:45-09:30', color: { ...colors['blue'] } },
    { start: new Date(2024, 5, 26, 9, 45, 0), end: new Date(2024, 5, 26, 10, 30, 0), title: 'Clase: Ballet, Lugar: Grass, Horario: 09:45-10:30', color: { ...colors['green'] } },
    { start: new Date(2024, 5, 28, 16, 30, 0), end: new Date(2024, 5, 28, 17, 30, 0), title: 'Clase: Baile, Lugar: Sala, Horario: 16:30-17:30', color: { ...colors['red'] } },
    { start: new Date(2024, 5, 30, 16, 30, 0), end: new Date(2024, 5, 30, 17, 30, 0), title: 'Clase: Baile, Lugar: Sala, Horario: 16:30-17:30', color: { ...colors['red'] } },
  ];*/
  refresh = new Subject<void>();
  activeDayIsOpen: boolean = true;

  listadoHorariosAsignados: any = [];
  listadoHorariosDefinidos: any = ["FREE PRACTICE 01/04/2024 5:00-7:00", "espacio libre hielo 01/04/2024 15:45-16:30", "ON ICE BRIDGE BASICOS A 01/04/2024 17:15-18:00"];
  public modal = signal<Modal>({});
  public alertService = inject(AlertService);
  public nuevoRegistro = signal(true);
  public listadoProgramas = signal<GenericoModel[]>(LISTAPROGRAMAS);
  public listadoSubProgramas = signal<GenericoModel[]>(LISTASUBPROGRAMAS);
  public listadoNiveles = signal<GenericoModel[]>(LISTANIVELES);
  public listadoSubNiveles = signal<GenericoModel[]>(LISTASUBNIVELES);
  public listadoTipoCalendario = signal<GenericoModel[]>(LISTATIPOCALENDARIO);
  public listadoHorarios = signal<GenericoModel[]>(LISTAHORARIOS);

  ngOnInit(): void {
    registerLocaleData(localeEs, 'es-PE', localeEsExtra);
    this.setView(CalendarView.Month);
    this.elegirPrograma();
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  onEventClicked(event: any): void {
    console.log(event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    console.log('111');
    console.log(action);
    console.log(event);
    console.log('222');
    /*this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });*/
  }

  eventTimesChanged({ event, newStart, newEnd }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  elegirPrograma() {
    this.events = [];
    this.nivelSelect = 0;
    this.subnivelSelect = 0;
    this.listadoNiveles().forEach((n) => {
      n.state = false;

      if(n.id === 0) {
        n.state = true;
      } else {
        if(n.tipo === this.programaSelect) {
          n.state = true;
        }
      }
      
    });
  }

  elegirNivel() {
    this.events = [];
    this.subnivelSelect = 0;
    this.listadoSubNiveles().forEach((n) => {
      n.state = false;

      if(n.id === 0) {
        n.state = true;
      } else {
        if(n.tipo === this.nivelSelect) {
          n.state = true;
        }
      }
      
    });
  }

  elegirSubNivel(){
    this.events = [];
    console.log('111');
    console.log(this.subnivelSelect);

    if(this.subnivelSelect === 1) {
      this.events = [
        { start: new Date(2024, 5, 3, 5, 0, 0), end: new Date(2024, 5, 3, 7, 0, 0), title: 'Clase: On Ice Free Practice, Lugar: Pista, Horario: 05:00-07:00',color: { ...colors['red'] } },
        { start: new Date(2024, 5, 3, 8, 30, 0), end: new Date(2024, 5, 3, 10, 15, 0), title: 'Clase: On Ice Free Practice, Horario: 08:30-10:15',color: { ...colors['red'] } },
        { start: new Date(2024, 5, 4, 5, 0, 0), end: new Date(2024, 5, 4, 7, 0, 0), title: 'Clase: On Ice Free Practice, On ICE, Horario: 05:00-07:00',color: { ...colors['red'] } },
        { start: new Date(2024, 5, 5, 5, 0, 0), end: new Date(2024, 5, 5, 7, 0, 0), title: 'Clase: On Ice Free Practice, On ICE, Horario: 05:00-07:00',color: { ...colors['red'] } },
        { start: new Date(2024, 5, 6, 5, 0, 0), end: new Date(2024, 5, 6, 7, 0, 0), title: 'Clase: On Ice Free Practice, On ICE, Horario: 05:00-07:00',color: { ...colors['red'] } },
        { start: new Date(2024, 5, 6, 8, 30, 0), end: new Date(2024, 5, 6, 10, 15, 0), title: 'Clase: On Ice Free Practice, Horario: 08:30-10:15',color: { ...colors['red'] } },
        { start: new Date(2024, 5, 7, 5, 0, 0), end: new Date(2024, 5, 7, 7, 0, 0), title: 'Clase: On Ice Free Practice, On ICE, Horario: 05:00-07:00',color: { ...colors['red'] } },
        { start: new Date(2024, 5, 7, 8, 30, 0), end: new Date(2024, 5, 7, 10, 15, 0), title: 'Clase: On Ice Free Practice, Horario: 08:30-10:15',color: { ...colors['red'] } },
        { start: new Date(2024, 5, 7, 16, 45, 0), end: new Date(2024, 5, 7, 17, 30, 0), title: 'Clase: PREPA FISICA, Reform Gym, Horario: 16:45-17:30',color: { ...colors['red'] } },
        { start: new Date(2024, 5, 7, 17, 30, 0), end: new Date(2024, 5, 7, 18, 30, 0), title: 'Clase: BAILE, Horario: 17:30-18:30',color: { ...colors['red'] } },
        { start: new Date(2024, 5, 8, 5, 0, 0), end: new Date(2024, 5, 8, 7, 0, 0), title: 'Clase: On Ice Free Practice, On ICE, Horario: 05:00-07:00',color: { ...colors['red'] } },
        { start: new Date(2024, 5, 8, 8, 30, 0), end: new Date(2024, 5, 8, 10, 15, 0), title: 'Clase: On Ice Free Practice, Horario: 08:30-10:15',color: { ...colors['red'] } },
      ];
    }

    if(this.subnivelSelect === 3) {
      this.events = [
        { start: new Date(2024, 5, 7, 16, 30, 0), end: new Date(2024, 5, 7, 17, 30, 0), title: 'Clase: Baile, Lugar: Sala, Horario: 16:30-17:30',color: { ...colors['red'] } },
        { start: new Date(2024, 5, 9, 16, 30, 0), end: new Date(2024, 5, 9, 17, 30, 0), title: 'Clase: Baile, Lugar: Sala, Horario: 16:30-17:30', color: { ...colors['red'] } },
        { start: new Date(2024, 5, 11, 7, 15, 0), end: new Date(2024, 5, 11, 8,  0, 0), title: 'Clase: Prepa física, Lugar: Sala, Horario: 07:15-08:00', color: { ...colors['yellow'] } },
        { start: new Date(2024, 5, 11, 8, 45, 0), end: new Date(2024, 5, 11, 9, 30, 0), title: 'Clase: On Ice Bridge Básicos A FDS, Lugar: Sala, Horario: 08:45-09:30', color: { ...colors['blue'] } },
        { start: new Date(2024, 5, 11, 9, 45, 0), end: new Date(2024, 5, 11, 10, 30, 0), title: 'Clase: Ballet, Lugar: Grass, Horario: 09:45-10:30', color: { ...colors['green'] } },
        { start: new Date(2024, 5, 12, 7, 15, 0), end: new Date(2024, 5, 12, 8,  0, 0), title: 'Clase: Prepa física, Lugar: Sala, Horario: 07:15-08:00', color: { ...colors['yellow'] } },
        { start: new Date(2024, 5, 12, 8, 45, 0), end: new Date(2024, 5, 12, 9, 30, 0), title: 'Clase: On Ice Bridge Básicos A FDS, Lugar: Sala, Horario: 08:45-09:30', color: { ...colors['blue'] } },
        { start: new Date(2024, 5, 12, 9, 45, 0), end: new Date(2024, 5, 12, 10, 30, 0), title: 'Clase: Ballet, Lugar: Grass, Horario: 09:45-10:30', color: { ...colors['green'] } },
        { start: new Date(2024, 5, 14, 16, 30, 0), end: new Date(2024, 5, 14, 17, 30, 0), title: 'Clase: Baile, Lugar: Sala, Horario: 16:30-17:30', color: { ...colors['red'] } },
        { start: new Date(2024, 5, 16, 16, 30, 0), end: new Date(2024, 5, 16, 17, 30, 0), title: 'Clase: Baile, Lugar: Sala, Horario: 16:30-17:30', color: { ...colors['red'] } },
        { start: new Date(2024, 5, 18, 7, 15, 0), end: new Date(2024, 5, 18, 8,  0, 0), title: 'Clase: Prepa física, Lugar: Sala, Horario: 07:15-08:00', color: { ...colors['yellow'] } },
        { start: new Date(2024, 5, 18, 8, 45, 0), end: new Date(2024, 5, 18, 9, 30, 0), title: 'Clase: On Ice Bridge Básicos A FDS, Lugar: Sala, Horario: 08:45-09:30', color: { ...colors['blue'] } },
        { start: new Date(2024, 5, 18, 9, 45, 0), end: new Date(2024, 5, 18, 10, 30, 0), title: 'Clase: Ballet, Lugar: Grass, Horario: 09:45-10:30', color: { ...colors['green'] } },
        { start: new Date(2024, 5, 19, 7, 15, 0), end: new Date(2024, 5, 19, 8,  0, 0), title: 'Clase: Prepa física, Lugar: Sala, Horario: 07:15-08:00', color: { ...colors['yellow'] } },
        { start: new Date(2024, 5, 19, 8, 45, 0), end: new Date(2024, 5, 19, 9, 30, 0), title: 'Clase: On Ice Bridge Básicos A FDS, Lugar: Sala, Horario: 08:45-09:30', color: { ...colors['blue'] } },
        { start: new Date(2024, 5, 19, 9, 45, 0), end: new Date(2024, 5, 19, 10, 30, 0), title: 'Clase: Ballet, Lugar: Grass, Horario: 09:45-10:30', color: { ...colors['green'] } },
        { start: new Date(2024, 5, 21, 16, 30, 0), end: new Date(2024, 5, 21, 17, 30, 0), title: 'Clase: Baile, Lugar: Sala, Horario: 16:30-17:30', color: { ...colors['red'] } },
        { start: new Date(2024, 5, 23, 16, 30, 0), end: new Date(2024, 5, 23, 17, 30, 0), title: 'Clase: Baile, Lugar: Sala, Horario: 16:30-17:30', color: { ...colors['red'] } },
        { start: new Date(2024, 5, 25, 7, 15, 0), end: new Date(2024, 5, 25, 8,  0, 0), title: 'Clase: Prepa física, Lugar: Sala, Horario: 07:15-08:00', color: { ...colors['yellow'] } },
        { start: new Date(2024, 5, 25, 8, 45, 0), end: new Date(2024, 5, 25, 9, 30, 0), title: 'Clase: On Ice Bridge Básicos A FDS, Lugar: Sala, Horario: 08:45-09:30', color: { ...colors['blue'] } },
        { start: new Date(2024, 5, 25, 9, 45, 0), end: new Date(2024, 5, 25, 10, 30, 0), title: 'Clase: Ballet, Lugar: Grass, Horario: 09:45-10:30', color: { ...colors['green'] } },
        { start: new Date(2024, 5, 26, 7, 15, 0), end: new Date(2024, 5, 26, 8,  0, 0), title: 'Clase: Prepa física, Lugar: Sala, Horario: 07:15-08:00', color: { ...colors['yellow'] } },
        { start: new Date(2024, 5, 26, 8, 45, 0), end: new Date(2024, 5, 26, 9, 30, 0), title: 'Clase: On Ice Bridge Básicos A FDS, Lugar: Sala, Horario: 08:45-09:30', color: { ...colors['blue'] } },
        { start: new Date(2024, 5, 26, 9, 45, 0), end: new Date(2024, 5, 26, 10, 30, 0), title: 'Clase: Ballet, Lugar: Grass, Horario: 09:45-10:30', color: { ...colors['green'] } },
        { start: new Date(2024, 5, 28, 16, 30, 0), end: new Date(2024, 5, 28, 17, 30, 0), title: 'Clase: Baile, Lugar: Sala, Horario: 16:30-17:30', color: { ...colors['red'] } },
        { start: new Date(2024, 5, 30, 16, 30, 0), end: new Date(2024, 5, 30, 17, 30, 0), title: 'Clase: Baile, Lugar: Sala, Horario: 16:30-17:30', color: { ...colors['red'] } },
      ];
    }
  }

  selectAll() {
    this.listadoHorariosAsignados = this.listadoHorarios().map((x) => x.name);
    console.log(this.listadoHorariosAsignados);
  }

  unselectAll() {
    this.listadoHorariosAsignados = [];
  }

  abrirModal() {
    this.modal.set(ModalConstants.confirmarRegistroMatricula);
    this.modal().open = true;
  }

  aceptarModal = () => {
    this.modal().open = false;
    this.modal.set({});
    this.mostrarToast();
    console.log("aceptaré el modal...");
  };

  cerrarModal = () => {
    this.modal().open = false;
    this.modal.set({});
    console.log("cerraré el modal...");
  };

  mostrarToast() {
    const alert: Alert = {
      message: "Cambios guardados con éxito.",
      type: "success",
    };
    this.alertService.show(alert);
  }

  elegirTipoCalendario() {
    this.viewDate = new Date();
    if(this.tipoCalendario === 1) {
      this.setView(CalendarView.Month);
    }
    if(this.tipoCalendario === 2) {
      this.setView(CalendarView.Week);
    }
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
}
  