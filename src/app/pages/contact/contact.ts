import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';

@Component({
    selector: 'app-contact-page',
    imports: [ReactiveFormsModule],
    templateUrl: './contact.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactPage implements OnInit {
    private title = inject(Title);
    private meta = inject(Meta);
    private fb = inject(FormBuilder);

    public contactForm = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        subject: ['', Validators.required],
        message: ['', [Validators.required, Validators.minLength(10)]],
    });

    ngOnInit(): void {
        this.title.setTitle('Contacto - PokeApp');
        this.meta.updateTag({ name: 'description', content: '¿Tienes alguna duda? Ponte en contacto con el equipo de PokeApp.' });
    }

    public onSubmit() {
        if (this.contactForm.invalid) {
            this.contactForm.markAllAsTouched();
            return;
        }
        console.log('Formulario enviado:', this.contactForm.value);
        // Aquí iría la lógica de envío
    }
}
