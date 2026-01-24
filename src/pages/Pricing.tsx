import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, X, Zap, Building2, Rocket, Shield } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { sendToNotion } from '@/lib/notion';
import { toast } from 'sonner';

export default function Pricing() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    plan: '',
    usage: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const notionResult = await sendToNotion({
        type: 'pricing',
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        company: formData.company,
        message: `Plan Interest: ${formData.plan}\nExpected Usage: ${formData.usage}\n\n${formData.message}`,
      });

      if (notionResult && notionResult.success === false) {
        throw new Error('Failed to send to Notion: ' + (notionResult.error || 'Unknown error'));
      }

      setIsSuccess(true);
      toast.success('Inquiry submitted successfully! We\'ll be in touch soon.');

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        plan: '',
        usage: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting pricing inquiry:', error);
      toast.error('Failed to submit inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToContactForm = () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const plans = [
    {
      name: 'Starter',
      icon: Zap,
      price: '£175',
      period: '/month',
      description: 'For initial governance exploration, internal testing, and non-production evaluation of governance-scoped AI systems.',
      features: [
        '30-day free trial',
        '1,000 governance-scoped LLM interactions/month',
        'All compliance checks',
        'Basic analytics',
        'Email support',
        'Community access',
      ],
      limitations: [
        'Limited to 10 evaluations/minute',
        'No custom policies',
        'No SLA guarantee',
      ],
      cta: 'Start 30-Day Free Trial',
      highlighted: false,
      trialNote: 'Then £175/month after trial',
      onClick: scrollToContactForm,
    },
    {
      name: 'Pro',
      icon: Rocket,
      price: '£350-£1,250',
      period: '/month',
      description: 'For teams operating governed AI systems requiring documented oversight, policy enforcement, and evaluation workflows.',
      features: [
        'Governance-scoped LLM usage',
        'Structured readiness outputs',
        'AI Act / GDPR / NIST RMF mapping support',
        'Audit-safe drafting',
        'Advanced analytics & reporting',
        'Priority email & chat support',
        'Custom moderation policies',
        'Team collaboration (up to 5 users)',
      ],
      limitations: [],
      cta: 'Start Free Trial',
      highlighted: true,
      annualEquivalent: '£4,000 - £15,000/year',
      onClick: scrollToContactForm,
    },
    {
      name: 'Enterprise',
      icon: Building2,
      price: 'Custom',
      period: '',
      description: 'For regulated organizations requiring bespoke governance controls, custom GPT instances, and oversight integration.',
      features: [
        'Unlimited governance-scoped LLM interactions',
        'Full audit artefact generation',
        'Custom compliance rules & enterprise reporting',
        'Dedicated account manager',
        'Phone & video support',
        'Custom integrations',
        'On-premise/private cloud deployment',
        'Advanced security features',
        'Custom SLA',
        'Unlimited team members',
      ],
      limitations: [],
      cta: 'Contact Sales',
      highlighted: false,
      annualEquivalent: '£100,000 - £400,000+/year',
      onClick: scrollToContactForm,
    },
  ];

  const comparisonFeatures = [
    { name: 'Governance-scoped LLM interactions', free: '1,000/mo', pro: 'High-volume', enterprise: 'Unlimited' },
    { name: 'Governance evaluation throughput limits', free: '10/min', pro: '100/min', enterprise: 'Custom' },
    { name: 'Data handling and prompt-flow privacy review', free: true, pro: true, enterprise: true },
    { name: 'Policy-based boundary enforcement and refusal evaluation', free: true, pro: true, enterprise: true },
    { name: 'Regulatory context alignment and documentation support', free: true, pro: true, enterprise: true },
    { name: 'Secure prompt architecture and access control', free: true, pro: true, enterprise: true },
    { name: 'Custom governance policies', free: false, pro: true, enterprise: true },
    { name: 'Governance visibility dashboard', free: 'Basic', pro: 'Advanced', enterprise: 'Custom' },
    { name: 'Support', free: 'Email', pro: 'Email & Chat', enterprise: 'Dedicated' },
    { name: 'Service availability SLA', free: false, pro: '99.9%', enterprise: 'Custom' },
    { name: 'Authorized governance reviewers and users', free: '1', pro: '5', enterprise: 'Unlimited' },
    { name: 'Governance event notifications', free: false, pro: true, enterprise: true },
    { name: 'Isolated governance layer deployments', free: false, pro: false, enterprise: true },
  ];

  const faqs = [
    {
      question: 'What counts as a governance-scoped LLM interaction?',
      answer: 'Each policy-enforced prompt or evaluation request to our governance LLM services counts as one interaction, regardless of the number of compliance checks performed.',
    },
    {
      question: 'Can I upgrade or downgrade my plan?',
      answer: 'Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades take effect at the start of your next billing cycle.',
    },
    {
      question: 'What happens if I exceed my interaction limit?',
      answer: 'On the Starter plan, requests will be rate-limited once you reach your monthly limit. Pro and Enterprise plans have overage protection and will continue to work with additional charges.',
    },
    {
      question: 'Do you offer annual billing?',
      answer: 'Yes, annual billing is available for Pro and Enterprise plans with a 20% discount. Contact our sales team for details.',
    },
    {
      question: 'Is there a free trial for the Pro plan?',
      answer: 'Yes, we offer a 14-day free trial of the Pro plan with full access to all features. No credit card required.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express) and can arrange invoice billing for Enterprise customers.',
    },
  ];

  // Success state for form
  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <Card className="text-center">
            <CardContent className="pt-12 pb-12">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Inquiry Received!</h2>
              <p className="text-gray-600 mb-8">
                Thank you for your interest in ARES. Our team will review your inquiry and contact you within 24 hours.
              </p>
              <Button onClick={() => setIsSuccess(false)}>
                Submit Another Inquiry
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent Access Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the access level that fits your governance and oversight needs. All plans provide governed access to ARES evaluation and policy-enforced LLM services.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${plan.highlighted ? 'border-blue-500 border-2 shadow-xl' : ''}`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-500 text-white px-4 py-1">Most Popular</Badge>
                </div>
              )}

              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-lg ${plan.highlighted ? 'bg-blue-100' : 'bg-gray-100'}`}>
                    <plan.icon className={`h-6 w-6 ${plan.highlighted ? 'text-blue-600' : 'text-gray-600'}`} />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  </div>
                </div>
                <div className="mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                {plan.trialNote && (
                  <div className="text-sm text-blue-600 font-medium mb-2">
                    {plan.trialNote}
                  </div>
                )}
                {plan.annualEquivalent && (
                  <div className="text-sm text-gray-500 mb-4">
                    ({plan.annualEquivalent})
                  </div>
                )}
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <Button
                  className={`w-full ${plan.highlighted ? '' : 'variant-outline'}`}
                  size="lg"
                  onClick={plan.onClick}
                >
                  {plan.cta}
                </Button>

                <div className="space-y-3">
                  <p className="font-semibold text-sm">What's included:</p>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}

                  {plan.limitations.length > 0 && (
                    <>
                      <p className="font-semibold text-sm mt-4">Limitations:</p>
                      {plan.limitations.map((limitation, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <X className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-600">{limitation}</span>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Value Proposition Section */}
        <div className="mb-20">
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Shield className="h-8 w-8 text-blue-600" />
                <CardTitle className="text-2xl">Why Governance GPTs Are Valuable When Deployed</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Governance GPTs aren't just AI tools—they're specialized governance infrastructure designed for regulated environments where compliance, accountability, and transparency are non-negotiable.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg text-blue-900">Targeted Governance Workflows</h3>
                  <p className="text-sm text-gray-700">
                    Unlike generic LLMs, Governance GPTs are purpose-built for AI governance readiness, regulatory mapping, evidence generation, and audit preparation—delivering professional artifacts that meet institutional standards.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-lg text-blue-900">Market-Aligned Value</h3>
                  <p className="text-sm text-gray-700">
                    Enterprise GRC platforms often exceed £100,000+ annually. Our pricing reflects the specialized nature of AI governance tooling while remaining accessible to teams at different scales.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-lg text-blue-900">Beyond Access—Deliverables</h3>
                  <p className="text-sm text-gray-700">
                    You're not just paying for LLM interactions—you're investing in governance artefact packages, readiness review reports, AI Act mapping modules, and ongoing assurance monitoring.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-lg text-blue-900">Regulated Sector Focus</h3>
                  <p className="text-sm text-gray-700">
                    Built specifically for finance, healthcare, public sector, defense, and critical infrastructure—where governance budgets are real and audit readiness is essential.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Feature Comparison Table */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Feature Comparison</h2>
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left p-4 font-semibold">Feature</th>
                      <th className="text-center p-4 font-semibold">Starter</th>
                      <th className="text-center p-4 font-semibold">Pro</th>
                      <th className="text-center p-4 font-semibold">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((feature, index) => (
                      <tr key={index} className="border-t">
                        <td className="p-4 font-medium">{feature.name}</td>
                        <td className="p-4 text-center">
                          {typeof feature.free === 'boolean' ? (
                            feature.free ? (
                              <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                            ) : (
                              <X className="h-5 w-5 text-gray-400 mx-auto" />
                            )
                          ) : (
                            <span className="text-sm">{feature.free}</span>
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {typeof feature.pro === 'boolean' ? (
                            feature.pro ? (
                              <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                            ) : (
                              <X className="h-5 w-5 text-gray-400 mx-auto" />
                            )
                          ) : (
                            <span className="text-sm">{feature.pro}</span>
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {typeof feature.enterprise === 'boolean' ? (
                            feature.enterprise ? (
                              <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                            ) : (
                              <X className="h-5 w-5 text-gray-400 mx-auto" />
                            )
                          ) : (
                            <span className="text-sm">{feature.enterprise}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Important Clarification */}
        <div className="mb-20">
          <Card className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800">
            <CardHeader>
              <CardTitle className="text-xl">Important Clarification</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                ARES pricing reflects access to governance-scoped LLM services, evaluation tooling, and policy-enforced GPT instances. All services are advisory, evaluative, and subject to human oversight.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div id="contact-form" className="mb-20 scroll-mt-8">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Get Started or Contact Sales</CardTitle>
              <CardDescription className="text-center">
                Fill out the form below to start your free trial or discuss custom requirements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">First Name *</label>
                    <Input
                      placeholder="John"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Last Name *</label>
                    <Input
                      placeholder="Doe"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Work Email *</label>
                  <Input
                    type="email"
                    placeholder="john.doe@company.com"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Company Name</label>
                  <Input
                    placeholder="Acme Inc."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Plan Interest</label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.plan}
                    onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                  >
                    <option value="">Select a plan</option>
                    <option value="Starter - £175/month (30-day free trial)">Starter - £175/month (30-day free trial)</option>
                    <option value="Pro - £350-£1,250/month">Pro - £350-£1,250/month</option>
                    <option value="Enterprise - Custom pricing">Enterprise - Custom pricing</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Expected Monthly Usage</label>
                  <Input
                    placeholder="e.g., 100,000 governance evaluations"
                    value={formData.usage}
                    onChange={(e) => setFormData({ ...formData, usage: e.target.value })}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea
                    placeholder="Tell us about your governance requirements and use case..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
