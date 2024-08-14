import React from "react";
import styled from "styled-components";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import BlurFade from "@/components/magicui/blur-fade";

// Import images
import images1 from "@/assets/images/images1.jpeg";
import images4 from "@/assets/images/images4.jpeg";
import images3 from "@/assets/images/images3.jpeg";

// Import video
import video1 from "@/assets/videos/video1.mp4";

// Path to the uploaded image
import used1 from "@/assets/images/used1.webp";
import used2 from "@/assets/images/used2.jpeg";

const Home = () => {
  return (
    <PageContainer>
      <section id="header">
        <BlurFade delay={0.25} inView>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl from-stone-800">
            Sell Thrifted, Unique, Craft products
          </h2>
        </BlurFade>
        <BlurFade delay={0.5} inView>
          <span className="text-xl text-pretty tracking-tighter sm:text-3xl xl:text-4xl">
            Start a Business, Earn money or credit
          </span>
        </BlurFade>
      </section>
      <HeroSection>
        <VideoBackground autoPlay muted loop>
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </VideoBackground>
        <BlurFade delay={0.5} inView>
          <HeroContent>
            <HeroTitle>TEXMAVEN SUITE</HeroTitle>
            <HeroDescription>
              Become part of a thriving community of over 5 million sellers and buyers.
            </HeroDescription>
            <SearchContainer>
              <SearchInput
                type="text"
                placeholder="Search by Product, Shops & more..."
              />
              <SearchButton>Search Product</SearchButton>
            </SearchContainer>
          </HeroContent>
        </BlurFade>
      </HeroSection>
      <Section>
        <BlurFade delay={0.5} inView>
          <SectionTitle className="from-stone-800">
            Popular Product Categories
          </SectionTitle>
          <CategoryGrid>
            <CategoryCard backgroundImage={images1}>
              <CategoryTitle>Resell</CategoryTitle>
              <CategoryDescription>
                Where fashion meets sustainability—resell your clothes with ease and style
              </CategoryDescription>
            </CategoryCard>
            <CategoryCard backgroundImage={images4}>
              <CategoryTitle>Reuse</CategoryTitle>
              <CategoryDescription>
                Unlock the value of your clothes and find unique pieces you’ll love, all in one app
              </CategoryDescription>
            </CategoryCard>
            <CategoryCard backgroundImage={images3}>
              <CategoryTitle>Refashion</CategoryTitle>
              <CategoryDescription>
                Transform your closet into cash—resell your pre-loved fashion effortlessly.
              </CategoryDescription>
            </CategoryCard>
          </CategoryGrid>
        </BlurFade>
      </Section>
      <Section>
        <BlurFade delay={0.5} inView>
          <SectionTitle>Trending Products</SectionTitle>
          <FeaturedGrid>
            <FeaturedCard>
              <PriceTag>Rs20 - Rs50</PriceTag>
              <ProductImage src={used1} alt="Trendy Jacket" />
              <ProductTitle>Trendy Top</ProductTitle>
              <ProductDescription>
                A stylish and trendy top perfect for any occasion.
              </ProductDescription>
              <Rating>★★★★☆</Rating>
              <OrderButton>Rent Now</OrderButton>
            </FeaturedCard>
            <FeaturedCard>
              <PriceTag>Rs50 - Rs70</PriceTag>
              <ProductImage src={used2} alt="Vintage Dress" />
              <ProductTitle>Vintage shoe</ProductTitle>
              <ProductDescription>
                Elegant vintage shoe for a timeless look.
              </ProductDescription>
              <Rating>★★★★★</Rating>
              <OrderButton>Rent Now</OrderButton>
            </FeaturedCard>
          </FeaturedGrid>
        </BlurFade>
      </Section>
      <Footer>
        <FooterTitle>Join the TEXMAVEN Community</FooterTitle>
        <FooterDescription>
          Stay updated with the latest trends and exclusive offers.
        </FooterDescription>
        <FooterLinks>
          <FooterLink href="#">Privacy Policy</FooterLink>
          <FooterLink href="#">Terms of Service</FooterLink>
          <FooterLink href="#">Contact Us</FooterLink>
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
`;

const HeroSection = styled.section`
  width: 100%;
  max-width: 1200px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 4rem 2rem;
  border-radius: 8px;
  margin-top: 2rem;
  overflow: hidden;
  min-height: 60vh;
  height: auto;
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const HeroContent = styled.div`
  max-width: 600px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const HeroTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const HeroDescription = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
`;

const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 600px;
`;

const SearchInput = styled(Input)`
  flex: 2;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

const SearchButton = styled(Button)`
  flex: 1;
  background: #0069d9;
  color: #fff;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

const Section = styled.section`
  width: 100%;
  max-width: 1200px;
  margin-top: 3rem;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const CategoryCard = styled.div`
  position: relative;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  color: black;
  overflow: hidden;
  background: #f8f9fa;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
    z-index: -1;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
    z-index: -1;
  }
`;

const CategoryTitle = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const CategoryDescription = styled.p`
  font-size: 1rem;
  font-weight: bold;
`;

const FeaturedGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const FeaturedCard = styled.div`
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 8px;
  text-align: center;
  position: relative;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const PriceTag = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: #007bff; /* Changed background color to blue */
  color: #fff; /* Keep text color white */
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: bold;
`;

const ProductImage = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const ProductTitle = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const ProductDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const Rating = styled.div`
  font-size: 1.25rem;
`;

const OrderButton = styled(Button)`
  background: #007bff; /* Changed background color to blue */
  color: #fff; /* Keep text color white */
  margin-top: 1rem;
`;

const Footer = styled.footer`
  width: 100%;
  background-color: #000; /* Change background color to black */
  padding: 2rem;
  border-top: 1px solid #333; /* Adjust border color if necessary */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const FooterTitle = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #fff; /* Change text color to white */
`;

const FooterDescription = styled.p`
  font-size: 1rem;
  color: #ddd; /* Change text color to a lighter shade of white */
  margin-bottom: 1rem;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const FooterLink = styled.a`
  color: blue; /* Change link color to red */
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

const FooterCopy = styled.p`
  font-size: 0.875rem;
  color: #666; /* Adjust color if necessary for better contrast */
`;

export default Home;
