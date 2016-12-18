import { Component, Input, Output, EventEmitter } from "@angular/core";

import { Product } from "../../models/product";

@Component({
    selector: 'like',
    templateUrl: './app/components/product-like/product-like.component.html',
    styleUrls: [ './app/components/product-like/product-like.component.css']
})

export class ProductLikeComponent {
    @Input() like: boolean;
    @Input() product: Product;

    @Output() changeLike: EventEmitter<boolean> = new EventEmitter<boolean>();

    changeLikeStatus(likeStatus: boolean): void {
        if ( likeStatus !== this.like ){
            this.like = !this.like;
            this.changeLike.emit(this.like);
        }
    }
}
