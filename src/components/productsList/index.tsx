import styled from './productlist.module.css';
import { Product } from '@/model';

type ProductsListProps = {
  data: Product[];
};

export function ProductsList({ data }: ProductsListProps) {
  return (
    <div className={styled.container}>
      <ul>
        {data.map((item: Product) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
