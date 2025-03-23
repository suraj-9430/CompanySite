import { Component } from '@angular/core';

@Component({
  selector: 'app-image-gallary',
  imports: [],
  templateUrl: './image-gallary.component.html',
  styleUrl: './image-gallary.component.css'
})
export class ImageGallaryComponent {
  images = [
    './bpcl.png',
    './iocl.png',
    './hpcl.png',
    './bpcl.png',
    './iocl.png',
    './hpcl.png', 
    './bpcl.png',
    './iocl.png',
    './hpcl.png', 
    './bpcl.png',
    './iocl.png',
    './hpcl.png',
    './bpcl.png',
    './iocl.png',
    './hpcl.png',
    './bpcl.png',
    './iocl.png',
    './hpcl.png',
    './bpcl.png',
    './iocl.png',
    './hpcl.png', 
    './bpcl.png',
    './iocl.png',
    './hpcl.png', 
    './bpcl.png',
    './iocl.png',
    './hpcl.png',
    './bpcl.png',
    './iocl.png',
    './hpcl.png',
    // Add more image paths as needed
  ];

  currentPage = 1; 
  itemsPerPage = 10; 

  get paginatedImages() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.images.slice(startIndex, endIndex);
  }

  // Get the total number of pages
  get totalPages() {
    return Math.ceil(this.images.length / this.itemsPerPage);
  }

  // Go to the next page
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  // Go to the previous page
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  // Go to a specific page
  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  getPageNumbers(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
}
