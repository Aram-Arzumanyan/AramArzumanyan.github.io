import "./style.scss";

function Contact(params) {
  return (
    <section className="contact G-container">
      <div className="title">
        <h1 style={{ color: "red", fontSize: "55px" }}>Contact.</h1>
        <hr />
        <p>
          Do you want us to style your home? Fill out the form and fill me in
          with the details :) We love meeting new people!
        </p>
        <br />
      </div>

      <div className="inputForm">
        <label >
            <form action="">Name</form>
            <input  type="text" /><br /><br />
            <form action="">Email</form>
            <input type="text" /><br /><br />
            <form action="">Message</form>
            <input type="text" /><br /><br />
        </label>

        <button className="btn">Send Message</button>
      </div>
    </section>
  );
}
export default Contact;
