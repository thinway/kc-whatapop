import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ProductDetailComponent } from "./components/product-detail/product-detail.component";
import { ProductDetailResolve } from "./services/product-detail-resolve.service";
import { ProductResetComponent } from "./components/product-reset/product-reset.component";
import { ProductsCollectionComponent } from "./components/products-collection/products-collection.component";
import { SoldProductsResolve } from "./services/sold-products-resolve.service";

const routes: Routes = [
    {
        path: "products",
        component: ProductsCollectionComponent
    },
    {
        path: "products/:productId",
        component: ProductDetailComponent,
        resolve: {
            product: ProductDetailResolve
        }
    },
    {
        path: "reset",
        component: ProductResetComponent,
        resolve: {
            products: SoldProductsResolve
        }
    },
    {
        path: "**",
        redirectTo: "/products"
    }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);
