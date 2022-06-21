"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UXDClient = void 0;
const controller_1 = require("./controller");
class UXDClient {
    constructor(provider, controllerAddress, uxdTokenAddress, market) {
        this.controller = new controller_1.UXDController(provider, controllerAddress, uxdTokenAddress, market);
    }
    // TODO: more 
    getController() {
        return this.controller;
    }
}
exports.UXDClient = UXDClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9jbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsNkNBQTRDO0FBRTVDLE1BQWEsU0FBUztJQUdsQixZQUNJLFFBQTBDLEVBQzFDLGlCQUF5QixFQUN6QixlQUF1QixFQUN2QixNQUFjO1FBRWQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLDBCQUFhLENBQy9CLFFBQVEsRUFDUixpQkFBaUIsRUFDakIsZUFBZSxFQUNmLE1BQU0sQ0FDVCxDQUFBO0lBQ0wsQ0FBQztJQUVELGNBQWM7SUFDUCxhQUFhO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUMzQixDQUFDO0NBQ0o7QUFyQkQsOEJBcUJDIn0=