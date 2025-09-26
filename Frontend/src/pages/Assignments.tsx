import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Clock, CheckCircle, AlertCircle, Search, Filter, Eye, Download } from "lucide-react";
import { useState } from "react";

const Assignments = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");

  const subjects = [
    { value: "all", label: "All Subjects" },
    { value: "kannada", label: "Kannada" },
    { value: "english", label: "English" },
    { value: "hindi", label: "Hindi" },
    { value: "social", label: "Social Studies" },
    { value: "science", label: "Science" },
    { value: "maths", label: "Mathematics" },
  ];

  const assignments = [
    {
      id: 1,
      title: "Algebra Practice Problems",
      subject: "Mathematics",
      status: "submitted",
      dueDate: "2024-01-20",
      submittedDate: "2024-01-18",
      grade: "A",
      feedback: "Excellent work! All solutions are correct.",
      description: "Solve the given algebra problems and show your working.",
    },
    {
      id: 2,
      title: "Essay on My School",
      subject: "English",
      status: "graded",
      dueDate: "2024-01-22",
      submittedDate: "2024-01-21",
      grade: "B+",
      feedback: "Good content, but work on grammar and sentence structure.",
      description: "Write a 500-word essay describing your school.",
    },
    {
      id: 3,
      title: "Science Project Report",
      subject: "Science",
      status: "pending",
      dueDate: "2024-01-25",
      submittedDate: null,
      grade: null,
      feedback: null,
      description: "Prepare a detailed report on your science project experiment.",
    },
    {
      id: 4,
      title: "Hindi Literature Analysis",
      subject: "Hindi",
      status: "overdue",
      dueDate: "2024-01-15",
      submittedDate: null,
      grade: null,
      feedback: null,
      description: "Analyze the themes in the given Hindi poem.",
    },
    {
      id: 5,
      title: "History Timeline",
      subject: "Social Studies",
      status: "submitted",
      dueDate: "2024-01-28",
      submittedDate: "2024-01-26",
      grade: null,
      feedback: null,
      description: "Create a timeline of major events in Indian history.",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "submitted": return "bg-blue-100 text-blue-800";
      case "graded": return "bg-green-100 text-green-800";
      case "pending": return "bg-yellow-100 text-yellow-800";
      case "overdue": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "submitted": return <Clock className="h-4 w-4" />;
      case "graded": return <CheckCircle className="h-4 w-4" />;
      case "pending": return <FileText className="h-4 w-4" />;
      case "overdue": return <AlertCircle className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  const filteredAssignments = assignments.filter((assignment) => {
    const matchesSearch = searchTerm === "" || 
                         assignment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         assignment.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = selectedSubject === "all" || selectedSubject === "" || 
                          assignment.subject.toLowerCase().includes(selectedSubject);
    return matchesSearch && matchesSubject;
  });

  const getAssignmentsByStatus = (status: string) => {
    return filteredAssignments.filter(assignment => assignment.status === status);
  };

  const AssignmentCard = ({ assignment }: { assignment: any }) => (
    <Card className="shadow-card hover:shadow-hover transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-lg">{assignment.title}</CardTitle>
            <CardDescription>{assignment.subject}</CardDescription>
          </div>
          <Badge className={getStatusColor(assignment.status)}>
            {getStatusIcon(assignment.status)}
            <span className="ml-1 capitalize">{assignment.status}</span>
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{assignment.description}</p>
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="font-medium">Due Date:</span>
            <p className={`${new Date(assignment.dueDate) < new Date() && assignment.status === 'pending' ? 'text-red-600' : 'text-muted-foreground'}`}>
              {new Date(assignment.dueDate).toLocaleDateString()}
            </p>
          </div>
          {assignment.submittedDate && (
            <div>
              <span className="font-medium">Submitted:</span>
              <p className="text-muted-foreground">
                {new Date(assignment.submittedDate).toLocaleDateString()}
              </p>
            </div>
          )}
        </div>

        {assignment.grade && (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-medium">Grade:</span>
              <Badge variant="secondary" className="text-lg font-bold">
                {assignment.grade}
              </Badge>
            </div>
            {assignment.feedback && (
              <div className="p-3 bg-secondary/10 rounded-lg">
                <p className="text-sm font-medium mb-1">Teacher Feedback:</p>
                <p className="text-sm text-muted-foreground">{assignment.feedback}</p>
              </div>
            )}
          </div>
        )}

        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1">
            <Eye className="mr-2 h-4 w-4" />
            View Details
          </Button>
          {assignment.status === 'graded' && (
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-primary">My Assignments</h1>
        <p className="text-muted-foreground">Track your assignment submissions and grades</p>
      </div>

      {/* Filters */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Filter className="mr-2 h-5 w-5" />
            Filter Assignments
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Search</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search assignments..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Subject</label>
              <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                <SelectTrigger>
                  <SelectValue placeholder="Select subject" />
                </SelectTrigger>
                <SelectContent>
                  {subjects.map((subject) => (
                    <SelectItem key={subject.value} value={subject.value}>
                      {subject.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Action</label>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedSubject("");
                }}
              >
                Clear Filters
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Assignment Tabs */}
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="all">All ({filteredAssignments.length})</TabsTrigger>
          <TabsTrigger value="pending">Pending ({getAssignmentsByStatus('pending').length})</TabsTrigger>
          <TabsTrigger value="submitted">Submitted ({getAssignmentsByStatus('submitted').length})</TabsTrigger>
          <TabsTrigger value="graded">Graded ({getAssignmentsByStatus('graded').length})</TabsTrigger>
          <TabsTrigger value="overdue">Overdue ({getAssignmentsByStatus('overdue').length})</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAssignments.map((assignment) => (
              <AssignmentCard key={assignment.id} assignment={assignment} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="pending" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getAssignmentsByStatus('pending').map((assignment) => (
              <AssignmentCard key={assignment.id} assignment={assignment} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="submitted" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getAssignmentsByStatus('submitted').map((assignment) => (
              <AssignmentCard key={assignment.id} assignment={assignment} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="graded" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getAssignmentsByStatus('graded').map((assignment) => (
              <AssignmentCard key={assignment.id} assignment={assignment} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="overdue" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getAssignmentsByStatus('overdue').map((assignment) => (
              <AssignmentCard key={assignment.id} assignment={assignment} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Assignments;