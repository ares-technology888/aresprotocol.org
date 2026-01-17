import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Lock, FileCheck, Code, Zap, Building2, Users, CheckCircle, Wrench, Brain, BarChart3, Headphones, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Badge } from '@/components/ui/badge';
import SEOHead from '@/components/SEOHead';
import NewsletterSignup from '@/components/NewsletterSignup';

export default function Index() {
  const services = [
    {
      icon: Shield,
      title: 'AI Governance Audits',
      description: 'Comprehensive evaluation of AI systems using the Nephilim Framework™ to ensure compliance and ethical deployment',
    },
    {
      icon: FileCheck,
      title: 'Regulatory Compliance',
      description: 'Expert guidance on meeting EU AI Act, GDPR, HIPAA, SOC2, and sector-specific regulatory requirements',
    },
    {
      icon: Lock,
      title: 'AI Risk Assessment',
      description: 'Identify and mitigate risks in existing or planned AI implementations across your organization',
    },
    {
      icon: BarChart3,
      title: 'Compliance Monitoring',
      description: 'Ongoing oversight and documentation to maintain governance standards and regulatory readiness',
    },
  ];

  const benefits = [
    'Proprietary Nephilim Framework™ methodology',
    'Proven compliance documentation',
    'Reduced regulatory risk exposure',
    'Faster internal and external audit approvals',
    'Governance-grade oversight protocols',
    'Sector-specific regulatory expertise',
  ];

  const industries = [
    { name: 'Government', icon: '🏛️' },
    { name: 'Finance', icon: '💰' },
    { name: 'Healthcare', icon: '🏥' },
    { name: 'Critical Infrastructure', icon: '⚡' },
    { name: 'Legal', icon: '⚖️' },
    { name: 'Defense', icon: '🛡️' },
  ];

  const governanceLLMFeatures = [
    { label: 'Policy-bound', description: 'Constrained by explicit governance rules' },
    { label: 'Evidence-gated', description: 'Requires documented justification' },
    { label: 'Human-in-the-loop', description: 'Mandatory oversight checkpoints' },
    { label: 'Refusal-capable', description: 'Designed to decline inappropriate requests' },
    { label: 'Sector-scoped', description: 'Tailored to regulatory context' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors">
      <SEOHead />
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 animate-fadeIn">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium">
            <Shield className="h-4 w-4 mr-2" />
            AI Governance & Compliance Specialists
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight animate-fadeInUp">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              AI governance and evaluation
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">for regulated environments</span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto animate-fadeInUp">
            Independent assessment of AI system behavior, oversight, and governance readiness in high-risk and regulated contexts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp">
            <Link to="/contact">
              <Button size="lg" className="text-lg px-8">
                Request a governance review
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="text-lg px-8">
                View our governance approach
              </Button>
            </Link>
          </div>

          <div className="pt-8 flex items-center justify-center gap-8 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Nephilim Framework™
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Regulatory Expertise
            </div>
          </div>
        </div>
      </section>

      {/* What ARES Does Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What A.R.E.S Does
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
            ARES provides independent AI governance services focused on evaluation, oversight, and regulatory readiness. We help organizations understand how AI systems behave in practice, where governance controls succeed or fail, and how human oversight is enforced across real workflows. Our work is advisory and evaluative.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-2 hover:border-blue-200 dark:hover:border-blue-800 transition-all hover-lift">
              <CardHeader>
                <service.icon className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Governance-Constrained LLM Interfaces Section */}
      <section className="bg-blue-50 dark:bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Governance-Constrained LLM Interfaces
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto mb-12">
              We deploy governance-constrained LLM interfaces that are:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {governanceLLMFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover-lift">
                <CardHeader>
                  <CheckCircle className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                  <CardTitle className="text-lg mb-2">{feature.label}</CardTitle>
                  <CardDescription className="text-sm">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Operate Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How We Operate
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
            ARES engagements are structured, time-bound reviews conducted under clearly defined scopes. We evaluate AI system governance controls, documentation alignment, and oversight mechanisms. Findings are delivered as written assessments designed to support internal risk, legal, and compliance functions.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <Card className="hover-lift">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                1
              </div>
              <CardTitle>Initial Assessment</CardTitle>
              <CardDescription>
                Comprehensive evaluation of existing AI systems and planned implementations
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover-lift">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                2
              </div>
              <CardTitle>Compliance Mapping</CardTitle>
              <CardDescription>
                Identify regulatory requirements and governance gaps specific to your sector
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover-lift">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                3
              </div>
              <CardTitle>Framework Implementation</CardTitle>
              <CardDescription>
                Deploy governance protocols combining technical evaluation and human oversight
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover-lift">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                4
              </div>
              <CardTitle>Continuous Monitoring</CardTitle>
              <CardDescription>
                Ongoing compliance verification and documentation for audit readiness
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Who We Work With Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Who We Work With
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto mb-12">
              ARES works with organizations operating in regulated or high-risk environments, including financial services, healthcare, public sector, critical infrastructure, and legal or compliance-led teams. Our clients typically face regulatory scrutiny, audit obligations, or board-level accountability for AI use.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow hover-lift">
                <CardHeader>
                  <div className="text-4xl mb-2">{industry.icon}</div>
                  <CardTitle className="text-base">{industry.name}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose ARES?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              We provide institutional-grade AI governance for organizations that cannot afford regulatory risk. 
              Our approach combines technical rigor with sector-specific compliance expertise.
            </p>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <Card className="p-8 hover-lift">
            <CardHeader>
              <CardTitle className="text-2xl">Regulatory Expertise</CardTitle>
              <CardDescription>Frameworks we work with</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Shield className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">EU AI Act</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Risk classification and governance obligations</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FileCheck className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">GDPR</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Data protection and accountability context</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Lock className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Healthcare AI Governance</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">HIPAA-aligned oversight considerations</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <BarChart3 className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Financial Services</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Model risk and accountability frameworks</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What governance LLM services does ARES provide?</CardTitle>
                <CardDescription className="text-base">
                  ARES provides governance-scoped language models including Nephilim GPT and Nephilim Governance GPT. These are policy-enforced, constrained AI systems designed for evaluation, oversight, and compliance support in regulated environments. They operate under defined governance rules and require human oversight.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What is ARES's role in AI governance?</CardTitle>
                <CardDescription className="text-base">
                  ARES supports internal governance, risk, and compliance processes through independent evaluation and advisory services.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Which regulations does ARES work with?</CardTitle>
                <CardDescription className="text-base">
                  ARES works in the context of frameworks such as the EU AI Act, GDPR, sector-specific healthcare and financial regulations, and emerging AI governance standards.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Contact ARES
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Engagements begin with a scoped discussion to determine governance relevance and suitability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Request a governance review
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="text-lg px-8 !bg-transparent !text-white border-white hover:!bg-white hover:!text-blue-600">
                View our governance approach
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-6 w-6 text-blue-500" />
                <span className="font-bold text-white">ARES</span>
              </div>
              <p className="text-sm">
                AI governance and regulatory compliance specialists for highly regulated sectors.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/services" className="hover:text-white transition-colors">AI Governance Audits</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Regulatory Compliance</Link></li>
                <li><Link to="/ai-development" className="hover:text-white transition-colors">Governance LLM Services</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
                <li><Link to="/testimonials" className="hover:text-white transition-colors">Testimonials</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/blog" className="hover:text-white transition-colors">Blog & Insights</Link></li>
                <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link to="/portal" className="hover:text-white transition-colors">Client Portal</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
            © 2024 ARES. All rights reserved. Nephilim Framework™ is a registered trademark.
          </div>
        </div>
      </footer>
    </div>
  );
}