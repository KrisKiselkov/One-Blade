import mustache from "../images/mustache.png"


export function WhyUs() {
    return (
        <section id="why-us-container">
            <div id="care-hero">
                <h2 id="care-h2">Care For Your Beard.</h2>
                <img src={mustache} className="mustache"></img>
            </div>

            <div id="compare-container">
                <div id="our-razors">

                    <h2 className="our-cheap-h2"><em>Our</em> Razors</h2>

                    <ul className="our-cheap-ul">
                        <li className="our-cheap-li"><span className="our-span">&#10004;</span> Lorem ipsum sit amet dolor aliqua.</li>
                        <li className="our-cheap-li"><span className="our-span">&#10004;</span> Lorem ipsum sit amet dolor aliqua.</li>
                        <li className="our-cheap-li"><span className="our-span">&#10004;</span> Lorem ipsum sit amet dolor aliqua.</li>
                        <li className="our-cheap-li"><span className="our-span">&#10004;</span> Lorem ipsum sit amet dolor aliqua.</li>
                    </ul>

                    <hr className="our-cheap-hr"></hr>
                </div>

                <div id="cheap-razors">

                    <h2 className="our-cheap-h2"><em>Cheap</em> Razors</h2>

                    <ul className="our-cheap-ul">
                        <li className="our-cheap-li"><span className="cheap-span">&#10006;</span> Lorem ipsum sit amet dolor aliqua.</li>
                        <li className="our-cheap-li"><span className="cheap-span">&#10006;</span> Lorem ipsum sit amet dolor aliqua.</li>
                        <li className="our-cheap-li"><span className="cheap-span">&#10006;</span> Lorem ipsum sit amet dolor aliqua.</li>
                        <li className="our-cheap-li"><span className="cheap-span">&#10006;</span> Lorem ipsum sit amet dolor aliqua.</li>
                    </ul>

                    <hr className="our-cheap-hr"></hr>
                </div>
            </div>

            <div id="why-us">
                <div id="img-why-us">
                    
                </div>

                <div id="txt-why-us">
                    <h4 id="txt-why-h4">Why Us?</h4>

                    <h1 id="txt-why-h1">Quality <br></br><span>Choice</span></h1>

                    <p id="txt-why-p">Lorem ipsum dolor sit amet, consectetur dolore magna aliqua. Lorem ipsum dolor sit amet, consesn dolore magna aliqua. Lorem ipsum, magna aliqua.</p>

                    <div id="why-btns">
                        <button className="why-btn prm-why-btn">Order Now</button>
                        <button className="why-btn sec-why-btn">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
}