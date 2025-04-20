export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Derivadas',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Derivadas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Concepto intuitivo de la derivada: razón de cambio',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Interpretación gráfica y geométrica: pendiente de la recta tangente',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Definición mediante el límite del cociente incremental',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Notación y significado de f´(x)',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo:
              'Aplicaciones en la administración: crecimiento de ingresos, costos marginales y productividad',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Reglas para calcular derivadas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Regla de la potencia',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Regla de la suma y la resta',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Regla del producto y del cociente',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Regla de la cadena y derivación de funciones compuestas',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Aplicaciones en funciones empresariales',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Derivadas de funciones especiales y de orden superior',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Derivada de funciones exponenciales y logarítmicas',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Derivada de funciones trigonométricas y sus aplicaciones',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Uso en análisis de tasas de crecimiento en negocios',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Derivadas de orden superior',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Bruzual, R. & Domínguez, M. (2016). Cálculo diferencial en varias variables: ( ed.). D - Universidad Central de Venezuela. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/117596?page=1',
    },
    {
      referencia:
        'García Franchini, C. & Alvarado Arellano, M. (2016). Cálculo diferencial en competencias: ( ed.). Grupo Editorial Patria. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/40452',
    },
    {
      referencia:
        'Bruzual, R. & Domínguez, M. (2016). Cálculo diferencial en varias variables: ( ed.). D - Universidad Central de Venezuela. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/117596?page=1',
    },
  ],
  glosario: [
    {
      termino: 'Aplicaciones de la derivada',
      significado:
        'se refiere a los diversos usos prácticos de las derivadas en diferentes campos, como la física, la ingeniería, la economía y la administración de empresas.',
    },
    {
      termino: 'Cociente incremental',
      significado:
        'es la razón de cambio promedio de una función en un intervalo, calculada como el cambio en el valor de la función dividido por el cambio en la variable independiente.',
    },
    {
      termino: 'Concavidad',
      significado:
        'describe la curvatura de una función, ya sea cóncava hacia arriba (como un valle) o cóncava hacia abajo (como una colina), y está determinada por el signo de la segunda derivada.',
    },
    {
      termino: 'Costo marginal',
      significado:
        'representa el cambio en el costo total resultante de producir una unidad adicional de un bien o servicio, y se calcula como la derivada de la función de costos totales con respecto a la cantidad producida.',
    },
    {
      termino: 'Derivada',
      significado:
        'es una medida de la tasa de cambio instantánea de una función con respecto a su variable independiente, y se puede interpretar geométricamente como la pendiente de la recta tangente a la curva en un punto dado.',
    },
    {
      termino: 'Derivada de orden superior',
      significado:
        'se refiere a las derivadas sucesivas de una función, como la segunda derivada (la derivada de la derivada), la tercera derivada, y así sucesivamente.',
    },
    {
      termino: 'Elasticidad de la demanda',
      significado:
        'mide la sensibilidad de la cantidad demandada de un bien ante cambios en su precio, y se calcula como la razón entre el cambio porcentual en la cantidad demandada y el cambio porcentual en el precio.',
    },
    {
      termino: 'Función compuesta',
      significado:
        'es una función que se obtiene al aplicar una función a la salida de otra función, es decir, una función "anidada" dentro de otra.',
    },
    {
      termino: 'Función derivada',
      significado:
        'es la función que resulta de derivar una función dada, y se denota comúnmente como f´(x) para una función original f(x).',
    },
    {
      termino: 'Ingreso marginal',
      significado:
        'representa el cambio en los ingresos totales resultante de vender una unidad adicional de un bien o servicio, y se calcula como la derivada de la función de ingresos con respecto a la cantidad vendida.',
    },
    {
      termino: 'Límite',
      significado:
        'es el valor al que tiende una función a medida que su variable independiente se aproxima a un valor específico, y es fundamental para la definición formal de la derivada.',
    },
    {
      termino: 'Optimización',
      significado:
        'se refiere al proceso de encontrar los valores máximos o mínimos de una función, sujeto a ciertas restricciones, y es una de las principales aplicaciones de las derivadas en la administración de empresas.',
    },
    {
      termino: 'Pendiente de la recta tangente',
      significado:
        'es el valor de la derivada de una función en un punto dado, y representa la inclinación de la recta que toca la curva en un solo punto.',
    },
    {
      termino: 'Productividad marginal',
      significado:
        'indica cuánto aumenta la producción al emplear una unidad adicional de un insumo (como trabajo o capital), manteniendo constantes los demás insumos, y se calcula como la derivada de la función de producción con respecto al insumo en cuestión.',
    },
    {
      termino: 'Puntos de inflexión',
      significado:
        'son los puntos en los que la concavidad de una función cambia, es decir, donde la segunda derivada se hace cero y cambia de signo. ',
    },
    {
      termino: 'Razón de cambio',
      significado:
        'describe cómo una cantidad cambia en relación con otra, y puede ser promedio (como en el cociente incremental) o instantánea (como en la derivada).',
    },
    {
      termino: 'Regla de la cadena',
      significado:
        'es una técnica para derivar funciones compuestas, y establece que la derivada de una composición de funciones es igual al producto de las derivadas de las funciones componentes.',
    },
    {
      termino: 'Regla del cociente',
      significado:
        'es una regla para derivar un cociente de funciones, y se calcula como la derivada del numerador multiplicada por el denominador menos la derivada del denominador multiplicada por el numerador, todo dividido por el cuadrado del denominador.',
    },
    {
      termino: 'Regla del producto',
      significado:
        'es una regla para derivar un producto de funciones, y se calcula multiplicando la primera función por la derivada de la segunda y sumando esto al producto de la segunda función por la derivada de la primera.',
    },
    {
      termino: 'Tasa de cambio instantánea',
      significado:
        'es el valor de la derivada de una función en un punto específico, y representa la rapidez con la que la función está cambiando en ese momento exacto.',
    },
  ],
}
