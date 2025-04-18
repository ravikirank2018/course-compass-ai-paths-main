
import { UserFormData } from "@/components/UserInputForm";
import { CourseData, CourseResource } from "@/components/CourseCard";

// This is a simulated AI recommendation engine
// In a real application, this would be connected to a backend service
// with a proper machine learning model

// Sample course database
const coursesDatabase: CourseData[] = [
  {
    id: "dsa-101",
    title: "Data Structures & Algorithms Fundamentals",
    description: "Learn the essential data structures and algorithms that form the building blocks of computer science and software engineering.",
    duration: "8 weeks",
    difficulty: 2,
    skills: ["Arrays", "Linked Lists", "Stacks", "Queues", "Trees", "Basic Algorithms"],
    resources: [
      {
        type: "github",
        title: "DSA-Visual: Interactive DS&A Playground",
        url: "https://github.com/topics/data-structures-algorithms"
      },
      {
        type: "youtube",
        title: "DS&A in 100 Minutes - Crash Course",
        url: "https://www.youtube.com/results?search_query=data+structures+algorithms"
      }
    ]
  },
  {
    id: "adv-algos",
    title: "Advanced Algorithms",
    description: "Master complex algorithms including dynamic programming, greedy algorithms, and graph algorithms for solving difficult computational problems.",
    duration: "10 weeks",
    difficulty: 4,
    skills: ["Dynamic Programming", "Greedy Algorithms", "Graph Theory", "NP-Complete Problems"],
    resources: [
      {
        type: "github",
        title: "Algorithm Visualizer: See Algorithms in Action",
        url: "https://github.com/topics/algorithm-visualizer"
      },
      {
        type: "youtube",
        title: "Dynamic Programming - From Novice to Expert",
        url: "https://www.youtube.com/results?search_query=dynamic+programming"
      }
    ]
  },
  {
    id: "sys-design",
    title: "System Design Principles",
    description: "Learn how to design large-scale distributed systems with a focus on scalability, reliability, and efficiency.",
    duration: "12 weeks",
    difficulty: 4,
    skills: ["Distributed Systems", "Scalability", "Load Balancing", "Caching", "Database Design"],
    resources: [
      {
        type: "github",
        title: "System Design Primer: Learn How to Design Large-Scale Systems",
        url: "https://github.com/topics/system-design"
      },
      {
        type: "youtube",
        title: "System Design Interview - Step By Step Guide",
        url: "https://www.youtube.com/results?search_query=system+design+interview"
      }
    ]
  },
  {
    id: "ai-ml-intro",
    title: "Introduction to AI & Machine Learning",
    description: "Get started with artificial intelligence and machine learning concepts, algorithms, and practical applications.",
    duration: "10 weeks",
    difficulty: 3,
    skills: ["Supervised Learning", "Unsupervised Learning", "Neural Networks", "Python", "Data Preprocessing"],
    resources: [
      {
        type: "github",
        title: "ML-From-Scratch: Implementation of ML Algorithms",
        url: "https://github.com/topics/machine-learning"
      },
      {
        type: "youtube",
        title: "Machine Learning Fundamentals",
        url: "https://www.youtube.com/results?search_query=machine+learning+fundamentals"
      }
    ]
  },
  {
    id: "deep-learning",
    title: "Deep Learning Specialization",
    description: "Dive deep into neural networks, computer vision, NLP, and other advanced deep learning topics.",
    duration: "14 weeks",
    difficulty: 5,
    skills: ["Neural Networks", "CNNs", "RNNs", "Transformers", "GANs", "Transfer Learning"],
    resources: [
      {
        type: "github",
        title: "Awesome Deep Learning: Curated List of DL Resources",
        url: "https://github.com/topics/deep-learning"
      },
      {
        type: "youtube",
        title: "Deep Learning with PyTorch - Complete Course",
        url: "https://www.youtube.com/results?search_query=deep+learning+pytorch"
      }
    ]
  },
  {
    id: "cloud-computing",
    title: "Cloud Computing with GCP",
    description: "Master Google Cloud Platform services for building scalable and reliable applications in the cloud.",
    duration: "8 weeks",
    difficulty: 3,
    skills: ["Cloud Architecture", "GCP", "Compute Engine", "App Engine", "BigQuery", "Cloud Storage"],
    resources: [
      {
        type: "github",
        title: "GCP-Examples: Sample Projects for Google Cloud",
        url: "https://github.com/topics/google-cloud-platform"
      },
      {
        type: "youtube",
        title: "GCP Essentials - From Zero to Hero",
        url: "https://www.youtube.com/results?search_query=google+cloud+platform+tutorial"
      }
    ]
  },
  {
    id: "web-dev-full",
    title: "Full-Stack Web Development",
    description: "Comprehensive course covering frontend, backend, databases, and deployment for modern web applications.",
    duration: "16 weeks",
    difficulty: 3,
    skills: ["HTML/CSS", "JavaScript", "React", "Node.js", "MongoDB", "Express", "RESTful APIs"],
    resources: [
      {
        type: "github",
        title: "MERN Stack Project Starter",
        url: "https://github.com/topics/mern-stack"
      },
      {
        type: "youtube",
        title: "Full Stack Web Development in 2023",
        url: "https://www.youtube.com/results?search_query=full+stack+web+development"
      }
    ]
  },
  {
    id: "devops-cicd",
    title: "DevOps & CI/CD Pipelines",
    description: "Learn modern DevOps practices, tools, and how to build efficient CI/CD pipelines for software delivery.",
    duration: "10 weeks",
    difficulty: 4,
    skills: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Infrastructure as Code", "Monitoring"],
    resources: [
      {
        type: "github",
        title: "DevOps Roadmap: Becoming a DevOps Engineer",
        url: "https://github.com/topics/devops"
      },
      {
        type: "youtube",
        title: "CI/CD Pipeline from Scratch",
        url: "https://www.youtube.com/results?search_query=ci+cd+pipeline+tutorial"
      }
    ]
  }
];

