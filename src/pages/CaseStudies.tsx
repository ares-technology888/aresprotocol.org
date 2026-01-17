import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Users, Clock, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function CaseStudies() {
  const caseStudies = [
    {
      industry: 'Government',
      client: 'Public Sector AI Governance Service',
      challenge: 'Organizations deploying AI systems for public services often face challenges related to transparency, accountability, oversight mechanisms, and alignment with executive guidance on AI governance in government contexts.',
      solution: 'ARES provides governance readiness assessment, oversight protocol design, accountability framework development, and regulatory mapping support for public sector AI deployments.',
      results: [
        'Governance assessment report',
        'Oversight and accountability documentation',
        'Regulatory alignment analysis',
        'Audit-support documentation (non-certifying)',
      ],
      testimonial: 'This service is designed to support legal, compliance, and technical teams in preparing AI systems for regulatory scrutiny prior to deployment in public sector environments.',
      author: '',
      tags: ['AI Governance', 'Government', 'Oversight Protocols'],
    },
    {
      industry: 'Healthcare',
      client: 'Healthcare AI Governance & Compliance Readiness Service',
      challenge: 'Organizations deploying diagnostic or clinical AI systems often face challenges related to governance oversight, data protection alignment, risk classification, and preparation for regulatory review in healthcare contexts.',
      solution: 'ARES provides compliance readiness assessment, risk classification analysis, governance protocol design, human-in-the-loop framework development, and regulatory documentation support for healthcare AI systems.',
      results: [
        'Compliance readiness assessment report',
        'Risk classification documentation',
        'Governance and oversight protocols',
        'Regulatory submission support documentation',
      ],
      testimonial: 'This service is designed to support compliance, legal, and clinical teams in evaluating AI system governance controls and preparing documentation for regulatory review.',
      author: '',
      tags: ['Healthcare Compliance', 'Risk Classification', 'Governance Protocols'],
    },
    {
      industry: 'Finance',
      client: 'Financial Services AI Governance & Model Risk Service',
      challenge: 'Organizations deploying algorithmic trading, credit decisioning, or other financial AI systems often face challenges related to model governance, transparency requirements, fairness considerations, and regulatory expectations for explainability and oversight.',
      solution: 'ARES provides model governance assessment, regulatory mapping for financial AI systems, transparency and explainability review, and audit-ready documentation preparation aligned with financial sector oversight expectations.',
      results: [
        'Model governance assessment report',
        'Regulatory mapping documentation',
        'Transparency and explainability analysis',
        'Audit-support documentation (non-certifying)',
      ],
      testimonial: 'This service is designed to support risk, compliance, and legal functions in evaluating AI model governance controls and preparing for regulatory scrutiny in financial services contexts.',
      author: '',
      tags: ['Financial Services', 'Model Governance', 'Regulatory Mapping'],
    },
    {
      industry: 'Critical Infrastructure',
      client: 'Safety-Critical Infrastructure AI Governance Service',
      challenge: 'Organizations deploying AI systems in energy, transportation, or other critical infrastructure contexts often face challenges related to safety-critical risk classification, operational oversight, human-in-the-loop enforcement, and regulatory expectations for high-stakes deployments.',
      solution: 'ARES provides risk assessment for safety-critical AI deployments, oversight protocol design, human-in-the-loop framework development, and continuous monitoring documentation support for critical infrastructure contexts.',
      results: [
        'Safety-critical risk assessment report',
        'Oversight and escalation protocols',
        'Human-in-the-loop framework documentation',
        'Continuous monitoring support documentation',
      ],
      testimonial: 'This service is designed to support operations, safety, and compliance teams in evaluating AI governance controls for safety-critical deployments and preparing documentation for regulatory review.',
      author: '',
      tags: ['Critical Infrastructure', 'Safety Protocols', 'Risk Assessment'],
    },
    {
      industry: 'Technology',
      client: 'Cross-Border AI Governance & Regulatory Readiness Service',
      challenge: 'Organizations preparing AI systems for deployment in multiple jurisdictions often face challenges related to cross-border regulatory mapping, risk classification under different frameworks, and preparation for market entry in regulated environments such as the EU.',
      solution: 'ARES provides regulatory readiness assessment, risk classification analysis under multiple frameworks, compliance roadmap development, and documentation preparation to support market entry in regulated jurisdictions.',
      results: [
        'Regulatory readiness assessment report',
        'Multi-jurisdiction risk classification analysis',
        'Compliance roadmap documentation',
        'Market entry support documentation (non-certifying)',
      ],
      testimonial: 'This service is designed to support legal, compliance, and product teams in evaluating AI system governance readiness and preparing for regulatory scrutiny in cross-border deployments.',
      author: '',
      tags: ['Cross-Border Compliance', 'Regulatory Readiness', 'Risk Classification'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">AI Governance Service Engagements</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Structured governance, risk, and compliance services designed to support organizations deploying AI in regulated and high-risk environments.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <Card key={index} className="border-2 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <Badge className="mb-2">{study.industry}</Badge>
                    <CardTitle className="text-2xl mb-2">{study.client}</CardTitle>
                    <div className="flex gap-2 flex-wrap">
                      {study.tags.map((tag, idx) => (
                        <Badge key={idx} variant="outline">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Challenge */}
                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <span className="text-red-500">Challenge</span>
                  </h3>
                  <p className="text-gray-600">{study.challenge}</p>
                </div>

                {/* Solution */}
                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <span className="text-blue-500">ARES Service Scope</span>
                  </h3>
                  <p className="text-gray-600">{study.solution}</p>
                </div>

                {/* Results */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Service Outputs</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {study.results.map((result, idx) => (
                      <Card key={idx}>
                        <CardContent className="pt-6">
                          <div className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <div className="text-sm text-gray-700">{result}</div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                  <p className="text-gray-700 italic">{study.testimonial}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl mb-4">Ready to Ensure AI Compliance?</CardTitle>
            <CardDescription className="text-blue-100 text-lg">
              Contact ARES to discuss governance service engagements for your organization
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" variant="secondary">
                Request Governance Audit
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-blue-600">
                View Our Services
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}