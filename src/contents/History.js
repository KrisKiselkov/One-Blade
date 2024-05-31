

export function History() {
    return (
        <section id="history-container">
            <h1 id="history-h1">History</h1>

            <div id="hry-chapters">
                <div className='each-chap'>
                    <img className='hry-img left-hry-img' src={require('../images/History-One.webp')}></img>

                    <h2 className='hry-yrs'>1904</h2>

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

                    <img className='hry-img right-hry-img' src={require('../images/History-Two.webp')}></img>
                </div>

                <hr className='hry-hr'></hr>

                <div className='each-chap'>
                    <img className='hry-img left-hry-img' src={require('../images/History-One.webp')}></img>

                    <h2 className='hry-yrs'>1974</h2>

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

                    <img className='hry-img right-hry-img' src={require('../images/History-Two.webp')}></img>
                </div>
            </div>
        </section>
    );  
};