'use client';

import React, { useState } from 'react';
import { Calendar, ChevronDown, ChevronUp, Clock } from 'lucide-react';

const Page = () => {
  const colors = {
    background: 'bg-[#062E5B]',
    text: 'text-white',
    accent: 'bg-[#4A90E2]',
    accentHover: 'hover:bg-[#357ABD]',
    card: 'bg-[#1A3B66]',
    cardHover: 'hover:bg-[#234477]',
    muted: 'text-gray-300',
    border: 'border-[#234477]'
  };

  const speakers = [
    {
      name: "Dr. Evan Miyazono",
      title: "Founder & CEO",
      organization: "Atlas Computing",
      time: "11:30 AM - 11:55 AM PST",
      image: "/images/speakers/evan.jpeg",
      talkTitle: "Specification-based AI as an alternative to aligned AI",
      abstract: `Humanity's review systems are being overwhelmed (from code review to judicial review). As AI systems get more capable, this problem of review only gets worse. Frontier labs look to "alignment" as a solvable problem that sidesteps the review problem, but brings political and ethical problems. The alternative to alignment is scaling human review by generalizing principles from Formal Verification. This talk will briefly expand on the problem of review, describe specification-based AI as a possible solution for addressing code review, generalize spec-based AI to other generative AI domains, and contextualize this work as part of a broader research agenda.`,
      bio: `Evan leads Atlas Computing, a nonprofit mapping and prototyping ways to scale human review and provable safety of advanced AI. He previously built and led a venture studio designing and deploying new coordination systems for humanity, as well as the building the research grants and metascience team at Protocol Labs (the company that initially created IPFS and Filecoin). He completed a PhD in Applied Physics at Caltech, developing hardware for a secure quantum internet, and a BS in Materials Engineering from Stanford.`
    },
    {
      name: "Alexander Lavin",
      title: "Founder & CEO",
      organization: "Pasteur Labs",
      time: "12:00 PM - 12:25 PM PST",
      image: "/images/speakers/alexander.jpeg",
      talkTitle: "Differentiable Physics: A Programmer's Perspective",
      abstract: `Humans describe and engineer the world in terms of "governing equations", manifest in software in the form of physics solvers for computational fluid dynamics et al. But these descriptions and computations of reality are largely incomplete: they often fail to describe common real-world physics situations, let alone coordinate multiple physics that may vary over spatial & temporal scales. Now consider differentiable programming, arguably the most powerful concept in deep learning: parameterized software modules that can be trained with some form of gradient-based optimization. What if we could build physics programs that are end-to-end differentiable and thus machine-learnable? And what if we could build such a software system with abstractions for domain experts without ML/AI knowledge? These two questions are explored in this talk, with demonstrations from Pasteur Labs software that is designed to become "the IDE for reality."`,
      bio: `Alexander Lavin (lavin.io) is a leading expert in AI-for-science and probabilistic computing. He's Founder & CEO of Pasteur Labs (and non-profit "sister" Institute for Simulation Intelligence; simulation.science), reshaping R&D with a new class of AI-native simulators, commercializing in energy security, aerospace, materials & manufacturing sectors (@simai4science). For the last dozen years, Lavin has focused on artificial general intelligence (AGI) research with top startups in neuroscience and robotics (Vicarious, Numenta), and sold his prior ML-simulation startup Latent Sciences to undisclosed pharmaco in neurodegeneration R&D. Lavin also serves as AI Advisor for NASA, overseeing physics-ML efforts for the NASA & ESA "Digital Twin Earth" projects. Previously, Lavin was a spacecraft engineer with NASA and Blue Origin, and won several international awards for work in rocket science and space robotics (including Google Lunar XPrize during graduate studies at Carnegie Mellon). Lavin was named Forbes 30 Under 30 in Science, and a Patrick J. McGovern Tech for Humanity Changemaker.`
    },
    {
      name: "Taylor Dolezal",
      title: "Head of Ecosystem",
      organization: "Cloud Native Computing Foundation",
      time: "12:30 PM - 12:55 PM PST",
      image: "/images/speakers/taylor.jpeg",
      talkTitle: "The Cardinal Rule of ML in Open Source: Intention > Implementation",
      abstract: `What if we've been solving the wrong equation? While everyone's busy implementing ML/AI, let's talk about how we use it to transform the open source ecosystem. Drawing from real-world examples across the CNCF landscape, we'll decode how ML is revolutionizing our code and our entire approach to open source collaboration.

Pattern Recognition:
• How ML helps us understand contribution patterns and community health
• Where AI assists in code review, documentation, and issue triage
• Why semantic understanding matters more than synthetic output

Critical Variables:
• The human factors that no model can replace
• Why intention and critical thinking remain our most valuable constants
• Real workflows where AI amplifies (rather than replaces) human insight

Practical Functions:
• Tools and approaches that work (and why they work)
• Patterns for integrating AI into open-source workflows
• Methods for maintaining human judgment in automated processes

Join me for an honest exploration of how ML/AI serves the open source ecosystem - not the other way around. Perfect for anyone interested in the real-world intersection of ML and open source, where success depends more on asking the right questions than having all the answers.`,
      bio: `Taylor Dolezal is the Head of Ecosystem at the Cloud Native Computing Foundation, where he steers initiatives and collaboration across the cloud native community. Based in Los Angeles, Taylor combines a love of tech and psychology with a keen focus on fostering innovation in the open source landscape. A long-time advocate of cloud native technologies, Taylor brings both strategic insight and practical knowledge to his work, helping drive the community forward while making it more accessible to all.`
    },
    {
      name: "Emily Fontaine",
      title: "Global Head of Venture Capital",
      organization: "IBM",
      time: "1:00 PM - 1:10 PM PST",
      image: "/images/speakers/emily.jpeg",
      talkTitle: "Q&A with IBM Global Head of Venture Capital",
      abstract: `Join us for a brief Q&A session with Emily Fontaine, Global Head of Venture Capital at IBM.`,
      bio: `Global Head of Venture Capital at IBM`
    }
  ];

  interface ExpandedSections {
    [key: string]: boolean;
  }

  const [expandedSections, setExpandedSections] = useState<ExpandedSections>({});

  const toggleSection = (speakerIndex: number | string, section: string): void => {
    setExpandedSections(prev => ({
      ...prev,
      [`${speakerIndex}-${section}`]: !prev[`${speakerIndex}-${section}`]
    }));
  };

  const formatAbstractWithBullets = (abstract: string): React.ReactNode[] => {
    return abstract.split('\n').map((line: string, index: number) => {
      if (line.startsWith('•')) {
        return (
          <li key={index} className="ml-6">
            {line.substring(1).trim()}
          </li>
        );
      }
      return <p key={index} className="mb-4">{line}</p>;
    });
  };

  return (
    <div className={`min-h-screen ${colors.background} ${colors.text}`}>
      <header className={`py-8 relative border-b ${colors.border}`}>
        <div className="max-w-7xl mx-auto">
          <div className="px-6 flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-lato mb-4">Machine Programming Lecture Day</h1>
              <h2 className="text-2xl font-lato mb-2">
                <a href='https://sites.google.com/view/gottschlich/mp-stanford-cs-329m' target="_blank" style={{ textDecoration: 'underline' }}>Stanford CS 329M</a>
              </h2>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <p className="text-xl font-lato">December 2, 2024 • 11:00 AM - 1:00 PM PST</p>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <div className="w-24 h-24 flex items-center justify-center">
                <img 
                  src="/images/Stanford_Cardinal_logo.svg.png"
                  alt="Stanford Logo" 
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="w-24 h-24 flex items-center justify-center">
                <img 
                  src="/images/merly.jpg"
                  alt="Merly Logo" 
                  className="h-full w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <section className={`${colors.card} rounded-lg p-6 shadow-md mb-8 border ${colors.border}`}>
          <p className={`${colors.muted} leading-relaxed font-light`}>
            Join us for an exciting series of talks exploring the cutting-edge of machine programming and AI. This special lecture event brings together leading experts from Atlas Computing, Pasteur Labs, CNCF, and IBM to discuss recent breakthroughs in specification-based AI, differentiable programming, and the future of open source development.
          </p>
          <p className={`${colors.muted} leading-relaxed mt-4 font-light`}>
            From scaling human review systems to revolutionizing physics simulations, our speakers will present innovative approaches to some of the most challenging problems in software development and AI safety.
          </p>

          <div className="border-t border-[#234477] ml-2 mr-6 mt-6 pt-6">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-shrink-0 w-full md:w-48">
                <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 mb-4">
                  <img 
                    src="/images/speakers/justin.jpg"
                    alt="Justin Gottschlich" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <p className="font-lato font-bold text-lg tracking-wide">
                    Justin Gottschlich
                  </p>
                  <p className={`${colors.muted} text-sm italic font-medium`}>
                    Founder, CEO & Chief Scientist
                  </p>
                  <p className={`${colors.muted} text-sm font-light border-b border-gray-600 pb-2`}>
                    Merly • Stanford University
                  </p>
                </div>
              </div>
              <div className="flex-1 min-w-0 ">
                <h3 className="text-xl font-lato pr-4">Host Bio</h3>

                <div className="flex justify-between items-start mb-2 pl-3 pt-5">
                  <p className={`${colors.muted} leading-relaxed font-light`}>
                    Justin Gottschlich is the Founder, CEO & Chief Scientist of Merly, a company aimed at making software developers more productive using state-of-the-art machine programming systems. Dr. Gottschlich also has an academic appointment as an Adjunct Lecturer at Stanford University, where he teaches machine programming at the graduate level. Previously, Justin was a Principal AI Scientist and the Founder & Director of Machine Programming Research at Intel Labs and an Adjunct Assistant Professor at the University of Pennsylvania. In 2017, he co-founded the ACM SIGPLAN Machine Programming Symposium (MAPS) and now serves as its Steering Committee Chair. In 2019, he gave the keynote address for the University of Pennsylvania’s PRECISE Industry Day. He has ~45 peer-reviewed publications, ~100 issued patents, and ~130 patents pending. Dr. Gottschlich and his team’s research have been highlighted in venues including The Wall Street Journal, DeepLearning.ai, Communications of the ACM, MIT Technology Review, and The New York Times.
                  </p>
                </div>
                
              </div>
            </div>
          </div>
        </section>


        <a 
          href="https://www.eventbrite.com/e/cs-329m-speaker-series-mock-event-tickets-1063243753689" 
          target="_blank" 
          rel="noopener noreferrer"
          className={`inline-block ${colors.accent} ${colors.accentHover} text-white px-8 py-3 rounded-lg transition-colors duration-200 mb-8 shadow-lg font-lato`}
        >
          Reserve Your Spot Now
        </a>

        <section className="space-y-8">
          {speakers.map((speaker, index) => (
            <div key={index} className={`${colors.card} rounded-lg p-8 shadow-md border ${colors.border} ${colors.cardHover} transition-all duration-200`}>
              <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-shrink-0 w-full md:w-48">
                  <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 mb-4">
                    <img 
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="font-lato font-bold text-lg tracking-wide">
                      {speaker.name}
                    </p>
                    <p className={`${colors.muted} text-sm italic font-medium`}>
                      {speaker.title}
                    </p>
                    <p className={`${colors.muted} text-sm font-light border-b border-gray-600 pb-2`}>
                      {speaker.organization}
                    </p>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-xl font-lato pr-4">{speaker.talkTitle}</h3>
                    <div className={`${colors.accent} px-4 py-2 rounded-lg flex items-center gap-2 flex-shrink-0`}>
                      <Clock className="w-4 h-4" />
                      <span className="text-sm font-medium">{speaker.time}</span>
                    </div>
                  </div>
                  <div className="space-y-6">
                  {speaker.abstract && (
                      <div>
                        <button
                          onClick={() => toggleSection(index, 'abstract')}
                          className={`w-full flex items-center justify-between p-3 rounded-lg font-lato font-medium hover:bg-[#2A507F] transition-colors ${expandedSections[`${index}-abstract`] ? 'bg-[#2A507F]' : 'bg-[#1D406E]'}`}
                        >
                          <div className="flex items-center gap-2">
                            <h4 className="text-lg">Abstract</h4>
                            {!expandedSections[`${index}-abstract`] && 
                              <span className="text-sm text-gray-400 font-light">Click to expand</span>
                            }
                          </div>
                          {expandedSections[`${index}-abstract`] ? (
                            <ChevronUp className="w-5 h-5" />
                          ) : (
                            <ChevronDown className="w-5 h-5" />
                          )}
                        </button>
                        {expandedSections[`${index}-abstract`] && (
                          <div className={`${colors.muted} leading-relaxed font-light max-w-full mt-4 px-3`}>
                            {formatAbstractWithBullets(speaker.abstract)}
                          </div>
                        )}
                      </div>
                    )}
                    <div>
                      <button
                        onClick={() => toggleSection(index, 'bio')}
                        className={`w-full flex items-center justify-between p-3 rounded-lg font-lato font-medium hover:bg-[#2A507F] transition-colors ${expandedSections[`${index}-bio`] ? 'bg-[#2A507F]' : 'bg-[#1D406E]'}`}
                      >
                        <div className="flex items-center gap-2">
                          <h4 className="text-lg">Speaker Bio</h4>
                          {!expandedSections[`${index}-bio`] && 
                            <span className="text-sm text-gray-400 font-light">Click to expand</span>
                          }
                        </div>
                        {expandedSections[`${index}-bio`] ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </button>
                      {expandedSections[`${index}-bio`] && (
                        <p className={`${colors.muted} leading-relaxed font-light max-w-full mt-4 px-3`}>
                          {speaker.bio}
                        </p>
                      )}
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