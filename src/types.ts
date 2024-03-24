import { DefineComponent } from 'vue';

// Define a generic prop type
interface ComponentProp {
    [key: string]: unknown;
}

interface ListItemComponent {
    component: DefineComponent<{}, {}, any>;
    props: ComponentProp;
}

interface Product {
    name: string;
    description: string|null;
    tags: string[];
    averageSize: number;
    sizeMeas: string|null;
    calories: number;
    protein: number|null;
    carbohydrates: number|null;
    fat: number|null;
    sugars: number|null;
    cholesterol: number|null;
    calcium: number|null;
}

export type { ListItemComponent, Product };