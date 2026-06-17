import { Button } from "./ui/button";
import { Home, Search } from "lucide-react";
import { Link } from "react-router";

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-[#0a0e14] dark:to-[#0a0e14] flex items-center justify-center px-6 pt-16">
        <div className="text-center max-w-2xl">
          {/* Large 404 */}
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-slate-200 select-none">404</h1>
            <div className="relative -mt-16">
              <h2 className="text-4xl font-semibold text-slate-900 mb-4">Page Not Found</h2>
            </div>
          </div>

          {/* Description */}
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Looks like you've wandered into uncharted territory. The page you're looking for doesn't exist, 
            or it may have been moved to a different location.
          </p>

          {/* Helpful message */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <p className="text-slate-700">
              <span className="font-semibold">Lost in the equations?</span> Don't worry, even the best mathematicians 
              occasionally take wrong turns. Let's get you back on track.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2" asChild>
              <Link to="/">
                <Home className="w-5 h-5" />
                Back to Home
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <Link to="/#projects">
                <Search className="w-5 h-5" />
                Explore Research
              </Link>
            </Button>
          </div>

          {/* Decorative elements */}
          <div className="mt-16 text-slate-400">
            <p className="text-sm italic">
              "Not all those who wander are lost... but this page definitely is."
            </p>
          </div>
        </div>
    </div>
  );
}
