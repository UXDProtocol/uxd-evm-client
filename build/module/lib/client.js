import { UXDController } from "./controller";
export class UXDClient {
    constructor(provider, controllerAddress, uxdTokenAddress) {
        this.controller = new UXDController(provider, controllerAddress, uxdTokenAddress);
    }
    // TODO: more 
    getController() {
        return this.controller;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9jbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQTtBQUU1QyxNQUFNLE9BQU8sU0FBUztJQUdsQixZQUNJLFFBQTBDLEVBQzFDLGlCQUF5QixFQUN6QixlQUF1QjtRQUV2QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksYUFBYSxDQUMvQixRQUFRLEVBQ1IsaUJBQWlCLEVBQ2pCLGVBQWUsQ0FDbEIsQ0FBQTtJQUNMLENBQUM7SUFFRCxjQUFjO0lBQ1AsYUFBYTtRQUNoQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQztDQUNKIn0=