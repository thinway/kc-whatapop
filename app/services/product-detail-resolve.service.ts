import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable } from "rxjs/Observable";

import { Product } from "../models/product";
import { ProductService } from "./product.service";

@Injectable()
export class ProductDetailResolve implements Resolve<Product> {

    constructor(private _productService: ProductService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Product> {
        return this._productService.getProduct(+route.params["productId"]);
    }
}
