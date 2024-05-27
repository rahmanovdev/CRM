export const orderList = [
  {
    id: '#ID1234',
    title: 'Simple Order',
    date: '2024-05-25',
    customer: {
      id: 'customer_1',
      first_name: 'Chieko',
      last_name: 'Chute',
      full_name: 'Chieko Chute',
    },
    payment_status: 'paid',
    status: 'Completed',
    color_status: 'rgba(12, 175, 96, 1)',
    bg_status: 'rgba(231, 247, 239, 1)',
    price: '450',
  },
  {
    id: '#ID5678',
    title: 'Complex Order',
    date: '2024-05-24',
    customer: {
      id: 'customer_2',
      first_name: 'John',
      last_name: 'Doe',
      full_name: 'John Doe',
    },
    payment_status: 'pending',
    status: 'Drafts',
    color_status: 'rgba(254, 150, 74, 1)',
    bg_status: 'rgba(255, 240, 230, 1)',
    price: '750',
  },
  {
    id: '#ID91011',
    title: 'Special Order',
    date: '2024-05-23',
    customer: {
      id: 'customer_3',
      first_name: 'Alice',
      last_name: 'Smith',
      full_name: 'Alice Smith',
    },
    payment_status: 'pending',
    status: 'Shipping',
    color_status: 'rgba(140, 98, 255, 1)',
    bg_status: 'rgba(244, 240, 255, 1)',
    price: '1200',
  },
  {
    id: '#ID121314',
    title: 'Bulk Order',
    date: '2024-05-22',
    customer: {
      id: 'customer_4',
      first_name: 'Michael',
      last_name: 'Johnson',
      full_name: 'Michael Johnson',
    },
    payment_status: 'paid',
    status: 'Shipping',
    color_status: 'rgba(140, 98, 255, 1)',
    bg_status: 'rgba(244, 240, 255, 1)',
    price: '2500',
  },
  {
    id: '#ID151617',
    title: 'Express Order',
    date: '2024-05-21',
    customer: {
      id: 'customer_5',
      first_name: 'Emily',
      last_name: 'Brown',
      full_name: 'Emily Brown',
    },
    payment_status: 'paid',
    status: 'Cancelled',
    color_status: 'rgba(253, 106, 106, 1)',
    bg_status: 'rgba(255, 240, 240, 1)',
    price: '350',
  },
    
]

export const TABS_LIST = [
  {
    id: 'all',
    label: 'All Orders',
    active: true,
  },
  {
    id: 'drafts',
    label: 'Drafts',
    active: false,
  },
  {
    id: 'shipping',
    label: 'Shipping',
    active: false,
  },
  {
    id: 'completed',
    label: 'Completed',
    active: false,
  },
  {
    id: 'cancelled',
    label: 'Cancelled',
    active: false,
  },


]

