import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Compliance Officer',
      company: 'MedTech Solutions',
      industry: 'Healthcare',
      rating: 5,
      text: 'ARES helped us navigate the complex landscape of HIPAA compliance for our AI-powered diagnostic tools. The Nephilim Framework™ provided a clear roadmap, and we passed our regulatory audit on the first attempt. Their expertise saved us months of uncertainty.',
      avatar: 'SC',
    },
    {
      name: 'Michael Rodriguez',
      role: 'VP of Technology',
      company: 'SecureBank',
      industry: 'Finance',
      rating: 5,
      text: 'The governance audit identified critical gaps in our AI lending model that could have resulted in regulatory penalties. ARES not only found the issues but provided actionable solutions. We made significant progress toward meeting fair lending requirements.',
      avatar: 'MR',
    },
    {
      name: 'Jennifer Walsh',
      role: 'Director of AI Strategy',
      company: 'Global Defense Systems',
      industry: 'Defense',
      rating: 5,
      text: 'Working with ARES on our autonomous systems was a game-changer. Their team understands both the technical and regulatory requirements for defense applications. The compliance documentation they provided exceeded our expectations.',
      avatar: 'JW',
    },
    {
      name: 'David Kim',
      role: 'CTO',
      company: 'LegalTech Innovations',
      industry: 'Legal',
      rating: 5,
      text: 'ARES conducted a thorough governance audit of our contract analysis AI. They identified bias issues we hadn\'t detected and helped us implement corrective measures. Our clients now have greater confidence in our system\'s fairness.',
      avatar: 'DK',
    },
    {
      name: 'Amanda Foster',
      role: 'Head of Digital Transformation',
      company: 'City of Portland',
      industry: 'Government',
      rating: 5,
      text: 'As a government entity, we needed certainty that our AI systems met regulatory requirements. ARES provided comprehensive oversight and documentation that satisfied both internal auditors and external regulators.',
      avatar: 'AF',
    },
    {
      name: 'Robert Tanaka',
      role: 'Chief Innovation Officer',
      company: 'PowerGrid Solutions',
      industry: 'Critical Infrastructure',
      rating: 5,
      text: 'The AI governance framework ARES implemented for our smart grid systems has become the gold standard in our industry. Their expertise in critical infrastructure compliance is unmatched.',
      avatar: 'RT',
    },
    {
      name: 'Lisa Martinez',
      role: 'VP of Engineering',
      company: 'HealthAI Corp',
      industry: 'Healthcare',
      rating: 5,
      text: 'Beyond governance, ARES also built our custom LLM for medical record analysis. They delivered a high-performance system with compliance considerations that integrates seamlessly with our existing infrastructure. True end-to-end expertise.',
      avatar: 'LM',
    },
    {
      name: 'James Patterson',
      role: 'Director of Compliance',
      company: 'FinServe Global',
      industry: 'Finance',
      rating: 5,
      text: 'ARES helped us work toward SOC2 certification for our AI-powered fraud detection system. Their ongoing monitoring service helps us maintain compliance as regulations evolve. Peace of mind is priceless.',
      avatar: 'JP',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Client Testimonials</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from organizations that have achieved AI compliance and governance excellence with ARES
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">5.0</div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-sm text-gray-600">Satisfied Clients</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-sm text-gray-600">Audit Success Rate</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">6</div>
              <div className="text-sm text-gray-600">Industries Served</div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-blue-600 text-white">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                      <div className="text-sm text-gray-500">{testimonial.company}</div>
                    </div>
                  </div>
                  <Quote className="h-8 w-8 text-blue-200" />
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{testimonial.text}</p>
                <div className="mt-4 inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">
                  {testimonial.industry}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}