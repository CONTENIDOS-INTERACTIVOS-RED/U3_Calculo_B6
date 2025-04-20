<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Reglas para calcular derivadas'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        .bg-color-3.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Una vez que se ha comprendido el concepto de derivada y su interpretación, el siguiente paso es aprender a calcularlas de manera eficiente. Aunque la definición formal de la derivada mediante límites es fundamental, aplicarla directamente puede resultar tedioso y poco práctico en muchos casos. Afortunadamente, existen reglas y técnicas que simplifican enormemente el proceso de derivación. En esta sección, se explorarán las principales reglas para calcular derivadas, que abarcan desde funciones simples hasta expresiones más complejas.
        p(data-aos="fade-left") Para facilitar la comprensión de las derivadas se incluye en la Tabla 1. La solución a las derivadas más comunes. 
    
    .titulo-figura.mb-4
      h5 Tabla 2.
      span Tabla con las derivadas más comunes en cálculo.
    .row.mb-5
      .col-lg-8 
        .tabla-a.color-acento-botones.mb-5
          table.text-center
            thead
              tr
                th.bg-color-6.text-center Función
                th.bg-color-6.text-center Derivada
            tbody
              tr
                td Constante
                td 0
              tr
                td x<sup>n</sup> (n ≠ 0)
                td n * x<sup>(n-1)</sup>
              tr
                td e<sup>x</sup>
                td e<sup>x</sup>
              tr
                td ln(x)
                td 1/x
              tr
                td sen(x)
                td cos(x)
              tr
                td cos(x)
                td -sen(x)
              tr
                td tan(x)
                td Sec<sup>2</sup>(x)
              tr
                td arcsen(x)
                td 1/√(1 - x<sup>2</sup>)
              tr
                td arccos(x)
                td -1/√(1 - x<sup>2</sup>)
              tr
                td arctan(x)
                td 1/(1 + x<sup>2</sup>)
      
      .col-lg-4
        .bg-color-8.p-5.mb-3(data-aos="fade-left")
          p.mb-0 En la primera columna se encuentra la "Función", que muestra las funciones matemáticas más utilizadas, como xn, ex, ln(x), y funciones trigonométricas como sin(x), cos(x), etc.
          p.mb-0 En la segunda columna, "Derivada", se encuentra la expresión correspondiente a la derivada de cada una de esas funciones. 
          p.mb-0 Esta tabla es una referencia rápida y útil para recordar las reglas básicas de derivación de funciones comunes, es ideal para repasar y consultar las derivadas más importantes durante el estudio de derivadas en esta asignatura de cálculo.
   
        

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Regla de la potencia
    
    .row.mb-5
      .col-lg-5.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/3.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1(data-aos="fade-left")
        p La regla de la potencia es una de las reglas fundamentales para calcular derivadas y se aplica a funciones de la forma f(x) = xn, donde n es un número real. Según esta regla, la derivada de xn es:
        div.bg-color-8.p-4.text-center.mb-3
          h5.mb-0 d/dx xn = nx (n-1)
        p En otras palabras, para derivar una función potencia, se multiplica el exponente por la base y luego se reduce el exponente en una unidad.
        p Por ejemplo, considere la función f(x) = x5. Aplicando la regla de la potencia, se obtiene:
        div.bg-color-8.p-4.text-center.mb-3
          h5.mb-0 f'(x) = d/dx x5 = 5x(5-1) = 5x4
        p Es importante tener en cuenta que esta regla también se aplica a exponentes negativos y racionales. 
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/4.png", data-aos="zoom-in")
      .col-lg-8(data-aos="fade-left")
        div.bg-color-2.p-5.h-100.mb-3
          p Por ejemplo, si g(x) = x-3, entonces:
          p.mb-0.text-bold.text-center g'(x) = d/dx x-3
          p.mb-0.text-bold.text-center = -3x-3-1
          p.mb-0.text-bold.text-center = -3x-4 
          p.mb-0.text-bold.text-center = -3/x4
          p.mb-0.text-bold.text-center Y si h(x) = x2/3, entonces:
          p.mb-0.text-bold.text-center h'(x) = d/dx x2/3
          p.mb-0.text-bold.text-center = (2/3)x(2/3-1)
          p.mb-0.text-bold.text-center = (2/3)x-1/3
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema2/5.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") La regla de la potencia es esencial para derivar una amplia gama de funciones y constituye la base sobre la que se construyen otras reglas de derivación. Dominar esta regla es un primer paso crucial para desarrollar una sólida comprensión del cálculo diferencial y sus aplicaciones (Ortiz Campos, Ortiz Cerecedo & Ortiz Cerecedo, 2016).
        p.mb-0 Un ejemplo práctico de la aplicación de la regla de la potencia en la administración de empresas sería el análisis del crecimiento de la producción en función del tiempo. Suponga que la producción de una empresa se modela mediante la función P(t) = 500t2/3, donde P representa la cantidad producida y t es el tiempo en meses.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/6.png", data-aos="zoom-in")
      .col-lg-8(data-aos="fade-left")
        div.bg-color-1.p-4.h-100.mb-3
          p Para determinar la tasa de cambio de la producción en cualquier momento dado, se puede derivar esta función utilizando la regla de la potencia:
          p.mb-0.text-bold.text-center P'(t) = d/dt 500t<sup>2/3</sup>
          p.mb-0.text-bold.text-center = 500 × (2/3)t-1/3
          p.text-bold.text-center = (1000/3)t-1
          p Esta función derivada P'(t) indica la tasa a la que está cambiando la producción en cualquier mes específico. Por ejemplo, si se desea conocer la tasa de cambio de la producción al cabo de 8 meses, se evaluaría P'(8):
          p.text-bold.text-center P'(8) = (1000/3) × 8-1/3 ≈ 83.14
          p Esto significa que, al octavo mes, la producción está aumentando a una tasa de aproximadamente 83.14 unidades por mes. Este tipo de análisis puede ayudar a los administradores a comprender la dinámica del crecimiento de la producción y tomar decisiones informadas sobre la planificación de la capacidad y la asignación de recursos. 
    
    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Regla de la suma y la resta
    
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/7.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") La regla de la suma y la resta nos permite derivar funciones que son la suma o diferencia de otras funciones. Si f(x) y g(x) son funciones derivables, entonces la derivada de su suma o diferencia es igual a la suma o diferencia de sus derivadas individuales:
    
        .bg-color-8.p-4.mb-3(data-aos="fade-left")
          img(src="@/assets/curso/tema2/7-1.svg", style="max-width: 358px").mx-auto
        
        p(data-aos="fade-left") En otras palabras, para derivar una suma o resta de funciones, simplemente se deriva cada función por separado y luego se suman o restan las derivadas resultantes.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/8.png", data-aos="zoom-in")
      .col-lg-8
    
        .bg-color-8.p-4.mb-3(data-aos="fade-left")
          h5 Ejemplo
          p Considere la función h(x) = 3x2 - 5x + 2. Se puede ver esta función como la suma de tres funciones: f(x) = 3x2, g(x) = -5x, y una constante, 2. Aplicando la regla de la suma, se obtiene:
          img(src="@/assets/curso/tema2/8-1.svg", style="max-width: 240px").mx-auto.mb-3
        
          p.mb-0(data-aos="fade-left") Es importante tener en cuenta que las constantes tienen una derivada igual a cero, dado que su tasa de cambio es nula.

    p.mb-4 La regla de la suma y la resta es fundamental para derivar funciones más complejas que están compuestas por múltiples términos. Al descomponer estas funciones en sus partes constituyentes, podemos aplicar las reglas de derivación a cada término por separado y luego combinar los resultados (García Franchini & Alvarado Arellano, 2016).

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/10.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        .bg-color-2.p-5(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/9.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5 Considere un ejemplo del ámbito empresarial. 
              p.mb-0 Suponga que los ingresos totales de una empresa se modelan mediante la función I(x) = 1000x - 0.5x2, donde I representa los ingresos en dólares y x es la cantidad de unidades vendidas. Los costos totales, por su parte, vienen dados por C(x) = 500 + 200x.
    
    p.mb-4 Para solucionar se debe:

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/11.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Paso 1. Definir la función de beneficios")
            p P(x) = I(x) - C(x) = (1000x - 0.5x2) - (500 + 200x)
    
          .div(titulo="Paso 2. Simplificar la función")
            p Simplificación:
            p.mb-0 = 1000x - 0.5x2 - 500 - 200x
            p.mb-0 = -0.5x2 + 800x – 500

    
          .div(titulo="Paso 3. Derivar la función de beneficios")
            p Aplicar derivada:
            img(src="@/assets/curso/tema2/11-1.svg", style="max-width: 320px")
          .div(titulo="Paso 4. Evaluar para un nivel específico")
            p Al vender 500 unidades:
            p.mb-0 P'(500) = -500 + 800 = 300
          .div(titulo="Paso 5. Interpretar resultado")
            p Cada unidad adicional vendida genera un incremento en los beneficios de aproximadamente 300 dólares. Esta información es clave para decisiones estratégicas sobre precios y producción.

    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Regla del producto y del cociente
    
    p.mb-4 La regla del producto y del cociente nos permite derivar funciones que son el producto o cociente de otras funciones. Si f(x) y g(x) son funciones derivables, entonces:

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/12.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") La regla del producto establece que la derivada de un producto de funciones es igual a:
    
        .bg-color-8.p-4.mb-3(data-aos="fade-left")
          img(src="@/assets/curso/tema2/12-1.svg", style="max-width: 358px").mx-auto
        
        p(data-aos="fade-left") En otras palabras, para derivar un producto de funciones, se multiplica la primera función por la derivada de la segunda, y se suma esto al producto de la segunda función por la derivada de la primera.
        .bg-color-8.p-4.mb-3(data-aos="fade-left")
          h5 Ejemplo 
          p.mb-5 Considere la función h(x) = (x<sup>2</sup> + 1)(3x - 2). Aplicando la regla del producto, se obtiene: 
          img(src="@/assets/curso/tema2/12-2.svg", style="max-width: 358px").mx-auto
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/13.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") La regla del cociente, por su parte, establece que la derivada de un cociente de funciones es igual a:
    
        .bg-color-8.p-4.mb-3(data-aos="fade-left")
          img(src="@/assets/curso/tema2/13-1.svg", style="max-width: 358px").mx-auto
        
        p(data-aos="fade-left") Es decir, para derivar un cociente de funciones, se multiplica el denominador por la derivada del numerador, se resta el numerador multiplicado por la derivada del denominador, y dividimos todo esto por el cuadrado del denominador.
        .bg-color-8.p-4.mb-3(data-aos="fade-left")
          h5 Ejemplo 
          p.mb-5 Sea j(x) = (x<sup>2</sup> - 1) / (2x + 3). Usando la regla del cociente, se tiene: 
          img(src="@/assets/curso/tema2/13-2.svg", style="max-width: 500px").mx-auto

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/14.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") Estas reglas son esenciales para derivar funciones más complejas que involucran productos y cocientes, y tienen numerosas aplicaciones en la modelización económica y empresarial (Palacios Pineda, 2017).
        .bg-color-8.p-4.mb-3(data-aos="fade-left")
          h5 Ejemplo 
          p.mb-5 Suponga que la función de producción de una empresa viene dada por P(L,K) = 100L(1/2)K(1/3), donde P es la cantidad producida, L es el trabajo (en horas) y K es el capital (en miles de dólares). Para encontrar la productividad marginal del trabajo, se debe derivar P con respecto a L, tratando K como una constante. Aplicando la regla del producto: 
          img(src="@/assets/curso/tema2/14-1.svg", style="max-width: 300px").mx-auto

    .bg-full-width.bg_img
      .px-4.px-md-5.py-4
        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/15.png", data-aos="zoom-in")
          .col-lg-8
            .bg-color-1.px-4.py-5(data-aos="fade-left")
              p Esta derivada parcial indica cómo cambia la producción al variar las horas de trabajo, manteniendo constante el nivel de capital. Si la empresa cuenta actualmente con 1000 horas de trabajo y 125,000 dólares de capital, entonces la productividad marginal del trabajo sería: 
              p.text-center.text-bold (∂P/∂L) = 50 × (125)(1/3) × (1000)(-1/2) ≈ 8.55
              p.mb-0 Esto significa que, en los niveles actuales de trabajo y capital, cada hora adicional de trabajo aumentaría la producción en aproximadamente 8.55 unidades. Este tipo de análisis es fundamental para la toma de decisiones sobre la contratación de personal y la asignación óptima de recursos en las empresas.
        
        .row.justify-content-center
          .col-lg-8
            .bg-color-white.shadow-soft.p-4.mb-4
              .row.justify-content-around.align-items-center
                .col-md-auto
                  img(src="@/assets/template/video.svg", style="width: 80px;").mx-auto.mb-4.mb-lg-0
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h5.mb-1 Como hacer operaciones de suma,resta y multiplicacion con derivadas
                      p.mb-0 Para ampliar los conceptos sobre operaciones con derivada, le invitamos a ver el siguiente vídeo.
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(href="https://youtu.be/2q86LwoTNos " target="_blank")
                        span Ver video
                        i.fas.fa-arrow-right

    #t_2_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.4] Regla de la cadena y derivación de funciones compuestas
    
    p.mb-4 La regla de la cadena es una técnica poderosa para derivar funciones compuestas, es decir, funciones que están "anidadas" dentro de otras. Si g(x) es una función derivable y f(g(x)) es una función compuesta derivable, entonces la regla de la cadena establece que:

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/16.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
    
        .bg-color-8.p-4.mb-3(data-aos="fade-left")
          img(src="@/assets/curso/tema2/16-1.svg", style="max-width: 233px").mx-auto
        p(data-aos="fade-left") En otras palabras, para derivar una función compuesta, primero se deriva la función "exterior" con respecto a la función "interior", y luego se multiplica por la derivada de la función "interior".
        .bg-color-8.p-4.mb-3(data-aos="fade-left")
          h5 Ejemplo 
          p Consideremos la función h(x) = (3x2 + 1)5. Podemos ver esta función como una composición de dos funciones: f(x) = x5 y g(x) = 3x2 + 1, donde h(x) = f(g(x)). Para aplicar la regla de la cadena, primero encontramos las derivadas de f y g: 
          p.mb-0.text-bold.text-center f'(x) = 5x4 
          p.text-bold.text-center g'(x) = 6x
          p Luego, aplicamos la regla de la cadena:
          img(src="@/assets/curso/tema2/16-2.svg", style="max-width: 250px").mx-auto

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/17.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") La regla de la cadena es particularmente útil para derivar funciones que involucran operaciones "anidadas", como funciones exponenciales, logarítmicas y trigonométricas compuestas (Bruzual & Domínguez, 2016).
        .bg-color-8.p-5.mb-3(data-aos="fade-left")
          h5 Ejemplo de aplicación en la administración de empresas.  
          p Suponga que los ingresos de una empresa en función de la cantidad producida vienen dados por I(q) = 1000q - 0.5q2, y que la cantidad producida es a su vez una función del número de trabajadores, según la función q(L) = 10L(1/2). Para encontrar la tasa de cambio de los ingresos con respecto al número de trabajadores, debemos derivar la función compuesta I(q(L)) utilizando la regla de la cadena: 
          p.text-bold.text-center (dI/dL) = (dI/dq) × (dq/dL)
    
    p.mb-4 Para solucionar se debe: 

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/18.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Paso 1. Derivar las funciones iniciales
              p Encontrar las derivadas:
              p.mb-0 (dI/dq) = 1000 - q 
              p.mb-0 (dq/dL)= 5L<sup>(-1/2)</sup>
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/19.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Paso 2. Aplicar la regla de la cadena
              p Combinar derivadas:
              p.mb-0 (dI/dL) = (1000 - q) × 5L<sup>(-1/2)</sup>
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/20.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Paso 3. Reemplazar q en función de L
              p Como q=10L1/2, la derivada queda:
              p.mb-0 (dI/dL) = (1000 - 10L<sup>(1/2)</sup>) × 5L<sup>(-1/2)</sup>
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/21.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Paso 4.  Evaluar para un nivel específico
              p Con 100 trabajadores (L=100):
              p.mb-0 (dI/dL) = (1000 - 10(100)<sup>(1/2)</sup>) × 5(100)<sup>(-1/2)</sup> 
              p.mb-0 ≈ 500 × 0.5 
              p.mb-0 = 250


          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/22.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Paso 5.  Interpretar el resultado
              p Cada trabajador adicional incrementa los ingresos en aproximadamente 250 dólares en el nivel actual de empleo. Este análisis ayuda en la planificación estratégica de la fuerza laboral.
    
    #t_2_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.5] Aplicaciones en funciones empresariales
    
    p.mb-4 Las reglas de derivación tienen numerosas aplicaciones en el análisis de funciones empresariales, como las funciones de ingresos, costos, producción y beneficios. Al derivar estas funciones, podemos obtener información valiosa sobre tasas de cambio, productividad marginal, costos marginales y máximos y mínimos.

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/23.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        .bg-color-8.p-4.mb-3(data-aos="fade-left")
          h5 Ejemplo 
          p  Consideremos una función de costos totales C(q) = 1000 + 50q + 0.1q2, donde C representa los costos en dólares y q es la cantidad producida. Para encontrar el costo marginal, es decir, el costo adicional de producir una unidad más, derivamos la función de costos: 
          img(src="@/assets/curso/tema2/23-1.svg", style="max-width: 280px").mx-auto.mb-3
          p Esta función de costo marginal nos indica cómo varían los costos al aumentar la producción. Por ejemplo, si actualmente se producen 100 unidades, entonces el costo marginal sería:
          h5.text-center C'(100) = 50 + 0.2(100) = 70
          p Esto significa que producir la unidad 101 costaría aproximadamente 70 dólares adicionales.


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

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
              a(href="https://tutorial.math.lamar.edu/Extras/CheatSheets_Tables.aspx#CalcSheet" target="_blank" rel="noopener noreferrer") Paul’s Online Math Notes. (n.d.). Derivatives Calculus Cheat Sheet. Paul’s Online Math Notes. 
          

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/2q86LwoTNos" target="_blank" rel="noopener noreferrer") Danstein. (2019, 18 de abril). Como hacer operaciones de suma, resta y multiplicación con derivadas. [Video]. YouTube 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
