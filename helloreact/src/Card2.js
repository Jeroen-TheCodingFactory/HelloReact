import "./Card.css";
const Card2 = () => {
    const hallo = () =>{
        console.log("Ik ben kaartje twee");
    }

    return(
        <article onClick={hallo}>
            <header>
                <h2>Tweede kaart</h2>
            </header>
            <section>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro assumenda repudiandae cum recusandae, voluptas laboriosam aliquam, nam odit consectetur explicabo iste dolorum aperiam, perspiciatis delectus aut! Repellat sint dignissimos a?
            </section>
        </article>
    );
}

export default Card2;