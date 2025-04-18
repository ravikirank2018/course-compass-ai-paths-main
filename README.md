# Course Compass AI Paths

## Description

Course Compass AI Paths is a web application designed to help users discover personalized learning paths and courses. By leveraging AI-powered recommendations, it guides users towards resources that align with their specific interests and career goals.

## Technologies Used

* **Frontend:**
    * **React:**  A JavaScript library for building user interfaces.
    * **TypeScript:**  A language for application-scale JavaScript development.
    * **Vite:** A build tool that aims to provide a faster and leaner development experience for modern web projects.
    * **Tailwind CSS:** A utility-first CSS framework for rapidly styling custom designs.
    * **Shadcn UI or Radix UI:**  A library of accessible and customizable UI components (likely one of these, but needs verification).

* **Backend:**
    * **Supabase:** An open-source Firebase alternative, providing a PostgreSQL database, authentication, and other backend services.

* **Development Tools:**
    * **Node.js:** A JavaScript runtime environment.
    * **npm:**  The Node package manager for managing project dependencies.
    * **ESLint:** A tool for identifying and reporting on patterns found in JavaScript/TypeScript code.
    * **PostCSS:** A tool for transforming CSS with JavaScript.
    * **Git:** A distributed version control system for tracking changes in source code.

## Running the Project Locally

To run the project on your local machine, follow these steps:

1. **Clone the repository:**
```
bash
   git clone [repository_url]
   cd course-compass-ai-paths
   
```
(Replace `[repository_url]` with the actual URL of the project repository.)

2. **Install dependencies:**
```
bash
   npm install
   
```
3. **Set up Supabase:**
    * You'll need a Supabase project. If you don't have one, create a new project at [https://supabase.com/](https://supabase.com/).
    * Copy the `.env.example` file to a new file named `.env`.
    * Update the `.env` file with your Supabase project URL and API keys.  You can find these in your Supabase project settings. The required variables are:
```
      VITE_SUPABASE_URL=your_supabase_url
      VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
      
```
4. **Run the development server:**
```
bash
   npm run dev
   
```
This will start the development server. You can usually access the application in your browser at  `http://localhost:5173/` (or the address shown in your terminal output).

**Note:** You might need to run database migrations or seed the database with initial data depending on the project's setup. Refer to any specific instructions in the project's documentation or from the developers if necessary.
