'use client';

import React from 'react';
import { Calendar } from 'lucide-react';

const Page = () => {
  const speakers = [
    {
      name: "Dr. Evan Miyazono",
      image: "/images/speakers/evan.jpeg",
      title: "Differentiable Physics: A Programmer's Perspective",
      abstract: `Humans describe and engineer the world in terms of "governing equations", manifest in software in the form of physics solvers for computational fluid dynamics et al. But these descriptions and computations of reality are largely incomplete: they often fail to describe common real-world physics situations, let alone coordinate multiple physics that may vary over spatial & temporal scales. Now consider differentiable programming, arguably the most powerful concept in deep learning: parameterized software modules that can be trained with some form of gradient-based optimization. What if we could build physics programs that are end-to-end differentiable and thus machine-learnable? And what if we could build such a software system with abstractions for domain experts without ML/AI knowledge? These two questions are explored in this talk, with demonstrations from Pasteur Labs software that is designed to become "the IDE for reality."`,
      bio: `Alexander Lavin (lavin.io) is a leading expert in AI-for-science and probabilistic computing. He's Founder & CEO of Pasteur Labs (and non-profit "sister" Institute for Simulation Intelligence; simulation.science), reshaping R&D with a new class of AI-native simulators, commercializing in energy security, aerospace, materials & manufacturing sectors (@simai4science).`
    },
    {
      name: "Alexander Lavin",
      image: "/images/speakers/alexander.jpeg",
      title: "Differentiable Physics: A Programmer's Perspective",
      abstract: `Humans describe and engineer the world in terms of "governing equations", manifest in software in the form of physics solvers for computational fluid dynamics et al. But these descriptions and computations of reality are largely incomplete: they often fail to describe common real-world physics situations, let alone coordinate multiple physics that may vary over spatial & temporal scales. Now consider differentiable programming, arguably the most powerful concept in deep learning: parameterized software modules that can be trained with some form of gradient-based optimization. What if we could build physics programs that are end-to-end differentiable and thus machine-learnable? And what if we could build such a software system with abstractions for domain experts without ML/AI knowledge? These two questions are explored in this talk, with demonstrations from Pasteur Labs software that is designed to become "the IDE for reality."`,
      bio: `Alexander Lavin (lavin.io) is a leading expert in AI-for-science and probabilistic computing. He's Founder & CEO of Pasteur Labs (and non-profit "sister" Institute for Simulation Intelligence; simulation.science), reshaping R&D with a new class of AI-native simulators, commercializing in energy security, aerospace, materials & manufacturing sectors (@simai4science).`
    },
    {
      name: "Taylor Dolezal",
      image: "/images/speakers/taylor.jpeg",
      title: "Differentiable Physics: A Programmer's Perspective",
      abstract: `Humans describe and engineer the world in terms of "governing equations", manifest in software in the form of physics solvers for computational fluid dynamics et al. But these descriptions and computations of reality are largely incomplete: they often fail to describe common real-world physics situations, let alone coordinate multiple physics that may vary over spatial & temporal scales. Now consider differentiable programming, arguably the most powerful concept in deep learning: parameterized software modules that can be trained with some form of gradient-based optimization. What if we could build physics programs that are end-to-end differentiable and thus machine-learnable? And what if we could build such a software system with abstractions for domain experts without ML/AI knowledge? These two questions are explored in this talk, with demonstrations from Pasteur Labs software that is designed to become "the IDE for reality."`,
      bio: `Alexander Lavin (lavin.io) is a leading expert in AI-for-science and probabilistic computing. He's Founder & CEO of Pasteur Labs (and non-profit "sister" Institute for Simulation Intelligence; simulation.science), reshaping R&D with a new class of AI-native simulators, commercializing in energy security, aerospace, materials & manufacturing sectors (@simai4science).`
    },
    {
      name: "Emily Fontaine",
      image: "/images/speakers/emily.jpeg",
      title: "Differentiable Physics: A Programmer's Perspective",
      abstract: `Humans describe and engineer the world in terms of "governing equations", manifest in software in the form of physics solvers for computational fluid dynamics et al. But these descriptions and computations of reality are largely incomplete: they often fail to describe common real-world physics situations, let alone coordinate multiple physics that may vary over spatial & temporal scales. Now consider differentiable programming, arguably the most powerful concept in deep learning: parameterized software modules that can be trained with some form of gradient-based optimization. What if we could build physics programs that are end-to-end differentiable and thus machine-learnable? And what if we could build such a software system with abstractions for domain experts without ML/AI knowledge? These two questions are explored in this talk, with demonstrations from Pasteur Labs software that is designed to become "the IDE for reality."`,
      bio: `Alexander Lavin (lavin.io) is a leading expert in AI-for-science and probabilistic computing. He's Founder & CEO of Pasteur Labs (and non-profit "sister" Institute for Simulation Intelligence; simulation.science), reshaping R&D with a new class of AI-native simulators, commercializing in energy security, aerospace, materials & manufacturing sectors (@simai4science).`
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-stanford-red text-white py-8 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-serif mb-4">Machine Programming Lecture Day</h1>
          <h2 className="text-2xl font-serif mb-2">Stanford CS 329M</h2>
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <p className="text-xl font-serif">12/2/24 11:30am PST</p>
          </div>
        </div>
        <img 
          src="/images/stanford-logo.png"
          alt="Stanford Logo" 
          className="absolute right-6 top-6 w-32 h-32 rounded-full bg-white/10"
        />
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <section className="bg-gray-50 rounded-lg p-6 shadow-sm mb-8">
          <p className="text-gray-800 leading-relaxed">
            Stanford&apos;s Department of Computer Science invites you to a speaker event featuring CS 329M: Machine Programming. This graduate-level course examines the automation of software development through machine learning techniques, addressing recent advances in algorithms, hardware efficiency, and code data utilization.
          </p>
          <p className="text-gray-800 leading-relaxed mt-4">
            The curriculum focuses on building practical machine programming (MP) systems, emphasizing specialized techniques in self-supervised learning and multi-dimensional software reasoning.
          </p>
          <p className="text-gray-800 leading-relaxed mt-4">
            We welcome attendees with backgrounds in machine learning, programming languages, software engineering, and systems architecture to join us for this discussion of current innovations in machine programming.
          </p>
        </section>

        <a 
          href="#register" 
          className="inline-block bg-stanford-red text-white px-8 py-3 rounded-lg hover:bg-red-900 transition-colors duration-200 mb-8"
        >
          Event Registration
        </a>

        <section className="space-y-8">
          {speakers.map((speaker, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200">
                    <img 
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-center mt-2 font-medium">{speaker.name}</p>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-medium mb-4">{speaker.title}</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Abstract:</h4>
                      <p className="text-gray-700 leading-relaxed">{speaker.abstract}</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Speaker Bio:</h4>
                      <p className="text-gray-700 leading-relaxed">{speaker.bio}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Page;