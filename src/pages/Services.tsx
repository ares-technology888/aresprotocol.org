import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, FileCheck, Lock, BarChart3, CheckCircle, ArrowRight, Clock, Users, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Badge } from '@/components/ui/badge';

export default function Services() {
  const services = [
    {
      icon: Shield,
      title: 'AI Governance Audits',
      tagline: 'Independent evaluation of AI system governability',
      description: `AI Governance Audits provide an independent, structured review of how an AI system is governed in practice. Rather than assessing theoretical compliance or design intent, A.R.E.S examines system behaviour, boundary conditions, escalation mechanisms, and human oversight as they operate in real workflows.

These audits are designed to support internal risk, compliance, and governance functions by identifying where controls exist, where they are informal, and where they may fail under pressure. Reviews are scoped to specific systems, use cases, or decision pathways, and are conducted without involvement in system development or deployment.

Outputs are written for multidisciplinary audiences, including technical teams, legal counsel, compliance officers, and senior decision-makers. The objective is defensible insight into whether an AI system can be responsibly governed within its intended context.`,
      deliverables: [
        'Governance evaluation report',
        'Boundary and escalation analysis',
        'Oversight and accountability mapping',
        'Risk observations and limitations',
      ],
      whoItsFor: [
        'Financial services',
        'Healthcare',
        'Public sector and regulated enterprises',
        'Mid-size to large organisations',
      ],
      timeline: '2–4 weeks',
      process: 'Scoping → Evaluation → Findings → Review session',
      pricing: 'Starting from £8,000 depending on scope',
      outcomes: [
        'Clear visibility into governance gaps',
        'Defensible documentation for internal review',
        'Improved oversight clarity',
      ],
    },
    {
      icon: FileCheck,
      title: 'Regulatory Compliance Consulting',
      tagline: 'Translating regulatory expectations into operational governance',
      description: `Regulatory Compliance Consulting supports organisations in understanding how existing and emerging AI regulations apply to their specific AI use cases. This service focuses on governance interpretation and operational readiness.

Engagements typically involve mapping AI systems and workflows against regulatory expectations such as risk classification, accountability, documentation, and oversight requirements. The goal is to help internal teams understand where regulatory obligations intersect with technical system behaviour and organisational processes.

This service is particularly useful for organisations preparing for regulatory scrutiny, internal audits, or governance reviews, and is designed to complement legal and compliance counsel.`,
      deliverables: [
        'Regulatory context mapping',
        'Governance obligation summaries',
        'Gap identification (non-binding)',
        'Input for internal compliance planning',
      ],
      whoItsFor: [
        'Compliance-led teams',
        'Legal and risk functions',
        'Regulated enterprises',
      ],
      timeline: '2–3 weeks',
      process: 'Context review → Mapping → Findings',
      pricing: 'Starting from £6,000',
      outcomes: [
        'Clear regulatory interpretation',
        'Reduced ambiguity for internal teams',
        'Better-prepared governance discussions',
      ],
    },
    {
      icon: Lock,
      title: 'AI Risk Assessment & Management',
      tagline: 'Understanding where AI risk actually emerges',
      description: `AI Risk Assessment & Management focuses on identifying and articulating risks arising from AI system behaviour, governance structure, and oversight limitations. Unlike traditional model risk reviews that focus on performance metrics, this service emphasises behavioural, operational, and governance-related risk.

Assessments consider factors such as misuse potential, boundary ambiguity, escalation failure, dependency risk, and the interaction between humans and AI systems. Findings are contextual, recognising that risk varies significantly depending on use case, environment, and organisational controls.

This service supports internal risk registers, governance committees, and board-level discussions by translating technical and operational observations into structured risk language.`,
      deliverables: [
        'AI risk assessment summary',
        'Risk categorisation and narratives',
        'Mitigation considerations (non-prescriptive)',
      ],
      whoItsFor: [
        'Risk and audit teams',
        'Board governance committees',
        'Regulated organisations',
      ],
      timeline: '2–3 weeks',
      process: 'Risk scoping → Assessment → Reporting',
      pricing: 'Starting from £7,000',
      outcomes: [
        'Better-articulated AI risk posture',
        'Improved internal alignment',
        'Governance-ready risk documentation',
      ],
    },
    {
      icon: BarChart3,
      title: 'Ongoing Governance Support',
      tagline: 'Advisory support as AI governance evolves',
      description: `Ongoing Governance Support provides advisory continuity for organisations managing AI systems over time. Rather than continuous monitoring or automated enforcement, this service offers periodic review, discussion, and guidance as systems, regulations, or organisational contexts change.

Support may include follow-up evaluations, governance check-ins, or review of proposed changes to AI use. This model is intentionally lightweight and flexible, recognising that governance needs evolve and are highly context-dependent.`,
      deliverables: [
        'Periodic governance reviews',
        'Advisory sessions',
        'Updated governance notes',
      ],
      whoItsFor: [
        'Organisations with live AI systems',
        'Compliance and risk teams',
      ],
      timeline: 'Quarterly or ad hoc',
      process: 'Review → Discussion → Guidance',
      pricing: 'Retainer or per-engagement, scope-dependent',
      outcomes: [
        'Sustained governance awareness',
        'Reduced governance drift',
        'Better preparedness for review',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <Badge className="mb-4">AI Governance Services</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Independent AI Governance & Evaluation
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Structured, evidence-based assessment of AI system governance, oversight, and regulatory readiness
          </p>
        </div>

        <div className="space-y-12">
          {services.map((service, index) => (
            <Card key={index} className="border-2 hover:border-blue-200 dark:hover:border-blue-800 transition-all">
              <CardHeader>
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <service.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-3xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-lg font-medium text-blue-600 dark:text-blue-400">
                      {service.tagline}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-8">
                {/* Description */}
                <div className="prose dark:prose-invert max-w-none">
                  {service.description.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="text-gray-700 dark:text-gray-300 mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Key Deliverables */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    Key Deliverables
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {service.deliverables.map((deliverable, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Who It's For & Timeline & Pricing */}
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="bg-gray-50 dark:bg-gray-800/50">
                    <CardHeader>
                      <CardTitle className="text-base flex items-center gap-2">
                        <Users className="h-5 w-5 text-blue-600" />
                        Who It's For
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.whoItsFor.map((audience, idx) => (
                          <li key={idx} className="text-sm text-gray-600 dark:text-gray-400">• {audience}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-50 dark:bg-gray-800/50">
                    <CardHeader>
                      <CardTitle className="text-base flex items-center gap-2">
                        <Clock className="h-5 w-5 text-blue-600" />
                        Timeline & Process
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">{service.timeline}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{service.process}</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-50 dark:bg-gray-800/50">
                    <CardHeader>
                      <CardTitle className="text-base flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-blue-600" />
                        Pricing
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Engagement-based</p>
                      <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 mt-1">{service.pricing}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Success Outcomes */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                    Success Outcomes
                  </h3>
                  <div className="grid md:grid-cols-3 gap-3">
                    {service.outcomes.map((outcome, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex justify-center pt-4">
                  <Link to="/contact">
                    <Button size="lg" className="gap-2">
                      Request {service.title}
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <Card className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl mb-4">Ready for a Governance Review?</CardTitle>
            <CardDescription className="text-blue-100 text-lg">
              Engagements begin with a scoped discussion to determine governance relevance and suitability.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" variant="secondary">
                Request Governance Review
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="!bg-transparent !text-white border-white hover:!bg-white hover:!text-blue-600">
                Learn About Our Approach
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}