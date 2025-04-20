<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Título tema'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-full-width.bg_img
      .px-4.px-md-5.py-4
        p.mb-4 La derivada mide cuán rápido cambia una función en relación con el cambio en su variable independiente. Esta noción es clave para comprender el comportamiento de las funciones y tiene una amplia gama de aplicaciones en diversos campos, desde la física y la ingeniería hasta la economía y la administración de empresas.

        .row.justify-content-center
          .col-lg-8
            .bg-color-white.shadow-soft.p-4.mb-4
              .row.justify-content-around.align-items-center
                .col-md-auto
                  img(src="@/assets/template/video.svg", style="width: 80px;").mx-auto.mb-4.mb-lg-0
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h5.mb-1 Función Derivada ¿Cómo encontrarla? 
                      p.mb-0 Para ampliar los conceptos sobre Función derivada, le invitamos a ver el siguiente vídeo.
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(href="https://youtu.be/nrrYUA1XU3M " target="_blank")
                        span Ver video
                        i.fas.fa-arrow-right

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Concepto intuitivo de la derivada: razón de cambio
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-3.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La derivada es un concepto fundamental en el cálculo diferencial que captura la idea de la razón de cambio instantáneo. Intuitivamente, la derivada mide cuán rápido cambia una función en relación con el cambio en su variable independiente. En otras palabras, la derivada nos indica la tasa a la cual una cantidad está cambiando en un instante específico.
        p(data-aos="fade-left") Desde una perspectiva empresarial, la razón de cambio es crucial para comprender la dinámica de diversas variables económicas. Por ejemplo, la derivada puede utilizarse para analizar la tasa de cambio de los ingresos de una empresa con respecto al tiempo, lo que permite evaluar su crecimiento o declive en un momento dado. De manera similar, la derivada puede aplicarse al estudio de los costos marginales, que representan el cambio en el costo total al producir una unidad adicional de un bien o servicio (Bruzual & Domínguez, 2016).
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/3.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-8.p-5(data-aos="fade-left")
          h5 Considere el siguiente ejemplo: 
          p.mb-0 Suponga que los ingresos de una empresa en función del tiempo vienen dados por la función I(t) = 1000t - 50t2, donde I representa los ingresos en miles de dólares y t es el tiempo en meses. La derivada de esta función, I'(t) = 1000 - 100t, nos indica la tasa de cambio de los ingresos en cualquier mes específico. Por ejemplo, al cabo de 5 meses, la tasa de cambio de los ingresos sería I'(5) = 1000 - 100(5) = 500, lo que significa que, en ese momento, los ingresos están aumentando a un ritmo de 500 mil dólares por mes.

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Interpretación gráfica y geométrica: pendiente de la recta tangente
    
    p.mb-4 Gráficamente, la derivada de una función en un punto específico corresponde a la pendiente de la recta tangente a la curva en ese punto. Esta recta tangente cumple dos características principales:

    .bg-full-width.bg_img_5
      .px-4.px-md-5.py-4
        .row.align-items-start.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/4.png", alt="").mb-4.mb-lg-0
          .col-lg-8
        
            AcordionA(tipo="b")
              .div(titulo="Primera")
                p Toca la curva exactamente en un único punto.
        
              .div(titulo="Segunda")
                p Representa la mejor aproximación lineal de la función en las cercanías de dicho punto.
        
        p.mb-4 De esta manera, la derivada proporciona información clave sobre la inclinación de la curva, revelando la dirección y velocidad con la que la función varía en ese punto.

        .row.justify-content-center.align-items-stretch.mb-4
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-2.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/5.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 Cambio vertical (eje y)	
                  p.mb-0 Variación en el valor de la función

          .col-lg-4.mb-3.mb-lg-0
            .bg-color-2.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/5.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 Cambio horizontal (eje x)	 	
                  p.mb-0 Variación en la variable independiente
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-2.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/5.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 Pendiente positiva	 	
                  p.mb-0 Indica que la función está aumentando
        .row.justify-content-center.align-items-stretch.mb-4
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-2.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/5.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 Pendiente negativa		
                  p.mb-0 Indica que la función está disminuyendo

          .col-lg-4.mb-3.mb-lg-0
            .bg-color-2.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/5.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 Valor absoluto alto de pendiente		 	
                  p.mb-0 Indica inclinación fuerte; cambio rápido en la función
        
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/6.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-8.p-5(data-aos="fade-left")
          p Como ejemplo práctico, se utiliza la función de ingresos:
          h5.text-center I(t) = 1000t - 50t²
          p Al representar gráficamente esta función y dibujar rectas tangentes en diferentes momentos, se aprecia claramente cómo varía la pendiente, que refleja la tasa de cambio de los ingresos:
    
    .titulo-figura.mb-4
      h5 Tabla 1.
      span Análisis de la tasa de cambio de los ingresos en función del tiempo
    .tabla-a.color-acento-botones.mb-5
      table.text-center
        thead
          tr
            th.bg-color-6.text-center Tiempo (t)
            th.bg-color-6.text-center Derivada I'(t)
            th.bg-color-6.text-center Interpretación gráfica y económica
        tbody
          tr
            td t = 5
            td I'(5) = 500
            td Pendiente positiva moderada; ingresos en aumento rápido
          tr
            td t = 10
            td I'(10) = 0
            td Recta horizontal; ingresos máximos, tasa de cambio nula
    
    .bg-full-width.bg-color-1.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/8.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Finalmente, para reforzar esta interpretación gráfica y geométrica, en la Ilustración 1 se incluye la gráfica de la función I(t) = 1000t - 50t², junto con las rectas tangentes en los puntos t = 5 y t = 10, lo que permite visualizar claramente los cambios en la pendiente y la interpretación concreta de la tasa de variación en estos puntos específicos.
    
    .titulo-figura.mb-4
      h5 Figura 1.
      span Gráfica de la función graficar la función I(t) = 1000t - 50t2 y las rectas tangentes para los valores de t.
    .row.justify-content-center.align-items-center.mb-5.bg-color-8
      .col-lg-6.p-4
        figure
          img(src="@/assets/curso/tema1/9.png", data-aos="zoom-in")
    

    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Definición mediante el límite del cociente incremental
    
    p.mb-4 Formalmente, la derivada de una función f(x) en un punto x = a se define como el límite del cociente incremental cuando el incremento h tiende a cero. El cociente incremental representa la razón de cambio promedio de la función en el intervalo [a, a+h], y se expresa como:

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/10.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1(data-aos="fade-left")
        div.bg-color-8.p-4.text-center.mb-3
          h5.mb-0 (f(a+h) - f(a)) / h
        p Al tomar el límite de este cociente cuando h se aproxima a cero, se obtiene la razón de cambio instantánea de la función en x = a, es decir, la derivada:
        div.bg-color-8.p-4.text-center.mb-3
          h5.mb-0 f'(a) = lim(h→0) (f(a+h) - f(a)) / h
        p Esta definición basada en límites proporciona una base rigurosa para el cálculo de derivadas y es fundamental para el desarrollo del cálculo diferencial (Ortiz Campos, Ortiz Cerecedo & Ortiz Cerecedo, 2016).

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/11.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-8.p-5(data-aos="fade-left")
          h5 Por ejemplo: 
          p Para encontrar la derivada de la función f(x) = x2 en x = 3 utilizando la definición del límite, procederemos de la siguiente manera:
          p.mb-0.text-center.text-bold f'(3) = lim(h→0) (f(3+h) - f(3)) / h
          p.mb-0.text-center.text-bold = lim(h→0) ((3+h)2 - 32) / h
          p.mb-0.text-center.text-bold = lim(h→0) (9 + 6h + h2 - 9) / h
          p.mb-0.text-center.text-bold = lim(h→0) (6h + h2) / h
          p.text-center.text-bold = lim(h→0) (6 + h) = 6
          p.mb-0 Por lo tanto, la derivada de f(x) = x2 en x = 3 es igual a 6.

    #t_1_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.4] Notación y significado de f'(x)
    
    .bg-full-width.bg_img_2
      .px-4.px-md-5.py-4
        .row.mb-5
          .col-lg-4.order-2
            figure
              img(src="@/assets/curso/tema1/13.png", data-aos="zoom-in")
          .col-lg-8.order-1.mb-3.mb-lg-0
            .bg-color-2.p-4.mb-3(data-aos="fade-left")
              .row.align-items-start
                .col-lg-auto
                  img(src="@/assets/curso/tema1/12.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0 La notación más comúnmente utilizada para denotar la derivada de una función f(x) es f'(x), que se lee "f prima de x". Esta notación, introducida por Lagrange, enfatiza el hecho de que la derivada es en sí misma una nueva función que depende de la variable x. Así, f'(x) representa la función derivada, que asigna a cada valor de x la tasa de cambio instantánea de f en ese punto.

            p(data-aos="fade-left") Es importante destacar que f'(x) no es el resultado de multiplicar f por una variable prima; en su lugar, el apóstrofo (') es un símbolo que indica la operación de derivación. Además de f'(x), otras notaciones utilizadas para la derivada incluyen:
      
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/14.svg" alt="" style="width: 90px")
              h5.text-center  (Notación de Leibniz)
              p.mb-0.text-center Resalta el hecho de que la derivada es el cociente de los diferenciales df y dx.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/14.svg" alt="" style="width: 90px")
              h5.text-center  Df(x) (Notación de operador)
              p.mb-0.text-center Enfatiza que la derivación es un operador aplicado a la función f.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/14.svg" alt="" style="width: 90px")
              h5.text-center  (Notación de operador diferencial)
              p.mb-0.text-center Combina las notaciones de Leibniz y de operador.
    
    p.mb-5 La elección de la notación puede depender del contexto y de las preferencias personales, pero todas ellas representan el mismo concepto subyacente de la derivada (Palacios Pineda, 2017).

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/15.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-1.px-4.py-5(data-aos="fade-left")
          h5 Por ejemplo: 
          p Si f(x) = 3x2 - 5x + 2, entonces su función derivada se denotará como:
          p.mb-0.text-center.text-bold f’(x) = 6x – 5
          p Esta función f'(x) señala la tasa de cambio instantánea de f(x) para cualquier valor de x. Así, si quisiéramos conocer la razón de cambio de f en x = 4, simplemente evaluaremos f'(4):
          p.text-center.text-bold f'(4) = 6(4) - 5 = 19
      
          p.mb-0 Lo que indica que en x = 4, la función f(x) está creciendo a una tasa de 19 unidades por cada unidad de incremento en x.

    #t_1_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.5] Aplicaciones en la administración: crecimiento de ingresos, costos marginales y productividad

    p.mb-4 A continuación, se profundiza en tres áreas estratégicas en las que las derivadas adquieren especial relevancia: crecimiento de ingresos, costos marginales y productividad, ofreciendo a los administradores información precisa para decisiones más acertadas.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/16.png", data-aos="zoom-in")
      .col-lg-6
        TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
          texto="Fundamentos de la innovación estratégica"
          tiempo
          :audio="require('../../assets/curso/podcast/podcast1.mp3')"
        )  
            
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/17.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-8.p-5(data-aos="fade-left")
          h5 Ejemplo 
          p.mb-0 Considere una función de producción Q(L) = 100L(1/2), donde Q representa la cantidad producida y L el número de horas de trabajo. La derivada de esta función, Q'(L) = 50L(-1/2), nos da la productividad marginal del trabajo. Si una empresa está utilizando actualmente 100 horas de trabajo (L = 100), entonces la productividad marginal sería Q'(100) = 50(100)(-1/2) = 5, lo que significa que aumentar las horas de trabajo en una unidad resultaría en un aumento de 5 unidades en la producción. Si este aumento se considera insuficiente, la empresa podría buscar formas de mejorar la eficiencia o considerar invertir en capital para aumentar la productividad.




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
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/275845?page=1" target="_blank" rel="noopener noreferrer") Chíguil Figueroa, F. & Castillo Soto, M. (2024). Manual de cálculo diferencial e integral. Usos y aplicaciones en la modelación microeconómica: (1 ed.). Editorial Miguel Ángel Porrúa.  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/40452" target="_blank" rel="noopener noreferrer") García Franchini, C. & Alvarado Arellano, M. (2016). Cálculo diferencial en competencias: ( ed.). Grupo Editorial Patria. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/40405?page=1" target="_blank" rel="noopener noreferrer") Ortiz Campos, F. J. Ortiz Cerecedo, F. J. & Ortiz Cerecedo, F. J. (2016). Cálculo diferencial: (2 ed.). Grupo Editorial Patria.  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/40498" target="_blank" rel="noopener noreferrer") Palacios Pineda, L. M. (2017). Cálculo de varias variables: ( ed.). Grupo Editorial Patria.  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://es.khanacademy.org/math/ap-calculus-ab/ab-differentiation-1-new/ab-2-1/v/derivative-as-a-concept " target="_blank" rel="noopener noreferrer") Khan Academy. (n.d.). La derivada como concepto. Khan Academy.   
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.geogebra.org " target="_blank" rel="noopener noreferrer") GeoGebra ofrece una calculadora en línea que incluye herramientas para calcular y visualizar las funciones. Además de mostrar los gráficos, puede explorar cómo se comporta la función a medida que se acerca a un valor específico y ver las soluciones numéricas y simbólicas.   

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/nrrYUA1XU3M" target="_blank" rel="noopener noreferrer") Mateming. (2022, 27 de abril). Función derivada ¿Cómo encontrarla?. [Video]. YouTube 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
