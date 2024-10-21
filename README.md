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


### Instrucciones necesarias para correr la API.
Instalar las dependencias utilizadas en la API. 
Para esto hay que utilizar el comando: ```npm install```
Esto instalará las dependencias: ``` express - joi - sequelize - sqlite3 ```
Y luego utilizar el comando: ```npm start``` 



## API

#### Organización del código:
- El código está organizado en rutas, controllers y middleware utilizando la separación por recurso.


### EndPoints
- Todas las peticiones que se realicen a la API deben ser enviadas en **localHost** con el **puerto 3000** que se encuentra por defecto, o modificarlo por variable de entorno.

Ejemplos de cada recurso de la API con las diferentes respuestas:

**Verbo:** GET 
**Recurso:** /productos
**Status code:** 200
**Descripción:** Obtiene todos los productos, en caso de que no haya productos no devuelve nada. ??????????
**Ejemplo:** 


**Verbo:** GET 
**Recurso:** /productos/:id
**Status code:** 200 y 404
**Descripción:** Obtiene el producto identificado con el id que se le pase en el recurso, en caso de que ese producto no se encuentre devuelve un mensaje de error. ??????????
**Ejemplo:** 


**Verbo:** POST 
**Recurso:** /productos
**Status code:** 201 y 400
**Descripción:** Crea un producto, en caso de pasar mal algun dato..... ??????????
**Ejemplo:**


**Verbo:** PUT
**Recurso:** /productos/:id
**Status code:** 200 y 404
**Descripción:** Modifica los datos de el producto identificado con el id que se le pase en el recurso, en caso de que ese producto no se encuentre O se pase mal un dato... devuelve un mensaje de error. ?????
**Ejemplo:** 


**Verbo:** DELETE
**Recurso:** /productos/:id
**Status code:** 200, 404 y 500
**Descripción:** Borra el producto que identificado con el id que se le pase en el recurso, en caso de que ese producto no se encuentre devuelve un mensaje de error. ?????
**Ejemplo:** 


**Verbo:** POST 
**Recurso:** /productos/:id/fabricantes
**Status code:** 201, 404 y 400
**Descripción:** Crea la asociación del producto identificado con el id que se le pase en el recurso con 1 o N fabricantes. ¿¿En caso de que ese producto no se encuentre devuelve un mensaje de error. ??????????
**Ejemplo:** 


**Verbo:** GET 
**Recurso:** /productos/:id/fabricantes
**Status code:** 200 y 404
**Descripción:** Obtiene todos los fabricantes de el producto identificado con el id que se le pase en el recurso. ¿¿En caso de que ese producto no se encuentre devuelve un mensaje de error. ??????????
**Ejemplo:**


**Verbo:** POST 
**Recurso:** /productos/:id/componentes
**Status code:** 201, 404 y 400
**Descripción:** Crea la asociación del producto identificado con el id que se le pase en el recurso, con 1 o N componentes. ¿¿En caso de que ese producto no se encuentre devuelve un mensaje de error. ??????????
**Ejemplo:** 

**Verbo:** GET 
**Recurso:** /productos/:id/componentes
**Status code:** 200 y 404
**Descripción:** Obtiene todos los componentes de el producto identificado con el id que se le pase en el recurso. ¿¿En caso de que ese producto no se encuentre devuelve un mensaje de error. ??????????
**Ejemplo:**



**Verbo:** GET
**Recurso:** /fabricantes
**Status code:** 200
**Descripción:** Obtiene todos los fabricantes, en caso de que no haya fabricantes no devuelve nada. ??????????
**Ejemplo:** 

**Verbo:** GET
**Recurso:** /fabricantes/:id
**Status code:** 200 y 404
**Descripción:** Obtiene el fabricante identificado con el id que se le pase en el recurso, en caso de que ese fabricante no se encuentre devuelve un mensaje de error. ??????????
**Ejemplo:** 


**Verbo:** POST
**Recurso:** /fabricantes
**Status code:** 201 y 400
**Descripción:** Crea un fabricante, en caso de pasar mal algun dato..... ??????????
**Ejemplo:**


