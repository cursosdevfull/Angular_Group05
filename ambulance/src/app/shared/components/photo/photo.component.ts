import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'amb-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
})
export class PhotoComponent implements OnInit {
  isOver = false;

  @ViewChild('photo') photo: ElementRef | null = null;

  constructor() {}

  ngOnInit(): void {}

  loadImage(d: File) {
    this.loadInDiv(d);
  }

  loadInDiv(file: File) {
    const fr: FileReader = new FileReader();
    fr.onloadend = (response: any) => {
      const dataBase64 = response.target.result;
      this.loadPhoto(dataBase64);
    };

    fr.readAsDataURL(file);
  }

  loadPhoto(image: string | ArrayBuffer) {
    (this.photo as ElementRef).nativeElement.innerHTML = '';

    (this
      .photo as ElementRef).nativeElement.style.backgroundImage = `url(${image})`;
  }
}