// Mock trending topics based on simulated data
const trendingTopics = [
  "Machine Learning",
  "React",
  "System Design",
  "DevOps",
  "Python",
  "Cloud Computing",
  "JavaScript",
  "Kubernetes",
  "Data Science",
  "Frontend Development"
];

// Mock popular pathways with student counts and trend changes
const popularPathways = [
  { 
    title: "Web Dev → Cloud → DevOps", 
    count: 245, 
    change: 12 
  },
  { 
    title: "DSA → System Design → Cloud", 
    count: 198, 
    change: 8 
  },
  { 
    title: "Python → ML → Deep Learning", 
    count: 176, 
    change: 15 
  },
  { 
    title: "DSA → Algorithms → ML", 
    count: 122, 
    change: -3 
  },
  { 
    title: "Frontend → Backend → Mobile", 
    count: 89, 
    change: 5 
  }
];

// Simple keyword matching function
function keywordMatch(userInput: string, keywords: string[]): number {
  if (!userInput) return 0;
  
  const input = userInput.toLowerCase();
  let score = 0;
  
  for (const keyword of keywords) {
    if (input.includes(keyword.toLowerCase())) {
      score += 1;
    }
  }
  
  return score;
}

// Simulated recommender function
export function recommendCourses(userData: UserFormData): {
  courses: CourseData[];
  trendingTopics: string[];
  popularPathways: { title: string; count: number; change: number }[];
} {
  // Keywords to look for in user input
  const keywordTopics: Record<string, string[]> = {
    algorithms: ["algorithm", "dsa", "data structure", "problem solving"],
    systemDesign: ["system design", "architecture", "distributed systems", "scalability"],
    ai: ["ai", "artificial intelligence", "machine learning", "ml", "deep learning", "neural"],
    web: ["web", "frontend", "backend", "full-stack", "javascript", "react", "node"],
    cloud: ["cloud", "gcp", "aws", "azure", "serverless"],
    devops: ["devops", "ci/cd", "continuous integration", "docker", "kubernetes"]
  };

  // Calculate scores for each topic based on user input
  const scores: Record<string, number> = {};
  
  for (const topic in keywordTopics) {
    scores[topic] = 
      keywordMatch(userData.interests, keywordTopics[topic]) * 3 + 
      keywordMatch(userData.goals, keywordTopics[topic]) * 2 + 
      keywordMatch(userData.previousKnowledge, keywordTopics[topic]) * 1;
  }
  
  // Adjust based on difficulty preference
  const difficultyPreference = userData.difficultyLevel;
  
  // Find top 3 topics
  const topTopics = Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(entry => entry[0]);
    
  // Build a learning path
  const learningPath: CourseData[] = [];
  
  // Add courses based on top topics and difficulty preference
  if (topTopics.includes("algorithms")) {
    // For DSA track
    learningPath.push(
      difficultyPreference <= 3 
        ? coursesDatabase.find(c => c.id === "dsa-101")!
        : coursesDatabase.find(c => c.id === "adv-algos")!
    );
  }
  
  if (topTopics.includes("systemDesign")) {
    learningPath.push(coursesDatabase.find(c => c.id === "sys-design")!);
  }
  
  if (topTopics.includes("ai")) {
    learningPath.push(
      difficultyPreference <= 3
        ? coursesDatabase.find(c => c.id === "ai-ml-intro")!
        : coursesDatabase.find(c => c.id === "deep-learning")!
    );
  }
  
  if (topTopics.includes("web")) {
    learningPath.push(coursesDatabase.find(c => c.id === "web-dev-full")!);
  }
  
  if (topTopics.includes("cloud")) {
    learningPath.push(coursesDatabase.find(c => c.id === "cloud-computing")!);
  }
  
  if (topTopics.includes("devops")) {
    learningPath.push(coursesDatabase.find(c => c.id === "devops-cicd")!);
  }
  
  // Ensure we have at least 2-3 courses in the path
  if (learningPath.length < 2) {
    // Add some general courses based on difficulty
    const generalCourses = coursesDatabase
      .filter(course => !learningPath.includes(course))
      .filter(course => Math.abs(course.difficulty - difficultyPreference) <= 1)
      .sort(() => 0.5 - Math.random())  // Simple shuffle
      .slice(0, 3 - learningPath.length);
      
    learningPath.push(...generalCourses);
  }
  
  // Sort courses by difficulty for a natural progression
  learningPath.sort((a, b) => a.difficulty - b.difficulty);
  
  return {
    courses: learningPath,
    trendingTopics,
    popularPathways
  };
}
