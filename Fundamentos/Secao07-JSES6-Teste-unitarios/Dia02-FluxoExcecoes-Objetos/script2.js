const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    entregador = (order.order.delivery.deliveryPerson)
    cliente = (order.name)
    telefone = (order.phoneNumber)
    rua = (order.address.street)
    numero = (order.address.number)
    apartamento = (order.address.apartment)
    
    resultado = `Olá ${entregador}, entrega para: ${cliente}, telefone: ${telefone} ${rua}, ${numero}, AP: ${apartamento}`
   console.log(resultado)    
  };
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    const alteracao = {
      name: 'Luiz Silva',
      payment: {
      total: 50,
    },
  }
  Object.assign(order, alteracao)
  cliente = (order.name)
  pizza = Object.keys(order.order.pizza).join(', ');
  bebida = (order.order.drinks.coke.type)
  total = (order.payment.total)
  
  resultado = `Olá ${cliente}, o total do seu pedido de ${pizza} e ${bebida} é R$${total}.`
  console.log(resultado)   
}
  
  orderModifier(order);

