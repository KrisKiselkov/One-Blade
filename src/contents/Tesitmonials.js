

export function Testimonials() {
    return(
        <section id="temo-container">
            <h3 id='temo-h3'>Testimonials</h3>
            <h1 id='temo-h1'>What Our Client's Say</h1>        
        
            <div id="temo-section">
                <div className="temo-block">
                    <p className="temo-p">"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. "</p>

                    <div className="temo-prof">
                        <div className="temo-prof-img"></div>

                        <div className="prof-name-city">
                            <h3 className="prof-h3">Kristian Kiselkov</h3>
                    
                            <h4 className="prof-h4">Varna, Bulgaria</h4>
                        </div>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="quotes"><path fill="#181818" d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z"/></svg>
                </div>

                <div className="temo-block">
                    <p className="temo-p">"The car was in great condition and made our trip even better. Highly recommend for this car rental website!"</p>
                
                    <div className="temo-prof">
                        <div className="temo-prof-img"></div>

                        <div className="prof-name-city">
                            <h3 className="prof-h3">Kiro Breika</h3>
                    
                            <h4 className="prof-h4">Pavel, Bulgaria</h4>
                        </div>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="quotes"><path fill="#181818" d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z"/></svg>
                </div>
            </div>
        </section>
    );
}