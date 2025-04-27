import Order from "./order";
import OrderItem from "./order_item";

describe("Order unit tests", () => {

    it("should throw error when id is empty", () => {
        expect(() => {
            let order = new Order("", "123", [])
        }).toThrow("ID is required");
    })

    it("should throw error when customerId is empty", () => {
        expect(() => {
            let order = new Order("1", "", [])
        }).toThrow("CustomerID is required");
    })

    it("should throw error when orderItem is empty", () => {
        expect(() => {
            let order = new Order("1", "1", [])
        }).toThrow("Items are required");
    })

    it("should throw error when quantity is less or equal than 0", () => {
        expect(() => {
            const orderItem = new OrderItem("1", "orderItem 1", 50, 0, 'p1');
        }).toThrow("Quantity must be greater than 0");
    })

    it("should calculate total", () => {
        const item1 = new OrderItem("1", "Item 1", 100, 3, "p1");
        const order1 = new Order("id", "1", [item1])
        let total = order1.total();
        expect(total).toBe(300);

        const item2 = new OrderItem("2", "Item 1", 200, 5, "p1");
        const order2 = new Order("id", "c1", [item1, item2])
        total = order2.total();
        expect(total).toBe(1300);
    })

})
