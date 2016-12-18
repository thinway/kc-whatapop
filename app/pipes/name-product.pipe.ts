import { Pipe, PipeTransform } from "@angular/core";

import { Product } from "../models/product";

@Pipe({
    name: "orderByName"
})

export class NameProductPipe implements PipeTransform {

    transform(products: Product[], order: string): Product[] {

        let orderedProductsByName: Product[];

        if ( order === "asc" ) {
            console.log('Name Pipe: asc');
            // Si la ordenación es ascendente
            orderedProductsByName = products.sort((productA: Product, productB: Product): number => {
                let nameProductA: string = `${productA.name}`.toLowerCase();
                let nameProductB: string = `${productB.name}`.toLowerCase();

                return nameProductA > nameProductB ? 1 :
                        nameProductA < nameProductB ? -1 : 0;
            });
        } else if( order === 'desc' ){
            console.log('Name Pipe desc');
            // Si la ordenación es descendente
            orderedProductsByName = products.sort((productA: Product, productB: Product): number => {
                let nameProductA: string = `${productA.name}`.toLowerCase();
                let nameProductB: string = `${productB.name}`.toLowerCase();

                return nameProductB > nameProductA ? 1 :
                    nameProductB < nameProductA ? -1 : 0;
            });
        } else {
            console.log('Name Pipe: none');
            orderedProductsByName = products;
        }

        return orderedProductsByName;
    }
}
