import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Target, Users, Award, BookOpen, Scale, AlertTriangle, CheckCircle, FileText } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function About() {
  const coreValues = [
    {
      title: 'Governance Before Deployment',
      description: 'AI systems should be evaluated and governed before they are relied upon in regulated or high-risk contexts.',
      icon: Shield,
    },
    {
      title: 'Independence',
      description: 'ARES maintains objectivity by separating governance evaluation from system development and deployment.',
      icon: Scale,
    },
    {
      title: 'Evidence Over Assertion',
      description: 'Governance claims must be supported by observable system behaviour, not documentation alone.',
      icon: CheckCircle,
    },
    {
      title: 'Human Oversight',
      description: 'Meaningful human accountability is a core requirement of responsible AI use.',
      icon: Users,
    },
    {
      title: 'Transparency of Scope',
      description: 'ARES is explicit about what it provides, avoiding implied guarantees or certifications.',
      icon: BookOpen,
    },
    {
      title: 'Regulatory Alignment',
      description: 'Governance frameworks must align with real regulatory expectations and sector-specific requirements.',
      icon: FileText,
    },
  ];

  const corePrinciples = [
    {
      number: '1',
      title: 'Governance Must Be Technical',
      description: 'Policies alone do not govern AI systems. Governance requires evaluation, controls, and monitoring that operate at the system level.',
    },
    {
      number: '2',
      title: 'Independence Matters',
      description: 'A.R.E.S maintains independence from AI development. Governance assessments must be free from delivery incentives.',
    },
    {
      number: '3',
      title: 'Evidence Over Assurance',
      description: 'We focus on observable behaviour, documented controls, and verifiable processes, not claims or marketing assurances.',
    },
    {
      number: '4',
      title: 'Adaptive Oversight',
      description: 'AI systems evolve. Governance mechanisms must be capable of adapting to model updates, new risks, and real-world misuse.',
    },
  ];

  const engagementReasons = [
    'Independent AI governance evaluation',
    'Technical grounding for regulatory obligations',
    'Support translating AI regulation into operational controls',
    'Clarity on system risks before deployment or audit',
    'Governance structures that stand up to scrutiny',
    'A governance-first perspective not tied to system development',
  ];

  const cultureAttributes = [
    'Conservative claims',
    'Documentation-first delivery',
    'Regulator-aware language',
    'Clear boundaries between advice and responsibility',
    'Clarity, restraint, and defensibility over visibility or growth narratives',
  ];

  const certifications = [
    {
      name: 'Oxford Saïd Business School',
      program: 'AI Governance',
      image: '/assets/certifications/oxford-said.png',
      description: 'EU AI Act, governance structures, risk classification, oversight models'
    },
    {
      name: 'The Open University',
      program: 'AI Ethics & Law',
      image: '/assets/certifications/open-university.png',
      description: 'Ethical & Responsible Use of Generative AI, Understanding Generative AI Law, Navigating Risk Management'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">About A.R.E.S</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Advanced Recursive Evolutionary Systems</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            AI governance and evaluation practice focused on the technical, regulatory, and operational oversight of advanced AI systems
          </p>
        </div>

        {/* Who We Are */}
        <Card className="mb-12 border-2 border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20">
          <CardHeader>
            <CardTitle className="text-2xl">Who We Are</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              A.R.E.S (Advanced Recursive Evolutionary Systems) is an AI governance and evaluation practice focused on the technical, regulatory, and operational oversight of advanced AI systems.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              We work with organisations operating in regulated or high-risk environments to assess, constrain, and govern AI systems in line with legal obligations, institutional intent, and real-world deployment risks.
            </p>
            <p className="text-gray-700 dark:text-gray-300 font-semibold">
              A.R.E.S is not an AI product company and not a model developer.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Our role is to evaluate, audit, and strengthen governance mechanisms around AI systems, particularly where failure carries legal, financial, or societal consequences.
            </p>
          </CardContent>
        </Card>

        {/* Company Origin & Mission */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Company Origin & Mission</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              A.R.E.S was established to address a growing gap in how organisations govern the use of AI in regulated and high-risk environments.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              As AI systems have become more capable and more deeply embedded in consequential decision-making, it has become increasingly clear that policies and principles alone are insufficient. Organisations are being asked not just what they intend AI systems to do, but how they know those systems behave as intended under real conditions.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">Our Mission</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                To advance technical AI governance by bridging the gap between:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                  <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Legal and regulatory requirements</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                  <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Technical system behaviour and evaluation</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                  <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Operational oversight and risk management</span>
                </li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 font-semibold mt-4">
                We believe effective AI governance must be verifiable, enforceable, and adaptive — not just policy-driven or aspirational.
              </p>
            </div>
            <p className="text-gray-700 dark:text-gray-300 italic">
              The mission of A.R.E.S is to support the safe, accountable, and defensible use of AI by focusing on governance, evaluation, and oversight — rather than development or automation.
            </p>
            <p className="text-gray-700 dark:text-gray-300 font-semibold">
              ARES exists to help organisations understand whether AI systems can be governed responsibly, not simply whether they perform well.
            </p>
          </CardContent>
        </Card>

        {/* How A.R.E.S Operates */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">How A.R.E.S Operates</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              A.R.E.S operates as an independent governance layer, working alongside internal teams, legal counsel, and compliance functions.
            </p>
            <p className="text-gray-700 dark:text-gray-300 font-semibold">
              Our work focuses on:
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 border rounded-lg dark:border-gray-700">
                <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300">Evaluating AI behaviour under controlled conditions</span>
              </div>
              <div className="flex items-start gap-3 p-3 border rounded-lg dark:border-gray-700">
                <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300">Assessing governance readiness against real regulatory expectations</span>
              </div>
              <div className="flex items-start gap-3 p-3 border rounded-lg dark:border-gray-700">
                <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300">Identifying gaps between documented controls and deployed systems</span>
              </div>
              <div className="flex items-start gap-3 p-3 border rounded-lg dark:border-gray-700">
                <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300">Supporting remediation and oversight design (without building the AI itself)</span>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 font-semibold">
              We deliberately separate governance and evaluation from system development to avoid conflicts of interest.
            </p>
          </CardContent>
        </Card>

        {/* Founder & Practice Lead */}
        <Card className="mb-12 border-2 border-blue-200 dark:border-blue-800">
          <CardHeader>
            <CardTitle className="text-2xl">Founder & Practice Lead</CardTitle>
            <CardDescription className="text-lg">TJ Anderson – Founder, A.R.E.S</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-3">Background & Expertise</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                TJ Anderson's work sits at the intersection of AI governance, risk management, and technical evaluation.
              </p>
            </div>

            {/* Professional Certifications Section */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <Award className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                <h3 className="font-bold text-xl">Professional Certifications & Training</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-4 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 transition-all hover:shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-20 h-20 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 flex items-center justify-center p-2">
                        <img 
                          src={cert.image} 
                          alt={`${cert.name} certification`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-base text-gray-900 dark:text-white mb-1">
                          {cert.name}
                        </h4>
                        <p className="font-semibold text-sm text-blue-600 dark:text-blue-400 mb-2">
                          {cert.program}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                          {cert.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-gray-700 dark:text-gray-300 font-semibold mb-3">
                Practical experience includes:
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                  <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Designing governance frameworks for LLM-based systems</span>
                </div>
                <div className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                  <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Conducting structured AI risk assessments</span>
                </div>
                <div className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                  <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Evaluating refusal behaviour, bias, and alignment failure modes</span>
                </div>
                <div className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                  <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Building protocol-bound interaction layers to support auditability and control</span>
                </div>
                <div className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                  <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Translating regulatory requirements into operational evaluation criteria</span>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic mt-4">
                A.R.E.S emerged from hands-on work identifying the gap between what governance frameworks require and what AI systems can actually be verified to do in practice.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Core Values & Principles */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Core Values & Principles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {coreValues.map((value, index) => (
              <Card key={index} className="border-2 dark:border-gray-700">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <value.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{value.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-2">
            <CardHeader>
              <CardTitle className="text-xl">Core Principles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {corePrinciples.map((principle, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700">
                    <div className="w-10 h-10 bg-blue-600 dark:bg-blue-500 text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                      {principle.number}
                    </div>
                    <div>
                      <h4 className="font-semibold text-base mb-1">{principle.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{principle.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Team & Expertise */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Team & Expertise</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              ARES operates as a governance-led organisation supported by multidisciplinary expertise across:
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="flex items-start gap-2 p-3 border rounded-lg dark:border-gray-700">
                <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300">AI governance and evaluation</span>
              </div>
              <div className="flex items-start gap-2 p-3 border rounded-lg dark:border-gray-700">
                <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300">Regulatory interpretation and compliance context</span>
              </div>
              <div className="flex items-start gap-2 p-3 border rounded-lg dark:border-gray-700">
                <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300">Risk assessment and oversight design</span>
              </div>
              <div className="flex items-start gap-2 p-3 border rounded-lg dark:border-gray-700">
                <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300">Technical analysis of AI system behaviour</span>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 italic">
              Individual contributors are not publicly listed at this stage. This reflects the advisory and evaluative nature of the work and the confidentiality expectations of regulated environments.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Where appropriate, expertise is drawn from technical, legal, and compliance backgrounds to support governance reviews.
            </p>
          </CardContent>
        </Card>

        {/* Company Milestones & Achievements */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Company Milestones & Achievements</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300 font-semibold">
              Key milestones in the development of A.R.E.S include:
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 border rounded-lg dark:border-gray-700">
                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300">Establishment of a governance-first operating model focused on evaluation and oversight</span>
              </div>
              <div className="flex items-start gap-3 p-3 border rounded-lg dark:border-gray-700">
                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300">Development of structured AI governance assessment and review processes</span>
              </div>
              <div className="flex items-start gap-3 p-3 border rounded-lg dark:border-gray-700">
                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300">Alignment of public materials with regulatory and institutional expectations</span>
              </div>
              <div className="flex items-start gap-3 p-3 border rounded-lg dark:border-gray-700">
                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300">Creation of governance reference materials grounded in public regulatory frameworks</span>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 italic">
              ARES prioritises substance and accuracy over public milestone announcements.
            </p>
          </CardContent>
        </Card>

        {/* Partnerships & Certifications */}
        <Card className="mb-12 border-2 border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20">
          <CardHeader>
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" />
              <div>
                <CardTitle className="text-2xl">Partnerships & Certifications</CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              Our work is informed by publicly available regulatory frameworks, standards, and guidance, including EU, UK, and international AI governance materials. References to these frameworks indicate context, not certification or approval.
            </p>
          </CardContent>
        </Card>

        {/* Why Organisations Work With A.R.E.S */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Why Organisations Work With A.R.E.S</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300 font-semibold">
              Organisations engage A.R.E.S when they need:
            </p>
            <div className="space-y-3">
              {engagementReasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-3 p-3 border rounded-lg dark:border-gray-700">
                  <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">{reason}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-700 dark:text-gray-300 italic">
              We are typically engaged before regulatory exposure, procurement decisions, or public deployment, where governance failures are most costly.
            </p>
            <p className="text-gray-700 dark:text-gray-300 italic">
              ARES is designed for organisations that value careful evaluation over speed or hype.
            </p>
          </CardContent>
        </Card>

        {/* Culture & Approach */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Culture & Approach</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300 font-semibold">
              A.R.E.S operates with:
            </p>
            <div className="space-y-3">
              {cultureAttributes.map((attribute, index) => (
                <div key={index} className="flex items-start gap-3 p-3 border rounded-lg dark:border-gray-700">
                  <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">{attribute}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              We assume that everything we produce may be reviewed by legal, audit, or regulatory stakeholders.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Work is scoped, documented, and delivered with the expectation that it may be reviewed by compliance officers, legal counsel, auditors, or regulators. The company culture prioritises clarity, restraint, and defensibility over visibility or growth narratives.
            </p>
            <p className="text-gray-700 dark:text-gray-300 italic">
              This approach reflects the reality of AI governance in regulated environments, where credibility is built through consistency and care.
            </p>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0">
            <CardHeader>
              <CardTitle className="text-2xl">Work With Us</CardTitle>
              <CardDescription className="text-blue-100">
                Independent governance evaluation for your AI systems
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/services">
                <Button size="lg" variant="secondary" className="w-full">
                  View Governance Services
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Have Questions?</CardTitle>
              <CardDescription>
                Learn more about our governance approach and evaluation process
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="w-full">
                  Contact Us
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}