"use client";

import {
  Headphones,
  Mail,
  Music,
  PartyPopper,
  Phone,
  Sparkles,
  Twitter,
  Instagram,
  Facebook,
  Zap,
  PlayCircle,
  Menu,
  Music2,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Headphone3D from "./headphone-3d";
import AudioVisualizer from "./audio-visualizer";
import { QuoteForm } from "./quote-form";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => (
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
          <a href="/#quote">Get a Quote</a>
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
);

const HeroSection = () => (
  <section className="relative w-full py-20 lg:py-32 overflow-hidden">
    <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
    </div>
    <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6 text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline tracking-tighter">
          <span className="text-primary">Hush Club:</span> Your Unforgettable
          Silent Disco
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
          Experience music like never before. High-quality sound, multiple
          channels of music, and pure, uninterrupted fun. Let's make your next
          event legendary.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Button
            size="lg"
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <a href="#quote">Get a Quote Now</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/how-it-works">Learn More</Link>
          </Button>
        </div>
      </div>
      <div className="relative w-full h-80 lg:h-96">
        <Headphone3D />
      </div>
    </div>
  </section>
);

const WhatIsSilentDiscoSection = () => {
  const videoRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        // Set isVisible to true if the element is intersecting (in view)
        // and false otherwise. The `unoptimized` prop on next/image will
        // then toggle, forcing a re-render of the GIF.
        setIsVisible(entry.isIntersecting);
      },
      {
        // Trigger when 50% of the element is visible
        threshold: 0.5,
      }
    );

    const currentRef = videoRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const animatedGif = "/silent-disco/images/Silent_Disco_Giphy.gif";

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-card/20">
      <div className="container grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            What is a <span className="text-primary">Silent Disco?</span>
          </h2>
          <p className="text-muted-foreground">
            A silent disco is a unique event where people dance to music
            listened to on wireless headphones. Instead of using a traditional
            speaker system, music is broadcast via a radio transmitter with the
            signal being picked up by wireless headphone receivers worn by the
            participants.
          </p>
          <p className="text-muted-foreground">
            Those without headphones hear no music, giving the effect of a room
            full of people dancing to nothing. It's a surreal, personal, and
            incredibly fun way to experience music and connect with others on
            the dance floor.
          </p>
        </div>
        <div
          ref={videoRef}
          className="relative group aspect-video rounded-xl overflow-hidden shadow-2xl shadow-primary/10 border-2 border-primary/20"
        >
          <Image
            src={animatedGif}
            alt="Silent disco party"
            width={1280}
            height={720}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            data-ai-hint="silent disco party"
            unoptimized={isVisible} // This forces the GIF to replay when it becomes visible
          />
          {!isVisible && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <PlayCircle className="h-16 w-16 sm:h-20 sm:w-20 text-white/70" />
            </div>
          )}
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="font-bold text-lg sm:text-xl font-headline">
              Experience the Magic
            </h3>
            <p className="text-sm">Scroll to see it in action.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeaturesSection = () => (
  <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-card/50">
    <div className="container space-y-12">
      <div className="text-center space-y-3">
        <p className="text-primary font-semibold">Everything You Need</p>
        <h2 className="text-3xl md:text-4xl font-bold font-headline">
          Why Choose Hush Club?
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We provide a seamless, all-inclusive silent disco experience tailored
          to your event.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <Card className="bg-background/50 border-border/50 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <Headphones className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-lg">Crystal-Clear Audio</CardTitle>
          </CardHeader>
          <CardContent>
            Our professional-grade headphones deliver impeccable sound quality,
            ensuring an immersive experience for every guest.
          </CardContent>
        </Card>
        <Card className="bg-background/50 border-border/50 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <Music className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-lg">Multi-Channel Fun</CardTitle>
          </CardHeader>
          <CardContent>
            With up to three channels, your guests can switch between different
            DJs or playlists, keeping everyone on the dance floor.
          </CardContent>
        </Card>
        <Card className="bg-background/50 border-border/50 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-lg">Effortless Setup</CardTitle>
          </CardHeader>
          <CardContent>
            We handle delivery, setup, and teardown. Our plug-and-play system is
            so simple, you'll be partying in minutes.
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

const VibeSection = () => (
  <section className="py-12 sm:py-16 md:py-20 lg:py-24">
    <div className="container space-y-12">
      <div className="text-center space-y-3">
        <p className="text-accent font-semibold">Interactive Experience</p>
        <h2 className="text-3xl md:text-4xl font-bold font-headline">
          Feel The Vibe
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          This is more than just listening to music. It's an interactive
          journey. Press play to get a taste.
        </p>
      </div>
      <AudioVisualizer />
    </div>
  </section>
);

const QuoteSection = () => (
  <section id="quote" className="py-12 sm:py-16 md:py-20 lg:py-24">
    <div className="container grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <Sparkles className="h-10 w-10 sm:h-12 sm:w-12 text-accent" />
        <h2 className="text-3xl md:text-4xl font-bold font-headline">
          Ready to Transform Your Event?
        </h2>
        <p className="text-muted-foreground">
          Let's plan the perfect silent disco experience. Fill out the form, and
          our team will create a personalized quote just for you. We cater to
          weddings, corporate events, festivals, private parties, and more!
        </p>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <Phone className="h-5 w-5 text-primary" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="h-5 w-5 text-primary" />
            <span>Florida Silent Disco Florida, USA</span>
          </div>
          <div className="flex items-center gap-4">
            <Mail className="h-5 w-5 text-primary" />
            <span>quote@hushhub.com</span>
          </div>
        </div>
      </div>
      <Card className="p-4 sm:p-8 shadow-2xl shadow-primary/10 bg-card/50">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">
            Get a Free Quote
          </CardTitle>
          <CardDescription>
            Tell us about your event. No obligation, just possibilities.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <QuoteForm />
        </CardContent>
      </Card>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-8 bg-card/80">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
      <div className="flex items-center space-x-2">
        <PartyPopper className="h-6 w-6 text-primary" />
        <span className="font-bold text-lg font-headline">HushClub</span>
      </div>
      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} HushHub. All rights reserved.
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
      <div className="flex items-center gap-4">
        <a
          href="https://www.tiktok.com/@floridasilentdisco"
          className="text-muted-foreground hover:text-primary transition-colors"
          target="_blank"
        >
          <Music2 />
        </a>
        <a
          href="https://www.instagram.com/floridasilentdisco/"
          className="text-muted-foreground hover:text-primary transition-colors"
          target="_blank"
        >
          <Instagram />
        </a>
        <a
          href="#"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Facebook />
        </a>
      </div>
    </div>
  </footer>
);

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <WhatIsSilentDiscoSection />
        <FeaturesSection />
        <VibeSection />
        <QuoteSection />
      </main>
      <Footer />
    </div>
  );
}
