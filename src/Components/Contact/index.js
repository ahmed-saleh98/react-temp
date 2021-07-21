import React from "react";
import {
  ContactSection,
  ContactTitle,
  Span,
  Form,
  FormInput,
  TextInput,
  EmailInput,
  InputExp,
  Textarea,
  Submit,
} from "./style.js";
import Footer from "./../Footer";
const Contact = () => {
  return (
    <>
      <ContactSection>
        <div class="container">
          <ContactTitle>
            <Span>Drop </Span>Me A line
          </ContactTitle>
          <Form action="">
            <FormInput>
              <TextInput type="text" placeholder="Your Name" />
              <EmailInput type="email" placeholder="Your Email" />
            </FormInput>
            <InputExp type="text" class="sub" placeholder="Your Subject" />
            <Textarea cols="30" rows="10" placeholder="Your Message"></Textarea>
            <Submit type="submit" value="Send Message" />
          </Form>
        </div>
      </ContactSection>
      <Footer></Footer>
    </>
  );
};
export default Contact;
