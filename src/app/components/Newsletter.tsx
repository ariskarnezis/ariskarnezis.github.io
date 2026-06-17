import { useState } from "react";
import { Button } from "./ui/button";
import { Mail, CheckCircle2 } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address");
      return;
    }

    // Send email notification with subscriber's email
    const subject = encodeURIComponent("New Newsletter Subscriber");
    const body = encodeURIComponent(
      `New subscriber to your newsletter:\n\nEmail: ${email}\n\nSubscribed on: ${new Date().toLocaleString()}`
    );
    
    window.location.href = `mailto:a.karnezis@protonmail.com?subject=${subject}&body=${body}`;

    // Show success message
    setStatus("success");
    setMessage("Thanks for subscribing! You'll receive updates about new research and insights.");
    setEmail("");

    // Reset after 5 seconds
    setTimeout(() => {
      setStatus("idle");
      setMessage("");
    }, 5000);
  };

  return (
    <section className="py-20 bg-[#2d2d2d] dark:bg-[#2d2d2d] text-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
            <Mail className="w-8 h-8" />
          </div>
          <h2 className="text-4xl mb-4">Stay Updated</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Get notified about new research projects, blog posts, and insights from the intersection 
            of mathematics, physics, and machine learning.
          </p>
        </div>

        {status === "success" ? (
          <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-6 max-w-xl mx-auto">
            <div className="flex items-center gap-3 justify-center text-green-200">
              <CheckCircle2 className="w-6 h-6" />
              <p className="font-medium">{message}</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-lg bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                required
              />
              <Button 
                type="submit" 
                size="lg" 
                className="bg-white text-slate-900 hover:bg-slate-100 whitespace-nowrap"
              >
                Subscribe
              </Button>
            </div>
            
            {status === "error" && (
              <p className="text-red-300 text-sm mt-3">{message}</p>
            )}
            
            <p className="text-slate-400 text-sm mt-4 text-center">
              No spam, unsubscribe anytime. Typically one email per month with the latest updates.
            </p>
          </form>
        )}

        <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold mb-2">Monthly</div>
            <div className="text-slate-400">Email frequency</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">Quality</div>
            <div className="text-slate-400">Content over quantity</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">Free</div>
            <div className="text-slate-400">Always free to subscribe</div>
          </div>
        </div>
      </div>
    </section>
  );
}