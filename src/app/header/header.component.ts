import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html'
})

export class HeaderComponent {
    @Output() onRecipesClicked = new EventEmitter

    display(feature: string) {
        this.onRecipesClicked.emit(feature)
    }
}