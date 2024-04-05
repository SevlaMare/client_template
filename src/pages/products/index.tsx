import { Product } from '@/model';
import { useData } from '@/hooks/useData';

import { Spin } from '@/components/spin';
import { Error } from '@/components/error';
import { ProductsList } from '@/components/productsList';
import styled from './products.module.css';

const URL_PRODS = 'http://localhost:4000/products';

export function Products() {
  const { data, loading, error } = useData<Product>(URL_PRODS);

  return (
    <div className={styled.container}>
      <div>
        {loading ? (
          <Spin />
        ) : error ? (
          <Error msg={error} />
        ) : (
          <ProductsList data={data} />
        )}
      </div>
    </div>
  );
}
