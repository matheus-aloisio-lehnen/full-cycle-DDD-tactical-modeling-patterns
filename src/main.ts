import CustomerEntity from "./domain/entity/customer";
import AddressEntity from "./domain/entity/address";
import OrderItem from "./domain/entity/order_item";
import Order from "./domain/entity/order";

let customer = new CustomerEntity('123', 'Matheus');
const address = new AddressEntity('Street', 'Florianópolis', 'SC', '88015600', 'Brasil');
customer.Address = address;
customer.activate();
// Relação de ID porque estão em diferentes agregados
// Relação de Objeto - Entidade
// const item1 = new OrderItem('1', 'Item 1', 10);
// const item2 = new OrderItem('2', 'Item 2', 15);
// const order = new Order('1', '123', [item1, item2]);