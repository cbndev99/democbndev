import GoogleMap from "../components/contact_us/GoogleMap";
import ContactForm from "../components/contact_us/ContactForm";
import ContactInfo from "../components/contact_us/ContactInfo";
import PageHeader from "../components/PageHeader";

function ContactUsPage() {
  return (
    <div className="w-full flex_center flex-col mt-20">
      {/* form */}
      <div className="content_wrapper">
        <PageHeader title="Contact Us" />

        <p className="mt-4">
          Contact us for high-quality metal, glass, and aluminium solutions
          tailored to your needs!
        </p>

        {/* TODO: Integrate Email API */}
        <ContactForm />
      </div>

      {/* contact info */}
      <ContactInfo />

      {/* google map */}
      <GoogleMap />
    </div>
  );
}

export default ContactUsPage;
