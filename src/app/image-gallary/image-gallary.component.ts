import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface GalleryImage {
  src: string;
  title: string;
  category: string;
}

@Component({
  selector: 'app-image-gallary',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './image-gallary.component.html',
  styleUrls: ['./image-gallary.component.css']
})
export class ImageGallaryComponent {
  allImages: GalleryImage[] = [
    { src: 'tank.jpeg', title: 'Storage Tank Construction', category: 'Oil & Gas' },
    { src: 'bpcl.png', title: 'BPCL Project', category: 'Oil & Gas' },
    { src: 'iocl.png', title: 'IOCL Facility', category: 'Oil & Gas' },
    { src: 'hpcl.png', title: 'HPCL Infrastructure', category: 'Oil & Gas' },
    { src: 'worksta.jpeg', title: 'Construction Site', category: 'Industrial' },
    { src: 'canner.jpeg', title: 'Industrial Complex', category: 'Industrial' },
    { src: 'petrolium.jpeg', title: 'Petroleum Facility', category: 'Oil & Gas' },
    { src: 'stas.jpeg', title: 'Infrastructure Project', category: 'Infrastructure' },
    { src: 'tank.jpeg', title: 'Tank Farm', category: 'Oil & Gas' },
    { src: 'bpcl.png', title: 'BPCL Expansion', category: 'Oil & Gas' },
    { src: 'iocl.png', title: 'IOCL Terminal', category: 'Oil & Gas' },
    { src: 'hpcl.png', title: 'HPCL Depot', category: 'Oil & Gas' },
    { src: 'worksta.jpeg', title: 'Building Construction', category: 'Industrial' },
    { src: 'canner.jpeg', title: 'Industrial Works', category: 'Industrial' },
    { src: 'petrolium.jpeg', title: 'Power Plant', category: 'Infrastructure' },
    { src: 'stas.jpeg', title: 'Road Project', category: 'Infrastructure' }
  ];

  filteredImages: GalleryImage[] = [...this.allImages];
  activeFilter = 'all';
  currentPage = 1;
  itemsPerPage = 8;
  
  lightboxOpen = false;
  selectedImage: GalleryImage | null = null;

  get paginatedImages(): GalleryImage[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredImages.slice(startIndex, endIndex);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredImages.length / this.itemsPerPage);
  }

  filterImages(category: string): void {
    this.activeFilter = category;
    this.currentPage = 1;
    
    if (category === 'all') {
      this.filteredImages = [...this.allImages];
    } else if (category === 'oil') {
      this.filteredImages = this.allImages.filter(img => img.category === 'Oil & Gas');
    } else if (category === 'industrial') {
      this.filteredImages = this.allImages.filter(img => img.category === 'Industrial');
    } else if (category === 'infrastructure') {
      this.filteredImages = this.allImages.filter(img => img.category === 'Infrastructure');
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  getPageNumbers(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  openLightbox(image: GalleryImage): void {
    this.selectedImage = image;
    this.lightboxOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox(): void {
    this.lightboxOpen = false;
    this.selectedImage = null;
    document.body.style.overflow = '';
  }
}
