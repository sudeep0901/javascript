import { Component, OnInit, OnChanges, ViewChild, AfterViewInit, ElementRef, ViewChildren, QueryList  } from '@angular/core';

import { IProduct } from './product';
import { ProductService } from './product.service';
import { NgModel } from '@angular/forms';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, AfterViewInit {

  @ViewChild('filterElement') filterElementRef : ElementRef;
  // @ViewChildren('filterElement, nameElement')
  // inputElementRefs:QueryList<ElementRef>;

  @ViewChildren(NgModel)

  inputElementRefs:QueryList<NgModel>;


  pageTitle: string = 'Product List';
  // listFilter: string;
  //getter & setter
  private _listFilter: string;

  showImage: boolean;

  imageWidth: number = 50;
  imageMargin: number = 2;
  errorMessage: string;

  filteredProducts: IProduct[];
  products: IProduct[];


  constructor(private productService: ProductService) {
    console.log(this.filterElementRef);
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (products: IProduct[]) => {
        this.products = products;
        this.performFilter(this.listFilter);
      },
      (error: any) => this.errorMessage = <any>error
    );
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  performFilter(filterBy?: string): void {
    if (filterBy) {
      this.filteredProducts = this.products.filter((product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy.toLocaleLowerCase()) !== -1);
    } else {
      this.filteredProducts = this.products;
    }
  }
  // event binding on model changes
  onFilterChange(filter: string): void {
    console.log(filter);
    this._listFilter = filter;
    this.performFilter(this.listFilter);
  }
  //getter
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.performFilter(this.listFilter);
  }
  ngAfterViewInit(): void {
    console.log(this.filterElementRef);
    console.log(this.inputElementRefs);

    this.filterElementRef.nativeElement.focus();
  }

}
