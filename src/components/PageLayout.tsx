import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingWhatsApp from "./FloatingWhatsApp";
import ContactSection from "./ContactSection";

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
  showContact?: boolean;
}

const PageLayout = ({ children, title, description, showContact = true }: PageLayoutProps) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_NG" />
      </Helmet>
      <Navbar />
      <main className="pt-16 lg:pt-20">
        {children}
        {showContact && <ContactSection />}
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
};

export default PageLayout;
