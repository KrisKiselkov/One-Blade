

export function History() {
    return (
        <section id="history-container">
            <h1 id="history-h1">History</h1>

            <div id="hry-chapters">
                <div className='each-chap'>
                    <div class="triangle tr-two"></div>
                    <img className='hry-img left-hry-img' src={require('../images/History-One.webp')}></img>
                    <div class="triangle tr-one"></div>

                    <h2 className='hry-yrs'>1904</h2>
                    
                    <hr className='yrs-hr'></hr>

                    <div className="chapters-txt right-chap-txt">
                        <h2>Lorem ipsum</h2>

                        <p>Lorem ipsum dolor sit amet, consectetur dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur dolore magna aliqua. Lorem ipsum dolor sit amet magna aliqua. Lorem ipsum dolor sit amet, consectetur dolore magna aliqua. Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>

                <hr className='hry-hr'></hr>

                <div className='each-chap'>
            
                    <div className="chapters-txt left-chap-txt">
                        <h2>Lorem ipsum</h2>

                        <p>Lorem ipsum dolor sit amet, consectetur dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur dolore magna aliqua. Lorem ipsum dolor sit amet magna aliqua. Lorem ipsum dolor sit amet, consectetur dolore magna aliqua. Lorem ipsum dolor sit amet.</p>
                    </div>

                    <h2 className='hry-yrs'>1970</h2>
                    <hr className='yrs-hr'></hr>

                    <div class="triangle tr-three"></div>
                    <img className='hry-img right-hry-img' src={require('../images/History-Two.webp')}></img>
                    <div class="triangle tr-forth"></div>
                </div>

                <hr className='hry-hr'></hr>

                <div className='each-chap'>
                    <div class="triangle tr-five"></div>
                    <img className='hry-img left-hry-img' src={require('../images/History-One.webp')}></img>
                    <div class="triangle tr-six"></div>

                    <h2 className='hry-yrs'>1974</h2>
                    <hr className='yrs-hr'></hr>

                    <div className="chapters-txt right-chap-txt">
                        <h2>Lorem ipsum</h2>

                        <p>Lorem ipsum dolor sit amet, consectetur dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur dolore magna aliqua. Lorem ipsum dolor sit amet magna aliqua. Lorem ipsum dolor sit amet, consectetur dolore magna aliqua. Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>

                <hr className='hry-hr'></hr>

                <div className='each-chap'>
            
                    <div className="chapters-txt left-chap-txt">
                        <h2>Lorem ipsum</h2>

                        <p>Lorem ipsum dolor sit amet, consectetur dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur dolore magna aliqua. Lorem ipsum dolor sit amet magna aliqua. Lorem ipsum dolor sit amet, consectetur dolore magna aliqua. Lorem ipsum dolor sit amet.</p>
                    </div>

                    <h2 className='hry-yrs'>2024</h2>
                    <hr className='yrs-hr'></hr>

                    <div class="triangle tr-seven"></div>
                    <img className='hry-img right-hry-img' src={require('../images/History-Two.webp')}></img>
                    <div class="triangle tr-eight"></div>
                </div>
            </div>
        </section>
    );  
};