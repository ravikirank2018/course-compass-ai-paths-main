
import { CourseCard, CourseData } from "./CourseCard";

interface LearningPathProps {
  courses: CourseData[];
  title: string;
  description: string;
}

export function LearningPath({ courses, title, description }: LearningPathProps) {
  if (courses.length === 0) {
    return null;
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-education-800">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>

      <div className="space-y-12">
        {courses.map((course, index) => (
          <CourseCard
            key={course.id}
            course={course}
            index={index}
            isLast={index === courses.length - 1}
          />
        ))}
      </div>
    </div>
  );
}
