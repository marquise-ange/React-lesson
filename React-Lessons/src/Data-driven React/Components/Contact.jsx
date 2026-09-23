/**
 * Challenge:
 * - Create a Contact component in another file
 * - Move one of the contact card articles below into that file
 * - import and render 4 instances of that contact card
 *     - Think ahead: what's the problem with doing it this way?
 */


function Contact(props) {
    return (
        <article className="contact-card">

            <img
                src={props.img}
                alt={`Photo of ${props.name}`}
            />

            <h3>{props.name}</h3>

            <div className="info-group">
                <img
                    src="./images/phone-icon.png"
                    alt="phone icon"
                />
                <p>{props.phone}</p>
            </div>

            <div className="info-group">
                <img
                    src="./images/mail-icon.png"
                    alt="mail icon"
                />
                <p>{props.email}</p>
            </div>

        </article>
    )
}
export  default Contact