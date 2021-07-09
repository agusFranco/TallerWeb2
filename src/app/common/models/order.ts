import { Product } from './product';
import { User } from './user';

export interface Order {
  id: string;
  user: User;
  products: Product[];
}
