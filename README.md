# Regreso a los Colegios

Regreso a los colegios es una aplicación para pronosticar el nivel de contagio al que toda la comunidad educativa de educación básica primaria y secundaria, incluyendo familiares inmediatos, puede estar expuesta durante la pandemia del Covid-19.

Esta aplicación está dividida en dos repositorios que contienen el sitio web del proyecto (https://github.com/enflujo/colev-colegios) y el servidor (https://github.com/enflujo/colev-colegios-servidor). Para correr la aplicación se deben tener instalados los siguientes programas y librerías:

- Docker
- fastapi
- uvicorn

Las siguientes instrucciones explican paso a paso cómo correr la aplicación y enviar las respuestas al servidor para obtener el pronóstico de contagio.

1. Clonar desde GitHub ambos repositorios

- git clone https://github.com/enflujo/colev-colegios.git
- git clone https://github.com/enflujo/colev-colegios-servidor

2. Desde la consola de comandos y ubicados en la raíz de del repositorio del sitio web

- Iniciar el contenedor: docker compose up -d
- Instalar las dependencias: yarn
- Iniciar el sitio web: yarn start

{{<youtube UmX4kyB2wfg>}} Video 1
{{<youtube UmX4kyB2wfg>}} Video 2

3. Seguir los mismos pasos, pero esta vez desde la raíz del repositorio del servidor

- Iniciar el contenedor: docker compose up -d
- Instalar las dependencias: yarn
- Iniciar el sitio web: yarn start

4. Abrir una nueva ventana del navegador en la dirección http://localhost:8081/

5. Allí, completar el formulario con la mayor cantidad de datos posible para que la predicción sea acertada

6. Esperar un par de minutos, dependiendo del computador desde el que se corra la aplicación, para obtener los resultados del pronóstico.

{{<youtube UmX4kyB2wfg>}} Video 3
