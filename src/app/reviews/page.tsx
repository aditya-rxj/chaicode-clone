import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function ReviewsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <section className="py-20 relative gradient-bg">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <div className="code-snippet max-w-md mx-auto mb-8">
                <code className="text-xs text-muted-foreground">
                  function review() {"{}"} const rating = 5 <Review /> useState() return ( export default import React feedback.map() // Excellent course! /* Highly recommended */
                </code>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Student Reviews
              </h1>
              <p className="text-lg text-muted-foreground">
                Don't just take our word for it. See what our students have to say about their learning journey.
              </p>

              <div className="code-snippet max-w-md mx-auto mt-8">
                <code className="text-xs text-muted-foreground">
                  // reviews.map((review) => {"{"} // {"}"})
                </code>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={index}
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
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
