import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, Shield, FileCheck, Lock, BarChart3, Code } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-40 transition-colors backdrop-blur-sm bg-white/95 dark:bg-gray-900/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/images/IMG_6035_2.JPG"
                alt="ARES Logo"
                className="h-10 w-auto object-contain"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                ARES
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1">
                  Services <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64">
                <div className="px-2 py-1.5 text-xs font-semibold text-gray-500 dark:text-gray-400">AI Governance</div>
                <DropdownMenuItem asChild>
                  <Link to="/services" className="w-full cursor-pointer">
                    <div className="flex items-start gap-3 py-2">
                      <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <div className="font-semibold">AI Governance Audits</div>
                        <div className="text-xs text-gray-500">Comprehensive evaluation of AI systems</div>
                      </div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services" className="w-full cursor-pointer">
                    <div className="flex items-start gap-3 py-2">
                      <FileCheck className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <div className="font-semibold">Regulatory Compliance</div>
                        <div className="text-xs text-gray-500">Expert guidance on regulations</div>
                      </div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services" className="w-full cursor-pointer">
                    <div className="flex items-start gap-3 py-2">
                      <Lock className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <div className="font-semibold">AI Risk Assessment</div>
                        <div className="text-xs text-gray-500">Identify and mitigate risks</div>
                      </div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services" className="w-full cursor-pointer">
                    <div className="flex items-start gap-3 py-2">
                      <BarChart3 className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <div className="font-semibold">Compliance Monitoring</div>
                        <div className="text-xs text-gray-500">Ongoing oversight and documentation</div>
                      </div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <div className="px-2 py-1.5 text-xs font-semibold text-gray-500 dark:text-gray-400">AI Development</div>
                <DropdownMenuItem asChild>
                  <Link to="/ai-development" className="w-full cursor-pointer">
                    <div className="flex items-start gap-3 py-2">
                      <Code className="h-5 w-5 text-indigo-600 mt-0.5" />
                      <div>
                        <div className="font-semibold">AI Development Services</div>
                        <div className="text-xs text-gray-500">Custom AI solutions with compliance built-in</div>
                      </div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/services" className="w-full cursor-pointer font-semibold text-blue-600">
                    View All Services →
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/pricing">
              <Button variant="ghost">Pricing</Button>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1">
                  Resources <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link to="/blog" className="w-full">Blog & Insights</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/case-studies" className="w-full">Service Engagements</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/testimonials" className="w-full">Testimonials</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/faq" className="w-full">FAQ</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/about">
              <Button variant="ghost">About</Button>
            </Link>

            <Link to="/portal">
              <Button variant="ghost">Client Portal</Button>
            </Link>

            <ThemeToggle />

            <Link to="/booking">
              <Button>Book Consultation</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <div className="px-3 py-2 text-sm font-semibold text-gray-500 dark:text-gray-400">AI Governance</div>
            <Link to="/services" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full justify-start pl-6">
                <Shield className="h-4 w-4 mr-2" />
                AI Governance Audits
              </Button>
            </Link>
            <Link to="/services" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full justify-start pl-6">
                <FileCheck className="h-4 w-4 mr-2" />
                Regulatory Compliance
              </Button>
            </Link>
            <Link to="/services" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full justify-start pl-6">
                <Lock className="h-4 w-4 mr-2" />
                AI Risk Assessment
              </Button>
            </Link>
            <Link to="/services" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full justify-start pl-6">
                <BarChart3 className="h-4 w-4 mr-2" />
                Compliance Monitoring
              </Button>
            </Link>
            <div className="px-3 py-2 text-sm font-semibold text-gray-500 dark:text-gray-400">AI Development</div>
            <Link to="/ai-development" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full justify-start pl-6">
                <Code className="h-4 w-4 mr-2" />
                AI Development Services
              </Button>
            </Link>
            <Link to="/pricing" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                Pricing
              </Button>
            </Link>
            <div className="px-3 py-2 text-sm font-semibold text-gray-500 dark:text-gray-400">Resources</div>
            <Link to="/blog" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full justify-start pl-6">
                Blog & Insights
              </Button>
            </Link>
            <Link to="/case-studies" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full justify-start pl-6">
                Service Engagements
              </Button>
            </Link>
            <Link to="/testimonials" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full justify-start pl-6">
                Testimonials
              </Button>
            </Link>
            <Link to="/faq" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full justify-start pl-6">
                FAQ
              </Button>
            </Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                About
              </Button>
            </Link>
            <Link to="/portal" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                Client Portal
              </Button>
            </Link>
            <Link to="/booking" onClick={() => setIsOpen(false)}>
              <Button className="w-full mt-2">Book Consultation</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
