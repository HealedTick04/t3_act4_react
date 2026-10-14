
# TaskFlow - T3 Act 4 React

## Descripción del proyecto

TaskFlow es una aplicación web de lista de tareas desarrollada con React y Vite. Permite agregar tareas, marcarlas como completadas, eliminarlas y limpiar la lista.

El objetivo del proyecto es demostrar el uso de componentes funcionales, props, estado con useState y renderizado dinámico de listas.

## Tecnologías utilizadas

- React
- Vite
- JavaScript
- CSS
- Git y GitHub
- GitHub Pages

## Funcionalidades

- Agregar nuevas tareas.
- Marcar tareas como completadas.
- Eliminar tareas individualmente.
- Limpiar la lista.
- Mostrar el número de tareas y las tareas pendientes.

## Conceptos de React utilizados

- **Componentes funcionales:** Header y TaskItem son componentes que permiten organizar la interfaz.
- **Props:** TaskItem recibe task, onToggle y onDelete desde App.
- **Estado:** useState administra la lista de tareas y el texto del formulario.
- **Renderizado dinámico:** map() recorre el arreglo de tareas para mostrar cada elemento.
- **Key:** cada tarea utiliza su id como identificador único dentro de la lista.

## Preguntas y respuestas

### a) ¿Qué diferencia hay entre props y state en React?

Las props son datos que un componente recibe de otro componente, normalmente de su componente padre. Se utilizan para compartir información y funciones. El state es información que un componente administra y puede cambiar durante la ejecución. Cuando cambia el estado, React actualiza la interfaz que depende de él.

En TaskFlow, las props permiten enviar los datos y las funciones a TaskItem, mientras que el estado guarda las tareas y el texto escrito en el formulario.

### b) ¿Por qué es importante usar una key al renderizar una lista?

La propiedad key permite que React identifique cada elemento de una lista y detecte cuáles se agregaron, eliminaron o cambiaron. Esto ayuda a actualizar la interfaz correctamente. Las keys deben ser únicas entre los elementos de una misma lista y conviene utilizar identificadores estables en lugar del índice del arreglo cuando la lista puede cambiar.

En este proyecto, cada tarea utiliza su id como key.

### c) ¿Qué hace useState y dónde lo usaste?

useState es un Hook de React que permite guardar y actualizar información que cambia mientras se utiliza un componente. Devuelve el valor actual y una función para actualizarlo. Cuando el valor cambia, React vuelve a renderizar los elementos que dependen de él.

En TaskFlow lo utilicé para guardar las tareas con useState(initialTasks) y para guardar el texto del formulario con useState(""). Al agregar, completar o eliminar una tarea, actualizo el estado para reflejar el cambio en pantalla.

### d) Enlace del repositorio de GitHub

Pegar aquí la URL de tu repositorio.

### e) Enlace del proyecto en GitHub Pages

Pegar aquí la URL de la aplicación publicada.

## Autor

Fernando Rojas

