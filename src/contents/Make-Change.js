

export function MakeChange() {
    return (
        <section id="make-change">
            <div id="make-change-hero">
                <h2 id="make-change-h2">Make The Change.</h2>
                <img src={require('../images/mustache.png')} className="mustache"></img>
            </div>

            <iframe width="560" height="315" id='youtube' src="https://www.youtube.com/embed/QiJe2t_fO0w?si=3jAajuAAWLhmB24o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </section>
    );
}