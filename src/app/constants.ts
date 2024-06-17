export enum COLORES {
  CRITICO = "#a855f7",
  ALTO = "#F43F5E",
  MODERADO = "#F59E0B",
  BAJO = "#10B981",
  SINDATA = "#ccd5e2",
  DIA = "#FDE047",
  NOCHE = "#1E3A8A",
  ACTIVO = "#10B981",
  INACTIVO = "#ccd5e2",
  INTERRUPCIONES = "#be113c",
  EFICIENTE = "#06b6d4",
  ACTIVIDAD = "#3B82F6",
}

export enum FONT {
  FAMILIA = "notoSans, sans-serif, Arial",
  TAMANO = "12px",
  COLORPRIMARY = "#020617",
  COLORSECONDARY = "#94A3B8",
}

export enum POPOVER {
  CLASIFICACION_RIESGO = "Resultado del cálculo de horas efectivas de sueño menos las interrupciones y microdespertares.",
  SUENO_PROMEDIO = "Representa la duración promedio en la que un operario experimenta un sueño de calidad.",
  EFICIENCIA_SUENO = "Indica la proporción de tiempo total de sueño que se considera efectivo y reparador.",
  DEUDA_SUENO = "Mide el tiempo promedio que un operario se queda por debajo de la cantidad recomendada de sueño.",
  INTERRUPCIONES_SUENO = "Registra la cantidad de veces que el sueño de un operario se ve interrumpido.",
  INICIO_SUENO = "Indica el momento en que un operario inicia su período de sueño.",
  PROMEDIO_SUENO_ROTACION = "Calcula el tiempo promedio de sueño efectivo por día de rotación laboral.",
  USO_RELOJ = "Evalúa el comportamiento del operario en relación con el uso del reloj durante el sueño.",
  CUENTAS_ACTIVAS = "Registra el número de operarios que están activos en la plataforma.",
  TIEMPO_SUENO_EFICIENTE = "Suma la duración total del sueño considerado eficiente.",
  RIESGO_CRITICO = " Identifica la presencia de situaciones de riesgo crítico durante el sueño de un operario.",
  FRECUENCIA_CARDIACA = "Monitoriza la frecuencia cardíaca durante el sueño.",
  DETALLE_SUENO = "Proporciona información detallada sobre los diferentes aspectos del sueño, como pasos y patrones.",
  DEUDA_ACUMULADA = "Indica la cantidad total de tiempo que un operario ha acumulado en deuda de sueño.",
}

export enum POPOVERROSTER {
  CICLO_LABORAL = "Días que se repetirán el turno inicial y el turno final seleccionado",
  CICLO_DESCANSO = "Días que los operarios descansarán antes de que comience un nuevo ciclo laboral.",
  TIPO_ROTACION = "Rotación entre el Turno inicial, el Turno final y el descanso.",
  TURNO_INICIAL = "Días de la semana dentro del ciclo laboral, en los que se aplica el turno inicial",
  TURNO_FINAL = "Días de la semana dentro del ciclo laboral, en los que se aplica el turno final.",
}

export enum COLORESTURNOS {
  DESCANSO = "E2E8F0",
  TURNO1 = "#FDA4AF",
  TURNO2 = "#FCD34D",
  TURNO3 = "#FDE047",
  TURNO4 = "#BEF264",
  TURNO5 = "#6EE7B7",
  TURNO6 = "#67E8F9",
  TURNO7 = "#7DD3FC",
  TURNO8 = "#93C5FD",
  TURNO9 = "#F0ABFC",
  TURNO10 = "#D8B4FE",
}

export enum RUTAS {
  empresa = "/empresas",
  sede = "/sede",
  oficina = "/oficina",
  grupo = "/grupo",
  programacion = "/programacion",
}