import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, 
  Users, 
  Calendar as CalendarIcon, 
  FileText, 
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Download
} from 'lucide-react';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { format } from 'date-fns';

export default function Analytics() {
  const [dateRange, setDateRange] = useState<'7d' | '30d' | '90d' | 'custom'>('30d');
  const [serviceFilter, setServiceFilter] = useState<string>('all');
  const [dateFrom, setDateFrom] = useState<Date>();
  const [dateTo, setDateTo] = useState<Date>();

  // Consultation Bookings Trends Data
  const bookingsTrendsData = [
    { date: 'Week 1', bookings: 12, confirmed: 10, cancelled: 2, revenue: 24000 },
    { date: 'Week 2', bookings: 18, confirmed: 16, cancelled: 2, revenue: 36000 },
    { date: 'Week 3', bookings: 15, confirmed: 13, cancelled: 2, revenue: 30000 },
    { date: 'Week 4', bookings: 22, confirmed: 20, cancelled: 2, revenue: 44000 },
    { date: 'Week 5', bookings: 25, confirmed: 22, cancelled: 3, revenue: 50000 },
    { date: 'Week 6', bookings: 28, confirmed: 25, cancelled: 3, revenue: 56000 },
    { date: 'Week 7', bookings: 32, confirmed: 29, cancelled: 3, revenue: 64000 },
    { date: 'Week 8', bookings: 30, confirmed: 27, cancelled: 3, revenue: 60000 },
  ];

  // Page Visit Analytics Data
  const pageVisitData = [
    { page: 'Homepage', visits: 8500, uniqueVisitors: 6200, avgDuration: '2:45', bounceRate: 35 },
    { page: 'Services', visits: 5200, uniqueVisitors: 4100, avgDuration: '3:20', bounceRate: 28 },
    { page: 'AI Development', visits: 4800, uniqueVisitors: 3900, avgDuration: '4:15', bounceRate: 22 },
    { page: 'Compliance', visits: 3600, uniqueVisitors: 2800, avgDuration: '5:30', bounceRate: 18 },
    { page: 'Case Studies', visits: 3200, uniqueVisitors: 2600, avgDuration: '6:10', bounceRate: 15 },
    { page: 'Pricing', visits: 4500, uniqueVisitors: 3500, avgDuration: '2:30', bounceRate: 32 },
    { page: 'Contact', visits: 2800, uniqueVisitors: 2400, avgDuration: '1:50', bounceRate: 25 },
    { page: 'Blog', visits: 2100, uniqueVisitors: 1800, avgDuration: '4:45', bounceRate: 20 },
  ];

  // Service Inquiry Types Data
  const serviceInquiryData = [
    { service: 'AI Governance Audit', inquiries: 145, conversions: 42, conversionRate: 29 },
    { service: 'Compliance Consulting', inquiries: 128, conversions: 38, conversionRate: 30 },
    { service: 'Risk Assessment', inquiries: 98, conversions: 28, conversionRate: 29 },
    { service: 'Governance GPT Access', inquiries: 87, conversions: 22, conversionRate: 25 },
    { service: 'Regulatory Audits', inquiries: 76, conversions: 21, conversionRate: 28 },
    { service: 'Training & Workshops', inquiries: 64, conversions: 18, conversionRate: 28 },
  ];

  // Service Distribution Pie Chart Data
  const serviceDistributionData = [
    { name: 'AI Governance Audit', value: 145, color: '#3b82f6' },
    { name: 'Compliance Consulting', value: 128, color: '#10b981' },
    { name: 'Risk Assessment', value: 98, color: '#f59e0b' },
    { name: 'Governance GPT Access', value: 87, color: '#8b5cf6' },
    { name: 'Regulatory Audits', value: 76, color: '#ef4444' },
    { name: 'Training & Workshops', value: 64, color: '#06b6d4' },
  ];

  // Client Portal Usage Metrics
  const portalUsageData = [
    { date: 'Jan 1', logins: 45, documentDownloads: 128, projectViews: 89, avgSessionTime: 12 },
    { date: 'Jan 2', logins: 52, documentDownloads: 145, projectViews: 98, avgSessionTime: 14 },
    { date: 'Jan 3', logins: 48, documentDownloads: 132, projectViews: 92, avgSessionTime: 13 },
    { date: 'Jan 4', logins: 58, documentDownloads: 168, projectViews: 112, avgSessionTime: 15 },
    { date: 'Jan 5', logins: 62, documentDownloads: 178, projectViews: 125, avgSessionTime: 16 },
    { date: 'Jan 6', logins: 55, documentDownloads: 156, projectViews: 108, avgSessionTime: 14 },
    { date: 'Jan 7', logins: 68, documentDownloads: 198, projectViews: 142, avgSessionTime: 18 },
  ];

  // Traffic Sources Data
  const trafficSourcesData = [
    { source: 'Organic Search', visitors: 12500, percentage: 42 },
    { source: 'Direct', visitors: 8200, percentage: 28 },
    { source: 'Referral', visitors: 4800, percentage: 16 },
    { source: 'Social Media', visitors: 2900, percentage: 10 },
    { source: 'Email Campaign', visitors: 1200, percentage: 4 },
  ];

  // User Engagement Metrics
  const engagementMetricsData = [
    { metric: 'Avg. Session Duration', value: '4:32', change: 12, trend: 'up' },
    { metric: 'Pages per Session', value: '5.8', change: 8, trend: 'up' },
    { metric: 'Bounce Rate', value: '24.5%', change: -5, trend: 'down' },
    { metric: 'Return Visitor Rate', value: '38.2%', change: 15, trend: 'up' },
  ];

  const handleExportData = () => {
    // Implement export functionality
    console.log('Exporting analytics data...');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold mb-2">Analytics Dashboard</h1>
              <p className="text-gray-600 dark:text-gray-400">
                Track platform performance and client engagement metrics
              </p>
            </div>
            <Button onClick={handleExportData}>
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Filters Section */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex flex-wrap gap-4">
              <div className="flex-1 min-w-[200px]">
                <label className="text-sm font-medium mb-2 block">Date Range</label>
                <Select value={dateRange} onValueChange={(value: '7d' | '30d' | '90d' | 'custom') => setDateRange(value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7d">Last 7 Days</SelectItem>
                    <SelectItem value="30d">Last 30 Days</SelectItem>
                    <SelectItem value="90d">Last 90 Days</SelectItem>
                    <SelectItem value="custom">Custom Range</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {dateRange === 'custom' && (
                <>
                  <div className="flex-1 min-w-[200px]">
                    <label className="text-sm font-medium mb-2 block">From Date</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {dateFrom ? format(dateFrom, 'PPP') : 'Pick a date'}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={dateFrom} onSelect={setDateFrom} />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="flex-1 min-w-[200px]">
                    <label className="text-sm font-medium mb-2 block">To Date</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {dateTo ? format(dateTo, 'PPP') : 'Pick a date'}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={dateTo} onSelect={setDateTo} />
                      </PopoverContent>
                    </Popover>
                  </div>
                </>
              )}

              <div className="flex-1 min-w-[200px]">
                <label className="text-sm font-medium mb-2 block">Service Type</label>
                <Select value={serviceFilter} onValueChange={setServiceFilter}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Services</SelectItem>
                    <SelectItem value="governance">AI Governance Audit</SelectItem>
                    <SelectItem value="compliance">Compliance Consulting</SelectItem>
                    <SelectItem value="risk">Risk Assessment</SelectItem>
                    <SelectItem value="llm">Governance GPT Access</SelectItem>
                    <SelectItem value="regulatory">Regulatory Audits</SelectItem>
                    <SelectItem value="training">Training & Workshops</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Metrics Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
              <CalendarIcon className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">182</div>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                +23% from last period
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Inquiries</CardTitle>
              <FileText className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">598</div>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                +18% from last period
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Active Users</CardTitle>
              <Users className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,247</div>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                +32% from last period
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
              <Activity className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">28.4%</div>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                +5.2% from last period
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="bookings" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="bookings">Bookings</TabsTrigger>
            <TabsTrigger value="traffic">Traffic</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="portal">Client Portal</TabsTrigger>
          </TabsList>

          {/* Bookings Tab */}
          <TabsContent value="bookings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Consultation Bookings Trends</CardTitle>
                <CardDescription>Booking volume and confirmation rates over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <AreaChart data={bookingsTrendsData}>
                    <defs>
                      <linearGradient id="colorBookings" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorConfirmed" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area 
                      type="monotone" 
                      dataKey="bookings" 
                      stroke="#3b82f6" 
                      fillOpacity={1} 
                      fill="url(#colorBookings)" 
                      name="Total Bookings"
                    />
                    <Area 
                      type="monotone" 
                      dataKey="confirmed" 
                      stroke="#10b981" 
                      fillOpacity={1} 
                      fill="url(#colorConfirmed)" 
                      name="Confirmed"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Revenue Trends</CardTitle>
                <CardDescription>Booking revenue over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={bookingsTrendsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="revenue" 
                      stroke="#8b5cf6" 
                      strokeWidth={3}
                      name="Revenue ($)"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Traffic Tab */}
          <TabsContent value="traffic" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Page Visit Analytics</CardTitle>
                <CardDescription>Traffic distribution across platform pages</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={pageVisitData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="page" type="category" width={120} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="visits" fill="#3b82f6" name="Total Visits" />
                    <Bar dataKey="uniqueVisitors" fill="#10b981" name="Unique Visitors" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Traffic Sources</CardTitle>
                  <CardDescription>Visitor acquisition channels</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {trafficSourcesData.map((source, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">{source.source}</span>
                          <span className="text-gray-600">{source.visitors.toLocaleString()} ({source.percentage}%)</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{ width: `${source.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>User Engagement Metrics</CardTitle>
                  <CardDescription>Key engagement indicators</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {engagementMetricsData.map((metric, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <div className="text-sm text-gray-600">{metric.metric}</div>
                          <div className="text-2xl font-bold">{metric.value}</div>
                        </div>
                        <Badge variant={metric.trend === 'up' ? 'default' : 'secondary'}>
                          {metric.trend === 'up' ? (
                            <ArrowUpRight className="h-3 w-3 mr-1" />
                          ) : (
                            <ArrowDownRight className="h-3 w-3 mr-1" />
                          )}
                          {Math.abs(metric.change)}%
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Services Tab */}
          <TabsContent value="services" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Service Inquiry Distribution</CardTitle>
                  <CardDescription>Breakdown of service requests</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={serviceDistributionData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {serviceDistributionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Service Conversion Rates</CardTitle>
                  <CardDescription>Inquiry to booking conversion by service</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={serviceInquiryData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="service" angle={-45} textAnchor="end" height={100} />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="conversionRate" fill="#10b981" name="Conversion Rate (%)" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Service Performance Details</CardTitle>
                <CardDescription>Detailed breakdown of inquiries and conversions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {serviceInquiryData.map((service, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold">{service.service}</h4>
                        <Badge>{service.conversionRate}% conversion</Badge>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <div className="text-gray-600">Inquiries</div>
                          <div className="text-xl font-bold">{service.inquiries}</div>
                        </div>
                        <div>
                          <div className="text-gray-600">Conversions</div>
                          <div className="text-xl font-bold text-green-600">{service.conversions}</div>
                        </div>
                        <div>
                          <div className="text-gray-600">Pending</div>
                          <div className="text-xl font-bold text-orange-600">
                            {service.inquiries - service.conversions}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Client Portal Tab */}
          <TabsContent value="portal" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Client Portal Usage Metrics</CardTitle>
                <CardDescription>Daily activity and engagement in the client portal</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <LineChart data={portalUsageData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="logins" 
                      stroke="#3b82f6" 
                      strokeWidth={2}
                      name="User Logins"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="documentDownloads" 
                      stroke="#10b981" 
                      strokeWidth={2}
                      name="Document Downloads"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="projectViews" 
                      stroke="#f59e0b" 
                      strokeWidth={2}
                      name="Project Views"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Average Session Time</CardTitle>
                  <CardDescription>Time spent per portal session</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={portalUsageData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip formatter={(value) => `${value} minutes`} />
                      <Bar dataKey="avgSessionTime" fill="#8b5cf6" name="Avg. Session (min)" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Portal Activity Summary</CardTitle>
                  <CardDescription>Last 7 days overview</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Total Logins</span>
                      <span className="text-2xl font-bold">388</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Document Downloads</span>
                      <span className="text-2xl font-bold">1,105</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Project Views</span>
                      <span className="text-2xl font-bold">766</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Avg. Session Time</span>
                      <span className="text-2xl font-bold">14.6 min</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Most Active Clients</CardTitle>
                  <CardDescription>Top portal users this week</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { name: 'TechCorp Industries', sessions: 28 },
                      { name: 'FinanceSecure LLC', sessions: 24 },
                      { name: 'HealthCare Systems', sessions: 22 },
                      { name: 'Global Logistics', sessions: 19 },
                      { name: 'Energy Solutions', sessions: 17 },
                    ].map((client, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-sm">{client.name}</span>
                        <Badge variant="secondary">{client.sessions} sessions</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}