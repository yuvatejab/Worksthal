"use client";

import React, { useState, useEffect } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  IconHome,
  IconBriefcase,
  IconInfoCircle,
  IconMail,
  IconQuestionMark,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { TechStack } from "@/components/sections/TechStack";
import { Contact } from "@/components/sections/Contact";

const Logo = () => {
  return (
    <a
      href="#home"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal"
      aria-label="Worksthal — Go to homepage"
    >
      <div className="h-6 w-6 shrink-0 rounded-lg bg-gradient-to-br from-primary to-secondary" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-serif text-lg font-semibold whitespace-pre text-foreground"
      >
        Worksthal
      </motion.span>
    </a>
  );
};

export function HomeClient() {
  const [open, setOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const links = [
    {
      label: "Home",
      href: "#home",
      icon: (
        <IconHome className="h-5 w-5 shrink-0 text-muted-foreground group-hover:text-foreground transition-colors" />
      ),
    },
    {
      label: "About",
      href: "/about",
      icon: (
        <IconInfoCircle className="h-5 w-5 shrink-0 text-muted-foreground group-hover:text-foreground transition-colors" />
      ),
    },
    {
      label: "Services",
      href: "/services",
      icon: (
        <IconBriefcase className="h-5 w-5 shrink-0 text-muted-foreground group-hover:text-foreground transition-colors" />
      ),
    },
    {
      label: "FAQ",
      href: "/faq",
      icon: (
        <IconQuestionMark className="h-5 w-5 shrink-0 text-muted-foreground group-hover:text-foreground transition-colors" />
      ),
    },
    {
      label: "Contact",
      href: "/contact",
      icon: (
        <IconMail className="h-5 w-5 shrink-0 text-muted-foreground group-hover:text-foreground transition-colors" />
      ),
    },
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="flex min-h-screen w-full bg-background"
      >
        {/* Persistent Sidebar Navigation */}
        <Sidebar open={open} setOpen={setOpen}>
          <SidebarBody className="justify-between gap-10">
            <nav
              className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto"
              aria-label="Main navigation"
            >
              <Logo />
              <div className="mt-8 flex flex-col gap-2">
                {links.map((link, idx) => (
                  <SidebarLink key={idx} link={link} />
                ))}
              </div>
            </nav>
            <div className="flex flex-col gap-4">
              {/* Theme Toggler */}
              <div className="flex items-center justify-center border-t border-border pt-4">
                <AnimatedThemeToggler />
              </div>
              <SidebarLink
                link={{
                  label: "Worksthal",
                  href: "#home",
                  icon: (
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary">
                      <span className="text-xs font-bold text-primary-foreground">
                        W
                      </span>
                    </div>
                  ),
                }}
              />
            </div>
          </SidebarBody>
        </Sidebar>

        {/* Main Content Area */}
        <main className="flex flex-1 flex-col overflow-y-auto scroll-smooth pt-16 md:pt-0">
          {/* Hero Section */}
          <Hero />

          {/* Services Section */}
          <Services />

          {/* About Section */}
          <About />

          {/* Technology Stack Section */}
          <TechStack />

          {/* Contact Section */}
          <Contact />

          {/* Footer */}
          <footer className="w-full border-t border-border bg-card/50 dark:bg-black dark:border-border/30">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:px-10 md:py-16">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {/* Company Info */}
                <div className="space-y-4">
                  <h3 className="font-serif text-2xl font-bold text-foreground">
                    Worksthal
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Worksthal is a digital agency in Hyderabad, India,
                    specializing in AI workflow automation, web development, and
                    AI engine optimization. We deliver measurable results within
                    90 days.
                  </p>
                </div>

                {/* Services */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-foreground">
                    Services
                  </h4>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="/services/ai-automation"
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        AI Workflow Automation
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services/web-development"
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        Website Development
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services/aeo"
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        AEO &amp; Search Visibility
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services/ai-marketing"
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        AI Marketing
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Company */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-foreground">
                    Company
                  </h4>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="/about"
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services"
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        Our Services
                      </a>
                    </li>
                    <li>
                      <a
                        href="/blog"
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        href="/faq"
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a
                        href="/contact"
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Contact */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-foreground">
                    Get in Touch
                  </h4>
                  <address className="not-italic space-y-3">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">
                        Email:
                      </span>{" "}
                      <a
                        href="mailto:contact@worksthal.com"
                        className="transition-colors hover:text-primary"
                      >
                        contact@worksthal.com
                      </a>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">
                        Phone:
                      </span>{" "}
                      <a
                        href="tel:+916309821905"
                        className="transition-colors hover:text-primary"
                      >
                        +91 63098219055
                      </a>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">
                        Location:
                      </span>{" "}
                      Hyderabad, India
                    </p>
                  </address>
                </div>
              </div>

              {/* Bottom Bar */}
              <div className="mt-12 border-t border-border pt-8">
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                  <p className="text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} Worksthal. All rights
                    reserved.
                  </p>
                  <div className="flex gap-6">
                    <a
                      href="/privacy"
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      Privacy Policy
                    </a>
                    <a
                      href="/terms"
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      Terms of Service
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </main>
      </motion.div>
    </>
  );
}
