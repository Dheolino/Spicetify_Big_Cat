"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function main() {
    while (!(Spicetify === null || Spicetify === void 0 ? void 0 : Spicetify.showNotification)) {
        await new Promise(resolve => setTimeout(resolve, 100));
    }
    // Show message on start.
    Spicetify.showNotification("Hello!");
}
exports.default = main;
