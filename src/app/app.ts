import { Component } from '@angular/core';

type CategoriaServicio = 'todos' | 'web' | 'automatizacion' | 'soporte' | 'academico';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'LataCodeX';
  protected categoriaActiva: CategoriaServicio = 'todos';
  protected terminoBusqueda = '';
  protected mensajeCopia = '';

  protected readonly whatsappNumbers = [
    { phone: '0996866110', link: 'https://wa.me/593996866110' },
    { phone: '0998746535', link: 'https://wa.me/593998746535' }
  ];
  protected readonly mainWhatsappLink = this.whatsappNumbers[0].link;
  protected readonly email = 'alexcaisalitin11@gmail.com';

  protected readonly redesSociales = [
    { nombre: 'TikTok', url: 'https://www.tiktok.com/@latacodex' },
    { nombre: 'Instagram', url: 'https://www.instagram.com/latacodex?igsh=MTAyeDhxZThvcXVsaQ==' },
    { nombre: 'Facebook', url: '#' }
  ];

  public publicidad = [
    {
      titulo: 'Promoción de Desarrollo Web',
      descripcion: 'Creamos tu página web profesional con diseño moderno y adaptable.',
      infoAdicional: 'Plan profesional: configuración de dominio y hosting, diseño responsive y botón directo a WhatsApp.',
      funciones: [
        'Landing pages y sitios corporativos',
        'Tiendas en línea con catálogo de productos',
        'Panel administrativo para productos y contenido',
        'Integración con API y bases de datos',
        'Formularios avanzados con validación',
        'Botón directo a WhatsApp y automatización de contacto',
        'Mejoras de velocidad y rendimiento web',
        'Seguridad básica, backups y monitoreo',
        'Soporte post-entrega y capacitación'
      ],
      categoria: 'web',
      icon: '🚀',
      flipped: false
    },
    {
      titulo: 'Automatización para Negocios',
      descripcion: 'Digitaliza procesos y ahorra tiempo con soluciones a medida.',
      infoAdicional: 'Te ayudamos a eliminar tareas repetitivas. Desde facturación automática hasta integración de hojas de cálculo (Excel/Google Sheets) con tus bases de datos y sistemas de ventas.',
      categoria: 'automatizacion',
      icon: '⚙️',
      flipped: false
    },
    {
      titulo: 'Soporte y Mantenimiento',
      descripcion: 'Actualizaciones, mejoras y respaldo para tus sistemas.',
      infoAdicional: 'Servicio técnico continuo. Aseguramos que tus aplicaciones jamás se caigan, realizamos respaldos de seguridad semanales y aplicamos mejoras de rendimiento.',
      categoria: 'soporte',
      icon: '🛠️',
      flipped: false
    },
    {
      titulo: 'Ayuda Académica',
      descripcion: 'Brindamos ayuda en todas las áreas educativas y en todos los niveles de formación.',
      infoAdicional: 'Ofrecemos asesoría para tareas, proyectos y tesis en primaria, secundaria, bachillerato, institutos y universidad. Incluye tutorías personalizadas y acompañamiento académico integral.',
      categoria: 'academico',
      icon: '📚',
      flipped: false
    }
  ];

  protected get publicidadFiltrada() {
    const termino = this.terminoBusqueda.toLowerCase().trim();

    return this.publicidad.filter((item) => {
      const coincideCategoria = this.categoriaActiva === 'todos' || item.categoria === this.categoriaActiva;
      const coincideTexto =
        !termino ||
        item.titulo.toLowerCase().includes(termino) ||
        item.descripcion.toLowerCase().includes(termino) ||
        item.infoAdicional.toLowerCase().includes(termino) ||
        item.funciones?.some((funcion) => funcion.toLowerCase().includes(termino));

      return coincideCategoria && coincideTexto;
    });
  }

  protected cambiarCategoria(categoria: CategoriaServicio) {
    this.categoriaActiva = categoria;
    this.resetearTarjetas();
  }

  protected actualizarBusqueda(valor: string) {
    this.terminoBusqueda = valor;
    this.resetearTarjetas();
  }

  protected limpiarFiltros() {
    this.categoriaActiva = 'todos';
    this.terminoBusqueda = '';
    this.resetearTarjetas();
  }

  protected async copiarWhatsApp(phone: string) {
    try {
      await navigator.clipboard.writeText(phone);
      this.mensajeCopia = `Numero ${phone} copiado al portapapeles.`;
    } catch {
      this.mensajeCopia = 'No se pudo copiar automaticamente. Copialo manualmente.';
    }

    setTimeout(() => {
      this.mensajeCopia = '';
    }, 2500);
  }

  private resetearTarjetas() {
    this.publicidad = this.publicidad.map((item) => ({ ...item, flipped: false }));
  }
}
