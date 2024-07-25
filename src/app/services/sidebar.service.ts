import { Injectable } from '@angular/core';
import { PrimeIcons } from 'primeng/api';
import { SidebarItem } from '../test/prueba/prueba.component';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  collapsed: boolean = true;
  sideItems: SidebarItem[] = [

    {
      routelink: '/test/main/my',
      icon: 'pi pi-building-columns',
      label: 'Home',
      items: [],
      expanded: false
    },
    {
      routelink: '#',
      icon: 'pi pi-book',
      label: 'Carreras',
      items: [
        {
          routelink: '/test/main',
          icon: PrimeIcons.CIRCLE_FILL,
          label: 'subnivel 1',
        },
        {
          routelink: '#',
          icon: PrimeIcons.CIRCLE_FILL,
          label: 'Con subniveles',
          items: [
            {
              routelink: '/test/main/my',
              label: 'subnivel 2',
            },
            {
              routelink: '#',
              label: 'subnivel 2',
            }
          ]
        },
        {
          routelink: '#',
          icon: PrimeIcons.CIRCLE_FILL,
          label: 'Rectorado',
        },
        
      ],
      expanded: false
    },
    {
      routelink: '#',
      icon: 'pi pi-building',
      label: 'Instituciones',
      items: [
        {
          routelink: '#',
          icon: PrimeIcons.CIRCLE_FILL,
          label: 'Home',
        },
        {
          routelink: '#',
          icon: PrimeIcons.CIRCLE_FILL,
          label: 'Prueba',
          items: [
            {
              routelink: '#',
              icon: PrimeIcons.CIRCLE_FILL,
              label: 'Home',
            },
            {
              routelink: '#',
              icon: PrimeIcons.CIRCLE_FILL,
              label: 'Home',
            },
            {
              routelink: '#',
              icon: PrimeIcons.CIRCLE_FILL,
              label: 'Home',
            },
          ],
        },
        {
          routelink: '#',
          icon: PrimeIcons.CIRCLE_FILL,
          label: 'Home',
        },
      ],
      expanded: false
    },
    {
      routelink: '#',
      icon: 'pi pi-calendar',
      label: 'Agenda',
    },
    {
      routelink: '#',
      icon: 'pi pi-desktop',
      label: 'Administración',
      items: [
        {
          routelink: '#',
          icon: PrimeIcons.CIRCLE_FILL,
          label: 'Home',
          items: [
            {
              routelink: '#',
              label: 'Home',
            },
            {
              routelink: '#',
              label: 'Home',
            },
          ],
        },
        {
          routelink: '#',
          icon: PrimeIcons.CIRCLE_FILL,
          label: 'Home',
        },
      ],
    },
  ];
}
