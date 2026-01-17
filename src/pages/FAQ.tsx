import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Settings, DollarSign, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function FAQ() {
  const categories = [
    {
      icon: Shield,
      title: 'AI Governance & Compliance',
      faqs: [
        {
          question: 'What is the Nephilim Framework™?',
          answer: 'The Nephilim Framework™ is our proprietary AI governance methodology that combines technical evaluation, regulatory compliance mapping, and human oversight protocols. It provides a systematic approach to ensuring AI systems meet institutional standards and regulatory requirements across different sectors.',
        },
        {
          question: 'Which regulations do you help with?',
          answer: 'We provide expertise across major AI and data regulations including EU AI Act, GDPR, CCPA, HIPAA, SOC2, ISO 27001, and sector-specific requirements for finance (fair lending, FCRA), healthcare (FDA guidelines), defense (ITAR), and critical infrastructure (NERC CIP).',
        },
        {
          question: 'How long does a governance audit take?',
          answer: 'A comprehensive governance audit typically takes 2-4 weeks depending on the complexity of your AI systems and the number of regulatory frameworks involved. We provide a detailed timeline during the initial scoping discussion.',
        },
        {
          question: 'Do you provide ongoing compliance monitoring?',
          answer: 'Yes, we offer ongoing governance support services to help organizations maintain oversight as AI systems and regulations evolve. This includes periodic reviews, advisory sessions, and updated governance documentation.',
        },
        {
          question: 'What deliverables do we receive from an audit?',
          answer: 'You receive a comprehensive governance evaluation report including: compliance assessment against relevant regulations, identified governance gaps, risk analysis, remediation considerations, and governance-ready documentation.',
        },
      ],
    },
    {
      icon: Settings,
      title: 'Governance GPT Services',
      faqs: [
        {
          question: 'What are Governance GPTs?',
          answer: 'Governance GPTs are pre-configured, policy-enforced LLM interfaces built on third-party infrastructure (e.g., OpenAI). They are designed to support governance, evaluation, and compliance workflows with defined constraints, oversight mechanisms, and documentation requirements. They require human review.',
        },
        {
          question: 'What infrastructure do Governance GPTs use?',
          answer: 'ARES provides access to governance-scoped LLM services that operate on existing third-party infrastructure with ARES-designed governance layers, policy enforcement, and oversight controls.',
        },
        {
          question: 'How does ARES protect client data privacy?',
          answer: 'ARES puts client privacy first. All data processed through our Governance GPTs is private and protected. We use enterprise agreements with providers like OpenAI that ensure your data is not used for training their models or any other purpose beyond serving your requests. Your sensitive information remains confidential and is never shared or repurposed.',
        },
        {
          question: 'What are the benefits of enterprise infrastructure for Governance GPTs?',
          answer: 'For enterprise use, leveraging infrastructure from providers like OpenAI, AWS, or Digital Ocean allows your organization to access best-in-class governance LLMs while retaining complete privacy and data protection. These enterprise-grade platforms provide robust security, compliance certifications, and data isolation guarantees that meet the highest institutional standards.',
        },
        {
          question: 'How are Governance GPTs different from standard LLMs?',
          answer: 'Governance GPTs include policy-based boundary enforcement, regulatory context alignment, documented refusal behavior, audit trails, human oversight requirements, and sector-specific governance constraints. They are designed for regulated environments where accountability and transparency are essential.',
        },
        {
          question: 'Can Governance GPTs be customized for our sector?',
          answer: 'Yes. We configure governance GPTs for specific sectors (finance, healthcare, public sector, critical infrastructure) with tailored policy rules, compliance checks, and oversight mechanisms aligned with your regulatory context.',
        },
        {
          question: 'What role do Governance GPTs play?',
          answer: 'Governance GPTs are advisory tools designed to support human reviewers. All outputs require human review and validation. They assist with documentation, policy interpretation, and evaluation workflows.',
        },
      ],
    },
    {
      icon: DollarSign,
      title: 'Pricing & Access',
      faqs: [
        {
          question: 'How is pricing structured?',
          answer: 'Governance audits are engagement-based, starting from £6,000-£8,000 depending on scope. Governance GPT access is subscription-based with Free, Pro, and Enterprise tiers. Contact us for custom enterprise pricing.',
        },
        {
          question: 'What is included in Governance GPT pricing?',
          answer: 'All pricing includes: governance-scoped LLM interactions, compliance checks, policy enforcement, analytics, and support. Enterprise plans include custom governance policies, dedicated account management, and on-premise deployment options.',
        },
        {
          question: 'Are there any hidden fees?',
          answer: 'No. Our pricing is transparent. Governance audit pricing is fixed per engagement. Governance GPT subscriptions have clear monthly limits. The only additional costs would be for scope changes or optional add-on services.',
        },
        {
          question: 'Do you offer volume discounts?',
          answer: 'Yes, we offer custom pricing for organizations requiring multiple governance audits or enterprise-level Governance GPT access. Contact our sales team to discuss tailored packages.',
        },
      ],
    },
    {
      icon: Clock,
      title: 'Process & Timeline',
      faqs: [
        {
          question: 'How do we get started?',
          answer: 'Start by requesting a consultation through our contact form. We\'ll schedule a scoping discussion to understand your governance needs, followed by a formal proposal. Once approved, we begin with a kickoff session and detailed planning.',
        },
        {
          question: 'What information do you need from us?',
          answer: 'For governance audits: documentation of your AI systems, data flows, existing governance measures, and relevant regulatory requirements. For Governance GPT access: your use case, regulatory context, and oversight requirements.',
        },
        {
          question: 'How involved does our team need to be?',
          answer: 'We work collaboratively with your team. Governance audits typically involve initial scoping sessions, periodic check-ins, and a final review. Governance GPT implementations include training and knowledge transfer to ensure your team can effectively use the tools.',
        },
        {
          question: 'Can projects be expedited?',
          answer: 'Governance audits can be prioritized for urgent compliance needs, subject to availability. Contact us to discuss your specific timeline requirements and we\'ll work to accommodate where possible.',
        },
        {
          question: 'What happens after project completion?',
          answer: 'For governance audits, we provide clarification support for the delivered documentation. For Governance GPT services, ongoing access continues per your subscription. We also offer ongoing governance support retainers for continuous advisory partnership.',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our AI governance services and Governance GPT access
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {categories.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <category.icon className="h-8 w-8 text-blue-600" />
                  <CardTitle className="text-2xl">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`item-${index}-${faqIndex}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">Still Have Questions?</CardTitle>
            <CardDescription className="text-blue-100 text-lg">
              Our team is here to help you understand how ARES can support your AI governance needs
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary">
                Contact Us
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}