import "./Card.css";

const Card = () => {
    const hallo = () =>{
        console.log("Ik ben kaartje één");
    }

    return(
        <article onClick={hallo}>
            <header>
                <h2>Eerste kaart</h2>
            </header>
            <section>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro assumenda repudiandae cum recusandae, voluptas laboriosam aliquam, nam odit consectetur explicabo iste dolorum aperiam, perspiciatis delectus aut! Repellat sint dignissimos a?
            </section>
        </article>
    );
}

export default Card;