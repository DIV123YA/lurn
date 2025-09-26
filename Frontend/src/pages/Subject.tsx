import { useParams } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  Video, 
  FileText, 
  Trophy, 
  Clock, 
  Play, 
  Upload,
  TrendingUp,
  Calendar
} from "lucide-react";

const Subject = () => {
  const { subject } = useParams();

  const subjectData = {
    kannada: {
      name: "Kannada",
      color: "text-orange-600",
      bgColor: "bg-orange-100",
      description: "Learn the beautiful Kannada language, literature, and culture",
    },
    english: {
      name: "English",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      description: "Master English grammar, literature, and communication skills",
    },
    hindi: {
      name: "Hindi",
      color: "text-green-600",
      bgColor: "bg-green-100",
      description: "Explore Hindi language, poetry, and literary works",
    },
    social: {
      name: "Social Studies",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      description: "Understand history, geography, civics, and economics",
    },
    science: {
      name: "Science",
      color: "text-teal-600",
      bgColor: "bg-teal-100",
      description: "Discover the wonders of physics, chemistry, and biology",
    },
    maths: {
      name: "Mathematics",
      color: "text-red-600",
      bgColor: "bg-red-100",
      description: "Learn mathematical concepts, problem-solving, and logical thinking",
    },
  };

  const currentSubject = subjectData[subject as keyof typeof subjectData];

  if (!currentSubject) {
    return (
      <div className="text-center py-8">
        <h1 className="text-2xl font-bold">Subject not found</h1>
      </div>
    );
  }

  // Mock data - replace with real data from API
  const assignments = [
    {
      title: `${currentSubject.name} Assignment 1`,
      dueDate: "2024-01-25",
      status: "pending",
    },
    {
      title: `${currentSubject.name} Assignment 2`,
      dueDate: "2024-01-30",
      status: "submitted",
    },
  ];

  const recordings = [
    {
      title: `${currentSubject.name} - Chapter 1`,
      duration: "45 min",
      date: "2024-01-15",
    },
    {
      title: `${currentSubject.name} - Chapter 2`,
      duration: "38 min",
      date: "2024-01-12",
    },
    {
      title: `${currentSubject.name} - Chapter 3`,
      duration: "42 min",
      date: "2024-01-10",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Subject Header */}
      <div className={`rounded-xl p-8 ${currentSubject.bgColor} text-center`}>
        <h1 className={`text-4xl font-bold ${currentSubject.color} mb-2`}>
          {currentSubject.name}
        </h1>
        <p className="text-lg text-muted-foreground">{currentSubject.description}</p>
      </div>

      {/* Subject Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="shadow-card">
          <CardContent className="flex items-center p-6">
            <FileText className="h-8 w-8 text-primary mr-4" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Assignments</p>
              <p className="text-2xl font-bold">8</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-card">
          <CardContent className="flex items-center p-6">
            <Video className="h-8 w-8 text-secondary mr-4" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">Class Recordings</p>
              <p className="text-2xl font-bold">12</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-card">
          <CardContent className="flex items-center p-6">
            <Trophy className="h-8 w-8 text-accent mr-4" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">Average Grade</p>
              <p className="text-2xl font-bold">A-</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-card">
          <CardContent className="flex items-center p-6">
            <TrendingUp className="h-8 w-8 text-primary mr-4" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">Progress</p>
              <p className="text-2xl font-bold">85%</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Subject Content Tabs */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="assignments">Assignments</TabsTrigger>
          <TabsTrigger value="recordings">Recordings</TabsTrigger>
          <TabsTrigger value="progress">Progress</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Upcoming Deadlines
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {assignments.map((assignment, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">{assignment.title}</p>
                      <p className="text-sm text-muted-foreground">
                        Due: {new Date(assignment.dueDate).toLocaleDateString()}
                      </p>
                    </div>
                    <Badge variant={assignment.status === "pending" ? "destructive" : "secondary"}>
                      {assignment.status}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Video className="mr-2 h-5 w-5" />
                  Recent Recordings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {recordings.slice(0, 3).map((recording, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">{recording.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {recording.duration} • {new Date(recording.date).toLocaleDateString()}
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Play className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="assignments">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {assignments.map((assignment, index) => (
              <Card key={index} className="shadow-card">
                <CardHeader>
                  <CardTitle>{assignment.title}</CardTitle>
                  <CardDescription>
                    Due: {new Date(assignment.dueDate).toLocaleDateString()}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Badge variant={assignment.status === "pending" ? "destructive" : "secondary"}>
                    {assignment.status}
                  </Badge>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      View Details
                    </Button>
                    {assignment.status === "pending" && (
                      <Button size="sm">
                        <Upload className="mr-2 h-4 w-4" />
                        Submit
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="recordings">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recordings.map((recording, index) => (
              <Card key={index} className="shadow-card">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-primary rounded-t-lg flex items-center justify-center">
                    <div className="text-center text-white">
                      <Video className="h-12 w-12 mx-auto mb-2 opacity-80" />
                      <p className="text-sm opacity-90">{recording.duration}</p>
                    </div>
                  </div>
                  <div className="p-4 space-y-3">
                    <div>
                      <h3 className="font-semibold">{recording.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        <Clock className="mr-1 h-3 w-3 inline" />
                        {new Date(recording.date).toLocaleDateString()}
                      </p>
                    </div>
                    <Button className="w-full">
                      <Play className="mr-2 h-4 w-4" />
                      Watch Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="progress">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Subject Progress</CardTitle>
              <CardDescription>Your performance and learning progress in {currentSubject.name}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 border rounded-lg">
                  <Trophy className="h-8 w-8 text-accent mx-auto mb-2" />
                  <p className="text-2xl font-bold">A-</p>
                  <p className="text-sm text-muted-foreground">Average Grade</p>
                </div>
                <div className="text-center p-6 border rounded-lg">
                  <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold">85%</p>
                  <p className="text-sm text-muted-foreground">Completion Rate</p>
                </div>
                <div className="text-center p-6 border rounded-lg">
                  <BookOpen className="h-8 w-8 text-secondary mx-auto mb-2" />
                  <p className="text-2xl font-bold">12/15</p>
                  <p className="text-sm text-muted-foreground">Chapters Covered</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Subject;