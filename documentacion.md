# Documentación del Proyecto: East End Equestrian Group

Este documento sirve como guía técnica y de usuario para el proyecto web **East End Equestrian Group**. El sitio está construido utilizando tecnologías modernas para garantizar un alto rendimiento, accesibilidad y un gran diseño atractivo ("glassmorphism", animaciones sutiles, etc.).

## 1. Stack Tecnológico
- **Framework Principal:** [Next.js](https://nextjs.org/) (usando el tradicional *Pages Router*).
- **Librería de UI:** [React.js](https://reactjs.org/).
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/) para diseño rápido, flexible y con directivas a medida.
- **Animaciones:** [Framer Motion](https://www.framer.com/motion/) para animaciones de entrada, transitions suaves, y efectos en scroll.
- **Iconografía:** [Lucide React](https://lucide.dev/) (para menú hamburguesa) y SVGs personalizados.
- **Backend/APIs:** Rutas API Serverless integradas en Next.js (`/pages/api/*`).
  - **Envío de Correos:** [Nodemailer](https://nodemailer.com/).
  - **Base de Datos / Hojas de Cálculo:** [Google APIs (Google Sheets)](https://github.com/googleapis/google-api-nodejs-client).

---

## 2. Estructura de Proyecto Principal

- `/pages`: Contiene las páginas principales (rutas) de la web.
  - `index.js`: La página principal (Home) que agrupa y enlaza todos los componentes.
  - `_app.js`: Punto de entrada universal de la aplicación.
  - `_document.js`: Modifica la estructura del `<html>` y `<head>` (aquí se cargan las fuentes de Google: Albert Sans y Cormorant Garamond).
- `/pages/api/`: Rutas del servidor Node.js (Backend).
  - `sendEmail.js`: Controlador para emitir un correo mediante Nodemailer.
  - `addToSheet.js`: Controlador para interactuar con la API de Google Sheets e insertar una nueva fila.
- `/components`: Partes independientes, reutilizables de la web.
  - `Header.js`: Barra superior de navegación (transparente a glassmorphism).
  - `Hero.js`: Banner principal con el fondo introductorio y la misión.
  - `WhoWeAre.js`, `WhyWeExist.js`, `WhatWeDo.js`: Secciones informativas estructuradas.
  - `ContactForm.js`: Formulario de postulación y membresía.
  - `Footer.js`: Pie de página estático de la web.
- `/public`: Activos estáticos expuestos (imágenes `.png` como fondos, iconos y `logo.svg`).
- `/styles/globals.css`: Punto de anclaje de Tailwind, variables CSS raíz (colores personalizados y tipografías) y utilidades globales.

---

## 3. Guía: Cómo configurar y conectar Google Sheets

El sitio incluye un formulario interactivo extenso (Nombre, Email, Dirección, Teléfono, Afiliación, Rol y Mensaje) que envía toda la información recopilada directamente a una cuenta de Gmail (vía Nodemailer) y al mismo tiempo escribe una nueva fila en una hoja de Google Sheets (vía API).

Para que la inserción de datos en Google Sheets funcione, debes configurar el acceso usando **Google Cloud Console**, un proyecto y cuentas de servicio.

### Paso A: Preparar tu Google Sheet
1. Ve a [Google Sheets](https://docs.google.com/spreadsheets/) y crea una nueva hoja en blanco.
2. Nómbrala como quieras (ej. "Membresías Equestrian").
3. En la primera fila (encabezados de columnas), escribe en orden las 8 columnas para que quede prolijo:
   `| Fecha (Timestamp) | Nombre | Email | Teléfono | Dirección | Afiliación | Rol | Mensaje |`
4. Observa la URL de esta página en el navegador. La URL se parece a algo como esto:
   `https://docs.google.com/spreadsheets/d/1A2B3C4D5E6F7G8H9I0J/edit#gid=0`
5. Ese texto largo y aleatorio (`1A2B3C4D5E6F7G8H9I0J`) es tu **Spreadsheet ID**. Guárdalo, lo necesitaremos para el `.env.local`.

### Paso B: Activar la API y Crear Cuenta de Servicio (Service Account)
1. Entra a [Google Cloud Console](https://console.cloud.google.com/).
2. Crea un **Nuevo Proyecto** y ponle un nombre relacionado (ej. "Equestrian Web API"). Selecciona el proyecto recién creado.
3. En la barra de búsqueda superior, busca **"Google Sheets API"**.
4. Haz clic en el resultado y pulsa en el botón azul **Habilitar** (Enable).
5. En el menú de la izquierda, dirígete a **Credenciales** (Credentials).
6. Haz clic en **+ CREAR CREDENCIALES** en la parte superior y selecciona **Cuenta de servicio** (Service Account).
7. Asígnale cualquier nombre y dalo de alta pulsando "Crear y Continuar". No hace falta que elijas ningún rol específico, pulsa "Listo" (Done).
8. Volverás a la pantalla principal de Credenciales. En la parte de abajo aparecerá tu nueva cuenta de servicio con formato de email (algo tipo `tu-nueva-cuenta@tu-proyecto.iam.gserviceaccount.com`).
9. **MUY IMPORTANTE:** Copia esa dirección de correo de cuenta de servicio. Vuelve a tu Google Sheet (la hoja de cálculo), haz clic en el botón verde **Compartir** (arriba a la derecha), pega el email de esa cuenta de servicio allí, y bríndale permisos completos de **Editor**. (Así es como nuestro código tendrá permiso para escribir en tu hoja privada).
10. Vuelve a Google Cloud Console. Haz clic sobre el email de la cuenta de servicio (para entrar a sus detalles). Arriba elige la solapa **Claves** (Keys).
11. Pulsa en **Agregar clave > Crear clave nueva**, y elige la opción **JSON**. 
12. Al dar en Crear, un archivo de texto `.json` con claves secretas se descargará en tu computadora.

### Paso C: Llenar tu archivo `.env.local`
Para mantener tus claves secretas lejos de fuentes públicas (GitHub o código visible), usamos el archivo `.env.local` que está en el directorio raíz de este proyecto web.

Abre el archivo `.json` que descargaste en el paso anterior usando tu editor de texto. Vas a ver que cuenta con todo un objeto JSON con credenciales (`type`, `project_id`, `private_key`, etc.). Debes copiar **todo** el texto interno así como está (con sus comillas, llaves y saltos de línea "\n"). A veces es útil reducir todo a una sola línea.

Crea un archivo llamado `.env.local` (o edita el `.env.local.example`) en la carpeta raíz del proyecto e ingresa la siguiente información:

```env
# ====== Nodemailer - Email Settings ====== #
# El correo GMAIL que se usará como emisora 
EMAIL_USER="tu_correo_personal@gmail.com"

# Esta NO es la contraseña normal de Gmail. Tienes que habilitar la "Autenticación en 2 Pasos" en tu cuenta de Google, y luego crear una "Contraseña de Aplicación". Pega ese string de 16 letras aquí.
EMAIL_PASS="tu_contraseña_de_aplicacion_con_16_caracteres"


# ====== Google Sheets API Settings ====== #
# El ID largo que sacaste del Paso A.4
GOOGLE_SHEET_ID="1A2B3C4D5E6F7G8H9I0J"

# Copia aquí en una sola linea completa y exacta TODO el texto que traía el archivo .json descargado del paso B.12.
# En lugar de los saltos de línea reales puedes usar \n
GOOGLE_CREDENTIALS='{"type": "service_account", "project_id": "api-project-1234", "private_key_id": "xxxx", "private_key": "-----BEGIN PRIVATE KEY-----\\nMIIE...\\n-----END PRIVATE KEY-----\\n", "client_email": "web-api@api-project-1234.iam.gserviceaccount.com", "client_id": "111", "auth_uri": "https://accounts.google.com/o/oauth2/auth", "token_uri": "https://oauth2.googleapis.com/token", "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs", "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/web-api%40api-project-1234.iam.gserviceaccount.com", "universe_domain": "googleapis.com"}'
```

Una vez que tengas configurados el correo de envío y sus contraseñas, tu Spreadsheet ID y el JSON entero empaquetado como String, guarda el archivo. Reinicia el servidor con `npm run dev` y llena el formulario de contacto para comprobar la llegada de la información exitosamente tanto a la Hoja de Cálculo como al Correo.
