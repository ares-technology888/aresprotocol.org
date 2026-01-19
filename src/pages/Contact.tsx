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
      // Save to Supabase database
      const { error: dbError } = await supabase
        .from('app_57930cd727_contact_messages')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            company: formData.company,
            service: formData.service,
            industry: formData.industry,
            message: formData.message,
          },
        ]);

      if (dbError) {
        console.error('Supabase error:', dbError);
        // Continue anyway - Notion is primary
      }

      // Send to Notion (primary data storage)
      const notionResult = await sendToNotion({
        type: 'contact',
        ...formData
      });

      if (notionResult && notionResult.success === false) {
        throw new Error('Failed to send to Notion: ' + (notionResult.error || 'Unknown error'));
      }

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
              <p className="text-gray-600 dark:text-gray-400">arestechnology.io@proton.me</p>
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
                  <Label htmlFor="service">Service Interest</Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => setFormData({ ...formData, service: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="AI Governance Audit">AI Governance Audit</SelectItem>
                      <SelectItem value="Compliance Consulting">Compliance Consulting</SelectItem>
                      <SelectItem value="Governance GPT Access">Governance GPT Access</SelectItem>
                      <SelectItem value="AI Integration Services">AI Integration Services</SelectItem>
                      <SelectItem value="Intelligent Automation">Intelligent Automation</SelectItem>
                      <SelectItem value="AI Strategy Consulting">AI Strategy Consulting</SelectItem>
                      <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="industry">Industry</Label>
                  <Select
                    value={formData.industry}
                    onValueChange={(value) => setFormData({ ...formData, industry: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Financial Services">Financial Services</SelectItem>
                      <SelectItem value="Healthcare">Healthcare</SelectItem>
                      <SelectItem value="Technology">Technology</SelectItem>
                      <SelectItem value="Manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="Retail">Retail</SelectItem>
                      <SelectItem value="Government">Government</SelectItem>
                      <SelectItem value="Education">Education</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your AI governance needs..."
                    rows={6}
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
