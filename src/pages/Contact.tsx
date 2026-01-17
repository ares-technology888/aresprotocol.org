import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { supabase } from '@/lib/supabase';
import { sendToNotion } from '@/lib/notion';
import { toast } from 'sonner';
import SEOHead from '@/components/SEOHead';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    industry: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send to Notion (primary data storage)
      await sendToNotion({
        type: 'contact',
        ...formData
      });

      setIsSuccess(true);
      toast.success('Message sent successfully!');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        industry: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <SEOHead 
          title="Contact ARES - AI Governance Experts"
          description="Get in touch with ARES for AI governance audits, compliance consulting, and governance GPT services."
          canonical="/contact"
        />
        <Navbar />
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <Card className="text-center">
            <CardContent className="pt-12 pb-12">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Message Received!</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Thank you for contacting ARES. Our team will review your inquiry and respond within 24 hours.
              </p>
              <Button onClick={() => setIsSuccess(false)}>
                Send Another Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <SEOHead 
        title="Contact Enterprise Sales - Custom Governance GPTs | ARES"
        description="Discuss custom AI governance GPTs, regulatory-aligned evaluation tools, and sector-specific oversight solutions with ARES."
        canonical="/contact"
      />
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Enterprise Sales</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
            Discuss custom AI governance GPTs, regulatory-aligned evaluation tools, and sector-specific oversight solutions.
          </p>
          <div className="max-w-4xl mx-auto text-left">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              ARES provides custom AI governance GPTs designed to support regulated organisations with evaluation, documentation, and oversight workflows.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Our governance GPTs — including the Nephilim Governance GPT — are built to operate under defined regulatory constraints, assist human reviewers, and support compliance-aligned decision-making. These systems are not autonomous decision-makers and do not replace legal, compliance, or audit functions.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Use this form to discuss custom governance GPT deployments, sector-specific adaptations, and enterprise access models.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="hover-lift">
            <CardContent className="pt-6 text-center">
              <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-600 dark:text-gray-400">areststechnology.io@proton.me</p>
            </CardContent>
          </Card>

          <Card className="hover-lift">
            <CardContent className="pt-6 text-center">
              <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-gray-600 dark:text-gray-400">07384 726904</p>
            </CardContent>
          </Card>

          <Card className="hover-lift">
            <CardContent className="pt-6 text-center">
              <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-gray-600 dark:text-gray-400">City of London, United Kingdom</p>
            </CardContent>
          </Card>
        </div>

        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle>Request Governance Consultation</CardTitle>
            <CardDescription>
              Fill out the form below and we'll get back to you within 24 hours
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@company.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Company Name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Interest *</Label>
                  <Select
                    required
                    value={formData.service}
                    onValueChange={(value) => setFormData({ ...formData, service: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="custom-governance-gpts">Custom Governance GPTs</SelectItem>
                      <SelectItem value="nephilim-governance-gpt">Nephilim Governance GPT</SelectItem>
                      <SelectItem value="sector-specific-assistants">Sector-Specific Governance Assistants</SelectItem>
                      <SelectItem value="enterprise-tooling">Enterprise Governance Tooling (Early Access)</SelectItem>
                      <SelectItem value="general">General Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="industry">Industry</Label>
                  <Select
                    value={formData.industry}
                    onValueChange={(value) => setFormData({ ...formData, industry: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="finance">Financial Services</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="public-sector">Public Sector</SelectItem>
                      <SelectItem value="infrastructure">Critical Infrastructure</SelectItem>
                      <SelectItem value="legal">Legal</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your governance use case, regulatory context, and the type of AI system you are overseeing."
                  rows={6}
                />
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Request Governance Consultation'}
              </Button>

              <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
                ARES provides governance and evaluation support tools. All services are advisory in nature and intended to support — not replace — professional judgment and regulatory obligations.
              </p>
            </form>
          </CardContent>
        </Card>

        <div className="max-w-3xl mx-auto mt-12">
          <Card>
            <CardHeader>
              <CardTitle>What We Offer</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Custom Governance GPTs</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                  <li>Purpose-built GPTs for AI governance, risk assessment, and regulatory interpretation</li>
                  <li>Configured for specific sectors (finance, healthcare, public sector, infrastructure)</li>
                  <li>Operate under defined constraints and documented governance rules</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Nephilim Governance GPT</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                  <li>Governance-focused GPT aligned with evaluation, boundary enforcement, and oversight principles</li>
                  <li>Designed to support internal review, documentation drafting, and policy interpretation</li>
                  <li>Not an autonomous system; operates as a decision-support and governance aid</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Sector-Specific Governance Assistants</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                  <li>Custom GPTs tailored to sector-specific regulatory contexts</li>
                  <li>Examples include financial services governance, healthcare compliance support, and public-sector AI oversight</li>
                  <li>Scoped and reviewed per client requirements</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Enterprise Governance Tooling (Early Access)</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                  <li>Integration of governance GPTs into internal workflows</li>
                  <li>Human-in-the-loop configurations</li>
                  <li>Custom access controls and usage boundaries</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-3xl mx-auto mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Who This Is For</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                <li>Regulated enterprises deploying or overseeing AI systems</li>
                <li>Compliance, risk, and governance teams</li>
                <li>Legal and audit professionals supporting AI oversight</li>
                <li>Public sector and critical infrastructure organisations</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
