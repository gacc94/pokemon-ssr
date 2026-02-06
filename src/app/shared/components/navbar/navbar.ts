import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-navbar',
    imports: [RouterLink, RouterLinkActive],
    templateUrl: './navbar.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {
    public isMobileMenuOpen = signal(false);

    public navLinks = [
        { path: '/about', label: 'Sobre nosotros' },
        { path: '/pricing', label: 'Precios' },
        { path: '/contact', label: 'Contacto' },
    ];

    public toggleMenu() {
        this.isMobileMenuOpen.update((open) => !open);
    }
}
