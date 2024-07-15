# Hub-Entretenimiento (entertainment)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
![image](https://github.com/user-attachments/assets/8d63c7ea-81ec-4cde-a545-7f26764f722a)

## Dependencias y bibliotecas
- angular 18.0.7
- https://fontawesome.com
- node 20.12.2
-  Bootstrap 5.3

## Descripcion
proyecto llamado entertainment realizado por Efren Reyes
El proyecto fue realizado con el fin de que el usuario pueda navegar en un ambiente de multimedia-entretenimiento
- se crearon 3 componentes generales que paquetan la vista principal del proyecto, estos fueron: Header, side-nav y el area del contenido que por ende aqui ocurre el cambio de vistas. Las paginas para mostrar en el area de contenido se reunen en una carpeta llamada pages, en esta se crean diferentes componentes como lo son: home, genero, favoritos, peliculas y login

## Reporte de Code Coverage
Debo mencionar que las pruebas initarias se comenzaban a realizar, ya se tenian algunos problemas de compilacion

## Problemas
Es la primera vez que me enfrento con Amgular, debo decir que esta siendo muy retador, en muchos video tutoriales se muestran trabajando con Versiones de angular anteriores donde aun trabajan bastante con modulos, las versiones actuales hacen uso de standalone.

¿Qué hice bien?
Considero que lo mejor que pude hacer es enfrentarme a dicha tecnologia, y tratar realmente de comprender como se maneja cada parte de esta, se me hizo un framework muy robusto y en el que veo grandes posibilidades de realizar grandes proyectos
- Lograr la comunicacion entre componentes
- saber como se puede intercambiar informacion entre componentes por medio de un servicio
- al final del dia comprender mas como es que funciona <router-outlet/>

¿Qué no salio bien?
- no alcance a realizar mis propias pruebas unitarias
- No concluir entregar completamente el proyecto
- No alcanzar a implementar servicios
- No implentar Guards para restringir rutas

¿Qué puedo hacer diferente?
De acuerdo a lo realizado y experiencia obtenida, lo primero es planear el proyecto, es decir saber que vistas tendra, que funcionalidad, cual sera la data a utilizar y como se obtendra, que servicios se implementaran etc. 
una vez planeada cada parte del proyecto considero tiene multiples beneficios, sirve y puede ayudar a que sea un proyecto comprensible y a la vez escalable.
Mi metodo utilizado para crear el proyecto fue ver tutoriales de que es lo que se podia realizar con angular (son demaciadas!!), y luego comenzar a pensar que es lo que queria que llevara el proyecto, el error fue estructurar el proyecto como algunos tutoriales que utilizan versiones anteriores de angular y luego llegaba a bug que no sabia como continuar.
si bien es un nueva tecnologia enfretada, sigo aprendiendo!! lo mejor que puedo hacer es seguir mejorando el proyecto y completandolo, haciendolo más robusto

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
