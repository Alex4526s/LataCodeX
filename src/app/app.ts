import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'LataCodeX';
  protected readonly whatsappNumbers = [
    { phone: '0996866110', link: 'https://wa.me/593996866110' },
    { phone: '0998746535', link: 'https://wa.me/593998746535' }
  ];
  protected readonly mainWhatsappLink = this.whatsappNumbers[0].link;
  protected readonly email = 'alexcaisalitin11@gmail.com';

  protected readonly redesSociales = [
    { nombre: 'TikTok', url: 'https://tiktok.com/@codesoftlata', icon: 'tiktok' },
    { nombre: 'Instagram', url: 'https://www.instagram.com/codesoftlata?igsh=MTAyeDhxZThvcXVsaQ==', icon: 'instagram' },
    { nombre: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61580792023259', icon: 'facebook' }
  ];

  protected readonly publicidad = [
    {
      titulo: 'Promoción de Desarrollo Web',
      descripcion: 'Creamos tu página web profesional con diseño moderno y adaptable.',
      icon: '🚀'
    },
    {
      titulo: 'Automatización para Negocios',
      descripcion: 'Digitaliza procesos y ahorra tiempo con soluciones a medida.',
      icon: '⚙️'
    },
    {
      titulo: 'Soporte y Mantenimiento',
      descripcion: 'Actualizaciones, mejoras y respaldo para tus sistemas.',
      icon: '🛠️'
    },
    {
      titulo: 'Ayuda Académica',
      descripcion: 'Asesoría y soporte para tareas y tesis en escuelas, colegios, universidades y cualquier centro educativo.',
      icon: '📚'
    }
  ];
}
