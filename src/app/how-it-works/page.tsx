import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Briefcase,
  Calendar,
  GlassWater,
  Menu,
  PartyPopper,
  Users,
  Waves,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const eventTypes = [
  {
    icon: PartyPopper,
    title: "Private Parties",
    description:
      "Birthdays, anniversaries, or just a weekend bash. Make it memorable with a silent disco.",
  },
  {
    icon: Briefcase,
    title: "Corporate Events",
    description:
      "Engage your team with a unique twist on company parties, conferences, and team-building events.",
  },
  {
    icon: Calendar,
    title: "Weddings",
    description:
      "Keep the party going late without noise complaints. Offer multiple music channels to please all your guests.",
  },
  {
    icon: GlassWater,
    title: "Festivals & Fairs",
    description:
      "Create a dedicated silent disco tent or stage to offer a unique experience for festival-goers.",
  },
  {
    icon: Users,
    title: "School Functions",
    description:
      "A fun and safe way for students of all ages to enjoy a dance, from proms to school carnivals.",
  },
  {
    icon: Waves,
    title: "Yoga & Wellness",
    description:
      "Create an immersive, focused environment for yoga sessions or wellness retreats with guided audio.",
  },
];

const steps = [
  {
    step: "ONE",
    title: "Tell Us About Your Event",
    description:
      "Send us a message with more information about the event you're planning.",
    image: {
      src: "/images/Gallery_23.webp",
      alt: "A crowd at a concert with their hands up.",
      hint: "concert crowd",
    },
  },
  {
    step: "TWO",
    title: "Get a Personalized Quote",
    description:
      "We'll provide a cost estimate based on your event's specific requirements.",
    image: {
      src: "/images/Gallery_24.webp",
      alt: "A DJ's mixing desk with colorful lights.",
      hint: "dj console",
    },
  },
  {
    step: "THREE",
    title: "Host Your Own Silent Disco",
    description:
      "Our team will arrive prior to the start of your event and set up the equipment for you.",
    image: {
      src: "/images/Gallery_25.jpg",
      alt: "A music festival stage with lights.",
      hint: "festival stage",
    },
  },
];

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <PartyPopper className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg font-headline">HushClub</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/how-it-works">How it Works</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/gallery">Gallery</Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="/#quote">Get a Quote</Link>
            </Button>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium mt-16">
                <Link
                  href="/how-it-works"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  How it Works
                </Link>
                <Link
                  href="/gallery"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Gallery
                </Link>
                <Link
                  href="/#quote"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Get a Quote
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="container">
            <div className="text-center space-y-3 mb-8 md:mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-headline">
                Perfect for Any Occasion
              </h1>
              <p className="text-muted-foreground max-w-3xl mx-auto text-sm sm:text-base">
                A silent disco is a versatile and unforgettable addition to any
                event. Explore the possibilities and see how we can tailor the
                experience to your specific needs.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {eventTypes.map((event, index) => (
                <Card key={index} className="bg-card/50 text-center p-4 sm:p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="bg-primary/10 p-3 sm:p-4 rounded-full">
                      <event.icon className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold font-headline mb-2">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    {event.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          className="py-12 sm:py-16 md:py-20 lg:py-24 bg-card/80"
        >
          <div className="container">
            <div className="text-center space-y-3 mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold font-headline">
                How It Works
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
                Getting started with your silent disco is as easy as 1, 2, 3.
              </p>
            </div>
            <div className="space-y-8 md:space-y-12 max-w-4xl mx-auto">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-center gap-6 md:gap-8 bg-card p-6 md:p-8 rounded-2xl shadow-lg"
                >
                  <div className="md:w-1/3 w-full">
                    <Image
                      src={step.image.src}
                      alt={step.image.alt}
                      width={600}
                      height={400}
                      data-ai-hint={step.image.hint}
                      className="rounded-xl object-cover aspect-video w-full"
                    />
                  </div>
                  <div className="flex-1 flex items-center justify-between w-full">
                    <div className="space-y-2 text-center md:text-left">
                      <p className="text-primary font-semibold text-sm font-headline tracking-wider">
                        STEP {step.step}
                      </p>
                      <h3 className="text-xl sm:text-2xl font-bold font-headline">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm sm:text-base">
                        {step.description}
                      </p>
                    </div>
                    <div className="hidden md:block ml-8">
                      <div className="flex items-center justify-center h-16 w-16 rounded-full border-2 border-primary/50">
                        <span className="text-2xl font-bold text-primary font-headline">
                          {index + 1}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 bg-card">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-2">
            <PartyPopper className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg font-headline">HushClub</span>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} HushClub. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            Developed by{" "}
            <a
              href="https://www.dexmiq.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Dexmiq
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
