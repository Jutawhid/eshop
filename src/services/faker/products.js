
import { faker } from '@faker-js/faker';
const generateProduct = () => {
  const title = faker.commerce.productName();
  const price = parseInt(faker.commerce.price({ min: 1, max: 2000 }));
  const image = faker.image.urlLoremFlickr({ width: 400, height: 400, category: 'product' });
  const rating = faker.helpers.arrayElement([4.0, 4.5, 5.0]);
  const discount = price - faker.number.int({ max: 100 });
  const desc = faker.lorem.paragraph();
  const images = Array.from({ length: 3 }, () => faker.image.url());
  const category = faker.helpers.arrayElement(['electronics', 'clothing', 'books', 'fashion', 'animale', 'fruits']);
  const label = faker.helpers.arrayElement(['new', 'big sale', 'offer']);
  const reviews = faker.number.int({ min: 0, max: 200 });
  const id = faker.string.uuid();

  return {
    id,
     title,
     price,
    image,
    rating,
    discount,
    desc,
    images,
    category: [category],
    label,
    reviews,
  };
};

const generateProducts = async(count) => {
  return Array.from({ length: count }, generateProduct);
};
export default generateProducts;