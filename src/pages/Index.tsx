
import { useState } from "react";
import { UserInputForm, UserFormData } from "@/components/UserInputForm";
import { LearningPath } from "@/components/LearningPath";
import { Header } from "@/components/Header";
import { ComparisonFeature } from "@/components/ComparisonFeature";
import { recommendCourses } from "@/utils/courseRecommender";
import { CourseData } from "@/components/CourseCard";

const Index = () => {
  const [recommendationResult, setRecommendationResult] = useState<{
    courses: CourseData[];
    trendingTopics: string[];
    popularPathways: { title: string; count: number; change: number }[];
  } | null>(null);

  const handleSubmit = (formData: UserFormData) => {
    // In a real app, this would call a backend API with the recommendation engine
    // For now, we use our simulated recommender
    const results = recommendCourses(formData);
    setRecommendationResult(results);
    
    // Scroll to results
    setTimeout(() => {
      window.scrollTo({
        top: document.getElementById("results")?.offsetTop,
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-1 py-8 px-4 md:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-education-800 mb-4">
              Your Personal AI Academic Compass
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enter your interests, learning goals, and previous knowledge.
              CourseMatch will map out your perfect learning path.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-16">
            {/* User Input Form */}
            <UserInputForm onSubmit={handleSubmit} />

            {/* Results Section */}
            <div id="results" className="w-full">
              {recommendationResult && (
                <div className="space-y-16">
                  <LearningPath 
                    courses={recommendationResult.courses}
                    title="Your Personalized Learning Path"
                    description="Based on your interests, goals, and previous knowledge"
                  />
                  
                  <ComparisonFeature
                    trendingTopics={recommendationResult.trendingTopics}
                    popularPathways={recommendationResult.popularPathways}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-600">
          <p>
            CourseMatch - Your AI Academic Compass 
            GIT HUB LINK:https://github.com/ravikirank2018/course-compass-ai-paths-main
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
