import { Nav } from "./Nav";
import { BestSellers } from "./Best-Sellers";
import { Home } from "./Home";
import { WhyUs } from "./WhyUs";
import { History } from "./History";
import { MakeChange } from "./Make-Change";


export function Landing() {
    return (
        <>
            <Nav />
          
            <Home />
        
            <BestSellers />
        
            <WhyUs />

            <History />

            <MakeChange />
        </>
    );
}