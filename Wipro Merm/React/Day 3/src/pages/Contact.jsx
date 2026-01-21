function Contact() {
  return (
    <div className="container mt-5">
      <h2>Contact Us</h2>
      <form className="w-50">
        <input className="form-control mb-3" placeholder="Name" />
        <input className="form-control mb-3" placeholder="Email" />
        <textarea className="form-control mb-3" placeholder="Message" />
        <button className="btn btn-success">Submit</button>
      </form>
    </div>
  );
}
export default Contact;