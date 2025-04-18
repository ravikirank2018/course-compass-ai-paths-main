
import { GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { Link } from "react-router-dom";

export function Header() {
  const { user, signOut } = useAuth();

  return (
    <header className="w-full py-5 px-4 md:px-8 border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <GraduationCap className="h-8 w-8 text-education-600" />
          <h1 className="text-xl font-bold text-education-800">
            Course<span className="text-education-600">Match</span>
          </h1>
        </Link>

        <div className="flex items-center gap-4">
          <div className="text-sm text-gray-600">
            Your AI Academic Compass 🎓✨
          </div>
          {user ? (
            <Button variant="outline" onClick={signOut}>
              Sign Out
            </Button>
          ) : (
            <Button variant="outline" asChild>
              <Link to="/auth">Sign In</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
