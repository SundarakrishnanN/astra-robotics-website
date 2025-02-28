import { useRouter } from "next/router";
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { JSX, SVGProps } from "react";

export default function Component() {
  const router = useRouter();
  const isHomePage = router.pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-colors duration-300 ${
        isHomePage ? "bg-transparent" : "bg-black"
      }`}
    >
      <div className="flex h-16 w-full items-center justify-between px-4 md:px-6 shadow border-b-2 border-transparent">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <img src="/astralogo.png" alt="Logo" className="h-12 w-auto" />
          <span className="text-lg font-bold text-white">Astra Robotics</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden gap-6 text-sm font-medium md:flex">
          <Link href="/" className="text-primary-foreground hover:text-blue-500" prefetch={false}>
            Home
          </Link>
          <Link href="/projects" className="text-primary-foreground hover:text-blue-500" prefetch={false}>
            Projects
          </Link>
          <Link href="/achievements" className="text-primary-foreground hover:text-blue-500" prefetch={false}>
            Achievements
          </Link>
          <Link href="/sponsorship" className="text-primary-foreground hover:text-blue-500" prefetch={false}>
            Sponsorship
          </Link>
          <Link href="/contact" className="text-primary-foreground hover:text-blue-500" prefetch={false}>
            Contact Us!
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6 text-black" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-white">
            <div className="grid gap-4 p-6 text-black">
              <Link href="/" className="flex items-center gap-2 hover:text-blue-500 transition-colors" prefetch={false}>
                Home
              </Link>
              <Link href="/projects" className="flex items-center gap-2 hover:text-blue-500 transition-colors" prefetch={false}>
                Projects
              </Link>
              <Link href="/achievements" className="flex items-center gap-2 hover:text-blue-500 transition-colors" prefetch={false}>
                Achievements
              </Link>
              <Link href="/sponsorship" className="flex items-center gap-2 hover:text-blue-500 transition-colors" prefetch={false}>
                Sponsorship
              </Link>
              <Link href="/contact" className="flex items-center gap-2 hover:text-blue-500 transition-colors" prefetch={false}>
                Contact Us!
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
