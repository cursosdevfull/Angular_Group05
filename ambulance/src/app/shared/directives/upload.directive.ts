import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[ambUpload]',
})
export class UploadDirective {
  @Output() onHover: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onUploadFile: EventEmitter<File> = new EventEmitter<File>();

  constructor() {}

  // document.addListener("dragover", evt => {})

  @HostListener('dragover', ['$event']) dragover(evt: any) {
    evt.preventDefault();
    this.onHover.emit(true);
  }

  @HostListener('dragleave', ['$event']) dragleave(evt: any) {
    evt.preventDefault();
    this.onHover.emit(false);
  }

  @HostListener('drop', ['$event']) drop(evt: any) {
    evt.preventDefault();
    this.onHover.emit(false);

    const file: File = evt.dataTransfer.files[0];

    if (file.type.startsWith('image/')) {
      this.onUploadFile.emit(file);
    }
  }
}
