import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Shield, FileText, CheckCircle, ArrowRight, Cpu, Lock, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { Link } from 'react-router-dom';

export default function AIDevelopment() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Governance LLM Services</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Governance LLM Services</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Purpose-built governance language models for regulated environments
          </p>
        </div>

        {/* Main Overview Card */}
        <Card className="mb-12 border-2 border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20">
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-800 rounded-lg">
                <Cpu className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1">
                <CardTitle className="text-2xl mb-2">Overview of Governance LLMs</CardTitle>
                <CardDescription className="text-base text-gray-700 dark:text-gray-300">
                  ARES provides governance-focused language models designed specifically for use in regulated and high-risk environments.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              These systems are constrained, auditable, and policy-aligned LLM interfaces built to support compliance, oversight, and decision governance across regulated sectors.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              All Governance LLMs are deployed using secure third-party infrastructure (including OpenAI-based systems) and configured with sector-specific governance logic, boundaries, escalation rules, and documentation requirements.
            </p>
          </CardContent>
        </Card>

        {/* Content Sections */}
        <div className="space-y-8 mb-16">
          {/* Governance LLM Products */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-600" />
                Governance LLM Products
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                ARES currently offers and is expanding the following governance-scoped models:
              </p>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-semibold text-lg mb-2">Nephilim GPT</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    A governance reasoning model for evaluating AI system behavior, boundary enforcement, refusal logic, and oversight controls.
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-semibold text-lg mb-2">Nephilim Governance GPT</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    A sector-adaptable governance assistant designed to support:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                      <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>AI policy interpretation</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                      <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Risk classification</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                      <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Human-in-the-loop oversight workflows</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                      <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Documentation and audit preparation</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-semibold text-lg mb-2">Sector-Specific Governance GPTs (in development)</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    Governance LLMs tailored for regulated domains including:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                      <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Financial services</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                      <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Healthcare</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                      <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Legal and compliance teams</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                      <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Public sector and government</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 dark:text-gray-300 mt-3 font-semibold">
                    These models are configured for governance use with human oversight requirements.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Design Principles */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Lock className="h-5 w-5 text-blue-600" />
                How ARES Governance LLMs Are Designed
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                All ARES Governance LLMs follow the same core principles:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Constrained system behavior</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Explicit refusal and escalation pathways</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Human-oversight-first design</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Transparent scope and limitations</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Alignment with regulatory expectations (e.g. EU AI Act, risk-based governance)</span>
                </li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 font-semibold mt-4">
                The goal is governability, accountability, and control.
              </p>
            </CardContent>
          </Card>

          {/* Infrastructure & Deployment */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <FileText className="h-5 w-5 text-blue-600" />
                Infrastructure & Deployment
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700 dark:text-gray-300">
                ARES Governance LLMs are deployed using established third-party AI infrastructure, including OpenAI-based systems, with additional governance layers applied by ARES.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                ARES focuses on:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Governance prompt architectures</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Policy and boundary enforcement</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Evaluation logic</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Oversight workflows</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Documentation outputs</span>
                </li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 font-semibold mt-4">
                This approach ensures security, scalability, and regulatory defensibility.
              </p>
            </CardContent>
          </Card>

          {/* Governance Use Cases */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-600" />
                Governance Use Cases
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                ARES Governance LLMs are used to support:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>AI governance reviews and assessments</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Policy interpretation and application</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Risk classification under regulatory frameworks</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Evaluation of AI system behavior under constraint</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Preparation of governance and audit documentation</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Support for compliance, legal, and risk teams</span>
                </li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 font-semibold mt-4">
                They are decision-support systems designed to assist human reviewers.
              </p>
            </CardContent>
          </Card>

          {/* Access & Engagement Model */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <FileText className="h-5 w-5 text-blue-600" />
                Access & Engagement Model
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Governance LLM access is provided via:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Scoped SaaS access</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Engagement-based deployments</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Sector-specific configurations</span>
                </li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mt-4 mb-3">
                Pricing is determined based on:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Regulatory context</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Sector risk level</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Governance scope</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Volume and usage constraints</span>
                </li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 font-semibold mt-4">
                Custom deployments are available for enterprise and regulated clients.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Important Disclaimer */}
        <Card className="bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-200 dark:border-amber-800 mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-amber-900 dark:text-amber-100">Important Disclaimer</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-amber-800 dark:text-amber-200 text-lg">
              ARES Governance LLMs are advisory systems designed to support governance, compliance, and oversight activities. They do not provide legal advice, make autonomous decisions, or replace human accountability. All outputs are intended to be reviewed by qualified personnel.
            </p>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0">
            <CardHeader>
              <CardTitle className="text-2xl">Explore Governance LLMs</CardTitle>
              <CardDescription className="text-blue-100">
                Learn more about our governance-focused language models
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="w-full">
                  Request Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">View All Services</CardTitle>
              <CardDescription>
                Explore our complete range of AI governance services
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/services">
                <Button size="lg" variant="outline" className="w-full">
                  View Services
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