[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/NoutYWiV)
# Estrategias de Persistencia - TP 2024


## Descripción del Proyecto

Se ha desarrollado un sistema interno de gestión de productos para una empresa de manufactura. La empresa fabrica una amplia gama de productos tecnológicos que requieren componentes específicos y son producidos por múltiples fabricantes asociados.

La problemática de la empresa por la que se decidió hacer este sistema es que el proceso de gestión de la información es manual y está descentralizado, lo que genera demoras y problemas en la producción. 

Se decidió automatizar y centralizar estos datos mediante un sistema web eficiente que permita gestionar los productos, fabricantes y componentes de manera integrada.


## Información de la API a implementar
Se decidió implementar un modelo relacional y se utilizó el siguiente diagrama de entidad-relación (DER) para generar los modelos y las asociaciones en Sequelize para que la API pueda interactuar con la base de datos a través de los Modelos.

![DER](DER.png)
### Descripción del modelo DER
- Un **Producto** puede tener muchos fabricantes, y un **Fabricante** puede fabricar muchos productos.
- Un **Producto** puede tener muchos componentes, y un **Componente** puede formar parte de varios productos.



### Base de datos
El sistema utiliza el motor de base de datos sqlite para realizar pruebas simples pero se pueden utilizar otros motores como MySql o Postgres.



## Instrucciones necesarias para correr la API.
Instalar las dependencias utilizadas en la API. 
Para esto hay que utilizar el comando: ```npm install```
Esto instalará las dependencias: ``` express - joi - sequelize - sqlite3 ```
Y luego utilizar el comando: ```npm start``` 




## API

#### Organización del código:
- El código está organizado en rutas, controllers y middleware utilizando la separación por recurso.


### Endpoints
- Todas las peticiones que se realicen a la API deben ser enviadas en **localHost** con el **puerto 3000** que se encuentra por defecto, o modificarlo por variable de entorno.

Ejemplos de cada recurso de la API con las diferentes respuestas:



**Verbo:** GET 

**Recurso:** /productos

**Status code:** 200

**Descripción:** Obtiene todos los productos. En caso de que no haya productos devuelve un array vacío.

**Ejemplos:** 

*Sin productos - Status code 200*
![GET PROD VACIO](./ejemplos/productos/getSinProductosCargados.JPG)


*Todos los productos - Status code 200*
![GET PROD cod200](./ejemplos/productos/getConProductosCargados.JPG)



**Verbo:** GET 

**Recurso:** /productos/:id

**Status code:** 200 y 404

**Descripción:** Obtiene el producto identificado con el id que se le pase en el recurso. En caso de que ese producto no se encuentre devuelve un mensaje de error.

**Ejemplos:** 

*Status code 200*
![GET PROD cod200](./ejemplos/productos/getIdExitoso.JPG)


*Status code 404*
![GET PROD cod404](./ejemplos/productos/getIdError.JPG)




**Verbo:** POST 

**Recurso:** /productos

**Status code:** 201 y 400

**Descripción:** Crea un producto. En caso de pasar mal algún dato lanza un mensaje de error indicando cuál es el error.

**Ejemplo:**

*Status code 201*
![POST PROD cod201](./ejemplos/productos/postProducto.JPG)


*Status code 400*
![POST PROD cod400](./ejemplos/productos/postProductoError.JPG)




**Verbo:** PUT

**Recurso:** /productos/:id

**Status code:** 200, 400 y 404

**Descripción:** Modifica los datos del producto identificado con el id que se le pase en el recurso. En caso de que ese producto no se encuentre o se pase mal algún dato, devuelve un mensaje de error indicando cuál es el error.

**Ejemplo:** 

*Status code 200*
![PUT PROD cod200](./ejemplos/productos/putProductoModificadoExitoso.JPG)


*Status code 400*
![PUT PROD cod400](./ejemplos/productos/putProductoModificadoError.JPG)


*Status code 404*
![PUT PROD cod404](./ejemplos/productos/putProductoModificadoQueNoExiste.JPG)




**Verbo:** DELETE

**Recurso:** /productos/:id

**Status code:** 200, 404 y 500

**Descripción:** Borra el producto identificado con el id que se le pase en el recurso. En caso de que ese producto no se encuentre o no se pueda eliminar, devuelve un mensaje de error.

**Ejemplo:** 

*Status code 200*
![DELETE PROD cod200](./ejemplos/productos/deleteProductoExitoso.JPG)


*Status code 404*
![DELETE PROD cod404](./ejemplos/productos/deleteProductoError.JPG)




