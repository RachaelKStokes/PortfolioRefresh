
const ContactForm = () => {
  
      return (
        <form>
            <fieldset>
            <div class="row">
                <label for="nameInput" class="col-sm-2 col-form-label">Name</label>
                <input type="name" class="form-control" placeholder="Your Name" />
            </div>
            <div class="row">
                <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                <input type="email" class="form-control" placeholder="Email" />
            </div>
            <div class="row">
                <label for="msgInput" class="col-sm-2 col-form-label">Message</label>
                <textarea class="form-control" rows="3" placeholder="I look forward to hearing from you!" ></textarea>
            </div>
            <p></p> 
            <button type="submit" className="btn btn-outline-secondary">Submit</button>
            </fieldset>
        </form>
    );
}

export default ContactForm;