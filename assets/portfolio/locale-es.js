export default {
  "projects": {
    "inflacao": {
      "name": "Paneles de inflación (IPCA e IPCA-15)",
      "title": "Entender lo que importa de la inflación.",
      "tag": "DATOS Y POLÍTICAS PÚBLICAS",
      "status": "Paneles web · publicados",
      "summary": "Explora los índices brasileños de precios al consumidor por grupo y periodo.",
      "lead": "Una pregunta económica merece una forma clara de explorarse.",
      "context": "Los indicadores oficiales se organizan por periodo, con gráficos, boletines y detalle por grupos de productos y servicios.",
      "contribution": "Desarrollé los análisis en Power BI y la interfaz web, junto con la preparación y documentación de los datos.",
      "learning": "La forma de organizar los periodos y las comparaciones influye en la lectura de un panel.",
      "note": "Los paneles enlazados contienen las series y los valores oficiales.",
      "linkLabels": [
        "Abrir IPCA",
        "Abrir IPCA-15",
        "Proyecto en GitHub"
      ]
    },
    "pu": {
      "name": "Aprendizaje PU y acceso al Pronaf",
      "title": "¿Y si la ausencia no equivale a una negativa?",
      "tag": "INVESTIGACIÓN E IA APLICADA",
      "status": "Capítulo de libro · Enap · 2026",
      "summary": "Un ranking diagnóstico para investigar brechas de acceso al crédito rural. La elegibilidad se rige por los criterios del programa.",
      "lead": "Un ranking diagnóstico, no una clasificación de elegibilidad.",
      "context": "El SICOR registra quién contrató crédito. Entre las personas sin contratación observada hay demanda sin formalizar, barreras de acceso y baja propensión. El estudio trata este grupo como no etiquetado.",
      "contribution": "Autoría del capítulo, formulación del problema como aprendizaje PU, integración de CAF y SICOR, modelado y análisis.",
      "note": "La reproducción completa requiere acceso autorizado a los microdatos del CAF.",
      "result": "Publicado en un libro de la Enap, 2026.",
      "method": "Comparé un modelo supervisado de referencia, el estimador clásico de Elkan y Noto y el nnPU (aprendizaje PU con riesgo no negativo). Separé entrenamiento, validación y prueba por familia y comparé los modelos con la contratación observada como referencia.",
      "finding": "El modelo de referencia y Elkan y Noto recuperaron proporciones similares de positivos observados en los primeros puestos. El nnPU recuperó menos según esa métrica, que no evalúa directamente la clase latente. El ranking apoya el diagnóstico de cobertura y la búsqueda activa, con validación humana y sujeción a las reglas del Pronaf.",
      "linkLabels": [
        "Leer el capítulo",
        "Código"
      ]
    },
    "chat-pronaf": {
      "name": "Chat Pronaf v1",
      "title": "Una pregunta puede abrir el camino.",
      "tag": "IA Y AGRICULTURA FAMILIAR",
      "status": "Chatbot · 2025 · Prototipo",
      "summary": "Una interfaz conversacional para explorar información de crédito rural.",
      "lead": "¿Y si explorar el crédito rural empezara con una conversación?",
      "context": "El proyecto de 2025 explora consultas en lenguaje natural sobre el Pronaf y la agricultura familiar.",
      "contribution": "Exploré la interfaz y el recorrido entre la pregunta, la fuente y la respuesta.",
      "learning": "Una respuesta útil requiere una buena interfaz y claridad sobre su procedencia y sus límites.",
      "note": "El prototipo usa datos oficiales del Banco Central y documentos complementarios. Si Streamlit muestra una pantalla de inactividad, puedes reactivar la aplicación con el botón de la plataforma.",
      "linkLabels": [
        "Abrir prototipo v1",
        "Código de la v1"
      ]
    },
    "oficina": {
      "name": "Hackeando o Pronaf",
      "title": "El conocimiento se comparte.",
      "tag": "SEMANA DE INNOVACIÓN DE LA ENAP",
      "status": "Taller · 2025",
      "summary": "Un taller para explorar el crédito rural con datos abiertos, Python e IA.",
      "lead": "Compartir el proceso también es parte de construir.",
      "context": "El taller de la Semana de Innovación de la Enap de 2025 combinó datos abiertos, programación e IA.",
      "contribution": "Preparé y presenté el taller con Ernesto Galindo, usando preguntas sobre el Pronaf para orientar ejercicios prácticos de análisis.",
      "learning": "Enseñar implica hacer visibles las decisiones, desde la fuente hasta las preguntas y las verificaciones.",
      "note": "El taller fue colaborativo. Los materiales enlazados conservan sus créditos y contexto.",
      "result": "Presentado en la Semana de Innovación de la Enap de 2025.",
      "linkLabels": [
        "Materiales públicos del taller"
      ]
    },
    "jogos": {
      "name": "Juegos de matemáticas",
      "title": "También construyo para jugar.",
      "tag": "EL GUSTO DE CREAR",
      "status": "Dos juegos publicados",
      "summary": "Dos juegos que convierten ideas matemáticas en actividades lúdicas.",
      "lead": "Crear un juego para mi hija fue una buena razón para construir.",
      "context": "Missão Kits da Festa y Tabuada Run exploran las matemáticas con retos visuales, decisiones y retroalimentación.",
      "contribution": "Desarrollé los juegos, sus reglas y sus interfaces para hacer visible el razonamiento.",
      "learning": "Una explicación mejora cuando la otra persona puede probar la idea.",
      "note": "La actividad de abajo es una demostración aparte. Los enlaces llevan a los juegos completos.",
      "linkLabels": [
        "Missão Kits da Festa",
        "Tabuada Run"
      ]
    },
    "iris": {
      "name": "Íris",
      "title": "Una asistente, muchas decisiones.",
      "tag": "IA Y RUTINAS PERSONALES",
      "status": "Descripción del proyecto",
      "summary": "Experimentos con integración, memoria y rutinas asistidas por IA.",
      "context": "Un proyecto personal sobre el uso de agentes para apoyar rutinas y organizar conocimiento.",
      "contribution": "Configuré la asistente e integré flujos de trabajo, con decisiones sobre memoria, continuidad y supervisión.",
      "learning": "Automatizar una rutina también exige pensar cómo supervisarla y retomarla.",
      "note": "La descripción del proyecto excluye cuentas, documentos y rutinas privadas."
    },
    "time-ti": {
      "name": "Equipo de TI con agentes",
      "title": "Aprender a dirigir la construcción.",
      "tag": "IA Y PROCESOS DE TRABAJO",
      "status": "Experimento",
      "summary": "Roles, revisión y seguimiento en el desarrollo asistido por agentes.",
      "context": "Un experimento de organización de agentes con tareas y entregas que se pueden revisar.",
      "contribution": "Definí roles y procesos de implementación y revisión.",
      "learning": "Delegar la ejecución implica seguir asumiendo la responsabilidad de decidir y comprobar.",
      "note": "Esta prueba de un método de trabajo excluye configuraciones privadas."
    },
    "eleitoral": {
      "name": "Monitor Electoral 2026",
      "title": "¿Qué se puede aprender mientras avanza el escrutinio?",
      "tag": "DATOS ABIERTOS",
      "status": "Proyecto independiente · 2026 · Concluido",
      "result": "Evaluación retrospectiva de 54 capturas del balotaje.",
      "summary": "Seguimiento independiente del escrutinio presidencial brasileño con datos oficiales del TSE.",
      "context": "El panel reunió los datos publicados por el Tribunal Superior Electoral de Brasil (TSE) en las 27 unidades federativas y en el exterior. La visualización distingue el escrutinio oficial de las estimaciones del proyecto.",
      "contribution": "Desarrollé y analicé el monitor con la colaboración de Ernesto Galindo. Automaticé la recopilación, implementé las estimaciones en Python, registré los horarios y analicé la serie de actualizaciones.",
      "learning": "En la trayectoria analizada, la estimación tuvo un error absoluto de 0,424 puntos porcentuales frente al último resultado preservado cuando se había totalizado el 77,701 % de las secciones del balotaje. El hallazgo corresponde a un análisis retrospectivo de una elección.",
      "note": "Proyecto personal independiente, concluido el 26 de octubre de 2026. El panel está disponible para consulta histórica.",
      "linkLabels": [
        "Panel histórico",
        "Evaluación retrospectiva",
        "Código en GitHub"
      ]
    },
    "alerta": {
      "name": "Alerta de Inflación de Alimentos",
      "title": "Un radar para buenas preguntas.",
      "tag": "IA Y MONITOREO",
      "status": "Proyecto en desarrollo",
      "summary": "Noticias, filtros y clasificación para seguir la inflación de alimentos.",
      "context": "Un experimento de organización de noticias sobre inflación alimentaria.",
      "contribution": "Trabajé en la recopilación RSS, el filtrado, el almacenamiento y la clasificación asistida por IA.",
      "learning": "Encontrar noticias y producir un indicador económico son tareas diferentes.",
      "note": "El portafolio presenta una descripción del proyecto en desarrollo.",
      "linkLabels": [
        "Repositorio público"
      ]
    },
    "compras": {
      "name": "Planificación de compras públicas",
      "title": "¿Qué preguntas permiten hacer los datos abiertos?",
      "tag": "DATOS ABIERTOS Y GESTIÓN",
      "status": "Análisis",
      "summary": "Análisis de adquisiciones planificadas con datos del PGC/PCA.",
      "context": "Un análisis de los artículos y valores estimados de la planificación de compras públicas.",
      "contribution": "Preparé y exploré los datos para elaborar clasificaciones y comunicar el análisis.",
      "learning": "Una adquisición planificada es distinta del gasto ejecutado.",
      "note": "El proyecto usa información abierta de planificación de compras.",
      "result": "Presentado en openDATA 2024 de la SEGES.",
      "linkLabels": [
        "Código y materiales públicos"
      ]
    },
    "conversor": {
      "name": "De la API a la hoja de cálculo",
      "title": "Una pequeña herramienta elimina una barrera.",
      "tag": "AUTOMATIZACIÓN PRÁCTICA",
      "status": "Proyecto anterior",
      "summary": "Convierte respuestas de la API de compras a CSV y Excel.",
      "context": "Convertir una respuesta JSON en una tabla puede ser una barrera al comenzar un análisis.",
      "contribution": "Desarrollé una herramienta para consultar, previsualizar y exportar datos en formatos de hoja de cálculo.",
      "learning": "Una herramienta sencilla también puede ser útil.",
      "note": "La descripción corresponde a un proyecto anterior. El portafolio no ejecuta una integración con la API.",
      "linkLabels": [
        "Repositorio público"
      ]
    },
    "skill": {
      "name": "explicar-conteudo",
      "title": "Una manera de aprender que se convirtió en herramienta.",
      "tag": "APRENDIZAJE E IA",
      "status": "Herramienta creada",
      "summary": "Un proceso para explorar temas con preguntas, texto y recursos visuales.",
      "context": "Algunas ideas comienzan con una pregunta. Otras requieren un esquema o un ejemplo práctico.",
      "contribution": "Organicé un método reutilizable para explorar contenidos y elegir un formato de explicación.",
      "learning": "Una buena herramienta también ayuda a aclarar la pregunta.",
      "note": "El portafolio describe el método; la biblioteca privada queda fuera."
    },
    "trilhas": {
      "name": "Itinerarios de IA para funcionarios públicos",
      "title": "Aprender con un camino en mente.",
      "tag": "CURADURÍA Y FORMACIÓN",
      "status": "Guía pública",
      "summary": "Opciones de formación organizadas según las necesidades de personas y equipos.",
      "context": "Elegir un curso es más fácil cuando las opciones se vinculan con un objetivo y un contexto.",
      "contribution": "Seleccioné itinerarios independientes a partir de cursos de la Escuela Virtual de Gobierno de Brasil (EV.G) y la Enap.",
      "learning": "El punto de partida es lo que la persona necesita aprender a hacer.",
      "note": "Es una guía independiente de cursos públicos.",
      "linkLabels": [
        "Guía pública"
      ]
    },
    "mba": {
      "name": "Análisis descriptivo del Pronaf en el MBA",
      "title": "Estudiar a partir de una pregunta concreta.",
      "tag": "FORMACIÓN Y ANÁLISIS",
      "status": "Trabajo académico",
      "summary": "Estadística descriptiva y visualizaciones del Pronaf.",
      "context": "Un trabajo formativo que conecta el análisis de datos con un tema de política pública.",
      "contribution": "Desarrollé un cuaderno, visualizaciones y materiales de presentación sobre el Pronaf.",
      "learning": "Aplicar una herramienta a un problema concreto aclara sus supuestos y sus límites.",
      "note": "Esta descripción académica excluye registros y resultados individuales.",
      "linkLabels": [
        "Materiales públicos"
      ]
    }
  },
  "categories": {
    "dados": {
      "title": "Datos que ayudan a preguntar mejor.",
      "label": "Datos y políticas públicas",
      "description": "Análisis, ingeniería de datos y métodos para convertir registros en información útil."
    },
    "ia": {
      "title": "Construir, probar y seguir aprendiendo.",
      "label": "IA y experimentos",
      "description": "Investigación, interfaces y flujos de trabajo en distintas etapas de desarrollo."
    },
    "aprender": {
      "title": "Aprender también es compartir.",
      "label": "Aprender y compartir",
      "description": "Talleres, curaduría y métodos para acercar el conocimiento y la experiencia."
    },
    "pessoal": {
      "title": "Por el gusto de crear.",
      "label": "Juegos y curiosidad",
      "description": "Pequeños proyectos de motivación personal, entre ellos juegos para mi hija."
    }
  },
  "ui": {
    "illustration": "ILUSTRACIÓN CONCEPTUAL",
    "details": "Ver detalles",
    "detailsOf": " de ",
    "openArchive": "Abrir el archivo de proyectos",
    "closeArchive": "Cerrar el archivo de proyectos",
    "projectCount": "{count} proyectos",
    "announcement": "{count} proyectos · {category}",
    "allCategories": "todas las categorías",
    "result": "Resultado.",
    "contribution": "Mi contribución",
    "learning": "Qué aprendí",
    "method": "Método",
    "finding": "Qué encontró el estudio",
    "advisor": "Director académico.",
    "citation": "Cómo citar (ABNT)",
    "available": "Disponible en:",
    "accessed": "Consulta:",
    "accessDate": "24 de noviembre de 2026.",
    "exploreLab": "EXPLORA EL LABORATORIO",
    "pause": "Pausar animación",
    "resume": "Reanudar animación",
    "night": "Modo nocturno",
    "day": "Volver al modo diurno",
    "gameTag": "UN MINIJUEGO PARA PROBAR",
    "gameTitle": "¿Podemos preparar paquetes iguales?",
    "gameIntro": "Tenemos <strong>12 flores</strong> y <strong>18 dulces</strong>. ¿Cuál es el mayor número de paquetes iguales que podemos preparar usando todo?",
    "gameGroup": "Elige el número de paquetes",
    "gameOption": "{count} paquetes",
    "gameInitial": "Prueba una respuesta. El razonamiento importa tanto como acertar.",
    "gameCorrect": "¡Sí! Podemos preparar 6 paquetes con 2 flores y 3 dulces cada uno. Seis es el máximo común divisor de 12 y 18.",
    "gameTryAgain": "Puedes preparar esa cantidad de paquetes iguales. ¿Puedes hacer más sin que sobre nada?",
    "exploreData": "Explorar datos",
    "exploreAI": "Explorar IA",
    "exploreLearn": "Explorar aprendizaje",
    "explorePlay": "Explorar juegos",
    "roomData": "Datos",
    "roomAI": "IA",
    "roomLearn": "Aprender",
    "roomPlay": "Jugar",
    "chartHeader": "EXPLORAR / INFLACIÓN",
    "puHeader": "UNA PREGUNTA SOBRE ETIQUETAS",
    "observed": "OBSERVADO",
    "unlabeled": "SIN ETIQUETA",
    "chatLine1": "¿Por dónde empezar a explorar",
    "chatLine2": "los datos del Pronaf?",
    "workshopHeader": "SEMANA DE INNOVACIÓN · ENAP",
    "workshopTools": "DATOS ABIERTOS + PYTHON + IA",
    "gameCover": "MISIÓN: PAQUETES PARA LA FIESTA",
    "gameCoverFooter": "APRENDER JUGANDO"
  }
};
