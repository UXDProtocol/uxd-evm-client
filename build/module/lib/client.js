import { UXDController } from "./UXDController";
export class UXDClient {
    controller;
    constructor({ provider, controllerAddress, uxdTokenAddress }) {
        this.controller = new UXDController({
            provider,
            controllerAddress,
            uxdTokenAddress
        });
    }
    // TODO: more 
    getController() {
        return this.controller;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9jbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFBO0FBRS9DLE1BQU0sT0FBTyxTQUFTO0lBQ0MsVUFBVSxDQUFnQjtJQUU3QyxZQUFZLEVBQ1IsUUFBUSxFQUNSLGlCQUFpQixFQUNqQixlQUFlLEVBS2xCO1FBQ0csSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLGFBQWEsQ0FBQztZQUNoQyxRQUFRO1lBQ1IsaUJBQWlCO1lBQ2pCLGVBQWU7U0FDbEIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGNBQWM7SUFDUCxhQUFhO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUMzQixDQUFDO0NBQ0oifQ==