**Verbo:** POST

**Recurso:** /productos/:id/fabricantes

**Status code:** 201, 404 y 400

**Descripción:** Crea la asociación del producto identificado con el id que se le pase en el recurso con 1 o N fabricantes.

**Ejemplo:**

*Status code 201*
![POST PROD_RELACION cod201](./ejemplos/productos/relacionFabricantes/postProductoConSusFabricantesExitoso.jpg)


*Status code 404*
![POST PROD_RELACION cod404](./ejemplos/productos/relacionFabricantes/postProductoConSusFabricantes404.jpg)


*Status code 400*
![POST PROD_RELACION cod400](./ejemplos/productos/relacionFabricantes/postProductoConSusFabricantes400.jpg)



**Verbo:** GET 

**Recurso:** /productos/:id/fabricantes

**Status code:** 200 y 404

**Descripción:** Obtiene todos los fabricantes del producto identificado con el id que se le pase en el recurso. 

**Ejemplo:**

*Status code 200*
![GET PROD_RELACION cod200](./ejemplos/productos/relacionFabricantes/getProductoConSusFabricantesExitoso.JPG)


*Status code 404*
![GET PROD_RELACION cod404](./ejemplos/productos/relacionFabricantes/getProductoConSusFabricantesError.jpg)




**Verbo:** POST 

**Recurso:** /productos/:id/componentes

**Status code:** 201, 404 y 400

**Descripción:** Crea la asociación del producto identificado con el id que se le pase en el recurso, con 1 o N componentes. 

**Ejemplo:** 

*Status code 201*
![POST PROD_RELACION cod201](./ejemplos/productos/relacionComponentes/postProductoConSusComponentesExitoso.jpg)


*Status code 404*
![POST PROD_RELACION cod404](./ejemplos/productos/relacionComponentes/postProductoConSusComponentes404.jpg)


*Status code 400*
![POST PROD_RELACION cod400](./ejemplos/productos/relacionComponentes/postProductoConSusComponentes400.jpg)



**Verbo:** GET

**Recurso:** /productos/:id/componentes

**Status code:** 200 y 404

**Descripción:** Obtiene todos los componentes del producto identificado con el id que se le pase en el recurso.

**Ejemplo:**

*Status code 200*
![GET PROD_RELACION cod200](./ejemplos/productos/relacionComponentes/getProductoConSusComponentesExitoso.jpg)


*Status code 404*
![GET PROD_RELACION cod404](./ejemplos/productos/relacionComponentes/getProductoConSusComponentesError.jpg)



---
**Verbo:** GET

**Recurso:** /fabricantes

**Status code:** 200

**Descripción:** Obtiene todos los fabricantes. En caso de que no haya fabricantes devuelve un array vacío.

**Ejemplo:** 

*Sin fabricantes - Status code 200*
![GET FABR VACIO](./ejemplos/fabricantes/getSinFabricantesCargados.JPG)


*Todos los fabricantes - Status code 200*
![GET FABR cod200](./ejemplos/fabricantes/getConFabricantesCargados.JPG)



**Verbo:** GET

**Recurso:** /fabricantes/:id

**Status code:** 200 y 404

**Descripción:** Obtiene el fabricante identificado con el id que se le pase en el recurso. En caso de que ese fabricante no se encuentre devuelve un mensaje de error.

**Ejemplo:** 

*Status code 200*
![GET FABR cod200](./ejemplos/fabricantes/getIdExitoso.JPG)


*Status code 404*
![GET FABR cod404](./ejemplos/fabricantes/getIdError.JPG)



**Verbo:** POST

**Recurso:** /fabricantes

**Status code:** 201 y 400

**Descripción:** Crea un fabricante. En caso de pasar mal algún dato lanza un mensaje de error indicando cuál es el error.

**Ejemplo:**

*Status code 201*
![POST FABR cod201](./ejemplos/fabricantes/postFabricante.JPG)


*Status code 400*
![POST FABR cod400](./ejemplos/fabricantes/postFabricanteError.JPG)



**Verbo:** PUT

**Recurso:** /fabricantes/:id

**Status code:** 200 y 404

**Descripción:** Modifica los datos del fabricante identificado con el id que se le pase en el recurso. En caso de que ese fabricante no se encuentre o se pase mal algún dato, devuelve un mensaje de error indicando cuál es el error.

**Ejemplo:** 

*Status code 200*
![PUT FABR cod200](./ejemplos/fabricantes/putFabricanteModificadoExitoso.JPG)


