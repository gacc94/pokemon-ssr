import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-about-page',
    imports: [],
    templateUrl: './about.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutPage {}
