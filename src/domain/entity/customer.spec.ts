import CustomerEntity from "./customer";
import AddressEntity from "./address";

describe("Customer unit tests", () => {

    it("should throw error when ID is empty", () => {
        expect(() => {
            let customer = new CustomerEntity("", "John");
        }).toThrow("ID is required");
    })

    it("should throw error when name is empty", () => {
        expect(() => {
            let customer = new CustomerEntity("1", "")
        }).toThrow("Name is required")
    })

    it("should change name", () => {
        //Arrange
        const customer = new CustomerEntity("123", "John");
        // Act
        customer.changeName("Jane");
        //Assert
        expect(customer.name).toBe("Jane");
    })

    it("should throw error when address is undefined", () => {
         expect(() => {
             const customer = new CustomerEntity("123", "John");
             customer.activate();
         }).toThrow("Address is required to activate a customer")
    })

    it("should activate customer", () => {
        const customer = new CustomerEntity("123", "John");
        customer.Address = new AddressEntity("Street", "Florianópolis", "SC", "88015600", "Brasil");
        customer.activate();
        expect(customer.isActive()).toBe(true)
    })

    it("should deactivate customer", () => {
        const customer = new CustomerEntity("123", "John");
        customer.deactivate();
        expect(customer.isActive()).toBe(false)
    })

})