**Verbo:** PUT
**Recurso:** /fabricantes/:id
**Status code:** 200 y 404
**Descripción:** Modifica los datos de el fabricante identificado con el id que se le pase en el recurso, en caso de que ese fabricante no se encuentre O se pase mal un dato... devuelve un mensaje de error. ?????
**Ejemplo:** 


**Verbo:** DELETE
**Recurso:** /fabricantes/:id
**Status code:** 200, 404 y 500
**Descripción:** Borra el fabricante identificado con el id que se le pase en el recurso, en caso de que ese fabricante no se encuentre devuelve un mensaje de error. ?????
**Ejemplo:** 


**Verbo:** GET 
**Recurso:** /fabricantes/:id/productos
**Status code:** 200 y 404
**Descripción:** Obtiene todos los productos de el fabricante identificado con el id que se le pase en el recurso. ¿¿En caso de que ese producto no se encuentre devuelve un mensaje de error. ??????????
**Ejemplo:**
**_/fabricantes/1/productos_**

Obtiene los datos del fabricante registrado con el id 1, con todos los productos que fabrica, incluyendo los atributos de cada producto y los componentes asociados a esos productos.

```
{
    "id": 1,
    "nombre": "TechCorp",
    "direccion": "1234 Elm St, Ciudad",
    "contacto": "+123456789",
    "pathImgPerfil": "/images/fabricantes/techcorp.jpg",
    "productos": [
        {
            "id": 1,
            "nombre": "Laptop X200",
            "descripcion": "Una laptop de alto rendimiento",
            "precio": 1200.99,
            "pathImg": "/images/productos/laptop-x200.jpg",
            "componentes": [
                {
                    "id": 1,
                    "nombre": "Procesador Intel i7",
                    "descripcion": "Procesador de octava generación"
                },
                {
                    "id": 2,
                    "nombre": "SSD 1TB",
                    "descripcion": "Disco sólido de 1TB de capacidad"
                }
            ]
        },
        {
            "id": 2,
            "nombre": "Smartphone S5",
            "descripcion": "Teléfono inteligente con pantalla OLED",
            "precio": 799.99,
            "pathImg": "/images/productos/smartphone-s5.jpg",
            "componentes": [
                {
                    "id": 3,
                    "nombre": "Pantalla OLED 6.5 pulgadas",
                    "descripcion": "Pantalla de alta definición"
                },
                {
                    "id": 4,
                    "nombre": "Batería 4000mAh",
                    "descripcion": "Batería de larga duración"
                }
            ]
        }
    ]
}
```


**Verbo:** GET
**Recurso:** /componentes
**Status code:** 200
**Descripción:** Obtiene todos los componentes, en caso de que no haya componentes no devuelve nada. ??????????
**Ejemplo:** 

**Verbo:** GET
**Recurso:** /componentes/:id
**Status code:** 200 y 404
**Descripción:** Obtiene el componente identificado con el id que se le pase en el recurso, en caso de que ese componente no se encuentre devuelve un mensaje de error. ??????????
**Ejemplo:** 


**Verbo:** POST
**Recurso:** /componentes
**Status code:** 201 y 400
**Descripción:** Crea un componente, en caso de pasar mal algun dato..... ??????????
**Ejemplo:**


**Verbo:** PUT
**Recurso:** /componentes/:id
**Status code:** 200 y 404
**Descripción:** Modifica los datos de el componente identificado con el id que se le pase en el recurso, en caso de que ese componente no se encuentre O se pase mal un dato... devuelve un mensaje de error. ?????
**Ejemplo:** 


**Verbo:** DELETE
**Recurso:** /componentes/:id
**Status code:** 200, 404 y 500
**Descripción:** Borra el componente identificado con el id que se le pase en el recurso, en caso de que ese componente no se encuentre devuelve un mensaje de error. ?????
**Ejemplo:** 


**Verbo:** GET  
**Recurso:** /componentes/:id/productos
**Status code:** 200 y 404
**Descripción:** Obtiene todos los productos del componente identificado con el id que se le pase en el recurso. ¿¿En caso de que ese producto no se encuentre devuelve un mensaje de error. ??????????
**Ejemplo:**





