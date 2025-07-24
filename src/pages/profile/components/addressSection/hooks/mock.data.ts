import type { IAddressProps } from "../types"

const mockAddress: IAddressProps[] = [
  {
    id: '1',
    firstName: 'María',
    lastName: 'López',
    phoneNumber: '+34 612 345 678',
    deliveryAddress: {
      road: 'Calle Gran Vía, 45',
      additionalInfo: 'Piso 2ºB',
      zipCode: '28013',
      city: 'Madrid',
      province: 'Madrid',
      country: 'España'
    },
    isDefault: true,
    tags: ['home']
  },
  {
    id: '2',
    firstName: 'Jordi',
    lastName: 'Martí',
    phoneNumber: '+34 678 901 234',
    deliveryAddress: {
      road: 'Avinguda Diagonal, 123',
      zipCode: '08008',
      city: 'Barcelona',
      province: 'Barcelona',
      country: 'España'
    },
    isDefault: false,
    tags: ['work']
  },
  {
    id: '3',
    firstName: 'Lucía',
    lastName: 'González',
    phoneNumber: '+34 600 123 456',
    deliveryAddress: {
      road: 'Calle Mayor, 10',
      additionalInfo: 'Frente al parque',
      zipCode: '03001',
      city: 'Alicante',
      province: 'Alicante',
      country: 'España'
    },
    isDefault: false
  },
  {
    id: '4',
    firstName: 'Andrés',
    lastName: 'Romero',
    phoneNumber: '+34 655 789 012',
    deliveryAddress: {
      road: 'Carrer del Mar, 5',
      additionalInfo: 'Casa azul con jardín',
      zipCode: '17001',
      city: 'Girona',
      province: 'Girona',
      country: 'España'
    },
    isDefault: false,
    tags: ['home2', 'office']
  }
]

export { mockAddress }
