import React from "react";
import styled from "styled-components";
import { Button } from "@/components/ui/button";
import BlurFade from "@/components/magicui/blur-fade";

const AboutUs = () => {
  return (
    <PageContainer>
      <HeroSection>
        <HeroOverlay />
        <BlurFade delay={0.25} inView>
          <HeroTitle>About TEXMAVEN Suite</HeroTitle>
          <HeroDescription>
            Discover who we are, what we stand for, and our journey to becoming a trusted platform for buying and selling thrifted, unique, and craft products.
          </HeroDescription>
        </BlurFade>
      </HeroSection>

      <Section>
        <BlurFade delay={0.5} inView>
          <SectionTitle>Our Mission</SectionTitle>
          <SectionText>
            At TEXMAVEN Suite, we believe in promoting sustainability and individuality through fashion. Our mission is to provide a platform where people can easily buy and sell thrifted items, unique crafts, and more, contributing to a more eco-friendly world.
          </SectionText>
        </BlurFade>
      </Section>

      <Section>
        <BlurFade delay={0.5} inView>
          <SectionTitle>Our Values</SectionTitle>
          <ValuesGrid>
            <ValueCard>
              <ValueTitle>Sustainability</ValueTitle>
              <ValueIcon>🌿</ValueIcon>
              <ValueDescription>
                We prioritize sustainability in everything we do, from the products we promote to the way we operate our business.
              </ValueDescription>
            </ValueCard>
            <ValueCard>
              <ValueTitle>Community</ValueTitle>
              <ValueIcon>🤝</ValueIcon>
              <ValueDescription>
                Our platform is built on a strong sense of community. We believe in connecting people and fostering relationships through commerce.
              </ValueDescription>
            </ValueCard>
            <ValueCard>
              <ValueTitle>Innovation</ValueTitle>
              <ValueIcon>💡</ValueIcon>
              <ValueDescription>
                We continuously strive to innovate and improve our platform to provide the best possible experience for our users.
              </ValueDescription>
            </ValueCard>
          </ValuesGrid>
        </BlurFade>
      </Section>

      <Section>
        <BlurFade delay={0.5} inView>
          <SectionTitle>Meet the Team</SectionTitle>
          <TeamGrid>
            <TeamCard>
              <TeamName>Harini C M</TeamName>
              <TeamRole>Founder & CEO</TeamRole>
            </TeamCard>
            <TeamCard>
              <TeamName>Janani Krishnitha K</TeamName>
              <TeamRole>CTO</TeamRole>
            </TeamCard>
            <TeamCard>
              <TeamName>Sweathi S</TeamName>
              <TeamRole>Marketing Head</TeamRole>
            </TeamCard>
          </TeamGrid>
        </BlurFade>
      </Section>

      <Section>
        <BlurFade delay={0.5} inView>
          <SectionTitle>Join Us</SectionTitle>
          <SectionText>
            Interested in joining our mission? We are always looking for passionate individuals to join our team. 
          </SectionText>
          <JoinButton>Contact Us</JoinButton>
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
  background-image: url('/images/hero-bg.jpg');
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

const SectionText = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ValueCard = styled.div`
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }
`;

const ValueTitle = styled.h3`
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
  color: #007bff;
`;

const ValueIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ValueDescription = styled.p`
  font-size: 1.1rem;
  color: #555;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const TeamCard = styled.div`
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }
`;

const TeamName = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

const TeamRole = styled.p`
  font-size: 1.1rem;
  color: #666;
`;

const JoinButton = styled(Button)`
  background: #007bff;
  color: #fff;
  margin-top: 2rem;
  padding: 0.75rem 1.5rem;
  font-size: 1.2rem;
  border-radius: 5px;
  transition: background 0.3s;

  &:hover {
    background: #0056b3;
  }
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

export default AboutUs;
