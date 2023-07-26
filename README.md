# Pichichus
Este es un proyecto de ecommerce básico, que permite a los usuarios explorar, buscar y comprar productos para sus perritos. La aplicación ofrece una amplia gama de productos, desde alimentos y juguetes hasta accesorios y artículos de cuidado para mascotas. Los usuarios pueden agregar productos a su carrito de compras para realizar pedidos.


## Tecnologías utilizadas
- Vite: Un entorno de desarrollo rápido para aplicaciones web modernas.
- React: Una biblioteca JavaScript para construir interfaces de usuario interactivas.
- React Router: Un enrutador para aplicaciones React que permite una navegación declarativa y basada en componentes.
- Firebase: Una plataforma de desarrollo de aplicaciones web y móviles de Google que proporciona servicios de backend como autenticación, almacenamiento en la nube y base de datos en tiempo real.

## Funcionalidades
Explorar Productos: Los usuarios pueden ver una lista de productos disponibles y filtrarlos por categoría o buscar productos específicos.

Detalles del Producto: Al hacer clic en un producto, los usuarios pueden ver su descripción detallada y especificaciones.

Carrito de Compras: Los usuarios pueden agregar productos al carrito de compras y ajustar las cantidades antes de proceder al pago.

## Instalación

### Para instalar y ejecutar la aplicación en tu máquina local, sigue los siguientes pasos:

1. Clona el repositorio a tu máquina local.
2. Abre una terminal en el directorio del proyecto.
3. Ejecuta el comando npm install para instalar las dependencias.
4. Ejecuta el comando npm run dev para iniciar la aplicación.
5. Abre tu navegador y navega a http://localhost:5174 para ver la aplicación en acción.

## Configuración de Firebase

### Para utilizar Firebase en esta aplicación, debes seguir los siguientes pasos:

1. Crea una cuenta en Firebase y crea un nuevo proyecto.
2. En la sección "Authentication" de Firebase, habilita el proveedor de 3. autenticación de correo electrónico y contraseña.
4. En la sección "Firestore" de Firebase, crea una nueva base de datos y configura las reglas de seguridad para permitir lectura/escritura solamente a usuarios autenticados.
5. En la sección "Project settings" de Firebase, haz clic en "Add app" y sigue las instrucciones para agregar una nueva aplicación web.
6. Copia las credenciales de Firebase y configura las variables de entorno en el archivo .env de tu proyecto.

## Licencia
Este proyecto está bajo la Licencia MIT - ver el archivo LICENSE para más detalles.