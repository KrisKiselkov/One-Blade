

export function BestSellers() {
    const zoroDesc = () => {
        const zoro = document.getElementById('zoro-div');
        const zoroLabel = document.getElementById('zoro-label');

        const mouseOver = () => {
            zoroLabel.style.opacity = '1';
            zoroLabel.style.visibility = 'visible';
            zoroLabel.style.left = '2.6em';
        }
    
        const mouseOut = () => {
            zoroLabel.style.opacity = '0';
            zoroLabel.style.visibility = 'hidden';
            zoroLabel.style.left = '2em';
        }

        zoro.addEventListener('mouseover', mouseOver);
        zoro.addEventListener('mouseout', mouseOut);
    }

    const ssDesc = () => {
        const ss = document.getElementById('ss-div');
        const ssLabel = document.getElementById('ss-label');
    
        const mouseOver = () => {
            ssLabel.style.opacity = '1';
            ssLabel.style.visibility = 'visible';
            ssLabel.style.right = '3em';
        }
    
        const mouseOut = () => {
            ssLabel.style.opacity = '0';
            ssLabel.style.visibility = 'hidden';
            ssLabel.style.right = '2em';
        }
    
        ss.addEventListener('mouseover', mouseOver);
        ss.addEventListener('mouseout', mouseOut);
    }

    
    return (
        <section id="best-sellers">
            <h1>Best Sellers</h1>

            <div id="best-razors">
                <div id="zoro-div" onMouseOver={zoroDesc}>
                    <div id="zoro-desc">
                        <h2 id="zoro-label">'' Zoro ''</h2>
                    </div>
                </div>

                <h2 id="best-sell-h2">Class is <em>Eternal</em></h2>

                <img id="right-arrow" src={require('../images/11965168.png')}></img>
                <img id="left-arrow" src={require('../images/11965168.png')}></img>

                <div id="ss-div" onMouseOver={ssDesc}>
                    <div id="ss-desc">
                        <h2 id="ss-label">'' Albino ''</h2>
                    </div>
                </div>
            </div>
        </section>
    );
}