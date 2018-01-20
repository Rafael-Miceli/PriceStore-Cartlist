export interface Recipe {
    name: string;
    ingredients: Ingredient[];
}

interface Ingredient {
    product: Product;
    quantity: number;
}

interface Product {
    name: string;
}
