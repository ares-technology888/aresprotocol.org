import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight, Download } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: 'UK Government: AI Regulation - A Pro-Innovation Approach',
      excerpt: 'UK Government white paper outlining principles for responsible AI governance, emphasizing accountability, transparency, safety and the need for structured organizational governance practices.',
      category: 'Governance Infrastructure',
      date: '2024-12-15',
      readTime: '9 min read',
      downloadable: false,
      link: 'https://www.gov.uk/government/publications/ai-regulation-a-pro-innovation-approach',
    },
    {
      id: 2,
      title: 'NIST AI Risk Management Framework (Full PDF)',
      excerpt: 'Complete NIST AI RMF 1.0 document framing AI governance as continuous lifecycle infrastructure integrated into enterprise risk and oversight systems.',
      category: 'Governance Infrastructure',
      date: '2024-12-10',
      readTime: '12 min read',
      downloadable: true,
      link: 'https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf',
    },
    {
      id: 3,
      title: 'EU AI Act: High-Risk AI Systems Overview',
      excerpt: 'Official guidance on high-risk AI system classification, obligations, and conformity assessment requirements under the EU AI Act.',
      category: 'Regulatory Reference',
      date: '2024-12-01',
      readTime: '8 min read',
      downloadable: false,
      link: 'https://artificialintelligenceact.eu/high-risk-ai-systems/',
    },
    {
      id: 4,
      title: 'NIST AI Risk Management Framework (Overview)',
      excerpt: 'US NIST framework for managing risks associated with AI systems, providing structured guidance for governance and oversight.',
      category: 'Regulatory Reference',
      date: '2024-11-28',
      readTime: '10 min read',
      downloadable: false,
      link: 'https://www.nist.gov/itl/ai-risk-management-framework',
    },
    {
      id: 5,
      title: 'WHO: Ethics & Governance of AI for Health',
      excerpt: 'World Health Organization guidance on ethical principles and governance considerations for AI systems in healthcare contexts.',
      category: 'Healthcare AI Governance',
      date: '2024-11-25',
      readTime: '12 min read',
      downloadable: false,
      link: 'https://www.who.int/publications/i/item/9789240029200',
    },
    {
      id: 6,
      title: 'FDA: AI/ML-Based Software as a Medical Device',
      excerpt: 'US FDA regulatory approach to AI and machine learning-based software as medical devices, including oversight expectations.',
      category: 'Healthcare AI Governance',
      date: '2024-11-20',
      readTime: '15 min read',
      downloadable: false,
      link: 'https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-and-machine-learning-software-medical-device',
    },
    {
      id: 7,
      title: 'EBA: Machine Learning & AI in Financial Services',
      excerpt: 'European Banking Authority discussion on machine learning and AI applications in financial services, including risk considerations.',
      category: 'Financial Services AI Risk',
      date: '2024-11-15',
      readTime: '10 min read',
      downloadable: false,
      link: 'https://www.eba.europa.eu/regulation-and-policy/fintech/machine-learning-and-artificial-intelligence',
    },
    {
      id: 8,
      title: 'BIS/BCBS: Model Risk Management Principles',
      excerpt: 'Basel Committee principles for sound management of model risk, applicable to AI and machine learning models in banking.',
      category: 'Financial Services AI Risk',
      date: '2024-11-10',
      readTime: '14 min read',
      downloadable: false,
      link: 'https://www.bis.org/bcbs/publ/d431.htm',
    },
    {
      id: 9,
      title: 'EU AI Act: SME Guide',
      excerpt: 'Small business guide to understanding EU AI Act requirements, obligations, and compliance pathways for smaller organizations.',
      category: 'Regulatory Reference',
      date: '2024-11-05',
      readTime: '18 min read',
      downloadable: false,
      link: 'https://artificialintelligenceact.eu/small-businesses-guide-to-the-ai-act/',
    },
    {
      id: 10,
      title: 'European Commission: AI Regulatory Framework',
      excerpt: 'Overview of the European Commission regulatory approach to AI, including enforcement context and policy objectives.',
      category: 'Regulatory Reference',
      date: '2024-11-01',
      readTime: '11 min read',
      downloadable: false,
      link: 'https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai',
    },
  ];

  const categories = ['All', 'Governance Infrastructure', 'Regulatory Reference', 'Healthcare AI Governance', 'Financial Services AI Risk'];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Resources & Insights</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Regulatory references and governance guidance for AI systems in regulated environments
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={category === 'All' ? 'default' : 'outline'}
              className="cursor-pointer hover:bg-blue-600 hover:text-white transition-colors"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Featured Post */}
        <Card className="mb-12 border-2 border-blue-200 hover:shadow-xl transition-shadow">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-12 flex items-center justify-center">
              <div className="text-white text-center">
                <Badge className="mb-4 bg-white text-blue-600">Featured</Badge>
                <h2 className="text-3xl font-bold mb-4">UK AI Governance</h2>
                <p className="text-blue-100">Pro-innovation approach to AI regulation and governance frameworks</p>
              </div>
            </div>
            <CardContent className="py-8">
              <Badge className="mb-4">{posts[0].category}</Badge>
              <h3 className="text-2xl font-bold mb-4">{posts[0].title}</h3>
              <p className="text-gray-600 mb-6">{posts[0].excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {posts[0].date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {posts[0].readTime}
                </div>
              </div>
              <div className="flex gap-3">
                <a href={posts[0].link} target="_blank" rel="noopener noreferrer">
                  <Button>
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </CardContent>
          </div>
        </Card>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(1).map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow flex flex-col">
              <CardHeader>
                <Badge className="w-fit mb-2">{post.category}</Badge>
                <CardTitle className="text-xl">{post.title}</CardTitle>
                <CardDescription>{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>
                <div className="flex gap-2">
                  <a href={post.link} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="outline" size="sm" className="w-full">
                      Read More
                    </Button>
                  </a>
                  {post.downloadable && (
                    <Button variant="ghost" size="sm" asChild>
                      <a href={post.link} target="_blank" rel="noopener noreferrer">
                        <Download className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter CTA */}
        <Card className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0">
          <CardContent className="py-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for regulatory updates and governance guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900"
              />
              <Button size="lg" variant="secondary">
                Subscribe
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}