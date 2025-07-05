import AboutUsSection from "@/components/pages/about/AboutUsSection";
import FeaturesSection from "@/components/pages/about/FeaturesSection";
import FreeShippingSection from "@/components/pages/about/FreeShippingSection";
import ImageGallery from "@/components/pages/about/ImageGallery";
import UpperPageTitle from "@/components/ui/UpperPageTitle";
import upperImage from "@/public/images/productsbackground.jpg";
const About = () => {
  return (
    <div>
      <UpperPageTitle
        image={upperImage}
        title="About Us"
        subtitle=""
        link="About Us"
        textColor="text-white"
      />
      <AboutUsSection />
      <ImageGallery/>
      <FeaturesSection/>
      <FreeShippingSection/>
    </div>
  );
};

export default About;
