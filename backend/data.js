import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Anya',
      email: 'admin@buyit.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Mihee',
      email: 'user@buyit.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Animal toys',
      slug: 'animal-toys',
      category: 'Toys for girls',
      image: '/images/animal-toys.jpg', //679 x 679
      price: 39,
      countInStock: 10,
      brand: 'Happy Child',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality animal toys',
    },
    {
      // _id: '2',
      name: 'Cars',
      slug: 'cars',
      category: 'Toys for boys',
      image: '/images/cars.jpg',
      price: 19,
      countInStock: 0,
      brand: 'Happy Child',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality cars',
    },
    {
      // _id: '3',
      name: 'Lego',
      slug: 'lego',
      category: 'Toys for boys',
      image: '/images/lego.jpg',
      price: 25,
      countInStock: 15,
      brand: 'Happy Child',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality lego',
    },
    {
      // _id: '4',
      name: 'Soft toys',
      slug: 'soft-toys',
      category: 'Toys for girls',
      image: '/images/soft-dolls-toys.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Happy Child',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality soft toys',
    },
  ],
};
export default data;
