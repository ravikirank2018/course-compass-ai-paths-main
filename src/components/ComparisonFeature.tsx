
import { ArrowDown, ArrowUp, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ComparisonFeatureProps {
  trendingTopics: string[];
  popularPathways: {
    title: string;
    count: number;
    change: number;
  }[];
}

export function ComparisonFeature({
  trendingTopics,
  popularPathways,
}: ComparisonFeatureProps) {
  return (
    <div className="flex flex-col md:flex-row gap-6 w-full max-w-3xl mx-auto">
      <Card className="flex-1 border-education-200">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-education-800">
            <Users size={18} />
            Trending Topics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {trendingTopics.map((topic) => (
              <Badge
                key={topic}
                className="bg-education-100 text-education-800 hover:bg-education-200"
              >
                {topic}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="flex-1 border-education-200">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-education-800">
            <Users size={18} />
            Popular Pathways
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {popularPathways.map((pathway) => (
              <li
                key={pathway.title}
                className="flex items-center justify-between text-sm py-1 border-b border-gray-100 last:border-0"
              >
                <span>{pathway.title}</span>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">
                    {pathway.count} students
                  </span>
                  <span
                    className={`flex items-center ${
                      pathway.change > 0
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {pathway.change > 0 ? (
                      <ArrowUp size={14} />
                    ) : (
                      <ArrowDown size={14} />
                    )}
                    {Math.abs(pathway.change)}%
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <Button
            variant="outline"
            size="sm"
            className="w-full mt-4 text-education-600 border-education-200 hover:bg-education-50"
          >
            Compare with Peers
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
