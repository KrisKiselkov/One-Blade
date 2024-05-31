

export function Home() {
    const btnHover = () => {
        const prm = document.querySelector('.prm-lan');
        const sec = document.querySelector('.sec-lan');
    
        const mouseOver = () => {
            sec.style.backgroundColor = '#D4AF37';
            sec.style.color = '#181818';
            prm.style.backgroundColor = 'transparent';
            prm.style.color = '#D4AF37';
        }

        const mouseOut = () => {
            sec.style.backgroundColor = 'transparent';
            sec.style.color = '#D4AF37';
            prm.style.backgroundColor = '#D4AF37';
            prm.style.color = '#181818';
        }
        
        sec.addEventListener('mouseover', mouseOver)
        sec.addEventListener('mouseout', mouseOut)
    }

    return (
        <>
            <section id="home">
                <div id="razor-bg"></div>
                <div id="landing-text">
                    <h1 id="lan-h1">The <span>RIGHT</span> <br></br>Way To <span>SHAVE</span></h1>
                    <div id="short-desc">
                        <p>Lorem ipsum dolor sit amet, consectetur dolore magna aliqua.</p>
                    </div>
                    <div id="lan-btns">
                        <button className="lan-btn prm-lan">Order Now</button>
                        <button className="lan-btn sec-lan" onMouseOver={btnHover}>Learn More</button>
                    </div>
                </div>
            </section>
            <section id="three-pcs-info">
                <div className="pcs-info quality">
                    <svg xmlns="http://www.w3.org/2000/svg" height="80" width="80" viewBox="0 0 640 512"><path fill="#D4AF37" d="M353.8 54.1L330.2 6.3c-3.9-8.3-16.1-8.6-20.4 0L286.2 54.1l-52.3 7.5c-9.3 1.4-13.3 12.9-6.4 19.8l38 37-9 52.1c-1.4 9.3 8.2 16.5 16.8 12.2l46.9-24.8 46.6 24.4c8.6 4.3 18.3-2.9 16.8-12.2l-9-52.1 38-36.6c6.8-6.8 2.9-18.3-6.4-19.8l-52.3-7.5zM256 256c-17.7 0-32 14.3-32 32V480c0 17.7 14.3 32 32 32H384c17.7 0 32-14.3 32-32V288c0-17.7-14.3-32-32-32H256zM32 320c-17.7 0-32 14.3-32 32V480c0 17.7 14.3 32 32 32H160c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32H32zm416 96v64c0 17.7 14.3 32 32 32H608c17.7 0 32-14.3 32-32V416c0-17.7-14.3-32-32-32H480c-17.7 0-32 14.3-32 32z"/></svg>
                    <hr></hr>

                    <p>Lorem ipsum dolor sit amet, consectetur dolore magna aliqua.</p>
                </div>

                <div className="pcs-info beard-care">
                    <svg xmlns="http://www.w3.org/2000/svg" height="80" width="80" viewBox="0 0 640 512"><path fill="#D4AF37" d="M353.8 54.1L330.2 6.3c-3.9-8.3-16.1-8.6-20.4 0L286.2 54.1l-52.3 7.5c-9.3 1.4-13.3 12.9-6.4 19.8l38 37-9 52.1c-1.4 9.3 8.2 16.5 16.8 12.2l46.9-24.8 46.6 24.4c8.6 4.3 18.3-2.9 16.8-12.2l-9-52.1 38-36.6c6.8-6.8 2.9-18.3-6.4-19.8l-52.3-7.5zM256 256c-17.7 0-32 14.3-32 32V480c0 17.7 14.3 32 32 32H384c17.7 0 32-14.3 32-32V288c0-17.7-14.3-32-32-32H256zM32 320c-17.7 0-32 14.3-32 32V480c0 17.7 14.3 32 32 32H160c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32H32zm416 96v64c0 17.7 14.3 32 32 32H608c17.7 0 32-14.3 32-32V416c0-17.7-14.3-32-32-32H480c-17.7 0-32 14.3-32 32z"/></svg>
                    <hr></hr>

                    <p>Lorem ipsum dolor sit amet, consectetur dolore magna aliqua.</p>
                </div>

                <div className="pcs-info original">
                    <svg xmlns="http://www.w3.org/2000/svg" height="80" width="80" viewBox="0 0 640 512"><path fill="#D4AF37" d="M353.8 54.1L330.2 6.3c-3.9-8.3-16.1-8.6-20.4 0L286.2 54.1l-52.3 7.5c-9.3 1.4-13.3 12.9-6.4 19.8l38 37-9 52.1c-1.4 9.3 8.2 16.5 16.8 12.2l46.9-24.8 46.6 24.4c8.6 4.3 18.3-2.9 16.8-12.2l-9-52.1 38-36.6c6.8-6.8 2.9-18.3-6.4-19.8l-52.3-7.5zM256 256c-17.7 0-32 14.3-32 32V480c0 17.7 14.3 32 32 32H384c17.7 0 32-14.3 32-32V288c0-17.7-14.3-32-32-32H256zM32 320c-17.7 0-32 14.3-32 32V480c0 17.7 14.3 32 32 32H160c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32H32zm416 96v64c0 17.7 14.3 32 32 32H608c17.7 0 32-14.3 32-32V416c0-17.7-14.3-32-32-32H480c-17.7 0-32 14.3-32 32z"/></svg>
                    <hr></hr>

                    <p>Lorem ipsu dolor sit amet, consectetur dolore magna aliqua.</p>
                </div>
            </section>
        </>

    );
}