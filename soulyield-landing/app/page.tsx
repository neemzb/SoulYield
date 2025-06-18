import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Brain, Heart, Zap, Star, ArrowRight, Circle } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-rose-50 to-emerald-50">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-rose-300 to-emerald-300 rounded-full flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="text-2xl font-light text-stone-800">SoulYield</span>
        </div>
        <Button variant="ghost" className="text-stone-600 hover:text-stone-800">
          Sign In
        </Button>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 py-20 max-w-7xl mx-auto text-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-1/4 w-64 h-64 bg-gradient-to-br from-rose-200/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-br from-emerald-200/30 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10">
          <Badge className="mb-6 bg-gradient-to-r from-rose-100 to-emerald-100 text-stone-700 border-0 px-4 py-2">
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Inner Evolution
          </Badge>

          <h1 className="text-5xl md:text-7xl font-light text-stone-800 mb-6 leading-tight">
            Unlock Your
            <span className="block bg-gradient-to-r from-rose-400 to-emerald-400 bg-clip-text text-transparent font-normal">
              Inner Potential
            </span>
          </h1>

          <p className="text-xl text-stone-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Where artificial intelligence meets ancient wisdom. SoulYield guides your journey toward mental clarity,
            emotional resilience, and profound inner growth through personalized AI coaching.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-rose-400 to-emerald-400 hover:from-rose-500 hover:to-emerald-500 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Unlock Early Access
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="ghost" size="lg" className="text-stone-600 hover:text-stone-800 px-8 py-6 text-lg">
              Watch Demo
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center space-x-8 text-sm text-stone-500">
            <div className="flex items-center">
              <Circle className="w-2 h-2 fill-emerald-400 text-emerald-400 mr-2" />
              No credit card required
            </div>
            <div className="flex items-center">
              <Circle className="w-2 h-2 fill-rose-400 text-rose-400 mr-2" />
              Early access pricing
            </div>
          </div>
        </div>
      </section>

      {/* How AI Guides Growth */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-stone-800 mb-4">Your Personal AI Guide</h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Experience the perfect fusion of cutting-edge technology and timeless wisdom, tailored specifically for your
            unique growth journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-0 bg-white/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-300 to-rose-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-stone-800 mb-4">Personalized Insights</h3>
              <p className="text-stone-600 leading-relaxed">
                Our AI analyzes your patterns, emotions, and goals to provide deeply personalized guidance that evolves
                with your growth journey.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-300 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-stone-800 mb-4">Emotional Intelligence</h3>
              <p className="text-stone-600 leading-relaxed">
                Develop deeper emotional awareness and resilience through AI-powered exercises designed to strengthen
                your inner foundation.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-300 to-amber-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-stone-800 mb-4">Transformative Action</h3>
              <p className="text-stone-600 leading-relaxed">
                Turn insights into lasting change with AI-curated practices, meditations, and growth exercises tailored
                to your unique path.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="px-6 py-20 bg-gradient-to-r from-stone-100/50 to-rose-100/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-light text-stone-800 mb-6">Soul-Focused Optimization</h2>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                Unlike traditional wellness apps, SoulYield goes beyond surface-level metrics to nurture your deepest
                potential for growth and transformation.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-gradient-to-br from-rose-400 to-emerald-400 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-stone-800 mb-2">Enhanced Mental Clarity</h3>
                    <p className="text-stone-600">
                      Cut through mental fog with AI-guided practices that sharpen focus and decision-making.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-gradient-to-br from-rose-400 to-emerald-400 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-stone-800 mb-2">Emotional Resilience</h3>
                    <p className="text-stone-600">
                      Build unshakeable inner strength through personalized emotional intelligence training.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-gradient-to-br from-rose-400 to-emerald-400 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-stone-800 mb-2">Accelerated Growth</h3>
                    <p className="text-stone-600">
                      Experience breakthrough moments faster with AI that learns and adapts to your unique journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-rose-200/30 via-emerald-200/30 to-amber-200/30 rounded-3xl flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Meditation and inner growth visualization"
                  className="w-80 h-72 object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-rose-300 to-emerald-300 rounded-full blur-xl opacity-60 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-stone-800 mb-4">Transformative Experiences</h2>
          <p className="text-lg text-stone-600">
            Early users are already experiencing profound shifts in their inner landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-0 bg-white/70 backdrop-blur-sm shadow-lg">
            <CardContent className="p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-stone-700 mb-6 leading-relaxed">
                "SoulYield helped me break through patterns I've carried for years. The AI guidance feels incredibly
                intuitive and personal."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-300 to-emerald-300 rounded-full mr-4"></div>
                <div>
                  <p className="font-medium text-stone-800">Sarah Chen</p>
                  <p className="text-sm text-stone-600">Wellness Coach</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white/70 backdrop-blur-sm shadow-lg">
            <CardContent className="p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-stone-700 mb-6 leading-relaxed">
                "The perfect blend of technology and spirituality. I've never felt more aligned with my authentic self."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-300 to-amber-300 rounded-full mr-4"></div>
                <div>
                  <p className="font-medium text-stone-800">Marcus Rodriguez</p>
                  <p className="text-sm text-stone-600">Entrepreneur</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white/70 backdrop-blur-sm shadow-lg">
            <CardContent className="p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-stone-700 mb-6 leading-relaxed">
                "My emotional resilience has transformed completely. SoulYield gave me tools I never knew I needed."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-300 to-rose-300 rounded-full mr-4"></div>
                <div>
                  <p className="font-medium text-stone-800">Elena Vasquez</p>
                  <p className="text-sm text-stone-600">Creative Director</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-20 bg-gradient-to-br from-stone-800 to-stone-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6">Your Journey Awaits</h2>
          <p className="text-xl text-stone-300 mb-8 leading-relaxed">
            Join thousands of seekers who are already transforming their lives with AI-guided inner work. Your most
            authentic self is waiting to emerge.
          </p>

          <Button
            size="lg"
            className="bg-gradient-to-r from-rose-400 to-emerald-400 hover:from-rose-500 hover:to-emerald-500 text-white px-12 py-6 text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 mb-8"
          >
            Begin Your Transformation
            <Sparkles className="ml-2 w-5 h-5" />
          </Button>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-stone-400">
            <span>✨ 30-day free trial</span>
            <span>🔒 Privacy-first approach</span>
            <span>💫 Cancel anytime</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-stone-50 border-t border-stone-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-6 h-6 bg-gradient-to-br from-rose-300 to-emerald-300 rounded-full flex items-center justify-center">
              <Sparkles className="w-3 h-3 text-white" />
            </div>
            <span className="text-lg font-light text-stone-800">SoulYield</span>
          </div>
          <div className="flex space-x-8 text-sm text-stone-600">
            <a href="#" className="hover:text-stone-800 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-stone-800 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-stone-800 transition-colors">
              Support
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
