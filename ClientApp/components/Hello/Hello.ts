import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Hello extends Vue {

    @Prop() name!: string;
    
    @Prop() initialEnthusiasm!: number;

    showLabel: string = "Show";

    hidden: boolean = true;

    enthusiasm: number = this.initialEnthusiasm;

    constructor() {
        super();
    }

    toggle(): void {
        this.hidden = !this.hidden;
        this.showLabel = this.hidden ? "Show" : "Hide";
    }

    increment(): void {
        this.enthusiasm++;
    }

    decrement(): void {
        if (this.enthusiasm > 1) {
            this.enthusiasm--;
        }
    }

    get exclamationMarks() {
        return Array(this.enthusiasm).join("!");
    }
};