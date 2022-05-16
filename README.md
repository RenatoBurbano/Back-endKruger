# Back-endKruger
Back-end del Reto de Kruger

Según las indicaciones se debería utilizar el Framework: Spring boot, pero sinceramente no tengo conocimiento sobre ello y además de no tener Postgresql en mi computador decidí que el back-end se construiría en Node js y MongoDB, ya que no quise consumir mucho de mi tiempo del reto.

Utilizando el entorno Node basado en javascript, se manejó la herramienta Express ya que es minimalista y con gran oportunidad de escalabilidad, además se utilizó Mongoose para conectarse con MongoDB. Esta base de datos no relacional permite consultas rápidas y efectivas, además de tener buena integración con las herramientas ya mencionadas.

Las dependencias utilizadas fueron cors para el intercambio de recursos, dotenv para el manejo de varaibles de entorno, express y mongoose ya mencionadas.

El proyecto contiene un controlador que maneja la lógica, desde crear nuevos empleados, listar los empleados o uno solo, actualizar o eliminar individualmente, loguearse al sistema. el único servicio que faltaría sería de actulziar información de vacunación por parte del empleado.

Para conectarse con la base de datos utilizar "mongodb+srv://Admin:AdminKruger123@kruger-cluster.q5yj1.mongodb.net/RetoKruger"

Para iniciar el servidor utilizar npm run dev y su enlace url será http://localhost:4200/,  recomendado mirar el código con las direcciones url completas para consumir el api.


