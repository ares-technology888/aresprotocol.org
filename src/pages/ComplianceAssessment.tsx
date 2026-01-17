import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, AlertTriangle, XCircle, Download, ArrowRight, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { Link } from 'react-router-dom';

interface Question {
  id: string;
  category: string;
  question: string;
  options: {
    value: string;
    label: string;
    score: number;
  }[];
}

interface AssessmentResult {
  score: number;
  maxScore: number;
  percentage: number;
  level: 'critical' | 'needs-improvement' | 'good' | 'excellent';
  recommendations: string[];
  categoryScores: {
    [key: string]: {
      score: number;
      maxScore: number;
      percentage: number;
    };
  };
}

export default function ComplianceAssessment() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [result, setResult] = useState<AssessmentResult | null>(null);

  const questions: Question[] = [
    {
      id: 'q1',
      category: 'Data Governance',
      question: 'Does your organization have documented policies for AI data collection and usage?',
      options: [
        { value: 'comprehensive', label: 'Yes, comprehensive documented policies', score: 10 },
        { value: 'basic', label: 'Yes, but basic or incomplete', score: 5 },
        { value: 'informal', label: 'Informal policies only', score: 2 },
        { value: 'none', label: 'No formal policies', score: 0 },
      ],
    },
    {
      id: 'q2',
      category: 'Data Governance',
      question: 'How do you handle sensitive data (PII, PHI, financial) in your AI systems?',
      options: [
        { value: 'encrypted', label: 'Encrypted with access controls and audit trails', score: 10 },
        { value: 'protected', label: 'Basic protection measures in place', score: 6 },
        { value: 'minimal', label: 'Minimal protection', score: 3 },
        { value: 'unprotected', label: 'No specific protection measures', score: 0 },
      ],
    },
    {
      id: 'q3',
      category: 'Regulatory Compliance',
      question: 'Which regulations apply to your AI systems?',
      options: [
        { value: 'multiple', label: 'Multiple regulations (GDPR, HIPAA, EU AI Act, etc.)', score: 10 },
        { value: 'some', label: 'Some specific regulations', score: 7 },
        { value: 'general', label: 'General data protection laws only', score: 4 },
        { value: 'unsure', label: 'Unsure which regulations apply', score: 0 },
      ],
    },
    {
      id: 'q4',
      category: 'Regulatory Compliance',
      question: 'Do you conduct regular compliance audits for your AI systems?',
      options: [
        { value: 'quarterly', label: 'Yes, quarterly or more frequently', score: 10 },
        { value: 'annual', label: 'Yes, annually', score: 6 },
        { value: 'adhoc', label: 'Only when issues arise', score: 3 },
        { value: 'never', label: 'No regular audits', score: 0 },
      ],
    },
    {
      id: 'q5',
      category: 'AI Ethics & Bias',
      question: 'How do you test for bias in your AI models?',
      options: [
        { value: 'comprehensive', label: 'Comprehensive bias testing with diverse datasets', score: 10 },
        { value: 'basic', label: 'Basic bias testing', score: 6 },
        { value: 'manual', label: 'Manual review only', score: 3 },
        { value: 'none', label: 'No bias testing', score: 0 },
      ],
    },
    {
      id: 'q6',
      category: 'AI Ethics & Bias',
      question: 'Do you have processes to ensure AI fairness across different demographic groups?',
      options: [
        { value: 'documented', label: 'Yes, documented and regularly reviewed', score: 10 },
        { value: 'informal', label: 'Informal processes in place', score: 5 },
        { value: 'awareness', label: 'Aware but no formal processes', score: 2 },
        { value: 'none', label: 'No fairness processes', score: 0 },
      ],
    },
    {
      id: 'q7',
      category: 'Transparency & Explainability',
      question: 'Can you explain how your AI models make decisions?',
      options: [
        { value: 'full', label: 'Yes, full explainability with documentation', score: 10 },
        { value: 'partial', label: 'Partial explainability', score: 6 },
        { value: 'limited', label: 'Limited understanding', score: 3 },
        { value: 'blackbox', label: 'Black box models with no explainability', score: 0 },
      ],
    },
    {
      id: 'q8',
      category: 'Transparency & Explainability',
      question: 'Do you disclose to users when they are interacting with AI systems?',
      options: [
        { value: 'always', label: 'Always, with clear disclosure', score: 10 },
        { value: 'sometimes', label: 'Sometimes', score: 5 },
        { value: 'rarely', label: 'Rarely', score: 2 },
        { value: 'never', label: 'Never', score: 0 },
      ],
    },
    {
      id: 'q9',
      category: 'Risk Management',
      question: 'Have you conducted a risk assessment for your AI systems?',
      options: [
        { value: 'comprehensive', label: 'Yes, comprehensive risk assessment', score: 10 },
        { value: 'basic', label: 'Basic risk assessment', score: 6 },
        { value: 'informal', label: 'Informal risk review', score: 3 },
        { value: 'none', label: 'No risk assessment', score: 0 },
      ],
    },
    {
      id: 'q10',
      category: 'Risk Management',
      question: 'Do you have incident response procedures for AI system failures or issues?',
      options: [
        { value: 'documented', label: 'Yes, documented and tested procedures', score: 10 },
        { value: 'basic', label: 'Basic procedures in place', score: 6 },
        { value: 'informal', label: 'Informal response approach', score: 3 },
        { value: 'none', label: 'No incident response procedures', score: 0 },
      ],
    },
  ];

  const calculateResult = (): AssessmentResult => {
    let totalScore = 0;
    const maxScore = questions.length * 10;
    const categoryScores: { [key: string]: { score: number; maxScore: number; percentage: number } } = {};

    questions.forEach((q) => {
      const answer = answers[q.id];
      if (answer) {
        const option = q.options.find((opt) => opt.value === answer);
        if (option) {
          totalScore += option.score;

          if (!categoryScores[q.category]) {
            categoryScores[q.category] = { score: 0, maxScore: 0, percentage: 0 };
          }
          categoryScores[q.category].score += option.score;
          categoryScores[q.category].maxScore += 10;
        }
      }
    });

    Object.keys(categoryScores).forEach((category) => {
      categoryScores[category].percentage = Math.round(
        (categoryScores[category].score / categoryScores[category].maxScore) * 100
      );
    });

    const percentage = Math.round((totalScore / maxScore) * 100);

    let level: 'critical' | 'needs-improvement' | 'good' | 'excellent';
    let recommendations: string[];

    if (percentage >= 80) {
      level = 'excellent';
      recommendations = [
        'Your AI governance practices are strong. Continue regular audits to maintain compliance.',
        'Consider obtaining formal certifications (ISO 42001, SOC 2) to validate your practices.',
        'Share your governance framework as a best practice within your industry.',
        'Implement continuous monitoring to stay ahead of emerging regulations.',
      ];
    } else if (percentage >= 60) {
      level = 'good';
      recommendations = [
        'Strengthen documentation for all AI governance policies and procedures.',
        'Implement regular bias testing and fairness assessments across all models.',
        'Develop comprehensive incident response procedures for AI system failures.',
        'Consider engaging with ARES for a detailed compliance audit and roadmap.',
      ];
    } else if (percentage >= 40) {
      level = 'needs-improvement';
      recommendations = [
        'Urgently develop formal AI governance policies and data protection measures.',
        'Conduct a comprehensive risk assessment for all AI systems in production.',
        'Implement explainability mechanisms to understand AI decision-making.',
        'Engage with ARES for immediate compliance consulting and remediation planning.',
        'Establish regular audit schedules to track compliance improvements.',
      ];
    } else {
      level = 'critical';
      recommendations = [
        'CRITICAL: Your organization faces significant regulatory and ethical risks.',
        'Immediately pause high-risk AI deployments until governance frameworks are established.',
        'Engage ARES for emergency compliance assessment and risk mitigation.',
        'Develop comprehensive data governance policies before processing sensitive information.',
        'Establish AI ethics committee and formal oversight processes.',
        'Consider third-party audit to identify all compliance gaps.',
      ];
    }

    return {
      score: totalScore,
      maxScore,
      percentage,
      level,
      recommendations,
      categoryScores,
    };
  };

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      const assessmentResult = calculateResult();
      setResult(assessmentResult);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setAnswers({});
    setResult(null);
  };

  const exportResults = () => {
    if (!result) return;

    const exportData = {
      assessmentDate: new Date().toISOString(),
      overallScore: `${result.percentage}%`,
      complianceLevel: result.level,
      categoryScores: result.categoryScores,
      recommendations: result.recommendations,
      answers: questions.map((q) => ({
        category: q.category,
        question: q.question,
        answer: q.options.find((opt) => opt.value === answers[q.id])?.label || 'Not answered',
      })),
    };

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ares-compliance-assessment-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  if (result) {
    const levelConfig = {
      excellent: { color: 'text-green-600', bg: 'bg-green-100', icon: CheckCircle },
      good: { color: 'text-blue-600', bg: 'bg-blue-100', icon: CheckCircle },
      'needs-improvement': { color: 'text-yellow-600', bg: 'bg-yellow-100', icon: AlertTriangle },
      critical: { color: 'text-red-600', bg: 'bg-red-100', icon: XCircle },
    };

    const config = levelConfig[result.level];
    const LevelIcon = config.icon;

    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navbar />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Card className="border-2">
            <CardHeader className="text-center">
              <div className={`mx-auto w-20 h-20 ${config.bg} rounded-full flex items-center justify-center mb-4`}>
                <LevelIcon className={`h-10 w-10 ${config.color}`} />
              </div>
              <CardTitle className="text-3xl mb-2">Assessment Complete</CardTitle>
              <CardDescription className="text-lg">
                Your AI Governance Compliance Score
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-8">
              <div className="text-center">
                <div className="text-6xl font-bold mb-2">{result.percentage}%</div>
                <Badge className={`${config.bg} ${config.color} text-lg px-4 py-2`}>
                  {result.level.replace('-', ' ').toUpperCase()}
                </Badge>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                  Score: {result.score} out of {result.maxScore} points
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Category Breakdown</h3>
                <div className="space-y-4">
                  {Object.entries(result.categoryScores).map(([category, data]) => (
                    <div key={category}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{category}</span>
                        <span className="text-gray-600 dark:text-gray-400">{data.percentage}%</span>
                      </div>
                      <Progress value={data.percentage} className="h-2" />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Recommendations</h3>
                <div className="space-y-3">
                  {result.recommendations.map((rec, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border ${
                        rec.includes('CRITICAL') ? 'bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800' : 'bg-gray-50 border-gray-200 dark:bg-gray-800 dark:border-gray-700'
                      }`}
                    >
                      <p className="text-sm">{rec}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button onClick={exportResults} variant="outline" className="flex-1 gap-2">
                  <Download className="h-4 w-4" />
                  Export Results
                </Button>
                <Button onClick={handleRestart} variant="outline" className="flex-1">
                  Take Assessment Again
                </Button>
                <Link to="/contact" className="flex-1">
                  <Button className="w-full gap-2 bg-blue-600 hover:bg-blue-700">
                    Schedule Consultation
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <Card className="bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800">
                <CardHeader>
                  <CardTitle className="text-lg">Next Steps with ARES</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p>
                    Based on your assessment, we recommend scheduling a detailed consultation with our
                    governance experts to:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Review your specific compliance gaps in detail</li>
                    <li>Develop a customized remediation roadmap</li>
                    <li>Identify regulatory requirements for your industry</li>
                    <li>Establish ongoing monitoring and audit schedules</li>
                  </ul>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">AI Compliance Assessment</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Evaluate your organization's AI governance maturity and identify compliance gaps
          </p>
        </div>

        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
            <span>
              Question {currentStep + 1} of {questions.length}
            </span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <Card className="border-2">
          <CardHeader>
            <Badge className="w-fit mb-2">{currentQuestion.category}</Badge>
            <CardTitle className="text-2xl">{currentQuestion.question}</CardTitle>
            <CardDescription>Select the option that best describes your current practices</CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <RadioGroup
              value={answers[currentQuestion.id] || ''}
              onValueChange={(value) => handleAnswer(currentQuestion.id, value)}
            >
              <div className="space-y-3">
                {currentQuestion.options.map((option) => (
                  <div
                    key={option.value}
                    className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer"
                  >
                    <RadioGroupItem value={option.value} id={option.value} />
                    <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>

            <div className="flex justify-between pt-4">
              <Button
                onClick={handlePrevious}
                variant="outline"
                disabled={currentStep === 0}
                className="gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Previous
              </Button>

              <Button
                onClick={handleNext}
                disabled={!answers[currentQuestion.id]}
                className="gap-2 bg-blue-600 hover:bg-blue-700"
              >
                {currentStep === questions.length - 1 ? 'View Results' : 'Next'}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800">
          <CardContent className="pt-6">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Note:</strong> This assessment provides a preliminary evaluation of your AI governance
              maturity. For a comprehensive audit and detailed compliance roadmap, schedule a consultation
              with our experts.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}