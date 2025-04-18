
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";

interface UserInputFormProps {
  onSubmit: (formData: UserFormData) => void;
}

export interface UserFormData {
  interests: string;
  goals: string;
  previousKnowledge: string;
  timeCommitment: number;
  difficultyLevel: number;
}

export function UserInputForm({ onSubmit }: UserInputFormProps) {
  const [formData, setFormData] = useState<UserFormData>({
    interests: "",
    goals: "",
    previousKnowledge: "",
    timeCommitment: 5,
    difficultyLevel: 3,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSliderChange = (name: string, value: number[]) => {
    setFormData((prev) => ({ ...prev, [name]: value[0] }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Card className="p-6 w-full max-w-2xl shadow-lg border-t-4 border-t-education-500 bg-white">
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6 text-education-800">
          Tell us about your learning journey
        </h2>

        <div className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="interests" className="text-gray-700">What topics interest you?</Label>
            <Textarea
              id="interests"
              name="interests"
              placeholder="E.g., Data Structures, AI, Web Development, Cloud Computing..."
              value={formData.interests}
              onChange={handleChange}
              className="min-h-24 resize-none"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="goals" className="text-gray-700">What are your learning goals?</Label>
            <Textarea
              id="goals"
              name="goals"
              placeholder="E.g., Become a full-stack developer, prepare for an ML engineer role..."
              value={formData.goals}
              onChange={handleChange}
              className="min-h-24 resize-none"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="previousKnowledge" className="text-gray-700">
              What do you already know?
            </Label>
            <Textarea
              id="previousKnowledge"
              name="previousKnowledge"
              placeholder="E.g., Basic Python, HTML/CSS, Database fundamentals..."
              value={formData.previousKnowledge}
              onChange={handleChange}
              className="min-h-24 resize-none"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="timeCommitment" className="text-gray-700">
              Weekly time commitment (hours): {formData.timeCommitment}
            </Label>
            <Slider
              id="timeCommitment"
              defaultValue={[5]}
              max={20}
              min={1}
              step={1}
              onValueChange={(value) => handleSliderChange("timeCommitment", value)}
              className="py-4"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="difficultyLevel" className="text-gray-700">
              Preferred difficulty level: {formData.difficultyLevel}/5
            </Label>
            <Slider
              id="difficultyLevel"
              defaultValue={[3]}
              max={5}
              min={1}
              step={1}
              onValueChange={(value) => handleSliderChange("difficultyLevel", value)}
              className="py-4"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-education-600 hover:bg-education-700 text-white"
          >
            Generate My Learning Path
          </Button>
        </div>
      </form>
    </Card>
  );
}
