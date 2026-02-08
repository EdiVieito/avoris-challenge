# Avoris Challenge
 
**Objetivo** : Maquetar la interfaz a partir de unos mockups, cuidando la estructura del proyecto, el CSS, el responsive y la accesibilidad.

**Alcance**; Se ha sido priorizar una buena base de maquetación, estructura y escalabilidad, más que un pixel-perfect absoluto en todos los detalles.

---

## Qué incluye el proyecto

La aplicación implementa:

- Header fijo con navegación principal
- Menú responsive tipo hamburguesa en mobile
- Hero con slider
- Filtro lateral con secciones colapsables
- Listado de cards
- Modal de desglose de precio
- Sistema de iconos SVG
- Diseño responsive (desktop / tablet / mobile)

---

## Stack utilizado

- **Angular 17** (standalone components)
- **TypeScript**
- **SCSS**
  - Metodología BEM en componentes
  - Estilos globales organizados
- **CSS variables** para tokens de diseño
- Datos mockeados (sin backend)

---

## Cómo arrancar el proyecto

Instalar dependencias:

```bash
npm install
```

Levantar servidor de desarrollo:
```bash
ng serve
```

La app estará disponible en: http://localhost:4200/

Build de producción:
```bash
ng build
```

---

## Estructura del proyecto
```bash
src/
 ├─ app/
 │   ├─ core/
 │   │   └─ mocks/              # Datos mockeados
 │   │   └─ model
 │   ├─ features/               # Secciones principales
 │   │   ├─ header
 │   │   ├─ hero
 │   │   ├─ filter
 │   │   ├─ list
 │   │   ├─ main
 │   │   ├─ footer
 │   │   └─ shared/            # Componentes reutilizables
 │   │       ├─ card
 │   │       ├─ component/     # Componentes más pequeños
 │   │           ├─ badge
 │   │           ├─ checkbox
 │   │           ├─ filter-section  #El desplegable del filtro
 │   │           ├─ modal
 │   │           ├─ price-breakdown
 │   │           └─ price-input        
 │   └─ app.component.ts
 │
 └─ styles/
     ├─ reset.scss
     ├─ variables.scss        # Colores, tipografías, radios
     ├─ typography.scss
     ├─ icons.scss
     ├─ layout.scss
     ├─ buttons.scss
     ├─ utilities.scss          # hidden, visually-hidden, etc.
     └─ breakpoints.scss        # Mixins responsive
```
---

## Decisiones técnicas

Durante el desarrollo se han tomado las siguientes decisiones:

- Uso de standalone components para simplificar la estructura y evitar boilerplate innecesario.
- Separación clara de responsabilidades:
  - MainComponent gestiona el estado (filtros, datos).
  - Los componentes de listado y cards son principalmente presentacionales.

- Los datos están mockeados y centralizados en core/mocks, y se pasan a los componentes mediante @Input().

- El menú responsive y el hero utilizan lógica mínima en Angular para gestionar estado, priorizando mantenibilidad y accesibilidad frente a soluciones CSS-only más frágiles.


- El sistema de estilos se basa en CSS variables (colores, tipografías), facilitando futuros cambios de tema.

- Breakpoints definidos mediante mixins (1023px, 744px, 390px).

- Sistema de iconos mediante sprite SVG (assets/icons.svg) usando <symbol> y <use>. Para facilitar el uso de iconos en otros contextos.

---

## Accesibilidad

Se ha tenido en cuenta la accesibilidad desde la maquetación:

- Uso de etiquetas semánticas modernas (header, nav, main, article, footer...).

- aria-label en botones sin texto visible (menú, controles del hero, cierre de modal).

- Navegación por teclado en el menú responsive:

  - Gestión de foco al abrir y cerrar
  - Cierre con tecla ESC

- Estados de foco visibles (:focus-visible).

- Imágenes con alt.

- IDs ARIA únicos en componentes reutilizables.

**Contraste y tamaño**

Algunos textos no cumplen contraste WCAG AA según el diseño original. Así como algunos botones son demasiado pequeños.

El sistema de estilos queda preparado para poder ajustar contraste o añadir un modo de alto contraste sin necesidad de rehacer la maquetación.

---

## Git y commits

Commits realizados por hitos funcionales (estructura, funcionalidad, estilos, responsive), manteniendo un historial claro y fácil de seguir.


---

## Posibles mejoras
- Tooltips como componente
- Modo de alto contraste para mejorar la accesibilidad    
