import OrderItem from "./order_item";

describe("OrderItem unit tests", () => {

    it("should throw error when id is empty", () => {
        expect(() => {
            const orderItem = new OrderItem("", "orderItem 1", 100, 5, 'p1');
        }).toThrow("ID is required");
    })

    it("should throw error when name is empty", () => {
        expect(() => {
            const orderItem = new OrderItem("1", "", 100, 5, 'p1');
        }).toThrow("Name is required");
    })

    it("should throw error when price is less than 0", () => {
        expect(() => {
            const orderItem = new OrderItem("1", "orderItem 1", -1, 5, 'p1');
        }).toThrow("Price must be greater than zero");
    })

    it("should throw error when quantity is less or equal than 0", () => {
        expect(() => {
            const orderItem = new OrderItem("1", "orderItem 1", 50, 0, 'p1');
        }).toThrow("Quantity must be greater than 0");
    })

    it("should throw error when productId is empty", () => {
        expect(() => {
            const orderItem = new OrderItem("1", "orderItem 1", 50, 5, "");
        }).toThrow("ProductID is required");
    })

})
