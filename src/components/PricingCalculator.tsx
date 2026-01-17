import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Calculator, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PricingCalculator() {
  const [serviceType, setServiceType] = useState('governance');
  const [projectSize, setProjectSize] = useState([2]);
  const [complexity, setComplexity] = useState('medium');
  const [timeline, setTimeline] = useState('standard');

  const calculatePrice = () => {
    let basePrice = 0;

    // Base price by service type
    if (serviceType === 'governance') basePrice = 50000;
    else if (serviceType === 'development') basePrice = 75000;
    else if (serviceType === 'integration') basePrice = 40000;
    else if (serviceType === 'automation') basePrice = 35000;

    // Project size multiplier
    const sizeMultiplier = projectSize[0];
    basePrice *= sizeMultiplier;

    // Complexity adjustment
    if (complexity === 'low') basePrice *= 0.8;
    else if (complexity === 'high') basePrice *= 1.3;

    // Timeline adjustment
    if (timeline === 'expedited') basePrice *= 1.5;

    return Math.round(basePrice / 1000) * 1000;
  };

  const estimatedPrice = calculatePrice();
  const monthlyRetainer = Math.round(estimatedPrice * 0.15 / 1000) * 1000;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Calculator className="h-6 w-6 text-blue-600" />
          <CardTitle>Project Cost Calculator</CardTitle>
        </div>
        <CardDescription>
          Get an estimated cost for your AI governance or development project
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label>Service Type</Label>
          <Select value={serviceType} onValueChange={setServiceType}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="governance">AI Governance Audit</SelectItem>
              <SelectItem value="development">Custom LLM Development</SelectItem>
              <SelectItem value="integration">AI Integration Services</SelectItem>
              <SelectItem value="automation">Intelligent Automation</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Project Size (AI Systems)</Label>
          <div className="flex items-center gap-4">
            <Slider
              value={projectSize}
              onValueChange={setProjectSize}
              min={1}
              max={5}
              step={1}
              className="flex-1"
            />
            <span className="font-semibold w-8">{projectSize[0]}</span>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Complexity Level</Label>
          <Select value={complexity} onValueChange={setComplexity}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">Low - Basic systems</SelectItem>
              <SelectItem value="medium">Medium - Standard requirements</SelectItem>
              <SelectItem value="high">High - Complex, multi-regulatory</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Timeline</Label>
          <Select value={timeline} onValueChange={setTimeline}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="standard">Standard (8-12 weeks)</SelectItem>
              <SelectItem value="expedited">Expedited (4-6 weeks)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="pt-6 border-t space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold">Estimated Project Cost:</span>
            <span className="text-3xl font-bold text-blue-600">
              ${estimatedPrice.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600">Or monthly retainer:</span>
            <span className="text-xl font-semibold">
              ${monthlyRetainer.toLocaleString()}/mo
            </span>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg text-sm text-gray-700">
          <p className="mb-2">This is an estimate based on typical projects. Actual pricing may vary based on:</p>
          <ul className="list-disc list-inside space-y-1 text-xs">
            <li>Specific regulatory requirements</li>
            <li>Existing documentation and systems</li>
            <li>Team availability and involvement</li>
            <li>Additional services or support needs</li>
          </ul>
        </div>

        <Link to="/contact">
          <Button className="w-full" size="lg">
            Get Accurate Quote
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}