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
        <title>East End Equestrian Group | Uniting the Equestrian Voice</title>
        <meta name="description" content="The East End Equestrian Group unites riders, trainers, and owners to protect the land and horses of our community." />
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
