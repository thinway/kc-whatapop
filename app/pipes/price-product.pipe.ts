import { Pipe, PipeTransform } from "@angular/core";

import { Product } from "../models/product";

@Pipe({
    name: "orderByPrice"
})

export class PriceProductPipe implements PipeTransform {

    transform(products: Product[], order: string): Product[] {

        let orderedProductsByPrice: Product[];

        if ( order === "asc" ) {
            console.log('PricePipe: asc');
            // Si la ordenación es ascendente
            orderedProductsByPrice = products.sort((productA: Product, productB: Product): number => {
                let priceProductA: number = productA.price;
                let priceProductB: number = productB.price;

                return priceProductA > priceProductB ? 1 :
                    priceProductA < priceProductB ? -1 : 0;
            });
        } else if( order === 'desc' ){
            console.log('Price Pipe desc');
            // Si la ordenación es descendente
            orderedProductsByPrice = products.sort((productA: Product, productB: Product): number => {
                let priceProductA: number = productA.price;
                let priceProductB: number = productB.price;

                return priceProductB > priceProductA ? 1 :
                    priceProductB < priceProductA ? -1 : 0;
            });
        } else {
            console.log('Price Pipe: none');
            orderedProductsByPrice = products;
        }

        return orderedProductsByPrice;
    }
}
