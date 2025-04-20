<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Derivadas de funciones especiales y de orden superior'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-2.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.order-2
          figure
            img(src='@/assets/curso/tema3/1.png', alt='')
        .col-lg.order-1.mb-3.mb-lg-0
          .p-4
            p.mb-0(data-aos="fade-up") En el fascinante mundo del cálculo diferencial, no todas las funciones son polinomios simples. Existen funciones especiales, como las exponenciales, logarítmicas y trigonométricas, que desempeñan un papel crucial en la modelización de diversos fenómenos, desde el crecimiento poblacional hasta las oscilaciones periódicas. En esta sección, se explorarán las reglas de derivación para estas funciones especiales y se descubrirá cómo su uso puede iluminar el análisis de tasas de crecimiento y decaimiento en el ámbito empresarial.

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Derivada de funciones exponenciales y logarítmicas
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/2.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") <b>Las funciones exponenciales y logarítmicas</b> son fundamentales en matemáticas y tienen amplias aplicaciones en economía, finanzas y otras disciplinas. Son esenciales para la planificación estratégica y la toma de decisiones basadas en datos en las organizaciones modernas. La función exponencial, denotada como ex, donde e ≈ 2.71828 es la base de los logaritmos naturales, tiene la notable propiedad de ser su propia derivada. Es decir:
    
        .bg-color-8.p-4.mb-3(data-aos="fade-left")
          img(src="@/assets/curso/tema3/2-1.svg", style="max-width: 102px").mx-auto
        
        p(data-aos="fade-left") Esta propiedad única hace que las funciones exponenciales sean especialmente adecuadas para modelar procesos de crecimiento o decaimiento continuo, como el interés compuesto o la depreciación.
        p(data-aos="fade-left") Por otro lado, <b>la función logarítmica natural</b>, denotada como ln(x), es la inversa de la función exponencial. Su derivada viene dada por:
        .bg-color-8.p-4.mb-3(data-aos="fade-left")
          img(src="@/assets/curso/tema3/2-2.svg", style="max-width: 140px").mx-auto
    
    p.mb-4 Esta regla de derivación es especialmente útil cuando se trabaja con funciones que involucran productos o cocientes, ya que los logaritmos permiten convertir estas operaciones en sumas y restas más manejables.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema3/3.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-8.p-4.mb-3.h-100(data-aos="fade-left")
          h5 Ejemplo
          p Suponga que el valor de un activo, como una acción o un bono, crece exponencialmente con el tiempo según la función A(t) = 1000e(0.05t), donde A es el valor del activo en dólares y t es el tiempo en años. Para encontrar la tasa de crecimiento instantánea del valor del activo en cualquier momento, se deriva A(t):
          img(src="@/assets/curso/tema3/3-1.svg", style="max-width: 450px").mx-auto.mb-3
        
          p(data-aos="fade-left") Esta derivada indica que la tasa de crecimiento del valor del activo es proporcional a su valor actual, con una constante de proporcionalidad de 0.05. Por ejemplo, si se desea conocer la tasa de crecimiento del activo después de 5 años, se evalúa A'(5):
          h5.text-center A'(5) = 50e<sup>(0.05 × 5)</sup> ≈ 64.87
          p Esto significa que, al cabo de 5 años, el valor del activo está creciendo a un ritmo de aproximadamente $64.87 por año. Este tipo de análisis es fundamental para valorar inversiones y tomar decisiones financieras informadas.

    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Derivada de funciones trigonométricas y sus aplicaciones
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/4.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Las funciones trigonométricas, como el seno (sin), el coseno (cos) y la tangente (tan), son esenciales para describir fenómenos periódicos y oscilatorios. Sus derivadas siguen patrones cíclicos:
    
        .bg-color-8.p-4.mb-3(data-aos="fade-left")
          img(src="@/assets/curso/tema3/4-1.svg", style="max-width: 287px").mx-auto
    p Estas reglas de derivación permiten analizar la tasa de cambio de funciones periódicas y son fundamentales en campos como la física, la ingeniería y el procesamiento de señales.
    p.mb-5 En el contexto empresarial, las funciones trigonométricas pueden utilizarse para modelar patrones estacionales en ventas, producción o demanda.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema3/5.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-8.p-5.mb-3(data-aos="fade-left")
          h5 Ejemplo
          p.mb-0  Considere una empresa de helados cuyas ventas mensuales siguen un patrón estacional descrito por la función V(t) = 100 + 50sin(πt/6), donde V es el volumen de ventas en miles de helados y t es el tiempo en meses. 
        p  Para solucionar se debe:
    
    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/6.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Paso 1. Definir la función")
            p Se establece la función que modela el volumen de ventas: 
            img(src="@/assets/curso/tema3/6-1.svg", style="max-width: 243px")
          .div(titulo="Paso 2. Derivar la función")
            p Se deriva la función para obtener la tasa de cambio: 
            p.mb-0 V'(t) = 50(π/6)cos(πt/6)
          .div(titulo="Paso 3. Evaluar en el mes requerido")
            p Se sustituye el valor del mes deseado en la derivada; por ejemplo, para abril 
            p.mb-0 V'(4) = 50(π/6)cos(π × 4/6) ≈ -21.13
          .div(titulo="Paso 4. Interpretar resultado")
            p El signo negativo en abril indica que las ventas disminuyeron aproximadamente en 21,130 helados mensuales. Esto permite planificar acciones administrativas anticipadas.
        

    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3] Uso en análisis de tasas de crecimiento en negocios
    
    p.mb-4 Las derivadas de funciones especiales, particularmente las exponenciales y logarítmicas, tienen un amplio uso en el análisis de tasas de crecimiento y decaimiento en diversos aspectos empresariales. Algunos ejemplos incluyen:

    .bg-full-width.bg-color-info
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-8
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema3/7.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="31%" y="67.5%" numero="+")
                h5 02. Crecimiento poblacional
                p La función exponencial puede modelar el crecimiento de una población, ya sea de clientes, suscriptores o usuarios de un producto o servicio. La derivada de esta función proporciona la tasa de crecimiento instantánea, que es crucial para proyectar la demanda futura y planificar la expansión del negocio.
    
              .bg-color-white.box-shadow.p-3(x="31%" y="13%" numero="+")
                h5 01. Depreciación y amortización
                p Los activos fijos, como maquinaria o edificios, a menudo pierden valor con el tiempo debido al desgaste y la obsolescencia. Este proceso de depreciación puede modelarse con funciones exponenciales o geométricas, y su derivada representa la tasa instantánea de pérdida de valor. Comprender esta tasa es esencial para la planificación financiera y fiscal de las empresas.
    
              .bg-color-white.box-shadow.p-3(x="69%" y="13%" numero="+")
                h5 03. Interés compuesto
                p El crecimiento del valor de una inversión debido al interés compuesto se describe mediante funciones exponenciales. La derivada de estas funciones proporciona la tasa instantánea de acumulación de intereses, que es fundamental para evaluar y comparar diferentes oportunidades de inversión.
    
              .bg-color-white.box-shadow.p-3(x="69%" y="67.5%" numero="+")
                h5 04. Curvas de aprendizaje
                p En muchas industrias, el costo unitario de producción disminuye a medida que los trabajadores adquieren experiencia y eficiencia. Este fenómeno, conocido como curva de aprendizaje, puede modelarse con funciones exponenciales o potenciales. La derivada de estas funciones representa la tasa de mejora de la eficiencia, que es valiosa para predecir los costos futuros y optimizar los procesos de producción.
    
    .bg-full-width.bg-color-11.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/8.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 En resumen, las derivadas de funciones especiales son herramientas poderosas para analizar y comprender las dinámicas de crecimiento y decaimiento en diversos aspectos empresariales. Al proporcionar una medida instantánea de la tasa de cambio, permiten a los administradores tomar decisiones informadas y adaptar estrategias en respuesta a las condiciones cambiantes del mercado.

    #t_3_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.4] Derivadas de orden superior
    
    .bg-color-1.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.order-2
          figure
            img(src='@/assets/curso/tema3/9.png', alt='')
        .col-lg.order-1.mb-3.mb-lg-0
          .p-4
            p.mb-0(data-aos="fade-up") Hasta ahora, se ha explorado las derivadas de primer orden, que miden la tasa de cambio instantánea de una función. Sin embargo, es posible ir más allá y examinar cómo cambia la tasa de cambio en sí misma. Esto conlleva al concepto de derivadas de orden superior.
    
    h2.mb-5(data-aos="fade-left") Segunda derivada: concavidad e interpretación económica

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/10.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") La segunda derivada de una función, denotada como f''(x) o d2f/dx2, se obtiene al derivar la función derivada. En otras palabras, es la derivada de la derivada. Matemáticamente, si f(x) es una función derivable y f'(x) es su derivada, entonces la segunda derivada se define como:
    
        .bg-color-8.p-4.mb-3(data-aos="fade-left")
          img.mb-5(src="@/assets/curso/tema3/10-1.svg", style="max-width: 137px").mx-auto
          p.mb-0 La segunda derivada tiene una interpretación geométrica importante: determina la concavidad de la función. Si f''(x) > 0 en un intervalo, la función es cóncava hacia arriba en ese intervalo, lo que significa que su gráfica se asemeja a un valle. Por otro lado, si f''(x) < 0, la función es cóncava hacia abajo, y su gráfica se parece a una colina. Los puntos donde la concavidad cambia, es decir, donde f''(x) = 0, se denominan puntos de inflexión.
    
    p.mb-4 En el contexto económico, la concavidad tiene implicaciones significativas. Por ejemplo, considere una función de costos C(q), donde C es el costo total y q es la cantidad producida. Si C''(q) > 0, entonces los costos marginales están aumentando, lo que sugiere rendimientos decrecientes a escala. En otras palabras, cada unidad adicional es más costosa de producir que la anterior. Por otro lado, si C''(q) < 0, los costos marginales están disminuyendo, lo que indica economías de escala: cada unidad adicional es menos costosa que la anterior.

    .bg-full-width.bg_img_2
      .px-4.px-md-5.py-4
        .titulo-figura.mb-4
          h5 Figura 2.
          span Función de costos, costo marginal y concavidad.
        .row.justify-content-center.align-items-center.mb-5.bg-color-8
          .col-lg-6.p-4
            figure
              img(src="@/assets/curso/tema3/12.png", data-aos="zoom-in")
        
        p Gráfica de la función de costos C(q)=1000+50q+0.1q2, su derivada C′(q)=50+0.2q, y la concavidad C′′(q)=0.2, que es constante.
        
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/13.svg" alt="" style="width: 90px")
              h5.text-center  Primero
              p.mb-0.text-center La curva azul representa los costos totales C(q).
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/13.svg" alt="" style="width: 90px")
              h5.text-center  Segundo
              p.mb-0.text-center La línea verde discontinua muestra el costo marginal C′(q).
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/13.svg" alt="" style="width: 90px")
              h5.text-center  Tercero
              p.mb-0.text-center La línea roja punteada indica la concavidad de la función, que es constante en 0.2, lo que significa que los costos marginales están aumentando.
    
    p.mb-4 Esto sugiere que existe una tendencia de rendimientos decrecientes a escala, ya que los costos marginales aumentan a medida que aumenta la cantidad producida.

    .bg-full-width.bg-color-6.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Aplicaciones en análisis de puntos de inflexión y aceleración del crecimiento
            p.mb-4(data-aos="fade-right") Los invitamos a leer <b>Aplicaciones en análisis de puntos de inflexión y aceleración del crecimiento</b>, un estudio detallado sobre cómo las derivadas de orden superior permiten evaluar tendencias en la productividad, rentabilidad y optimización de costos dentro del ámbito empresarial.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Aplicaciones en análisis de puntos de inflexión y aceleración del crecimiento.
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/14.png', alt='')
    
    p.mb-4 Con este recorrido por el mundo de las derivadas, concluye esta unidad sobre uno de los pilares del cálculo. Se han explorado los conceptos fundamentales, desde la interpretación geométrica y la definición formal de la derivada hasta las reglas prácticas para calcularlas. Se ha puesto especial énfasis en las aplicaciones de las derivadas en el ámbito empresarial, mostrando cómo esta poderosa herramienta matemática puede iluminar la toma de decisiones y la optimización en diversos aspectos de la gestión organizacional.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/15.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-3.p-4.mb-3(data-aos="fade-left")
          p.mb-0 El cálculo diferencial es un campo amplio y apasionante, con aplicaciones en todas las áreas del conocimiento humano. A medida que se profundiza en su estudio, se descubren nuevas conexiones y aplicaciones, desde la física y la ingeniería hasta la economía y las finanzas. El dominio de las derivadas abre las puertas a un universo de posibilidades analíticas y creativas, y brinda al profesional de hoy de las herramientas necesarias para enfrentar los desafíos del mañana.
        p(data-aos="fade-left") En un mundo cada vez más impulsado por los datos y la tecnología, el pensamiento matemático se vuelve una habilidad esencial. Las derivadas, con su capacidad para revelar patrones ocultos y predecir tendencias futuras, se constituyen como una herramienta esencial para afrontar la incertidumbre. Al igual que el navegante que se orienta por las estrellas, el administrador que domina el cálculo diferencial puede trazar un rumbo seguro hacia el éxito, adaptándose a los cambios del mercado y aprovechando las oportunidades que surgen en el horizonte.
    
    .bg-full-width.bg-color-1
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/16.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Así pues, se invita a continuar explorando este apasionante campo, a profundizar en sus fundamentos teóricos y a aplicar sus herramientas en contextos prácticos. A medida que se internaliza la lógica de las derivadas y se integra su uso en el quehacer diario, se estará mejor preparado para enfrentar los retos del mundo empresarial contemporáneo. 

    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/117596?page=1" target="_blank" rel="noopener noreferrer") Bruzual, R. & Domínguez, M. (2016). Cálculo diferencial en varias variables: ( ed.). D - Universidad Central de Venezuela. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://ocw.mit.edu/courses/mathematics/18-01-single-variable-calculus-fall-2006/ " target="_blank" rel="noopener noreferrer") MIT OpenCourseWare. (n.d.). Exponential functions and derivatives. Massachusetts Institute of Technology. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/lRxIdgyBT8g" target="_blank" rel="noopener noreferrer") PH Asesoría. (2020, 4 de noviembre). Cálculo diferencial en la vida cotidiana parte 2. [Video]. YouTube 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto: '¿Qué representa la derivada de una función en un punto?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'La pendiente de la tangente a la curva en ese punto.',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'El área bajo la curva en ese punto.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'La distancia entre dos puntos en la curva.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'El valor de la función en ese punto.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'La derivada de una función en un punto nos da la pendiente de la tangente a la curva en ese punto. Esto significa que nos dice cómo cambia la función con respecto a la variable independiente en ese punto específico.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál de las siguientes reglas es utilizada para derivar el producto de dos funciones?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Regla de la cadena',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Regla del producto',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Regla de la potencia',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Regla de la suma',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'La regla del producto nos permite derivar el producto de dos funciones. Se expresa como (f⋅g)′=f′⋅g+f⋅g′, donde f y g son funciones.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto: '¿Cuál es la derivada de e<sup>x</sup>?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'e<sup>x</sup>',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'xe<sup>x</sup>',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'ln(x)',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: '1',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'La derivada de la función ex con respecto a x es ex. Esta es una propiedad especial de la función exponencial, ya que su derivada es igual a sí misma.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto: '¿Qué nos indica una derivada positiva de una función?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Que la función es constante.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Que la función está disminuyendo.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Que la función está aumentando.',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Que la función es concava hacia abajo.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Si la derivada de una función en un punto es positiva, significa que la función está aumentando en ese punto. La pendiente de la tangente es positiva, lo que indica una subida en la curva.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto: '¿Cuál es la derivada de f(x)=x<sup>3</sup>?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: '3x<sup>2</sup>',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: '3x',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'x<sup>2</sup>',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: '6x',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Usando la regla de la potencia, la derivada de x<sup>n</sup> es nx<sup>n−1</sup>. En este caso, para x<sup>3</sup>, la derivada es 3x<sup>2</sup>.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
