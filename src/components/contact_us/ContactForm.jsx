function ContactForm() {
  return (
    <form action="" className="mt-20">
      <div className="flex flex-col justify-center gap-5">
        <div>
          <label htmlFor="Name" className="input_label">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="Name"
            id="Name"
            className="input_box"
            required
          />
        </div>
        <div>
          <label htmlFor="Email" className="input_label">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="Email"
            id="Email"
            className="input_box"
            required
          />
        </div>
        <div>
          <label htmlFor="Contact" className="input_label">
            Contact Number <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="Contact"
            id="Contact"
            className="input_box"
            placeholder="01122334444"
            required
          />
        </div>
        <div>
          <label htmlFor="Message" className="input_label">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            type="text"
            rows={4}
            name="Message"
            id="Message"
            className="input_box"
            required
          />
        </div>

        <button type="submit" className="btn mt-10">
          Submit
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
