import { Footer, Img, PageTitle, Section, Span, Strong, Wrapper } from './styles';

const products = [
  {
    id: 1,
    name: 'Camiseta 1',
    price: 79.90,
    imageUrl: 'https://i.ibb.co/ys9zYMG/2-explorer-t-shirt-1.png',
  },
  {
    id: 2,
    name: 'Camiseta 2',
    price: 69.90,
    imageUrl: 'https://i.ibb.co/9rx5Nz7/Camisa-Maratona-1.png',
  },
  {
    id: 3,
    name: 'Camiseta 3',
    price: 59.90,
    imageUrl: 'https://i.ibb.co/V3g6NmF/Ignite-Lab-T-shirt-1.png',
  },
  {
    id: 4,
    name: 'Camiseta 4',
    price: 74.90,
    imageUrl: 'https://i.ibb.co/kB0MmKv/Igniter-abord-2-t-shirt-1.png',
  },
];

export default function OnlineShop() {
  return (
    <Wrapper>
      <PageTitle>Online Shop</PageTitle>
      <Section>
        {products.map(product => (
          <a key={product.id} href={`/products/${product.id}`}>
            <Img src={product.imageUrl} alt={product.name} />
            <Footer>
              <Strong>{product.name}</Strong>
              <Span>R$ {product.price.toFixed(2)}</Span>
            </Footer>
          </a>
        ))}
      </Section>
    </Wrapper>
  );
}
