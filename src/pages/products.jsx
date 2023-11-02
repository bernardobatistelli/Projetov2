import { ProductContainer, ProductImage } from "./styles";
import camiseta1 from '../assets/camiseta1.png'
import camiseta2 from '../assets/camiseta2.png'
import camiseta3 from '../assets/camiseta3.png'
import camiseta4 from '../assets/camiseta4.png'

export function Product1() {
  return (
    <ProductContainer>
      <ProductImage src={camiseta1} alt="Product" />
    </ProductContainer>
  );
} 
export function Product2() {
  return (
    <ProductContainer>
      <ProductImage src={camiseta2} alt="Product" />
    </ProductContainer>
  );
} 

export function Product3() {
  return (
    <ProductContainer>
      <ProductImage src={camiseta3} alt="Product" />
    </ProductContainer>
  );
} 

export function Product4() {
  return (
    <ProductContainer>
      <ProductImage src={camiseta4} alt="Product" />
    </ProductContainer>
  );
} 