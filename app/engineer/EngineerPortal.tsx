'use client'

import React, { useState } from 'react';
import { Search, Clock, AlertTriangle, ChevronRight, Play, Pause, LogOut, Brain, FileText, Zap, MessageSquare, Timer,  MoreVertical, Send, Sparkles, History, Link2, Users, Database } from 'lucide-react';
import { Card, CardContent,  CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';

const EngineerPortal = () => {
  const [selectedTicket, setSelectedTicket] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [timer] = useState('02:15:42');
  const [noteText, setNoteText] = useState('');

  const tickets = [
    {
      id: 'TF-2024-001511',
      title: 'Workstation showing SMART errors. Proactive hard drive replacement needed.',
      client: 'Accounting Plus',
      priority: 'HIGH',
      status: 'IN PROGRESS',
      age: '2 hours ago',
      requestor: 'Steve Wilson',
      slaTime: '00:08:11',
      slaStatus: 'warning'
    },
    {
      id: 'TF-2024-001512',
      title: 'QuickBooks database corruption after power outage',
      client: 'Legal Services LLC',
      priority: 'MEDIUM',
      status: 'WAITING',
      age: '2d ago',
      requestor: 'Jennifer Mills',
      unassigned: true
    },
    {
      id: 'TF-2024-001520',
      title: 'Ransomware detection on workstation',
      client: 'Legal Services LLC', 
      priority: 'CRITICAL',
      status: 'NEW',
      age: '1 hour ago',
      requestor: 'Mark Johnson',
      unassigned: true,
      slaTime: '00:15:00',
      slaStatus: 'critical'
    },
    {
      id: 'TF-2024-001521',
      title: 'Clio practice management sync issues',
      client: 'Legal Services LLC',
      priority: 'MEDIUM',
      status: 'IN PROGRESS',
      age: '3 hours ago',
      requestor: 'Amanda Chen'
    },
    {
      id: 'TF-2024-001522',
      title: 'Document scanner driver update needed',
      client: 'Legal Services LLC',
      priority: 'LOW',
      status: 'RESOLVED',
      age: '1d ago',
      requestor: 'David Park',
      assignee: 'Jenny Williams'
    }
  ];

  const aiSuggestions = [
    {
      icon: <AlertTriangle className="h-4 w-4" />,
      title: "SMART Error Analysis",
      content: "Reallocated sector count: 142, Pending sectors: 8. Drive failure imminent. Recommend immediate replacement with Samsung 980 Pro NVMe.",
      confidence: 95
    },
    {
      icon: <Zap className="h-4 w-4" />,
      title: "Automation Available",
      content: "Rewst workflow 'Proactive Drive Replacement' can automate backup, imaging, and replacement scheduling.",
      actionable: true
    },
    {
      icon: <History className="h-4 w-4" />,
      title: "Similar Issue Resolution",
      content: "3 similar tickets resolved in past month. Average resolution: 4.2 hours with drive replacement.",
      link: true
    }
  ];

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'CRITICAL': return 'bg-red-100 text-red-700 border-red-200';
      case 'HIGH': return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'MEDIUM': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'LOW': return 'bg-green-100 text-green-700 border-green-200';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'NEW': return 'bg-purple-100 text-purple-700';
      case 'IN PROGRESS': return 'bg-blue-100 text-blue-700';
      case 'WAITING': return 'bg-yellow-100 text-yellow-700';
      case 'RESOLVED': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-96 bg-white border-r border-gray-200 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <img src="/rezolve_logo_monogram.svg" alt="Rezolve.ai" className="h-10 w-10" />
              <div>
                <h1 className="text-lg font-semibold text-gray-900">Rezolve.ai</h1>
                <p className="text-xs text-gray-500">Engineer Portal</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="text-gray-500">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <Input 
              placeholder="Search tickets..." 
              className="pl-9 bg-gray-50 border-gray-200"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="p-4 space-y-3 border-b border-gray-200">
          <div className="flex gap-2">
            <Button 
              variant="default" 
              size="sm" 
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              My Open (42)
            </Button>
            <Button variant="outline" size="sm">
              My Team
            </Button>
            <Button variant="outline" size="sm">
              Unassigned
            </Button>
          </div>
          
          <div className="flex gap-2">
            <Select defaultValue="all-engineers">
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-engineers">All Engineers</SelectItem>
                <SelectItem value="me">Me</SelectItem>
                <SelectItem value="team">My Team</SelectItem>
              </SelectContent>
            </Select>
            
            <Select defaultValue="all-statuses">
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-statuses">All Statuses</SelectItem>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="waiting">Waiting</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Ticket List */}
        <ScrollArea className="flex-1">
          <div className="p-2">
            {tickets.map((ticket, index) => (
              <div
                key={ticket.id}
                onClick={() => setSelectedTicket(index)}
                className={`p-3 rounded-lg mb-2 cursor-pointer transition-all ${
                  selectedTicket === index 
                    ? 'bg-blue-50 border border-blue-200' 
                    : 'hover:bg-gray-50 border border-transparent'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-gray-500">#{ticket.id}</span>
                    {ticket.unassigned && (
                      <Badge variant="outline" className="text-xs border-yellow-400 text-yellow-600">
                        Unassigned
                      </Badge>
                    )}
                  </div>
                  {ticket.slaTime && (
                    <div className={`flex items-center gap-1 text-xs ${
                      ticket.slaStatus === 'critical' ? 'text-red-600' : 'text-yellow-600'
                    }`}>
                      <Clock className="h-3 w-3" />
                      <span>{ticket.slaTime}</span>
                    </div>
                  )}
                </div>
                
                <h3 className="text-sm font-medium mb-2 line-clamp-2 text-gray-900">{ticket.title}</h3>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{ticket.client}</span>
                  <span className="text-xs text-gray-400">{ticket.age}</span>
                </div>
                
                <div className="flex items-center gap-2 mt-2">
                  <Badge className={getPriorityColor(ticket.priority)}>
                    {ticket.priority}
                  </Badge>
                  <Badge className={getStatusColor(ticket.status)}>
                    {ticket.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-white">
        {/* Top Bar */}
        <div className="h-16 border-b border-gray-200 flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-semibold text-gray-900">
              {tickets[selectedTicket].title}
            </h2>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/api/placeholder/32/32" />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
              <div className="text-sm">
                <p className="font-medium text-gray-900">Sarah Chen</p>
                <p className="text-xs text-gray-500">L2 Support Engineer</p>
              </div>
            </div>
            <Button variant="ghost" size="icon">
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex-1 flex">
          {/* Left Panel - Ticket Details */}
          <div className="flex-1 p-6 overflow-auto">
            <div className="max-w-4xl">
              {/* Ticket Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-mono text-gray-500">
                    #{tickets[selectedTicket].id}
                  </span>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm text-gray-600">
                    {tickets[selectedTicket].client}
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Take Action
                  </Button>
                  <Button variant="destructive">
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    Request Escalation
                  </Button>
                </div>
              </div>

              {/* AI Engineer Assistant */}
              <Card className="mb-6 border-blue-200 bg-blue-50/50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Brain className="h-5 w-5 text-blue-600" />
                      <CardTitle className="text-lg">AI Engineer Assistant</CardTitle>
                    </div>
                    <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                      <Sparkles className="h-3 w-3 mr-1" />
                      AI Analysis Complete
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {aiSuggestions.map((suggestion, index) => (
                    <div key={index} className="p-4 bg-white rounded-lg border border-gray-200">
                      <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                          {suggestion.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 mb-1">{suggestion.title}</h4>
                          <p className="text-sm text-gray-600 mb-2">{suggestion.content}</p>
                          {suggestion.confidence && (
                            <div className="flex items-center gap-2">
                              <Progress value={suggestion.confidence} className="h-1.5 w-20" />
                              <span className="text-xs text-gray-500">{suggestion.confidence}% confidence</span>
                            </div>
                          )}
                          {suggestion.actionable && (
                            <Button size="sm" className="mt-2 bg-purple-600 hover:bg-purple-700 text-white">
                              <Zap className="h-3 w-3 mr-1" />
                              Run Workflow
                            </Button>
                          )}
                          {suggestion.link && (
                            <Button variant="link" size="sm" className="mt-2 p-0 h-auto text-blue-600">
                              View Similar Tickets
                              <ChevronRight className="h-3 w-3 ml-1" />
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Users className="h-4 w-4 mr-2" />
                      Client Environment
                    </Button>
                    <Button variant="outline" size="sm">
                      <Database className="h-4 w-4 mr-2" />
                      Enterprise Knowledge Search
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Tabs */}
              <Tabs defaultValue="notes" className="w-full">
                <TabsList className="bg-gray-100">
                  <TabsTrigger value="notes">Notes</TabsTrigger>
                  <TabsTrigger value="linked">Linked Tickets</TabsTrigger>
                  <TabsTrigger value="history">History</TabsTrigger>
                  <TabsTrigger value="time">Time Entries</TabsTrigger>
                  <TabsTrigger value="attachments">Attachments</TabsTrigger>
                </TabsList>
                
                <TabsContent value="notes" className="mt-4">
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <div className="flex items-start gap-3 mb-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback>SW</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium text-sm text-gray-900">Steve Wilson</span>
                            <Badge variant="outline" className="text-xs">Client</Badge>
                            <span className="text-xs text-gray-500">2 hours ago</span>
                          </div>
                          <p className="text-sm text-gray-700">
                            My computer has been showing error messages about the hard drive. 
                            It has been running really slow and making clicking noises. I am worried about losing my files.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <Textarea 
                        placeholder="Add a note... Use @ to mention, # for tickets"
                        className="min-h-[100px] border-gray-200"
                        value={noteText}
                        onChange={(e) => setNoteText(e.target.value)}
                      />
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            <FileText className="h-4 w-4 mr-2" />
                            Templates
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Sparkles className="h-4 w-4 mr-2" />
                            AI Assist
                          </Button>
                        </div>
                        <div className="flex items-center gap-2">
                          <label className="flex items-center gap-2 text-sm">
                            <input type="checkbox" className="rounded border-gray-300" />
                            <span>Internal Only</span>
                          </label>
                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                            <Send className="h-4 w-4 mr-2" />
                            Add Note
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-80 border-l border-gray-200 p-6 space-y-6 bg-gray-50">
            {/* Contact Info */}
            <div>
              <h3 className="text-sm font-semibold mb-4 text-gray-900">Contact Information</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Requestor</p>
                  <p className="text-sm font-medium text-gray-900">{tickets[selectedTicket].requestor}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Company</p>
                  <p className="text-sm text-gray-700">{tickets[selectedTicket].client}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Phone</p>
                  <p className="text-sm text-gray-700">(555) 123-4567</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Email</p>
                  <p className="text-sm text-gray-700">steve.wilson@accountingplus.com</p>
                </div>
              </div>
            </div>

            <Separator />

            {/* Time Tracking */}
            <div>
              <h3 className="text-sm font-semibold mb-4 text-gray-900">Time Tracking</h3>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="text-3xl font-mono text-center mb-4 text-blue-600">
                  {timer}
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => setIsTimerRunning(!isTimerRunning)}
                  >
                    {isTimerRunning ? (
                      <>
                        <Pause className="h-4 w-4 mr-2" />
                        Pause
                      </>
                    ) : (
                      <>
                        <Play className="h-4 w-4 mr-2" />
                        Resume
                      </>
                    )}
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Timer className="h-4 w-4 mr-2" />
                    Log Time
                  </Button>
                </div>
              </div>
            </div>

            <Separator />

            {/* Quick Actions */}
            <div>
              <h3 className="text-sm font-semibold mb-4 text-gray-900">Quick Actions</h3>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <Zap className="h-4 w-4 mr-2" />
                  Generate AI Actions
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="h-4 w-4 mr-2" />
                  Ticket Summary
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Link2 className="h-4 w-4 mr-2" />
                  Link Related Ticket
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngineerPortal;