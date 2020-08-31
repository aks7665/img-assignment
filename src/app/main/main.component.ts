import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  fileList = [];
  fileUrl = [];

  clickedBoxIndex: number = null;

  constructor() { }

  ngOnInit(): void {
  }

  onImageChange(event): void {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      this.fileList.push(file);
      const reader = new FileReader();
      reader.onload = e => {
        const url = reader.result;
        this.fileUrl.push(url);
      };
      reader.readAsDataURL(file);
    }
  }

  hasImageOnIndex(index: number): boolean {
    const length = this.fileList.length;
    if (index < length) {
      return true;
    }
    return false;
  }

  getImageUrl(index): string {
    return this.fileUrl[index];
  }

  onViewImage(index: number): void {
    if (this.clickedBoxIndex === index) {
      this.clickedBoxIndex = null;
      return;
    }
    this.clickedBoxIndex = index;
  }

  onRemove(index: number): void {
    if (this.clickedBoxIndex === index) {
      this.clickedBoxIndex = null;
    }
    this.fileList.splice(index, 1);
    this.fileUrl.splice(index, 1);
  }

}
