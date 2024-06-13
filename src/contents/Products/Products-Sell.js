import { razors } from "../Razors";


export function ProductsSell() {
    function razorFunction() {
        return (
            razors.map(razor => (
                <div className="razor-card">
                    <img src={razor.image} className="razor-img"></img>
                    <hr className="razor-hr"></hr>
                    <div className="razor-desc">
                        <h3 className="razor-label">{razor.label}</h3>
                        <h4 className="razor-rating">{razor.rating} S</h4>
                        <h3 className="razor-price">{razor.price} лв.</h3>
                    </div>
                </div>
            ))
        );
    }


    return(
        <section id="products-container">
            <div id='filter-btns'>
                <select className='dropdown'>
                    <option value='Price'>Price</option>
                    <hr></hr>
                    <option value='Low-To-High'>Low-To-High</option>
                    <hr></hr>
                    <option value='High-To-Low'>High-To-Low</option>
                </select>

                <select className='dropdown'>
                    <option value='Razor'>Razors</option>
                    <hr></hr>
                    <option value='Rollers'>Rollers</option>
                    <hr></hr>
                    <option value='Shaving-Foam'>Shaving Foam</option>
                </select>
            </div>

            <section id="products-sell">
                {razorFunction()}
            </section>
        </section>
    );
}