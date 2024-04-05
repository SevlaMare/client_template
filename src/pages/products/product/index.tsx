import { parseUrl } from './../../../helpers/parseUrl';

const { parts, id } = parseUrl();

export function Product() {
  return <h2>Product ID: {id}</h2>;
}
