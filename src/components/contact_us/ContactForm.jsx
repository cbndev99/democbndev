import { useState } from "react";

function ContactForm({ toast }) {
  const [loading, setloading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    // GET - form detail
    const form = e.target;
    const formData = new FormData(form);
    const fullNameVal = formData.get("fullname");
    const emailVal = formData.get("email");
    const contactVal = formData.get("contact");
    const msgVal = formData.get("message");
    const template = formData.get("_template");

    const url = "https://formsubmit.co/ajax/chanbohning@hotmail.com";
    const request = new Request(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: fullNameVal,
        email: emailVal,
        contact: contactVal,
        message: msgVal,
        _template: template,
      }),
    });

    try {
      setloading(true);
      const response = await fetch(request);

      if (response.ok) {
        setloading(false);
        toast.success("Your email has been sent.", {
          position: "top-right",
          theme: "light",
        });
      }
    } catch (error) {
      setloading(false);
      toast.error("Something went wrong", {
        position: "top-right",
        theme: "light",
      });
    }
  }

  return (
    <form method="POST" onSubmit={handleSubmit} className="mt-20">
      <input type="hidden" name="_template" value="table"></input>
      <input
        type="hidden"
        name="_autoresponse"
        value="Your request has been sent to CBN DEV"
      ></input>
      <div className="flex flex-col justify-center gap-5">
        <div>
          <label htmlFor="fullname" className="input_label">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            className="input_box"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="input_label">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="input_box"
            required
          />
        </div>
        <div>
          <label htmlFor="contact" className="input_label">
            Contact Number <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="contact"
            id="contact"
            className="input_box"
            placeholder="01122334444"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="input_label">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            type="text"
            rows={4}
            name="message"
            id="message"
            className="input_box"
            required
          />
        </div>
        {loading ? (
          <button type="submit" className="btn_loading mt-10" disabled>
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth={5}
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Submit
          </button>
        ) : (
          <button type="submit" className="btn mt-10">
            Submit
          </button>
        )}
        <input type="reset" defaultValue="Reset" className="cursor-pointer" />
      </div>
    </form>
  );
}

export default ContactForm;
