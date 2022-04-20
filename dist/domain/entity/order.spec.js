"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const order_1 = __importDefault(require("./order"));
const order_item_1 = __importDefault(require("./order_item"));
describe("Order unit tests", () => {
    it("should throw error when id is empty", () => {
        expect(() => {
            let order = new order_1.default("", "123", []);
        }).toThrowError("Id is required");
    });
    it("should throw error when customerId is empty", () => {
        expect(() => {
            let order = new order_1.default("123", "", []);
        }).toThrowError("CustomerId is required");
    });
    it("should throw error when item list is equal to 0", () => {
        expect(() => {
            let order = new order_1.default("123", "123", []);
        }).toThrowError("Item amount must be greater than 0");
    });
    it("should calculate total", () => {
        const item = new order_item_1.default("i1", "Item 1", 1000, "p1", 2);
        const item2 = new order_item_1.default("i2", "Item 2", 500, "p2", 2);
        const order = new order_1.default("o1", "c1", [item, item2]);
        const total = order.total();
        expect(total).toBe(3000);
    });
    it("should throw error if the item quantity is less or equal than 0", () => {
        expect(() => new order_item_1.default("i1", "Item 1", 1000, "p1", 0)).toThrowError("Quantity must be greater than 0");
    });
});
