import { useState } from "react";

export function ProductsQA() {
    const [activeQ, setActiveQ] = useState("q1");

    const openQ = (id) => {
        setActiveQ(activeQ === id ? "" : id);
    };

    const getClassAnswer = (id) => {
        return activeQ === id ? "active-answer" : "";
    };

    const getClassQuestion = (id) => {
        return activeQ === id ? "active-question" : "";
    };


    return(
        <section id="products-qa">
            <h1 id="qa-h1">Q & A</h1>
            <h3 id="qa-h3">Frequently asked qustions by our clients.</h3>

            <div id="qa-section">
                <div className="qa-div">
                    <div 
                    onClick={() => openQ("q1")} 
                    className={`questions ${getClassQuestion("q1")}`}>
                        <h3 className="qa-div-h3">Are the razors safe?</h3>
                    </div>

                    <div
                        onClick={() => openQ("q1")}
                        className={`answers ${getClassAnswer("q1")}`}
                    >
                        Comparing rental car deals is important as it helps find the
                        best deal that fits your budget and requirements, ensuring you
                        get the most value for your money. By comparing various
                        options, you can find deals that offer lower prices,
                        additional services, or better car models. You can find car
                        rental deals by researching online and comparing prices from
                        different rental companies.
                    </div>
                </div>
                
                <div className="qa-div">
                    <div onClick={() => openQ("q2")} className={`questions ${getClassQuestion("q2")}`}>
                        <h3 className="qa-div-h3">How long does the delivery take?</h3>
                    </div>

                    <div
                        onClick={() => openQ("q2")}
                        className={`answers ${getClassAnswer("q2")}`}
                    >
                        Comparing rental car deals is important as it helps find the
                        best deal that fits your budget and requirements, ensuring you
                        get the most value for your money. By comparing various
                        options, you can find deals that offer lower prices,
                        additional services, or better car models. You can find car
                        rental deals by researching online and comparing prices from
                        different rental companies.
                    </div>
                </div>

                <div className="qa-div">
                    <div onClick={() => openQ("q3")} className={`questions ${getClassQuestion("q3")}`}>
                        <h3 className="qa-div-h3">Will the razors help my beard look better?</h3>
                    </div>

                    <div
                        onClick={() => openQ("q3")}
                        className={`answers ${getClassAnswer("q3")}`}
                    >
                        Comparing rental car deals is important as it helps find the
                        best deal that fits your budget and requirements, ensuring you
                        get the most value for your money. By comparing various
                        options, you can find deals that offer lower prices,
                        additional services, or better car models. You can find car
                        rental deals by researching online and comparing prices from
                        different rental companies.
                    </div>
                </div>

                <div className="qa-div">
                    <div onClick={() => openQ("q4")} className={`questions ${getClassQuestion("q4")}`}>
                        <h3 className="qa-div-h3">When should I change the razor blade?</h3>
                    </div>

                    <div
                        onClick={() => openQ("q4")}
                        className={`answers ${getClassAnswer("q4")}`}
                    >
                        Comparing rental car deals is important as it helps find the
                        best deal that fits your budget and requirements, ensuring you
                        get the most value for your money. By comparing various
                        options, you can find deals that offer lower prices,
                        additional services, or better car models. You can find car
                        rental deals by researching online and comparing prices from
                        different rental companies.
                    </div>
                </div>
            </div>
        </section>
    );
}