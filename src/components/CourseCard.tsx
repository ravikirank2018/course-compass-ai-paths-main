
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarPlus, Github, Youtube } from "lucide-react";

export interface CourseResource {
  type: "github" | "youtube";
  title: string;
  url: string;
}

export interface CourseData {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: number;
  skills: string[];
  resources: CourseResource[];
}

interface CourseCardProps {
  course: CourseData;
  index: number;
  isLast?: boolean;
}

export function CourseCard({ course, index, isLast = false }: CourseCardProps) {
  const addToCalendar = () => {
    // In a real app, this would connect to Google Calendar API
    alert(`Added ${course.title} to calendar!`);
  };

  const getDifficultyColor = (level: number) => {
    const colors = [
      "bg-green-100 text-green-800",
      "bg-green-200 text-green-800",
      "bg-yellow-100 text-yellow-800", 
      "bg-orange-100 text-orange-800",
      "bg-red-100 text-red-800"
    ];
    return colors[Math.min(level - 1, colors.length - 1)];
  };

  return (
    <div className="relative">
      <Card className="w-full bg-white border-education-200 hover:shadow-md transition-shadow">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-education-800 font-bold">
                <span className="bg-education-100 text-education-800 rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">
                  {index + 1}
                </span>
                {course.title}
              </CardTitle>
              <CardDescription className="text-gray-600 mt-1">
                {course.duration} · {" "}
                <Badge className={getDifficultyColor(course.difficulty)}>
                  Level {course.difficulty}
                </Badge>
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-2">
          <p className="text-gray-700 mb-3">{course.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {course.skills.map((skill) => (
              <Badge key={skill} variant="outline" className="bg-gray-50">
                {skill}
              </Badge>
            ))}
          </div>
          <div className="space-y-2">
            {course.resources.map((resource) => (
              <a
                key={resource.url}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-700 hover:text-education-600 transition-colors"
              >
                {resource.type === "github" ? (
                  <Github size={16} className="text-gray-900" />
                ) : (
                  <Youtube size={16} className="text-red-600" />
                )}
                {resource.title}
              </a>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button
            variant="outline"
            className="w-full border-education-300 hover:bg-education-50 hover:text-education-700 flex gap-2"
            onClick={addToCalendar}
          >
            <CalendarPlus size={16} />
            Add to Calendar
          </Button>
        </CardFooter>
      </Card>
      
      {/* Course connection line */}
      {!isLast && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full h-12 w-0.5 bg-education-300 z-0" />
      )}
    </div>
  );
}
