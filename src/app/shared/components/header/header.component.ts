import { Component, HostListener, OnInit } from '@angular/core';
import { MenuItemCustom } from '../../models/menu-item-custom';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonModule, MenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) { }

  isScrolled: boolean = false;
  menuItems: MenuItemCustom[] = [
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
  menuItemsCompact: MenuItem[] = [
    {
      items: [
        {
          label: 'Home',
          command: () => this.scrollTo('home')
        },
        {
          label: 'Sobre nós',
          command: () => this.scrollTo('about-us')
        },
        {
          label: 'Como funciona',
          command: () => this.scrollTo('how-it-works')
        },
        {
          label: 'Cartela',
          command: () => this.scrollTo('card')
        },
        {
          label: 'contatos',
          command: () => this.scrollTo('contacts')
        },
      ]
    }
  ]

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe({
      next: (params) => {
        const linkTo: string = this.activatedRoute.snapshot.queryParamMap.get('linkTo') ?? '';

        setTimeout(() => {
          if (linkTo) {
            this.scrollTo(linkTo);
          }
        }, 500)
      }
    });
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