*Status code 400*
![PUT FABR cod400](./ejemplos/fabricantes/putFabricanteModificadoError.jpg)


*Status code 404*
![PUT FABR cod404](./ejemplos/fabricantes/putFabricanteModificadoQueNoExiste.JPG)



**Verbo:** DELETE

**Recurso:** /fabricantes/:id

**Status code:** 200, 404 y 500

**Descripción:** Borra el fabricante identificado con el id que se le pase en el recurso. En caso de que ese fabricante no se encuentre o no se pueda eliminar, devuelve un mensaje de error.

**Ejemplo:** 
*Status code 200*
![DELETE FABR cod200](./ejemplos/fabricantes/deleteFabricanteExitoso.JPG)


*Status code 404*
![DELETE FABR cod404](./ejemplos/fabricantes/deleteFabricanteError.JPG)



**Verbo:** GET

**Recurso:** /fabricantes/:id/productos

**Status code:** 200 y 404

**Descripción:** Obtiene todos los productos del fabricante identificado con el id que se le pase en el recurso. 

**Ejemplo:**

*Status code 200*
![GET FABR_RELACION cod200](./ejemplos/fabricantes/relacionProductos/getFabricanteConSusProductosExitoso.JPG)


*Status code 404*
![GET FABR_RELACION cod404](./ejemplos/fabricantes/relacionProductos/getFabricanteConSusProductosError.jpg)



---
**Verbo:** GET

**Recurso:** /componentes

**Status code:** 200

**Descripción:** Obtiene todos los componentes. En caso de que no haya componentes devuelve un array vacío.

**Ejemplo:**

*Sin componentes - Status code 200*
![GET COMP VACIO](./ejemplos/componentes/getSinComponentesCargados.JPG)


*Todos los componentes - Status code 200*
![GET COMP cod200](./ejemplos/componentes/getConComponentesCargados.JPG)



**Verbo:** GET

**Recurso:** /componentes/:id

**Status code:** 200 y 404

**Descripción:** Obtiene el componente identificado con el id que se le pase en el recurso. En caso de que ese componente no se encuentre devuelve un mensaje de error.

**Ejemplo:** 

*Status code 200*
![GET COMP cod200](./ejemplos/componentes/getIdExitoso.JPG)


*Status code 404*
![GET COMP cod404](./ejemplos/componentes/getIdError.JPG)




**Verbo:** POST

**Recurso:** /componentes

**Status code:** 201 y 400

**Descripción:** Crea un componente. En caso de pasar mal algún dato lanza un mensaje de error indicando cuál es el error.

**Ejemplo:**

*Status code 201*
![POST COMP cod201](./ejemplos/componentes/postComponente.JPG)


*Status code 400*
![POST COMP cod400](./ejemplos/componentes/postComponenteError.JPG)




**Verbo:** PUT

**Recurso:** /componentes/:id

**Status code:** 200 y 404

**Descripción:** Modifica los datos de el componente identificado con el id que se le pase en el recurso. En caso de que ese componente no se encuentre o se pase mal algún dato, devuelve un mensaje de error indicando cuál es el error.

**Ejemplo:** 

*Status code 200*
![PUT COMP cod200](./ejemplos/componentes/putComponenteModificadoExitoso.JPG)


*Status code 400*
![PUT COMP cod400](./ejemplos/componentes/putComponenteModificadoError.JPG)


*Status code 404*
![PUT COMP cod404](./ejemplos/componentes/putComponenteModificadoQueNoExiste.JPG)




**Verbo:** DELETE

**Recurso:** /componentes/:id

**Status code:** 200, 404 y 500

**Descripción:** Borra el componente identificado con el id que se le pase en el recurso. En caso de que ese componente no se encuentre o no se pueda eliminar, devuelve un mensaje de error.

**Ejemplo:** 

*Status code 200*
![DELETE COMP cod200](./ejemplos/componentes/deleteComponenteExitoso.JPG)


*Status code 404*
![DELETE COMP cod404](./ejemplos/componentes/deleteComponenteError.JPG)




**Verbo:** GET 

**Recurso:** /componentes/:id/productos

**Status code:** 200 y 404

**Descripción:** Obtiene todos los productos del componente identificado con el id que se le pase en el recurso.

**Ejemplo:**

*Status code 200*
![GET COMP_RELACION cod200](./ejemplos/componentes/relacionProductos/getComponenteConSusProductosExitoso.jpg)


*Status code 404*
![GET COMP_RELACION cod404](./ejemplos/componentes/relacionProductos/getComponenteConSusProductosError.jpg)
