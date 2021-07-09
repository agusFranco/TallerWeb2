import { Product } from './product';
import { User } from './user';

export interface Order {
  orderId: string;
  user: User;
  products: Product[];
  date?: Date;
}
