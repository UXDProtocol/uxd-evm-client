"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UXDClient = void 0;
const controller_1 = require("./controller");
class UXDClient {
    constructor(provider, controllerAddress, uxdTokenAddress) {
        this.controller = new controller_1.UXDController(provider, controllerAddress, uxdTokenAddress);
    }
    // TODO: more 
    getController() {
        return this.controller;
    }
}
exports.UXDClient = UXDClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9jbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsNkNBQTRDO0FBRTVDLE1BQWEsU0FBUztJQUdsQixZQUNJLFFBQTBDLEVBQzFDLGlCQUF5QixFQUN6QixlQUF1QjtRQUV2QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksMEJBQWEsQ0FDL0IsUUFBUSxFQUNSLGlCQUFpQixFQUNqQixlQUFlLENBQ2xCLENBQUE7SUFDTCxDQUFDO0lBRUQsY0FBYztJQUNQLGFBQWE7UUFDaEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzNCLENBQUM7Q0FDSjtBQW5CRCw4QkFtQkMifQ==