import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  return (
    <header className="border-b border-border/10 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container-custom py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="mr-8">
            <Image
              src="https://ext.same-assets.com/1164579316/3643445404.svg"
              alt="ChaiCode"
              width={130}
              height={36}
              priority
              className="h-9 w-auto"
            />
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/#cohorts"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Cohorts
            </Link>
            <Link
              href="/#udemy"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Udemy
            </Link>
            <Link
              href="https://docs.chaicode.com"
              className="text-sm font-medium hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Docs
            </Link>
            <Link
              href="/reviews"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Reviews
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg"
          >
            <Link href="https://courses.chaicode.com/learn/account/signin">
              Login
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
