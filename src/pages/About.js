import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <section className="text-center px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About CodeAnt</h2>
          <p className="text-lg text-gray-700 mb-8">
            CodeAnt is the leading platform to test your frontend development skills with real-world challenges.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
