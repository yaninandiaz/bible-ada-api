# TRABAJO PRÁCTICO N°3

## Introducción

Esta es una API sobre Biblias. Puede buscar todas las biblias en idioma **español**.

El proyecto está dividido acorde al patron MVC, desarrollado en lenguaje Typescript. Además, se crearon un server y un client para poder ejecutar los distintos requests.

### Detalle funcional

La información que provee esta API es:

- **Todas las biblias disponibles a nivel mundial**. La información se proveerá en español. Detalle del request:

```bash
{ action: "/bible/all" }
```

En el archivo [client.ts](./client.ts) se puede ver el mensaje que se debe de enviar (igual al detallado anteriormente), en la línea 7 aproximadamente.

- **Se puede buscar una biblia en particular por id**. Detalle del request:

```bash
{ action: "/bible/id", body: { bibleId: "592420522e16049f-01" } }
```

En el atributo bibleId debe de colocar un id de biblia (puede obtener uno enviando el mensaje anterior, /bible/all).
En el archivo [client.ts](./client.ts) se pueden ver varios mensajes asociados a esta funcionalidad, tanto exitosos como de error, de la línea 8 a la 13 aproximadamente.

- **Todos los libros de una biblia en particular**. Detalle del request:

```bash
{ action: "/book/all", body: { bibleId: "592420522e16049f-01" } }
```

En el atributo bibleId debe de colocar un id de biblia válido (puede obtener uno enviando el mensaje /bible/all).
En el archivo [client.ts](./client.ts) se pueden ver varios mensajes asociados a esta funcionalidad, tanto exitosos como para valores incorrectos para producir un error, de la línea 16 a la 20 aproximadamente.

- **Se puede buscar un libro en particular por id de biblia**. Detalle del request:

```bash
{ action: "/book/id", body: { bibleId: "592420522e16049f-01", bookId: "HEB" } }
```

En el atributo bibleId debe de colocar un id de biblia y un id de book (puede obtener uno enviando el mensaje /book/all).
En el archivo [client.ts](./client.ts) se pueden ver varios mensajes asociados a esta funcionalidad, tanto exitosos como para producir error, de la línea 21 a la 25 aproximadamente.

- **Todos los capitulos de un libro, de una biblia en particular**. Detalle del request:

```bash
{ action: "/chapter/all", body: { bibleId: "592420522e16049f-01", bookId: "JOB" } }
```

Recibe como atributos un id de biblia y un id de book válidos (puede obtener uno enviando el mensaje /book/all).
En el archivo [client.ts](./client.ts) se pueden ver varios mensajes asociados a esta funcionalidad, tanto exitosos como para obtener error, de la línea 28 a la 33 aproximadamente.

- **Logs**. Por cada invocación, se guardaron los requests y responses. Con esta acción se obtienen esos datos.

```bash
{ action: "/log/all" }
```

En el archivo [client.ts](./client.ts) se puede ver el mensaje asociados a esta funcionalidad, en la línea 36 aproximadamente.

A su vez, en el mismo archivo client, de la línea 39 a 41 aproximadamente, se pueden ver otros mensajes para comprobar validaciones.

### Detalle técnico

Para poder desarrollar las distintas funcionalidades, se usó la ["**API.Bible**"](https://scripture.api.bible/).

El proyecto fue divido en las siguientes carpetas:

- controllers: acá se puede encontrar los controllers asociadas a las distintas funcionalidades (bible, book, chapter y log).
- database: tiene la logica para guardar los logs, en un archivo json, y para leerlos.
- external_api: tiene los requests a la api, dividido por funcionalidad (bible, book y chapter).
- models: tiene las interfaces (bible.ts, book.ts, chapter.ts y log.ts) y clases (bible_model.ts, book_model.ts, chapter_model.ts y log_model.ts) asociadas a los modelos. Dentro de las clases, pueden encontrar la conexión con la external api o database, según corresponda.
- routers: acá se encuentran los routers a las distintas funcionalidades. En el archivo app.ts esta la entrada a los distintos routers (bible_router.ts, book_router.ts, chapter_router.ts y log_router.ts).
- utils: acá se dejaron algunos archivos con cosas auxiliares, como ser urls, constantes con mensajes de error, entre otras.

El index.ts representa el server, mientras que el client.ts al cliente.

El proyecto corre en el puerto 3000.

Para poder ejecutarlo, siga estos pasos:

1. Ejecute:

```bash
npm i
```

2. Ejecute:

```bash
npm run build
```

3. Primero ejecute el server con la siguiente instrucción:

```bash
npm run server
```

4. Luego, cuando el server esté escuchando (en la consola tiene que ver el mensaje "Listening in port: 3000"), ejecute la siguiente instrucción para que el cliente funcione:

```bash
npm run client
```

El resultado de la acción que haya ejecutado, la verá en la terminal/consola donde esté ejecutando el client.

Dentro del archivo [client.ts](./client.ts) puede ir descomentando y comentando cada prueba, si lo desea.