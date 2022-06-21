"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UXDClient = void 0;
const UXDController_1 = require("./UXDController");
class UXDClient {
    constructor({ provider, controllerAddress, uxdTokenAddress }) {
        this.controller = new UXDController_1.UXDController({
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
exports.UXDClient = UXDClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9jbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsbURBQStDO0FBRS9DLE1BQWEsU0FBUztJQUdsQixZQUFZLEVBQ1IsUUFBUSxFQUNSLGlCQUFpQixFQUNqQixlQUFlLEVBS2xCO1FBQ0csSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLDZCQUFhLENBQUM7WUFDaEMsUUFBUTtZQUNSLGlCQUFpQjtZQUNqQixlQUFlO1NBQ2xCLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxjQUFjO0lBQ1AsYUFBYTtRQUNoQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQztDQUNKO0FBdkJELDhCQXVCQyJ9