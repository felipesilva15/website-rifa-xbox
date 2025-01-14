import { Component, HostListener, OnInit } from '@angular/core';
import { MenuItem } from '../../models/menu-item';
import { ButtonModule } from 'primeng/button';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) { }

  isScrolled: boolean = false;
  menuItems: MenuItem[] = [
    {
      label: 'Home',
      link: 'home'
    },
    {
      label: 'Sobre nós',
      link: 'about-us'
    },
    {
      label: 'Como funciona',
      link: 'how-it-works'
    },
    {
      label: 'Cartela',
      link: 'card'
    },
    {
      label: 'Contatos',
      link: 'contacts'
    },
  ];

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe({
      next: (params) => {
        const linkTo: string = this.activatedRoute.snapshot.queryParamMap.get('linkTo') ?? '';

        if (linkTo) {
          this.scrollTo(linkTo);
        }
      }
    })

    
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollPosition: number = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = scrollPosition > 60;
  }

  scrollTo(elementId: string): void {
      const element: HTMLElement | null = document.getElementById(elementId);

      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - 60;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
  }
}
