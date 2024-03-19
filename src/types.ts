import { DefineComponent } from 'vue';

// Define a generic prop type
interface ComponentProp {
    [key: string]: unknown;
}


interface ListItemComponent {
    component: DefineComponent<{}, {}, any>;
    props: ComponentProp;
}

export type { ListItemComponent };