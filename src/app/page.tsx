import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { AnimateIn } from "@/components/animations/AnimateIn";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-20 pb-28 relative gradient-bg">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <div className="text-sm font-medium text-muted-foreground">
                Trusted by 1.5M Code Learners
              </div>
              <AnimateIn variant="fadeInUp">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Consistency and Community
                </h1>
              </AnimateIn>
              <AnimateIn variant="fadeInUp" delay={0.1}>
                <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-xl mx-auto">
                  An unmatched Learning Experience for coding courses.
                </p>
              </AnimateIn>
              <AnimateIn variant="fadeInUp" delay={0.2}>
                <p className="text-base text-muted-foreground mt-2">
                  Content is everywhere, but we provide a learning experience that is unmatched bounties,
                  peer learning, code reviews, virtual hostel, alumni network, doubt sessions, and group projects.
                </p>
              </AnimateIn>

              <AnimateIn variant="fadeIn" delay={0.3}>
                <div className="flex flex-wrap justify-center items-center gap-5 mt-8">
                  <AnimateIn variant="staggered" staggerIndex={0}>
                    <div className="flex items-center space-x-2">
                      <Image src="https://ext.same-assets.com/1164579316/4061061103.svg" alt="Peer learning" width={20} height={20} />
                      <span className="text-sm">Peer learning</span>
                    </div>
                  </AnimateIn>
                  <AnimateIn variant="staggered" staggerIndex={1}>
                    <div className="flex items-center space-x-2">
                      <Image src="https://ext.same-assets.com/1164579316/2320907649.svg" alt="Code reviews" width={20} height={20} />
                      <span className="text-sm">Code reviews</span>
                    </div>
                  </AnimateIn>
                  <AnimateIn variant="staggered" staggerIndex={2}>
                    <div className="flex items-center space-x-2">
                      <Image src="https://ext.same-assets.com/1164579316/1998606599.svg" alt="Virtual hostel" width={20} height={20} />
                      <span className="text-sm">Virtual hostel</span>
                    </div>
                  </AnimateIn>
                  <AnimateIn variant="staggered" staggerIndex={3}>
                    <div className="flex items-center space-x-2">
                      <Image src="https://ext.same-assets.com/1164579316/1367661487.svg" alt="Doubt sessions" width={20} height={20} />
                      <span className="text-sm">Doubt sessions</span>
                    </div>
                  </AnimateIn>
                  <AnimateIn variant="staggered" staggerIndex={4}>
                    <div className="flex items-center space-x-2">
                      <Image src="https://ext.same-assets.com/1164579316/2838098675.svg" alt="Bounties" width={20} height={20} />
                      <span className="text-sm">Bounties</span>
                    </div>
                  </AnimateIn>
                </div>
              </AnimateIn>

              <AnimateIn variant="fadeInUp" delay={0.5}>
                <div className="code-snippet mt-6 mx-auto max-w-md">
                  <code className="text-xs text-muted-foreground">
                    {`const renderTweets = () => {};`}
                  </code>
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* Tweet Love Section */}
        <section id="tweet-love" className="py-16 bg-background">
          <div className="container-custom">
            <div className="text-center mb-8">
              <AnimateIn variant="fadeIn">
                <p className="text-sm text-muted-foreground mb-2">
                  Love that we get from our community
                </p>
              </AnimateIn>
              <AnimateIn variant="fadeInUp">
                <h2 className="text-3xl font-bold mb-8">Tweet Love</h2>
              </AnimateIn>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((index) => (
                  <AnimateIn key={index} variant="staggered" staggerIndex={index} className="w-full">
                    <div
                      className="bg-card rounded-lg p-6 flex flex-col relative min-h-[220px]"
                    >
                    <div className="flex justify-center items-center h-full">
                      <div className="flex flex-col items-center space-y-2 text-orange-500">
                        <Image
                          src="https://ext.same-assets.com/1660372807/92094902.svg"
                          alt="Twitter"
                          width={24}
                          height={24}
                        />
                        <span className="text-sm text-muted-foreground">Loading tweet...</span>
                      </div>
                    </div>
                  </div>
                  </AnimateIn>
                ))}
              </div>

              <Button
                className="mt-10 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg"
                asChild
              >
                <Link href="https://courses.chaicode.com/learn/view-all?show=batch&type=17">
                  Join ChaiCode Courses
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Cohorts Section */}
        <section id="cohorts" className="py-16 bg-background">
          <div className="container-custom">
            <div className="mb-10">
              <div className="code-snippet max-w-lg mb-4">
                <code className="text-xs text-muted-foreground">
                  {`function renderCohorts() {return <div>Live Classes</div>;} const let=>async await import export function`}
                </code>
              </div>
              <div className="flex items-center space-x-2">
                <h2 className="text-3xl font-bold">Cohorts</h2>
                <span className="text-sm text-muted-foreground">Live training classes</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Full Stack Data Science 1.0",
                  description: "From Python basics to project deployment",
                  date: "Starts April 12, 2025",
                  duration: "6 months",
                  code: "import pandas as pd\nimport numpy as np\nfrom sklearn.model_selection import train_test_split\n\ndf = pd.read_csv('data.csv')",
                  language: "python",
                  price: "6999 INR",
                  originalPrice: "8999 INR",
                  discount: "Save 22%",
                  tags: ["Python", "TensorFlow", "Pandas", "+1"],
                  link: "https://hitesh.ai/data-science"
                },
                {
                  title: "GenAI with Python | Concept to deployment projects 1.0",
                  description: "Development side of AI application",
                  date: "Starts April 7, 2025",
                  duration: "1-2 months",
                  code: "from transformers import AutoModelForCausalLM, AutoTokenizer\n\ntokenizer = AutoTokenizer.from_pretrained(\"gpt2\")\nmodel = AutoModelForCausalLM.from_pretrained(\"gpt2\")\ninputs = tokenizer(\"AI is transforming\", return_tensors=\"pt\")",
                  language: "python",
                  price: "4999 INR",
                  originalPrice: "7999 INR",
                  discount: "Save 38%",
                  tags: ["Python", "LLMs", "Transformers", "+1"],
                  link: "https://hitesh.ai/genai-cohort"
                },
                {
                  title: "DevOps for developers 1.0",
                  description: "Perfect guide to get started with DevOps",
                  date: "Starts April 15, 2025",
                  duration: "1-2 months",
                  code: "version: '3'\nservices:\n  web:\n    image: nginx:alpine\n    ports:",
                  language: "yaml",
                  price: "4999 INR",
                  originalPrice: "7999 INR",
                  discount: "Save 38%",
                  tags: ["Docker", "Kubernetes", "CI/CD", "+1"],
                  link: "https://hitesh.ai/devops-cohort"
                }
              ].map((cohort, index) => (
                <div key={index} className="group relative">
                  <div className="absolute top-2 left-2 z-10 bg-primary/20 backdrop-blur-sm text-xs rounded px-2 py-0.5">
                    LIVE
                  </div>

                  <div className="bg-card rounded-lg border border-border hover:border-primary/50 transition-colors overflow-hidden h-full flex flex-col">
                    <div className="p-5 flex-1">
                      <div className="flex gap-2 flex-wrap mb-2">
                        {cohort.tags.map((tag, idx) => (
                          <span key={idx} className="text-xs bg-secondary/50 rounded px-2 py-0.5">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-lg font-bold mb-1">{cohort.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{cohort.description}</p>

                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                        <span>{cohort.date}</span>
                        <span>{cohort.duration}</span>
                      </div>

                      <div className="code-snippet h-28 overflow-hidden mb-2">
                        <pre className="text-xs text-muted-foreground">
                          <code>{cohort.code}</code>
                        </pre>
                      </div>

                      <div className="flex items-center text-xs mb-1">
                        <span className="px-2 py-0.5 bg-secondary/50 rounded mr-2">
                          {cohort.language}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 pt-0 mt-auto">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <span className="font-bold text-lg mr-2">{cohort.price}</span>
                          <span className="text-xs line-through text-muted-foreground">{cohort.originalPrice}</span>
                        </div>
                        <span className="text-xs text-green-500">{cohort.discount}</span>
                      </div>

                      <Button
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                        asChild
                      >
                        <Link href={cohort.link}>
                          Enroll Now
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg"
                asChild
              >
                <Link href="https://courses.chaicode.com/learn/view-all?show=batch&type=17">
                  View all Cohorts
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-background">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-6">Key Benefits of Cohorts</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Cohorts are best way to learn because you finish the course in a timely manner
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Taught by Professionals",
                  description: "Our cohorts are being taught by top industry experts and educators",
                  code: "class Teacher extends Professional { /* ... */ }",
                  image: "https://images.unsplash.com/photo-1544531585-9847b68c8c86?w=500&h=500&fit=crop"
                },
                {
                  title: "Bounties",
                  description: "Earn rewards, from Cash to MacBook. Keeps you motivated to work hard",
                  code: "const reward = solveChallenge(difficulty)",
                  image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=500&h=500&fit=crop"
                },
                {
                  title: "Coding hostels",
                  description: "There is nothing like late night discussion with fellow learners and solving bugs",
                  code: "while(night) { solveProblems(together) }",
                  image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=500&fit=crop"
                },
                {
                  title: "Peer Code Reviews",
                  description: "With Our internal tools like Masterji, every code assignment gets feedback to improve your code",
                  code: "// TODO: Refactor this for better performance",
                  image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=500&fit=crop"
                },
                {
                  title: "Leet Lab",
                  description: "Our in-house built LeetCode style platform that helps you to understand foundation of programming language",
                  code: "function optimizeSolution(algorithm) { /* ... */ }",
                  image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=500&h=500&fit=crop"
                },
                {
                  title: "Revision classes",
                  description: "We have so many peer classes by fellow learners that you get so many chances to learn that topic",
                  code: "for(let i = 0; i < concepts.length; i++) { revise() }",
                  image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=500&h=500&fit=crop"
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-card rounded-lg overflow-hidden group">
                  <div className="aspect-square relative">
                    <Image
                      src={benefit.image}
                      alt={benefit.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{benefit.description}</p>
                    <div className="code-snippet">
                      <code className="text-xs text-muted-foreground">{benefit.code}</code>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 bg-card rounded-lg border border-border">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="mb-6 md:mb-0">
                  <Image
                    src="https://ext.same-assets.com/1164579316/906017591.svg"
                    alt="Alumni Network"
                    width={80}
                    height={80}
                    className="mx-auto md:mx-0"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Alumni Network and job listings</h3>
                  <p className="text-muted-foreground">
                    The alumni Network that you always wished for in your college. We have a dedicated platform where students get to know each other, do projects, make agencies and join Hackathons.
                  </p>
                  <p className="text-muted-foreground mt-2">
                    Our HR team also post regular job updates that you can apply directly whenever you are ready
                  </p>
                  <div className="code-snippet mt-4">
                    <code className="text-xs text-muted-foreground">
                      {/* connect.alumni.network() */}
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Udemy Courses Section */}
        <section id="udemy" className="py-16 bg-background">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-4">Our Courses on Udemy</h2>
            <p className="text-muted-foreground mb-12">
              Join thousands of students who have transformed their careers with our comprehensive courses
            </p>

            <div className="bg-card rounded-lg p-8 border border-border">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-2">Complete web development course</h3>
                  <p className="text-muted-foreground mb-6">
                    Only web development course that you will need. Covers HTML, CSS, Tailwind, Node, React, MongoDB, Prisma, Deployment etc
                  </p>

                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-2xl font-bold">4.7</span>
                    <div className="flex">
                      <Image
                        src="https://ext.same-assets.com/1164579316/1195993520.svg"
                        alt="Star"
                        width={16}
                        height={16}
                      />
                      <Image
                        src="https://ext.same-assets.com/1164579316/3304711307.svg"
                        alt="Rating"
                        width={80}
                        height={16}
                        className="ml-1"
                      />
                    </div>
                    <span className="bg-primary/20 text-primary text-xs px-2 py-0.5 rounded">Top Rated</span>
                  </div>

                  <div className="flex items-center space-x-4">
                    <span className="text-2xl font-bold">399</span>
                    <span className="text-sm text-muted-foreground line-through">3,099</span>
                    <span className="text-green-500 text-sm">87% off</span>
                  </div>

                  <Button
                    className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg"
                    asChild
                  >
                    <Link href="https://hitesh.ai/udemy">
                      Get The Course
                    </Link>
                  </Button>

                  <div className="mt-2 text-xs text-muted-foreground">
                    45 minutes left at this price!
                  </div>
                </div>

                <div className="md:w-1/3 flex flex-col justify-end">
                  <div className="code-snippet">
                    <code className="text-xs text-muted-foreground">
                      // udemy.courses.web_development
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* YouTube Section */}
        <section className="py-16 bg-background">
          <div className="container-custom">
            <div className="code-snippet max-w-lg mb-4">
              <code className="text-xs text-muted-foreground">
                {`function subscribe() {} const videos = []; function Channel() { return <div></div>; } useState(); return; export default; import React; channels.map(); // Like and subscribe! /* Free tutorials */`}
              </code>
            </div>

            <h2 className="text-3xl font-bold mb-4">Explore Our Engaging YouTube Channels</h2>
            <p className="text-muted-foreground mb-12">
              Follow our channels for free learning resources.
            </p>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <Image
                  src="https://ext.same-assets.com/1164579316/3118994955.png"
                  alt="Hitesh Choudhary YouTube Channel"
                  width={400}
                  height={300}
                  className="rounded-lg mb-4"
                />
              </div>

              <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="flex items-center space-x-3 mb-4">
                    <Image
                      src="https://ext.same-assets.com/1164579316/801332402.svg"
                      alt="YouTube"
                      width={24}
                      height={24}
                    />
                    <div>
                      <h3 className="font-bold">Chai aur Code</h3>
                      <p className="text-xs text-muted-foreground">@chaiaurcode</p>
                    </div>
                  </div>

                  <div className="flex justify-between text-sm mb-4">
                    <span>600K subscribers</span>
                    <span>545 videos</span>
                  </div>

                  <Button
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    size="sm"
                    asChild
                  >
                    <Link href="https://youtube.com/@chaiaurcode" target="_blank" rel="noopener noreferrer">
                      Subscribe
                    </Link>
                  </Button>
                </div>

                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="flex items-center space-x-3 mb-4">
                    <Image
                      src="https://ext.same-assets.com/1164579316/1132317054.svg"
                      alt="YouTube"
                      width={24}
                      height={24}
                    />
                    <div>
                      <h3 className="font-bold">Hitesh Choudhary</h3>
                      <p className="text-xs text-muted-foreground">@HiteshCodeLab</p>
                    </div>
                  </div>

                  <div className="flex justify-between text-sm mb-4">
                    <span>987K subscribers</span>
                    <span>1.6K videos</span>
                  </div>

                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs px-2 py-0.5 bg-secondary/50 rounded">English</span>
                  </div>

                  <Button
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    size="sm"
                    asChild
                  >
                    <Link href="https://www.youtube.com/@Hiteshcodelab" target="_blank" rel="noopener noreferrer">
                      Subscribe
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile App Section */}
        <section className="py-16 bg-background">
          <div className="container-custom">
            <div className="bg-card rounded-lg border border-border overflow-hidden">
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-3">Learn on the go</h2>
                <p className="text-muted-foreground mb-8 max-w-2xl">
                  Take your coding journey anywhere with the ChaiCode mobile app. Access courses, join live sessions, and connect with the community - all from your pocket.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-start space-x-3">
                    <Image
                      src="https://ext.same-assets.com/1164579316/1565864488.svg"
                      alt="Offline"
                      width={24}
                      height={24}
                    />
                    <span>Offline course access</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Image
                      src="https://ext.same-assets.com/1164579316/3927218253.svg"
                      alt="Notifications"
                      width={24}
                      height={24}
                    />
                    <span>Live session notifications</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Image
                      src="https://ext.same-assets.com/1164579316/840275654.svg"
                      alt="Revision"
                      width={24}
                      height={24}
                    />
                    <span>Revision while commuting</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Link href="https://apps.apple.com/in/app/chaicode/id6504993143" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
                      alt="App Store"
                      width={140}
                      height={42}
                    />
                  </Link>
                  <Link href="https://play.google.com/store/apps/details?id=com.chaicode.courses&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                      alt="Google Play"
                      width={160}
                      height={62}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
