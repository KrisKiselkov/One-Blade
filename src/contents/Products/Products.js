import { Nav } from '../../contents/Nav';
import { ProductsHero } from './Products-Hero';
import { ProductsQA } from './Products-QA';
import { ProductsSell } from './Products-Sell';


export function Products() {
    return(
        <>
            <Nav />

            <ProductsHero />

            <ProductsSell />

            <ProductsQA />
        </>
    );

}