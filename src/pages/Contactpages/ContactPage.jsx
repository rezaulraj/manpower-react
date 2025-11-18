import React from "react";
import ContactHero from "./ContactHero";
import ContactForm from "./ContactForm";
import ContactCountry from "./ContactConutry";

const ContactPage = () => {
  return (
    <div>
      <ContactHero />
      <ContactForm />
      <ContactCountry />
    </div>
  );
};

export default ContactPage;
