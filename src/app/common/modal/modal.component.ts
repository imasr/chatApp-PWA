import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
    @ViewChild('openModalButton') openModal: ElementRef;
    @Input() message = "";

    constructor() { }

    ngOnInit() {
        this.openModal.nativeElement.click()
    }
}