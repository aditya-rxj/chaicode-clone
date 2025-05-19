import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-background pt-16 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div className="space-y-4">
            <Link href="/">
              <Image
                src="https://ext.same-assets.com/1164579316/3643445404.svg"
                alt="ChaiCode"
                width={130}
                height={36}
                className="h-9 w-auto mb-2"
              />
            </Link>
            <p className="text-muted-foreground text-sm">
              Home for programmers
            </p>
            <div className="flex items-center space-x-4">
              <Link href="https://www.youtube.com/@chaiaurcode" target="_blank" rel="noopener noreferrer">
                <div className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-muted transition-colors">
                  <Image src="https://ext.same-assets.com/1164579316/801332402.svg" alt="YouTube" width={16} height={16} />
                </div>
              </Link>
              <Link href="https://www.instagram.com/hiteshchoudharyofficial/" target="_blank" rel="noopener noreferrer">
                <div className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-muted transition-colors">
                  <Image src="https://ext.same-assets.com/3504833476/2563901416.svg" alt="Instagram" width={16} height={16} />
                </div>
              </Link>
              <Link href="https://github.com/hiteshchoudhary" target="_blank" rel="noopener noreferrer">
                <div className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-muted transition-colors">
                  <Image src="https://ext.same-assets.com/3504833476/260646423.svg" alt="GitHub" width={16} height={16} />
                </div>
              </Link>
              <Link href="https://x.com/hiteshdotcom" target="_blank" rel="noopener noreferrer">
                <div className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-muted transition-colors">
                  <Image src="https://ext.same-assets.com/3504833476/4061061103.svg" alt="X" width={16} height={16} />
                </div>
              </Link>
              <Link href="https://in.linkedin.com/in/hiteshchoudhary" target="_blank" rel="noopener noreferrer">
                <div className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-muted transition-colors">
                  <Image src="https://ext.same-assets.com/3504833476/548389142.svg" alt="LinkedIn" width={16} height={16} />
                </div>
              </Link>
              <Link href="https://hitesh.ai/discord" target="_blank" rel="noopener noreferrer">
                <div className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-muted transition-colors">
                  <Image src="https://ext.same-assets.com/3504833476/2067545548.svg" alt="Discord" width={16} height={16} />
                </div>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://courses.chaicode.com/learn" className="text-muted-foreground hover:text-foreground text-sm">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="https://courses.chaicode.com/learn/view-all?show=batch&type=17" className="text-muted-foreground hover:text-foreground text-sm">
                  Cohort
                </Link>
              </li>
              <li>
                <Link href="https://courses.chaicode.com/learn/batch/about?bundleId=226894" className="text-muted-foreground hover:text-foreground text-sm">
                  Coding Hero
                </Link>
              </li>
              <li>
                <Link href="https://freeapi.app" className="text-muted-foreground hover:text-foreground text-sm">
                  FreeAPI
                </Link>
              </li>
              <li>
                <Link href="https://masterji.co/login" className="text-muted-foreground hover:text-foreground text-sm">
                  Masterji
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/docs" className="text-muted-foreground hover:text-foreground text-sm">
                  Docs
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-services" className="text-muted-foreground hover:text-foreground text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/pricing-policy" className="text-muted-foreground hover:text-foreground text-sm">
                  Pricing Policy
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="text-muted-foreground hover:text-foreground text-sm">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="mb-6" />

        <div className="text-center">
          <span className="text-muted-foreground text-sm">
            © 2025 ChaiCode. All rights reserved.
          </span>
        </div>

        <div className="mt-12 flex items-center justify-center">
          <h2 className="text-5xl font-bold text-primary uppercase tracking-wider">CHAICODE</h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
