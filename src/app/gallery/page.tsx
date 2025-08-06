import Image from "next/image";
import Link from "next/link";
import { Menu, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function GalleryPage() {
  const uploadedImages = [
    {
      src: "/silent-disco/images/Gallery_1.jpg",
      alt: "A woman enjoying a silent disco party.",
      hint: "disco party",
    },
    {
      src: "/silent-disco/images/Gallery_2.jpg",
      alt: "A group of friends enjoying a silent disco party.",
      hint: "disco party",
    },
    {
      src: "/silent-disco/images/Gallery_3.jpg",
      alt: "People dancing at a silent disco with green laser lights.",
      hint: "laser lights",
    },
    {
      src: "/silent-disco/images/Gallery_4.jpg",
      alt: "People dancing at a silent disco with green laser lights.",
      hint: "laser lights",
    },
    {
      src: "/silent-disco/images/Gallery_5.webp",
      alt: "People dancing at a silent disco with green laser lights.",
      hint: "laser lights",
    },
    {
      src: "/silent-disco/images/Gallery_6.jpg",
      alt: "People dancing at a silent disco with green laser lights.",
      hint: "laser lights",
    },
    {
      src: "/silent-disco/images/Gallery_7.jpeg",
      alt: "People dancing at a silent disco with green laser lights.",
      hint: "laser lights",
    },
    {
      src: "/silent-disco/images/SilentDisco.jpg",
      alt: "People dancing at a silent disco with green laser lights.",
      hint: "laser lights",
    },
    {
      src: "/silent-disco/images/Galler_8.jpg",
      alt: "People dancing at a silent disco with green laser lights.",
      hint: "laser lights",
    },
    {
      src: "/silent-disco/images/Gallery_9.jpg",
      alt: "People dancing at a silent disco with green laser lights.",
      hint: "laser lights",
    },
    {
      src: "/silent-disco/images/Gallery_10.jpg",
      alt: "People dancing at a silent disco with green laser lights.",
      hint: "laser lights",
    },
    {
      src: "/silent-disco/images/Gallery_11.jpg",
      alt: "People dancing at a silent disco with green laser lights.",
      hint: "laser lights",
    },
    {
      src: "/silent-disco/images/image.jpg",
      alt: "People dancing at a silent disco with green laser lights.",
      hint: "laser lights",
    },
    {
      src: "/silent-disco/images/Gallery_12.jpg",
      alt: "People dancing at a silent disco with green laser lights.",
      hint: "laser lights",
    },
    {
      src: "/silent-disco/images/Gallery_13.jpg",
      alt: "People dancing at a silent disco with green laser lights.",
      hint: "laser lights",
    },
    {
      src: "/silent-disco/images/Gallery_14.jpg",
      alt: "People dancing at a silent disco with green laser lights.",
      hint: "laser lights",
    },
    {
      src: "/silent-disco/images/Gallery_15.jpg",
      alt: "People dancing at a silent disco with green laser lights.",
      hint: "laser lights",
    },
    {
      src: "/silent-disco/images/Gallery_16.jpg",
      alt: "People dancing at a silent disco with green laser lights.",
      hint: "laser lights",
    },
    {
      src: "/silent-disco/images/Gallery_17.jpg",
      alt: "People dancing at a silent disco with green laser lights.",
      hint: "laser lights",
    },
    {
      src: "/silent-disco/images/Gallery_18.jpg",
      alt: "People dancing at a silent disco with green laser lights.",
      hint: "laser lights",
    },
    {
      src: "/silent-disco/images/Gallery_19.jpg",
      alt: "People dancing at a silent disco with green laser lights.",
      hint: "laser lights",
    },
    {
      src: "/silent-disco/images/Gallery_20.jpg",
      alt: "People dancing at a silent disco with green laser lights.",
      hint: "laser lights",
    },
    {
      src: "/silent-disco/images/Gallery_21.jpg",
      alt: "People dancing at a silent disco with green laser lights.",
      hint: "laser lights",
    },
    {
      src: "/silent-disco/images/Gallery_22.webp",
      alt: "People dancing at a silent disco with green laser lights.",
      hint: "laser lights",
    },
  ];

  const placeholderImages = Array.from({ length: 0 }).map((_, i) => ({
    src: `https://placehold.co/600x600.png`,
    alt: `Silent disco event photo ${i + 3}`,
    hint: "disco party",
  }));

  const images = [...uploadedImages, ...placeholderImages];

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
                Event Gallery
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
                Check out the fun and energy from our past silent disco events.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-square rounded-lg sm:rounded-xl overflow-hidden group shadow-lg"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    data-ai-hint={image.hint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="py-8 bg-card/80">
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
