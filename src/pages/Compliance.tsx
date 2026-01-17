import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Shield, FileText, CheckCircle, Scale, Users, BookOpen, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { Link } from 'react-router-dom';

export default function Compliance() {
  const regulatoryContexts = [
    'EU AI Act – risk classification, governance obligations, oversight expectations',
    'GDPR – accountability, data protection, and transparency considerations',
    'HIPAA – healthcare data protection and oversight context',
    'SOC 2 – organisational controls and accountability frameworks',
    'ISO/IEC 42001 – AI management system principles',
    'Sector-specific guidance for financial services, healthcare, and public sector AI use',
  ];

  const assessmentSteps = [
    'Scoping AI systems, use cases, and decision pathways',
    'Reviewing governance structures, policies, and accountability models',
    'Evaluating system behaviour, boundary conditions, and escalation mechanisms',
    'Assessing human oversight and decision responsibility',
    'Identifying areas of ambiguity, risk, or misalignment',
  ];

  const documentationTypes = [
    'Governance and compliance assessment summaries',
    'Mapping of AI systems to regulatory expectations',
    'Identified gaps and governance considerations',
    'Clear statements of scope, limitations, and assumptions',
  ];

  const industries = [
    {
      name: 'Financial Services',
      description: 'Model risk, accountability, and decision transparency',
      icon: Scale,
    },
    {
      name: 'Healthcare',
      description: 'Patient data protection, clinical oversight, and risk management',
      icon: Shield,
    },
    {
      name: 'Public Sector',
      description: 'Accountability, fairness, and public trust obligations',
      icon: Users,
    },
    {
      name: 'Legal & Compliance Teams',
      description: 'Governance documentation and review readiness',
      icon: BookOpen,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Governance & Evaluation Context</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Compliance Features</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Supporting AI compliance through evaluation-led insight rather than automated compliance claims
          </p>
        </div>

        {/* Overview Section */}
        <Card className="mb-12 border-2 border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20">
          <CardHeader>
            <CardTitle className="text-2xl">Overview: Compliance Challenges in AI</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              AI compliance presents challenges that extend beyond traditional regulatory checklists. Modern AI systems are adaptive, probabilistic, and often embedded across multiple workflows, making accountability, traceability, and oversight difficult to demonstrate in practice.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Regulated organisations must not only understand applicable regulations, but also be able to explain how AI systems behave, how decisions are overseen, and how risks are identified and managed over time. Compliance failures often arise not from lack of policy, but from gaps between documented intent and real system behaviour.
            </p>
            <p className="text-gray-700 dark:text-gray-300 font-semibold">
              ARES focuses on these gaps by supporting governance and compliance teams with evaluation-led insight.
            </p>
          </CardContent>
        </Card>

        {/* Regulatory Context */}
        <Card className="mb-12">
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                <Scale className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="flex-1">
                <CardTitle className="text-2xl mb-2">Regulatory Context We Work Within</CardTitle>
                <CardDescription className="text-base">
                  ARES supports organisations operating under a range of AI-relevant regulatory and governance frameworks. Our work is contextual, intended to support internal compliance and risk processes.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300 font-semibold">
              Common regulatory contexts include:
            </p>
            <div className="space-y-3">
              {regulatoryContexts.map((context, index) => (
                <div key={index} className="flex items-start gap-3 p-3 border rounded-lg dark:border-gray-700">
                  <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">{context}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Compliance Assessment Process */}
        <Card className="mb-12">
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <FileText className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1">
                <CardTitle className="text-2xl mb-2">Compliance Assessment Process</CardTitle>
                <CardDescription className="text-base">
                  ARES compliance assessments are structured governance reviews designed to help organisations understand how regulatory expectations intersect with AI system behaviour and organisational controls.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300 font-semibold">
              Typical assessments involve:
            </p>
            <div className="space-y-3">
              {assessmentSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-3 p-3 border rounded-lg dark:border-gray-700">
                  <div className="w-8 h-8 bg-blue-600 dark:bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 mt-1">{step}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-700 dark:text-gray-300 italic mt-4">
              Findings are framed to support internal compliance, legal, and risk discussions.
            </p>
          </CardContent>
        </Card>

        {/* Documentation & Reporting */}
        <Card className="mb-12">
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <FileText className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <div className="flex-1">
                <CardTitle className="text-2xl mb-2">Documentation & Reporting</CardTitle>
                <CardDescription className="text-base">
                  ARES delivers written governance artefacts intended for internal use by compliance, risk, and oversight functions.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300 font-semibold">
              Documentation may include:
            </p>
            <div className="space-y-3">
              {documentationTypes.map((type, index) => (
                <div key={index} className="flex items-start gap-3 p-3 border rounded-lg dark:border-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">{type}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-700 dark:text-gray-300 italic mt-4">
              Reports are designed to be reviewable, auditable, and suitable for internal governance processes.
            </p>
          </CardContent>
        </Card>

        {/* Ongoing Governance Support */}
        <Card className="mb-12">
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                <Shield className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div className="flex-1">
                <CardTitle className="text-2xl mb-2">Ongoing Governance Support</CardTitle>
                <CardDescription className="text-base">
                  Periodic review and advisory engagement as regulations evolve, systems change, or organisational contexts shift.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              Where appropriate, we offer ongoing governance support through periodic review and advisory engagement. This may include reassessment of AI use as regulations evolve, systems change, or organisational contexts shift.
            </p>
            <p className="text-gray-700 dark:text-gray-300 font-semibold">
              This approach recognises that governance is adaptive and context-dependent.
            </p>
          </CardContent>
        </Card>

        {/* Industry-Specific Compliance */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl mb-4">Industry-Specific Compliance Considerations</CardTitle>
            <CardDescription className="text-base">
              ARES works with organisations operating in regulated and high-risk environments
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {industries.map((industry, index) => (
                <Card key={index} className="border-2 dark:border-gray-700">
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                        <industry.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{industry.name}</CardTitle>
                        <CardDescription className="text-sm mt-1">{industry.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
            <p className="text-gray-700 dark:text-gray-300 italic mt-6">
              Industry context informs how governance expectations are interpreted and applied.
            </p>
          </CardContent>
        </Card>

        {/* Compliance Outcomes & Disclosure */}
        <Card className="mb-12 border-2 border-gray-300 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-2xl">Compliance Outcomes & Disclosure</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              Our work supports internal compliance understanding and decision-making. Engagement outcomes are context-specific and typically confidential.
            </p>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0">
            <CardHeader>
              <CardTitle className="text-2xl">Need Compliance Assessment?</CardTitle>
              <CardDescription className="text-blue-100">
                Structured governance reviews to support your compliance efforts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/services">
                <Button size="lg" variant="secondary" className="w-full">
                  View Governance Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Questions About Compliance?</CardTitle>
              <CardDescription>
                Learn how we can support your compliance and governance needs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="w-full">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}