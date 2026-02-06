import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
    selector: 'app-pricing-page',
    imports: [],
    templateUrl: './pricing.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricingPage implements OnInit {
    private title = inject(Title);
    private meta = inject(Meta);

    public pricingTiers = [
        {
            name: 'Entrenador Novato',
            price: '0',
            description: 'Perfecto para empezar tu viaje en el mundo Pokémon.',
            features: ['Búsqueda básica de Pokémon', '10 favoritos guardados', 'Comunidad básica'],
            buttonText: 'Empezar Gratis',
            popular: false,
        },
        {
            name: 'Entrenador Pro',
            price: '19',
            description: 'Para aquellos que buscan maximizar su rendimiento.',
            features: ['Búsqueda avanzada y filtros', 'Favoritos ilimitados', 'Estadísticas detalladas', 'Asistencia prioritaria'],
            buttonText: 'Obtener Pro',
            popular: true,
        },
        {
            name: 'Maestro Pokémon',
            price: '49',
            description: 'La experiencia definitiva para los mejores del mundo.',
            features: ['Acceso a eventos exclusivos', 'Soporte 24/7 dedicado', 'Herramientas de análisis IA', 'Insignia de Maestro'],
            buttonText: 'Contactar Ventas',
            popular: false,
        },
    ];

    ngOnInit(): void {
        this.title.setTitle('Planes y Precios - PokeApp');
        this.meta.updateTag({ name: 'description', content: 'Encuentra el plan perfecto para convertirte en el mejor Maestro Pokémon.' });
    }
}
