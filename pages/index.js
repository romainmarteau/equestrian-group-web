import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhoWeAre from '@/components/WhoWeAre';
import WhyWeExist from '@/components/WhyWeExist';
import WhatWeDo from '@/components/WhatWeDo';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-cream selection:bg-sage selection:text-forest">
      <Head>
        {/* Primary Meta Tags */}
        <title>East End Equestrian Group | Uniting the Equestrian Voice of the East End</title>
        <meta name="description" content="A coalition of equestrians, property owners, professionals and enthusiasts dedicated to developing, preserving, and promoting the horse industry on the East End" />
        <meta name="keywords" content="equestrian, East End, horses, property owners, horse industry, equestrian community, equestrian professionals, coalition" />
        <meta name="canonical" content="" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:title" content="East End Equestrian Group | Uniting the Equestrian Voice of the East End" />
        <meta property="og:description" content="A coalition of equestrians, property owners, professionals and enthusiasts dedicated to developing, preserving, and promoting the horse industry on the East End" />
        <meta property="og:image" content="/why-we-exist.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="East End Equestrian Group" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="" />
        <meta name="twitter:title" content="East End Equestrian Group | Uniting the Equestrian Voice of the East End" />
        <meta name="twitter:description" content="A coalition of equestrians, property owners, professionals and enthusiasts dedicated to developing, preserving, and promoting the horse industry on the East End" />
        <meta name="twitter:image" content="/why-we-exist.png" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
      </Head>

      <Header />

      <main>
        <Hero />
        <WhoWeAre />
        <WhyWeExist />
        <WhatWeDo />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
