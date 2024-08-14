import React from "react";
import styled from "styled-components";
import { Button } from "@/components/ui/button";
import BlurFade from "@/components/magicui/blur-fade";

const ContactUs = () => {
  return (
    <PageContainer>
      <HeroSection>
        <HeroOverlay />
        <BlurFade delay={0.25} inView>
          <HeroTitle>Contact Us</HeroTitle>
          <HeroDescription>
            Have a question or need help? We're here to assist you. Reach out to us via the form below or use our contact details.
          </HeroDescription>
        </BlurFade>
      </HeroSection>

      <Section>
        <BlurFade delay={0.5} inView>
          <SectionTitle>Get in Touch</SectionTitle>
          <ContactForm>
            <Input type="text" placeholder="Your Name" required />
            <Input type="email" placeholder="Your Email" required />
            <Textarea placeholder="Your Message" rows="5" required />
            <SubmitButton>Send Message</SubmitButton>
          </ContactForm>
        </BlurFade>
      </Section>

      <Section>
        <BlurFade delay={0.5} inView>
          <SectionTitle>Contact Information</SectionTitle>
          <ContactInfoGrid>
            <ContactInfoCard>
              <InfoTitle>Email</InfoTitle>
              <InfoText>support@texmaven.com</InfoText>
            </ContactInfoCard>
            <ContactInfoCard>
              <InfoTitle>Phone</InfoTitle>
              <InfoText>+1 (800) 123-4567</InfoText>
            </ContactInfoCard>
            <ContactInfoCard>
              <InfoTitle>Address</InfoTitle>
              <InfoText>1234 Thrift Lane, Suite 567, Eco City, USA</InfoText>
            </ContactInfoCard>
          </ContactInfoGrid>
        </BlurFade>
      </Section>

      <Section>
        <BlurFade delay={0.5} inView>
          <SectionTitle>Find Us Here</SectionTitle>
          <MapEmbed
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093724!2d144.95373531563213!3d-37.816279742014204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5777d8d3682753e!2sVictoria%20Harbour%20Promenade%2C%20Docklands%20VIC%203008%2C%20Australia!5e0!3m2!1sen!2sus!4v1632924135748!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
            title="Google Maps"
          ></MapEmbed>
        </BlurFade>
      </Section>

      <Footer>
        <FooterTitle>Connect with Us</FooterTitle>
        <FooterDescription>
          Stay connected through our social media channels for the latest updates and exclusive offers.
        </FooterDescription>
        <FooterLinks>
          <FooterLink href="#">Facebook</FooterLink>
          <FooterLink href="#">Instagram</FooterLink>
          <FooterLink href="#">LinkedIn</FooterLink>
        </FooterLinks>
        <FooterCopy>© 2024 TEXMAVEN Suite. All rights reserved.</FooterCopy>
      </Footer>
    </PageContainer>
  );
};

// Styled Components
const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f4f4f4;
`;

const HeroSection = styled.section`
  width: 100%;
  max-width: 1200px;
  height: 60vh;
  background-image: url('/images/contact-hero-bg.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 2rem;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  color: #fff;
  z-index: 1;
  margin-bottom: 1rem;
`;

const HeroDescription = styled.p`
  font-size: 1.5rem;
  color: #ddd;
  max-width: 800px;
  margin: 0 auto;
  z-index: 1;
`;

const Section = styled.section`
  width: 100%;
  max-width: 1200px;
  margin-top: 3rem;
  padding: 2rem;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #333;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-width: 600px;
  margin: 0 auto;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SubmitButton = styled(Button)`
  background: #007bff;
  color: #fff;
  padding: 0.75rem 1.5rem;
  font-size: 1.2rem;
  border-radius: 5px;
  transition: background 0.3s;

  &:hover {
    background: #0056b3;
  }
`;

const ContactInfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  max-width: 800px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ContactInfoCard = styled.div`
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 8px;
  text-align: center;
`;

const InfoTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #007bff;
`;

const InfoText = styled.p`
  font-size: 1.1rem;
  color: #555;
`;

const MapEmbed = styled.iframe`
  width: 100%;
  height: 450px;
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Footer = styled.footer`
  width: 100%;
  background-color: #222;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #fff;
`;

const FooterTitle = styled.h4`
  font-size: 1.75rem;
  margin-bottom: 1rem;
`;

const FooterDescription = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1rem;
  max-width: 600px;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const FooterLink = styled.a`
  color: #007bff;
  text-decoration: none;
  font-size: 1.1rem;

  &:hover {
    text-decoration: underline;
    color: #0056b3;
  }
`;

const FooterCopy = styled.p`
  font-size: 0.875rem;
  color: #666;
`;

export default ContactUs;
