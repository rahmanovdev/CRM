export const CUSTOMERS = [
    {
        id: '1',
        full_name: "John Doe",
        email: "john.doe@example.com",
        location: "New York, USA",
        orders: 5,
        spent: 250.75,
        type_product: "Electronics",
        date: '2024-06-22',
    }, 
    {
        id: '2',
        full_name: "Jane Smith",
        email: "jane.smith@example.com",
        location: "London, UK",
        orders: 3,
        spent: 150.00,
        type_product: "Clothing",
        date: '2024-06-15',
    },
    {
        id: '3',
        full_name: "Carlos Mendoza",
        email: "carlos.mendoza@example.com",
        location: "Madrid, Spain",
        orders: 8,
        spent: 400.50,
        type_product: "Books",
        date: '2024-06-20',
  
    },
    {
        id: '4',
        full_name: "Li Wei",
        email: "li.wei@example.com",
        location: "Beijing, China",
        orders: 12,
        spent: 600.00,
        type_product: "Home Goods",
        date: '2024-06-25',
  
    },
    {
        id: '5',
        full_name: "Samantha Brown",
        email: "samantha.brown@example.com",
        location: "Sydney, Australia",
        orders: 6,
        spent: 320.25,
        type_product: "Beauty",
        date: '2024-06-18',
  
    }
  ];
  
  export const TYPE_PRODUCTS = [
    { value: "Electronics", label: "Electronics" },
    { value: "Clothing", label: "Clothing" },
    { value: "Books", label: "Books" },
    { value: "Home Goods", label: "Home Goods" },
    { value: "Beauty", label: "Beauty" }
  ];
  
  export const LOCATIONS = [
    { value: "New York, USA", label: "New York, USA" },
    { value: "London, UK", label: "London, UK" },
    { value: "Madrid, Spain", label: "Madrid, Spain" },
    { value: "Beijing, China", label: "Beijing, China" },
    { value: "Sydney, Australia", label: "Sydney, Australia" }
  ];
  
  export const SPENTS = [
    { value: 1000, label: '> 1000' },
    { value: 500, label: '> 500' },
    { value: 300, label: '> 300' },
    { value: 100, label: '> 100' },
    { value: 50, label: "> 50" }
  ];