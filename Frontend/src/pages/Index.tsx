import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Upload, Video, FileText, Users, BookOpen, TrendingUp } from "lucide-react";
import schoolBackground from "@/assets/school-background.jpg";

const Index = () => {
  return (
    <div className="space-y-6">
      {/* Hero Section with School Background */}
      <div 
        className="relative h-64 rounded-xl bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${schoolBackground})`,
        }}
      >
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Welcome to Student Portal</h1>
          <p className="text-xl text-white/90">Your Gateway to Digital Learning</p>
          <Button className="bg-white text-primary hover:bg-white/90">
            Get Started
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="shadow-card hover:shadow-hover transition-shadow">
          <CardContent className="flex items-center p-6">
            <Upload className="h-8 w-8 text-primary mr-4" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">Assignments</p>
              <p className="text-2xl font-bold">12</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-card hover:shadow-hover transition-shadow">
          <CardContent className="flex items-center p-6">
            <Video className="h-8 w-8 text-secondary mr-4" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">Recordings</p>
              <p className="text-2xl font-bold">45</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-card hover:shadow-hover transition-shadow">
          <CardContent className="flex items-center p-6">
            <BookOpen className="h-8 w-8 text-accent mr-4" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">Subjects</p>
              <p className="text-2xl font-bold">6</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-card hover:shadow-hover transition-shadow">
          <CardContent className="flex items-center p-6">
            <TrendingUp className="h-8 w-8 text-primary mr-4" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">Progress</p>
              <p className="text-2xl font-bold">87%</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-card hover:shadow-hover transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Upload className="mr-2 h-5 w-5" />
              Recent Assignments
            </CardTitle>
            <CardDescription>Your latest submitted work</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Math Chapter 5 Exercise</p>
                <p className="text-sm text-muted-foreground">Mathematics</p>
              </div>
              <Badge>Submitted</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">English Essay - My School</p>
                <p className="text-sm text-muted-foreground">English</p>
              </div>
              <Badge variant="secondary">Pending</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Science Project Report</p>
                <p className="text-sm text-muted-foreground">Science</p>
              </div>
              <Badge variant="outline">Draft</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card hover:shadow-hover transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Video className="mr-2 h-5 w-5" />
              Today's Classes
            </CardTitle>
            <CardDescription>Recorded sessions for today</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Mathematics - Algebra</p>
                <p className="text-sm text-muted-foreground">9:00 AM - 45 min</p>
              </div>
              <Button variant="outline" size="sm">Watch</Button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">English Grammar</p>
                <p className="text-sm text-muted-foreground">11:00 AM - 30 min</p>
              </div>
              <Button variant="outline" size="sm">Watch</Button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Science - Physics</p>
                <p className="text-sm text-muted-foreground">2:00 PM - 40 min</p>
              </div>
              <Button variant="outline" size="sm">Watch</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
