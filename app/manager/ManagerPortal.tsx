'use client'

import React, { useState } from 'react';
import {  Clock, AlertTriangle, CheckCircle2, User, Phone,  LogOut, Brain, FileText, MessageSquare,  TrendingUp, Sparkles, Users, BarChart3, Activity, Target, Award, AlertCircle, ArrowUp, ArrowDown, Settings } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import {  Line,PieChart as RePieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

const ManagerPortal = () => {
  const [selectedView, setSelectedView] = useState('dashboard');

  const teamMembers = [
    { name: 'Sudhanshu', status: 'available', role: 'Ticket Agent', escalations: 10, openTickets: 111, satisfaction: 4.1, slaViolations: 2, utilization: 85 },
    { name: 'Jitendra', status: 'available', role: 'Ticket Agent', escalations: 10, openTickets: 100, satisfaction: 4.0, slaViolations: 1, utilization: 78 },
    { name: 'Honey', status: 'available', role: 'Ticket Agent', escalations: 15, openTickets: 122, satisfaction: 4.5, slaViolations: 0, utilization: 92 },
    { name: 'Shekhar', status: 'available', role: 'Ticket Agent', escalations: 0, openTickets: 102, satisfaction: 4.5, slaViolations: 3, utilization: 71 },
    { name: 'Akhilesh', status: 'available', role: 'Ticket Agent', escalations: 15, openTickets: 103, satisfaction: 4.0, slaViolations: 1, utilization: 82 },
    { name: 'Jatin', status: 'away', role: 'Ticket Agent', escalations: 0, openTickets: 102, satisfaction: 4.1, slaViolations: 4, utilization: 68 },
    { name: 'Vivek', status: 'available', role: 'Ticket Agent', escalations: 5, openTickets: 102, satisfaction: 4.1, slaViolations: 2, utilization: 88 },
    { name: 'Pawan', status: 'available', role: 'Ticket Agent', escalations: 5, openTickets: 0, satisfaction: 4.1, slaViolations: 0, utilization: 65 },
  ];

  const slaApproaching = [
    { ticket: 'Ticket #3776', assignedTo: 'Jitendra', client: 'Accounting Plus', timeLeft: '00:08:11', priority: 'HIGH' },
    { ticket: 'Ticket #3777', assignedTo: 'Sudhanshu', client: 'Legal Services LLC', timeLeft: '00:15:26', priority: 'MEDIUM' },
    { ticket: 'Ticket #3778', assignedTo: 'Honey', client: 'Tech Startup Inc', timeLeft: '00:30:28', priority: 'HIGH' },
  ];

  const slaBreached = [
    { ticket: 'Ticket #3774', assignedTo: 'Jitendra', client: 'Manufacturing Co', breachTime: '30 min ago', priority: 'CRITICAL' },
    { ticket: 'Ticket #3775', assignedTo: 'Sudhanshu', client: 'Retail Chain LLC', breachTime: 'Yesterday', priority: 'HIGH' },
  ];

  const escalations = [
    { id: 'ESC-001', ticket: 'TF-2024-001520', title: 'Ransomware detection on workstation', client: 'Legal Services LLC', reason: 'Critical security incident', escalatedBy: 'AI System', time: '1 hour ago', priority: 'CRITICAL' },
    { id: 'ESC-002', ticket: 'TF-2024-001511', title: 'SMART errors - drive replacement', client: 'Accounting Plus', reason: 'Customer frustration detected', escalatedBy: 'Sarah Chen', time: '2 hours ago', priority: 'HIGH' },
    { id: 'ESC-003', ticket: 'TF-2024-001499', title: 'Email server down', client: 'Tech Startup Inc', reason: 'Multiple users affected', escalatedBy: 'AI System', time: '3 hours ago', priority: 'HIGH' },
  ];

  const ticketDistribution = [
    { name: 'Critical', value: 45, fill: '#dc2626' },
    { name: 'High', value: 204, fill: '#ea580c' },
    { name: 'Medium', value: 156, fill: '#ca8a04' },
    { name: 'Low', value: 98, fill: '#16a34a' },
    { name: 'Lowest', value: 52, fill: '#0891b2' },
  ];

  const performanceData = [
    { day: 'Mon', resolved: 65, created: 52, sla: 92 },
    { day: 'Tue', resolved: 78, created: 61, sla: 88 },
    { day: 'Wed', resolved: 82, created: 75, sla: 85 },
    { day: 'Thu', resolved: 91, created: 82, sla: 90 },
    { day: 'Fri', resolved: 75, created: 88, sla: 82 },
  ];

  const priorityColors = {
    'CRITICAL': 'bg-red-100 text-red-700 border-red-200',
    'HIGH': 'bg-orange-100 text-orange-700 border-orange-200',
    'MEDIUM': 'bg-yellow-100 text-yellow-700 border-yellow-200',
    'LOW': 'bg-green-100 text-green-700 border-green-200',
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <img src="/rezolve_logo_monogram.svg" alt="Rezolve.ai" className="h-10 w-10" />
            <div>
              <h1 className="text-lg font-semibold text-gray-900">Rezolve.ai</h1>
              <p className="text-xs text-gray-500">Manager Portal</p>
            </div>
          </div>
          
          <nav className="space-y-1">
            <button
              onClick={() => setSelectedView('dashboard')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                selectedView === 'dashboard' ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-100 text-gray-700'
              }`}
            >
              <BarChart3 className="h-4 w-4" />
              <span className="text-sm">Dashboard</span>
            </button>
            <button
              onClick={() => setSelectedView('tickets')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                selectedView === 'tickets' ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-100 text-gray-700'
              }`}
            >
              <FileText className="h-4 w-4" />
              <span className="text-sm">Tickets</span>
            </button>
            <button
              onClick={() => setSelectedView('escalations')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                selectedView === 'escalations' ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-100 text-gray-700'
              }`}
            >
              <AlertTriangle className="h-4 w-4" />
              <span className="text-sm">Escalations</span>
              <Badge className="ml-auto bg-red-100 text-red-700">{escalations.length}</Badge>
            </button>
            <button
              onClick={() => setSelectedView('analytics')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                selectedView === 'analytics' ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-100 text-gray-700'
              }`}
            >
              <TrendingUp className="h-4 w-4" />
              <span className="text-sm">Analytics</span>
            </button>
          </nav>
        </div>
        
        <div className="flex-1" />
        
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="bg-gray-200 text-gray-700">MR</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Matt Ruck</p>
              <p className="text-xs text-gray-500">Service Manager</p>
            </div>
            <Button variant="ghost" size="icon">
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto bg-white">
        {selectedView === 'dashboard' && (
          <div className="p-6">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Good Morning, Matt!</h1>
              <p className="text-gray-600">Here is what has changed in your IT Services world -</p>
            </div>

            {/* Performance Snapshot */}
            <Card className="mb-6 border-gray-200">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-gray-900">
                  <Activity className="h-5 w-5" />
                  Performance Snapshot
                </CardTitle>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Users className="h-4 w-4 mr-2" />
                    Queue management
                  </Button>
                  <Button variant="outline" size="sm">
                    <User className="h-4 w-4 mr-2" />
                    User management
                  </Button>
                  <Button variant="outline" size="sm">
                    <Settings className="h-4 w-4 mr-2" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-4 gap-4 mb-6">
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Open Tickets</span>
                      <BarChart3 className="h-4 w-4 text-gray-400" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">762</div>
                    <div className="flex items-center gap-1 text-xs text-green-600">
                      <ArrowDown className="h-3 w-3" />
                      <span>8% from last week</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Avg Resolution Time</span>
                      <Clock className="h-4 w-4 text-gray-400" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">4.2h</div>
                    <div className="flex items-center gap-1 text-xs text-green-600">
                      <ArrowDown className="h-3 w-3" />
                      <span>15% improvement</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">SLA Compliance</span>
                      <Target className="h-4 w-4 text-gray-400" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">87%</div>
                    <div className="flex items-center gap-1 text-xs text-red-600">
                      <ArrowDown className="h-3 w-3" />
                      <span>3% below target</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Team Utilization</span>
                      <Activity className="h-4 w-4 text-gray-400" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">78%</div>
                    <div className="flex items-center gap-1 text-xs text-yellow-600">
                      <ArrowUp className="h-3 w-3" />
                      <span>Optimal range</span>
                    </div>
                  </div>
                </div>

                {/* Team Performance Table */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">MY TEAM</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>Total agents: <span className="text-blue-600 font-medium">10</span></span>
                      <span>Available: <span className="text-green-600 font-medium">8</span></span>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-gray-50">
                          <TableHead className="text-gray-700">AGENT NAME</TableHead>
                          <TableHead className="text-gray-700">AVAILABILITY</TableHead>
                          <TableHead className="text-gray-700">ROLE</TableHead>
                          <TableHead className="text-gray-700">ESCALATIONS</TableHead>
                          <TableHead className="text-gray-700">OPEN TICKETS</TableHead>
                          <TableHead className="text-gray-700">SATISFACTION RATING</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {teamMembers.map((member) => (
                          <TableRow key={member.name}>
                            <TableCell className="font-medium text-gray-900">{member.name}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <div className={`h-2 w-2 rounded-full ${member.status === 'available' ? 'bg-green-500' : 'bg-gray-400'}`} />
                                <span className="text-sm capitalize text-gray-700">{member.status}</span>
                              </div>
                            </TableCell>
                            <TableCell className="text-blue-600">{member.role}</TableCell>
                            <TableCell>
                              <span className={member.escalations > 0 ? 'text-orange-600 font-medium' : 'text-gray-500'}>
                                {member.escalations}
                              </span>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-1">
                                <span className="text-gray-900">{member.openTickets}</span>
                                {member.openTickets > 110 && <ArrowUp className="h-3 w-3 text-red-500" />}
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Award className="h-4 w-4 text-yellow-500" />
                                <span className="text-gray-900">{member.satisfaction} / 5</span>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-6">
              {/* SLA Monitoring */}
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-gray-900">
                    <Clock className="h-5 w-5 text-yellow-600" />
                    SLA Approaching
                  </CardTitle>
                  <CardDescription className="text-gray-600">Tickets requiring immediate attention</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {slaApproaching.map((item) => (
                      <div key={item.ticket} className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-sm text-gray-900">{item.ticket}</span>
                          <Badge className={priorityColors[item.priority]}>{item.priority}</Badge>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">{item.assignedTo}</span>
                          <div className="flex items-center gap-1 text-orange-600">
                            <Clock className="h-3 w-3" />
                            <span>{item.timeLeft}</span>
                          </div>
                        </div>
                        <div className="text-xs text-gray-500 mt-1">{item.client}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <h4 className="font-medium mb-3 flex items-center gap-2 text-gray-900">
                      <AlertCircle className="h-4 w-4 text-red-600" />
                      Recent SLAs Breached
                    </h4>
                    <div className="space-y-2">
                      {slaBreached.map((item) => (
                        <div key={item.ticket} className="bg-red-50 rounded-lg p-3 border border-red-200">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-medium text-sm text-gray-900">{item.ticket}</span>
                            <span className="text-xs text-red-600">{item.breachTime}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">{item.assignedTo}</span>
                            <Badge className={priorityColors[item.priority]}>{item.priority}</Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Performance Trends */}
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-gray-900">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                    Weekly Performance
                  </CardTitle>
                  <CardDescription className="text-gray-600">Ticket resolution and SLA trends</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={performanceData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis dataKey="day" stroke="#6b7280" />
                        <YAxis stroke="#6b7280" />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb' }}
                          labelStyle={{ color: '#6b7280' }}
                        />
                        <Area 
                          type="monotone" 
                          dataKey="resolved" 
                          stackId="1"
                          stroke="#10b981" 
                          fill="#10b981" 
                          fillOpacity={0.6}
                          name="Resolved"
                        />
                        <Area 
                          type="monotone" 
                          dataKey="created" 
                          stackId="1"
                          stroke="#3b82f6" 
                          fill="#3b82f6" 
                          fillOpacity={0.6}
                          name="Created"
                        />
                        <Line 
                          type="monotone" 
                          dataKey="sla" 
                          stroke="#f59e0b" 
                          strokeWidth={2}
                          name="SLA %"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="h-3 w-3 rounded bg-green-500" />
                        <span className="text-sm text-gray-600">Avg Daily Resolution</span>
                      </div>
                      <div className="text-xl font-bold text-gray-900">78.2</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="h-3 w-3 rounded bg-yellow-500" />
                        <span className="text-sm text-gray-600">SLA Compliance</span>
                      </div>
                      <div className="text-xl font-bold text-gray-900">87.4%</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {selectedView === 'tickets' && (
          <div className="p-6">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Ticket Management</h1>
              <p className="text-gray-600">AI-powered ticket triage and assignment</p>
            </div>

            {/* Ticket Distribution */}
            <div className="grid grid-cols-3 gap-6 mb-6">
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-gray-900">Ticket Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-48">
                    <ResponsiveContainer width="100%" height="100%">
                      <RePieChart>
                        <Pie
                          data={ticketDistribution}
                          cx="50%"
                          cy="50%"
                          outerRadius={60}
                          dataKey="value"
                        >
                          {ticketDistribution.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </RePieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="space-y-2 mt-4">
                    {ticketDistribution.map((item) => (
                      <div key={item.name} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <div className="h-3 w-3 rounded" style={{ backgroundColor: item.fill }} />
                          <span className="text-gray-600">{item.name}</span>
                        </div>
                        <span className="font-medium text-gray-900">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-200 col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-gray-900">
                    <Brain className="h-5 w-5 text-purple-600" />
                    AI Triage Recommendations
                  </CardTitle>
                  <CardDescription className="text-gray-600">Unassigned tickets with AI assignment suggestions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <span className="font-medium text-gray-900">TF-2024-001520 - Ransomware detection</span>
                          <Badge className="ml-2 bg-red-100 text-red-700">CRITICAL</Badge>
                        </div>
                        <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
                          <Sparkles className="h-3 w-3 mr-1" />
                          Auto-Assign
                        </Button>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Legal Services LLC • Security incident requiring immediate attention</p>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Brain className="h-4 w-4 text-purple-600" />
                          <span>Recommended: <span className="text-blue-600 font-medium">Shekhar</span></span>
                        </div>
                        <span className="text-gray-500">Security expertise • 102 tickets • 71% utilization</span>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <span className="font-medium text-gray-900">TF-2024-001512 - QuickBooks database corruption</span>
                          <Badge className="ml-2 bg-yellow-100 text-yellow-700">MEDIUM</Badge>
                        </div>
                        <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
                          <Sparkles className="h-3 w-3 mr-1" />
                          Auto-Assign
                        </Button>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Accounting Plus • Database recovery needed</p>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Brain className="h-4 w-4 text-purple-600" />
                          <span>Recommended: <span className="text-blue-600 font-medium">Pawan</span></span>
                        </div>
                        <span className="text-gray-500">Database expertise • 0 tickets • 65% utilization</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Ticket Details Table */}
            <Card className="border-gray-200">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-gray-900">Ticket Details</CardTitle>
                  <Select defaultValue="unassigned">
                    <SelectTrigger className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="unassigned">Unassigned Tickets</SelectItem>
                      <SelectItem value="all">All Tickets</SelectItem>
                      <SelectItem value="escalated">Escalated Only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead className="text-gray-700">PRIORITY</TableHead>
                      <TableHead className="text-gray-700">TICKET</TableHead>
                      <TableHead className="text-gray-700">SUMMARY</TableHead>
                      <TableHead className="text-gray-700">STATUS</TableHead>
                      <TableHead className="text-gray-700">QUEUE</TableHead>
                      <TableHead className="text-gray-700">ASSIGNED TO</TableHead>
                      <TableHead className="text-gray-700">SUBMITTED ON</TableHead>
                      <TableHead className="text-gray-700">SLA APPROACHING</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                      </TableCell>
                      <TableCell className="font-mono text-sm text-gray-900">ASC-008</TableCell>
                      <TableCell className="text-gray-900">Access request for external storage device</TableCell>
                      <TableCell>
                        <Badge className="bg-blue-100 text-blue-700">Assign now</Badge>
                      </TableCell>
                      <TableCell className="text-gray-700">Default</TableCell>
                      <TableCell className="text-gray-500">--</TableCell>
                      <TableCell className="text-gray-700">July 26th 2023, 4:55 PM</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1 text-orange-600">
                          <Clock className="h-3 w-3" />
                          <span>00:08:11</span>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                      </TableCell>
                      <TableCell className="font-mono text-sm text-gray-900">ASC-012</TableCell>
                      <TableCell className="text-gray-900">Laptop not connecting to office VPN</TableCell>
                      <TableCell>
                        <Badge className="bg-blue-100 text-blue-700">Assign now</Badge>
                      </TableCell>
                      <TableCell className="text-gray-700">Default</TableCell>
                      <TableCell className="text-gray-500">--</TableCell>
                      <TableCell className="text-gray-700">July 26th 2023, 4:55 PM</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1 text-blue-600">
                          <Clock className="h-3 w-3" />
                          <span>00:15:26</span>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        )}

        {selectedView === 'escalations' && (
          <div className="p-6">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Escalation Board</h1>
              <p className="text-gray-600">Monitor and manage escalated tickets requiring immediate attention</p>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <Card className="bg-red-50 border-red-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Critical Escalations</p>
                      <p className="text-2xl font-bold text-red-700">{escalations.filter(e => e.priority === 'CRITICAL').length}</p>
                    </div>
                    <AlertTriangle className="h-8 w-8 text-red-600" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-orange-50 border-orange-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">AI Detected</p>
                      <p className="text-2xl font-bold text-orange-700">{escalations.filter(e => e.escalatedBy === 'AI System').length}</p>
                    </div>
                    <Brain className="h-8 w-8 text-orange-600" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Avg Response Time</p>
                      <p className="text-2xl font-bold text-blue-700">12m</p>
                    </div>
                    <Clock className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-900">Active Escalations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {escalations.map((escalation) => (
                    <div key={escalation.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-mono text-sm text-gray-600">#{escalation.ticket}</span>
                            <Badge className={priorityColors[escalation.priority]}>{escalation.priority}</Badge>
                            {escalation.escalatedBy === 'AI System' && (
                              <Badge className="bg-purple-100 text-purple-700">
                                <Brain className="h-3 w-3 mr-1" />
                                AI Detected
                              </Badge>
                            )}
                          </div>
                          <h4 className="font-medium text-gray-900 mb-1">{escalation.title}</h4>
                          <p className="text-sm text-gray-600">{escalation.client}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-gray-500">Escalated {escalation.time}</p>
                          <p className="text-xs text-gray-500">by {escalation.escalatedBy}</p>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded p-3 mb-3 border border-gray-200">
                        <p className="text-sm text-gray-700">
                          <span className="font-medium">Reason:</span> {escalation.reason}
                        </p>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                          <User className="h-3 w-3 mr-1" />
                          Assign to Senior
                        </Button>
                        <Button size="sm" variant="outline">
                          <MessageSquare className="h-3 w-3 mr-1" />
                          Message Team
                        </Button>
                        <Button size="sm" variant="outline">
                          <Phone className="h-3 w-3 mr-1" />
                          Call Client
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {selectedView === 'analytics' && (
          <div className="p-6">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Analytics Dashboard</h1>
              <p className="text-gray-600">Deep insights into team performance and service metrics</p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-gray-900">Engineer Utilization</CardTitle>
                  <CardDescription className="text-gray-600">Current workload distribution</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {teamMembers.slice(0, 5).map((member) => (
                      <div key={member.name}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium text-gray-900">{member.name}</span>
                          <span className="text-sm text-gray-600">{member.utilization}%</span>
                        </div>
                        <Progress value={member.utilization} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-gray-900">Knowledge Gap Analysis</CardTitle>
                  <CardDescription className="text-gray-600">Frequently escalated issue types</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-900">Network Configuration</span>
                        <span className="text-xs text-orange-600 font-medium">High</span>
                      </div>
                      <Progress value={85} className="h-2 mb-2" />
                      <p className="text-xs text-gray-600">23 escalations this month</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-900">Database Recovery</span>
                        <span className="text-xs text-yellow-600 font-medium">Medium</span>
                      </div>
                      <Progress value={62} className="h-2 mb-2" />
                      <p className="text-xs text-gray-600">15 escalations this month</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-900">Security Incidents</span>
                        <span className="text-xs text-yellow-600 font-medium">Medium</span>
                      </div>
                      <Progress value={58} className="h-2 mb-2" />
                      <p className="text-xs text-gray-600">12 escalations this month</p>
                    </div>
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    <FileText className="h-4 w-4 mr-2" />
                    Generate Training Report
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManagerPortal;