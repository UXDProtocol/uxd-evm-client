import { UXDController } from "./controller";
export class UXDClient {
    constructor(provider, controllerAddress, uxdTokenAddress, market) {
        this.controller = new UXDController(provider, controllerAddress, uxdTokenAddress, market);
    }
    // TODO: more 
    getController() {
        return this.controller;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9jbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQTtBQUU1QyxNQUFNLE9BQU8sU0FBUztJQUdsQixZQUNJLFFBQTBDLEVBQzFDLGlCQUF5QixFQUN6QixlQUF1QixFQUN2QixNQUFjO1FBRWQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLGFBQWEsQ0FDL0IsUUFBUSxFQUNSLGlCQUFpQixFQUNqQixlQUFlLEVBQ2YsTUFBTSxDQUNULENBQUE7SUFDTCxDQUFDO0lBRUQsY0FBYztJQUNQLGFBQWE7UUFDaEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzNCLENBQUM7Q0FDSiJ9