import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { JSX, SVGProps } from "react";

export default function Component() {
  const router = useRouter();
  const isHomePage = router.pathname === "/";
  const [open, setOpen] = useState(false); // Track sidebar state

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
        {["Home", "Projects", "Achievements", "Sponsorship", "Contact Us!"].map(
          (item, index) => (
            <Link
              key={index}
              href={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s/g, "")}`}
              className="text-primary-foreground hover:text-blue-500"
              prefetch={false}
            >
              {item}
            </Link>
          )
        )}
      </nav>


        {/* Mobile Navigation */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6 text-black" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-white">
            <div className="grid gap-4 p-6 text-black">
              {["Home", "Projects", "Achievements", "Sponsorship", "Contact Us!"].map(
                (item, index) => (
                  <Link
                    key={index}
                   href={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s/g, "")}`}
                    className="flex items-center gap-2 hover:text-blue-500 transition-colors"
                    prefetch={false}
                    onClick={() => setOpen(false)} // Close sidebar on click
                  >
                    {item}
                  </Link>
                )
              )}
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
