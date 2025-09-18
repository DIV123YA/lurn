import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Video, Play, Clock, Filter, Search, BookOpen } from "lucide-react";
import { useState } from "react";

const Recordings = () => {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const subjects = [
    { value: "all", label: "All Subjects" },
    { value: "kannada", label: "Kannada" },
    { value: "english", label: "English" },
    { value: "hindi", label: "Hindi" },
    { value: "social", label: "Social Studies" },
    { value: "science", label: "Science" },
    { value: "maths", label: "Mathematics" },
  ];

  const classes = [
    { value: "all", label: "All Classes" },
    { value: "6", label: "Class 6" },
    { value: "7", label: "Class 7" },
    { value: "8", label: "Class 8" },
    { value: "9", label: "Class 9" },
    { value: "10", label: "Class 10" },
  ];

  const recordings = [
    {
      id: 1,
      title: "Introduction to Algebra",
      subject: "Mathematics",
      class: "Class 8",
      duration: "45 min",
      date: "2024-01-15",
      teacher: "Mrs. Sharma",
      thumbnail: "/placeholder-video.jpg",
      watched: false,
    },
    {
      id: 2,
      title: "Photosynthesis Process",
      subject: "Science",
      class: "Class 7",
      duration: "38 min",
      date: "2024-01-14",
      teacher: "Mr. Kumar",
      thumbnail: "/placeholder-video.jpg",
      watched: true,
    },
    {
      id: 3,
      title: "English Grammar - Tenses",
      subject: "English",
      class: "Class 8",
      duration: "30 min",
      date: "2024-01-14",
      teacher: "Ms. Priya",
      thumbnail: "/placeholder-video.jpg",
      watched: false,
    },
    {
      id: 4,
      title: "Indian History - Mughal Empire",
      subject: "Social Studies",
      class: "Class 9",
      duration: "42 min",
      date: "2024-01-13",
      teacher: "Mr. Singh",
      thumbnail: "/placeholder-video.jpg",
      watched: true,
    },
    {
      id: 5,
      title: "Kannada Literature",
      subject: "Kannada",
      class: "Class 8",
      duration: "35 min",
      date: "2024-01-13",
      teacher: "Mrs. Rani",
      thumbnail: "/placeholder-video.jpg",
      watched: false,
    },
    {
      id: 6,
      title: "Hindi Poetry Analysis",
      subject: "Hindi",
      class: "Class 9",
      duration: "28 min",
      date: "2024-01-12",
      teacher: "Mr. Gupta",
      thumbnail: "/placeholder-video.jpg",
      watched: false,
    },
  ];

  const filteredRecordings = recordings.filter((recording) => {
    const matchesSubject = selectedSubject === "all" || selectedSubject === "" || 
                          recording.subject.toLowerCase().includes(selectedSubject);
    const matchesClass = selectedClass === "all" || selectedClass === "" || 
                        recording.class.includes(selectedClass);
    const matchesSearch = searchTerm === "" || 
                         recording.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recording.subject.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesSubject && matchesClass && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-primary">Class Recordings</h1>
        <p className="text-muted-foreground">Access recorded classes by teachers</p>
      </div>

      {/* Filters */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Filter className="mr-2 h-5 w-5" />
            Filter Recordings
          </CardTitle>
          <CardDescription>Filter by subject, class, or search for specific topics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Search</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search recordings..."
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
              <label className="text-sm font-medium">Class</label>
              <Select value={selectedClass} onValueChange={setSelectedClass}>
                <SelectTrigger>
                  <SelectValue placeholder="Select class" />
                </SelectTrigger>
                <SelectContent>
                  {classes.map((classItem) => (
                    <SelectItem key={classItem.value} value={classItem.value}>
                      {classItem.label}
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
                  setSelectedSubject("");
                  setSelectedClass("");
                  setSearchTerm("");
                }}
              >
                Clear Filters
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recordings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecordings.map((recording) => (
          <Card key={recording.id} className="shadow-card hover:shadow-hover transition-shadow group">
            <CardContent className="p-0">
              <div className="relative">
                <div className="aspect-video bg-gradient-primary rounded-t-lg flex items-center justify-center">
                  <div className="text-center text-white">
                    <Video className="h-12 w-12 mx-auto mb-2 opacity-80" />
                    <p className="text-sm opacity-90">Video Recording</p>
                  </div>
                </div>
                <Button 
                  size="icon" 
                  className="absolute inset-0 m-auto bg-white/90 hover:bg-white text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Play className="h-6 w-6" />
                </Button>
                <div className="absolute top-3 right-3 flex gap-2">
                  <Badge variant="secondary" className="text-xs">
                    {recording.duration}
                  </Badge>
                  {recording.watched && (
                    <Badge className="text-xs bg-secondary">Watched</Badge>
                  )}
                </div>
              </div>
              
              <div className="p-4 space-y-3">
                <div>
                  <h3 className="font-semibold text-lg line-clamp-2">{recording.title}</h3>
                  <p className="text-sm text-muted-foreground">{recording.teacher}</p>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <Badge variant="outline">{recording.subject}</Badge>
                  <Badge variant="outline">{recording.class}</Badge>
                </div>
                
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="mr-1 h-3 w-3" />
                  {new Date(recording.date).toLocaleDateString()}
                </div>
                
                <Button className="w-full">
                  <Play className="mr-2 h-4 w-4" />
                  {recording.watched ? "Watch Again" : "Watch Now"}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredRecordings.length === 0 && (
        <Card className="shadow-card">
          <CardContent className="text-center py-8">
            <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No recordings found</h3>
            <p className="text-muted-foreground">Try adjusting your filters or check back later for new recordings.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Recordings;