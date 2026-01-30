"use client";
import Image from "next/image";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import React, { useState } from "react";
import { BackgroundRippleEffect } from "../components/ui/background-ripple-effect";
import { EncryptedText } from "../components/ui/encrypted-text";
import { WobbleCard } from "../components/ui/wobble-card";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import { CometCard } from "@/components/ui/comet-card";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import { Tabs } from "../components/ui/tabs";

//Imports for nav bar
import { Sidebar, SidebarBody, SidebarLink } from "../components/ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";





export function SidebarDemo() {
  const links = [
    {
      label: "Dashboard",
      href: "#",
      icon: (
        <IconBrandTabler className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Profile",
      href: "#",
      icon: (
        <IconUserBolt className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Settings",
      href: "#",
      icon: (
        <IconSettings className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <IconArrowLeft className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "mx-auto flex w-full max-w-7xl flex-1 flex-col overflow-hidden rounded-md border border-neutral-200 bg-gray-100 md:flex-row dark:border-neutral-700 dark:bg-neutral-800",
        "h-[60vh]", // for your use case, use `h-screen` instead of `h-[60vh]`
      )}
    >
      <Sidebar open={open} setOpen={setOpen} animate={false}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            <>
              <Logo />
            </>
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Manu Arora",
                href: "#",
                icon: (
                  <img
                    src="https://assets.aceternity.com/manu.png"
                    className="h-7 w-7 shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard />
    </div>
  );
}
export const Logo = () => {
  return (
    <a
      href="#home"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium whitespace-pre text-black dark:text-white"
      >
        Worksthal
      </motion.span>
    </a>
  );
};
export const LogoIcon = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
    </a>
  );
};

// Dashboard component
const Dashboard = () => {
  return (
    <div className="flex flex-1">
      <div className="flex h-full w-full flex-1 flex-col gap-2 rounded-tl-2xl border border-neutral-200 bg-white p-2 md:p-10 dark:border-neutral-700 dark:bg-neutral-900">
        <div className="flex gap-2">
          {[...new Array(4)].map((i, idx) => (
            <div
              key={"first-array-demo-2" + idx}
              className="h-20 w-full animate-pulse rounded-lg bg-gray-100 dark:bg-neutral-800"
            ></div>
          ))}
        </div>
        <div className="flex flex-1 gap-2">
          {[...new Array(2)].map((i, idx) => (
            <div
              key={"second-array-demo-2" + idx}
              className="h-full w-full animate-pulse rounded-lg bg-gray-100 dark:bg-neutral-800"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Tabs Demo Component
function TabsDemo() {
  const tabs = [
    {
      title: "AI Workflow Automation",
      value: "ai-automation",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3">Turn repetitive work into automatic workflows</p>
          <p className="text-xs md:text-sm lg:text-base text-white/90 leading-relaxed mb-2">
          From moving data between apps to triggering actions automatically, we build simple, reliable workflows that save time and reduce manual effort.
            </p>
            <p className="text-xs md:text-sm lg:text-base text-white/90 leading-relaxed mb-2">
            No complex systems. Just automation that actually helps your business run smoother.
            </p>
          <img
            src="/tab 1.png"
            alt="AI Marketing"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[100%] rounded-xl mx-auto"
          />
        </div>
      ),
    },
    {
      title: "Website Design and Development",
      value: "website-development",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3">Clean, fast websites that do their job</p>
          <p className="text-xs md:text-sm lg:text-base text-white/90 leading-relaxed mb-2">
          We design and build modern websites that are easy to understand and easy to use.
            </p>
            <p className="text-xs md:text-sm lg:text-base text-white/90 leading-relaxed mb-2">
            Whether it’s a landing page or a full site, our focus is clarity, speed, and structure — so visitors know exactly what you offer and what to do next.
            </p>
          <img
            src="/tab 2.png"
            alt="AI Marketing"
            width="2000"
            height="2000"
            className="object-cover object-left-top h-[10000%]  md:h-[100%] absolute -bottom-10 inset-x-0 w-[100%] rounded-xl mx-auto"
          />
        </div>
      ),
    },
    {
      title: "AEO & AEO Audit",
      value: "aeo-audit",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3">Helping your site get found the right way</p>
          <p className="text-xs md:text-sm lg:text-base text-white/90 leading-relaxed mb-2">
          We optimize your website so search engines and AI tools can understand it better.
            </p>
            <p className="text-xs md:text-sm lg:text-base text-white/90 leading-relaxed mb-2">
            This includes clean structure, clear content, and smart technical setup — not shortcuts or gimmicks.
            </p>
          <img
            src="/tab 3.png"
            alt="AI Marketing"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[60%]  md:h-[100%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
          />
        </div>
      ),
    },
    {
      title: "AI Marketing",
      value: "ai-marketing",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3">Smarter marketing with AI assistance</p>
          <p className="text-xs md:text-sm lg:text-base text-white/90 leading-relaxed mb-2">
          We use AI tools to help you create better content, improve campaigns, and understand what’s working.
            </p>
            <p className="text-xs md:text-sm lg:text-base text-white/90 leading-relaxed mb-2">
            This isn’t about replacing humans — it’s about using AI to work faster and make better decisions.
            </p>
          <img
            src="/tab 4.png"
            alt="AI Marketing"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[60%]  md:h-[100%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[25rem] md:h-[35rem] lg:h-[40rem] [perspective:1000px] relative flex flex-col w-full max-w-7xl mx-auto items-start justify-start">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <img
      src="/linear.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

export default function Home() {
  const [open, setOpen] = useState(false);
  
  // Contact form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: '',
    terms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setSubmitStatus({
        type: 'error',
        message: 'Please fill in all required fields.',
      });
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({
        type: 'error',
        message: 'Please enter a valid email address.',
      });
      return;
    }

    // Validate terms checkbox
    if (!formData.terms) {
      setSubmitStatus({
        type: 'error',
        message: 'Please agree to the Terms of Use and Privacy Policy.',
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for contacting us! We\'ll get back to you within 24-48 hours.',
        });
        // Clear form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          message: '',
          terms: false,
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Failed to send message. Please try again.',
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // StickyScroll content for Services section
  const servicesContent = [
    {
      title: "AI Workflow Automation",
      description: (
        <div className="space-y-4">
          <p className="text-xl font-bold text-blue-900 md:text-2xl dark:text-blue-300">
            Turn repetitive work into automatic workflows
          </p>
          <p className="text-base leading-relaxed text-neutral-700 md:text-lg dark:text-neutral-400">
            We help you automate everyday tasks—from moving data between apps to triggering actions automatically.
          </p>
          <p className="text-base leading-relaxed text-neutral-700 md:text-lg dark:text-neutral-400">
            We build simple, reliable workflows that save time and reduce manual effort. No complex systems. Just automation that actually helps your business run smoother.
          </p>
        </div>
      ),
      content: (
        <div className="flex h-full w-full items-center justify-center p-12">
          <Image
            src="/website preview image.png"
            alt="AI Workflow Automation"
            width={350}
            height={350}
            className="h-auto w-full max-w-[350px] object-contain"
          />
        </div>
      ),
    },
    {
      title: "Website Design & Development",
      description: (
        <div className="space-y-4">
          <p className="text-xl font-bold text-emerald-900 md:text-2xl dark:text-emerald-300">
            Clean, fast websites that do their job
          </p>
          <p className="text-base leading-relaxed text-neutral-700 md:text-lg dark:text-neutral-400">
            We design and build modern websites that are easy to understand and easy to use.
          </p>
          <p className="text-base leading-relaxed text-neutral-700 md:text-lg dark:text-neutral-400">
            Whether it's a landing page or a full site, our focus is clarity, speed, and structure—so visitors know exactly what you offer and what to do next.
          </p>
        </div>
      ),
      content: (
        <div className="flex h-full w-full items-center justify-center p-12">
          <Image
            src="/website preview.png"
            alt="Website Design & Development"
            width={350}
            height={350}
            className="h-auto w-full max-w-[350px] object-contain"
          />
        </div>
      ),
    },
    {
      title: "AI-Optimized Search & Visibility",
      description: (
        <div className="space-y-4">
          <p className="text-xl font-bold text-purple-900 md:text-2xl dark:text-purple-300">
            Helping your site get found the right way
          </p>
          <p className="text-base leading-relaxed text-neutral-700 md:text-lg dark:text-neutral-400">
            We optimize your website so search engines and AI tools can understand it better.
          </p>
          <p className="text-base leading-relaxed text-neutral-700 md:text-lg dark:text-neutral-400">
            This includes clean structure, clear content, and smart technical setup—not shortcuts or gimmicks.
          </p>
        </div>
      ),
      content: (
        <div className="flex h-full w-full items-center justify-center p-12">
          <Image
            src="/AEO icon.png"
            alt="AI-Optimized Search & Visibility"
            width={350}
            height={350}
            className="h-auto w-full max-w-[350px] object-contain"
          />
        </div>
      ),
    },
    {
      title: "AI-Driven Marketing Support",
      description: (
        <div className="space-y-4">
          <p className="text-xl font-bold text-pink-900 md:text-2xl dark:text-pink-300">
            Smarter marketing with AI assistance
          </p>
          <p className="text-base leading-relaxed text-neutral-700 md:text-lg dark:text-neutral-400">
            We use AI tools to help you create better content, improve campaigns, and understand what's working.
          </p>
          <p className="text-base leading-relaxed text-neutral-700 md:text-lg dark:text-neutral-400">
            This isn't about replacing humans—it's about using AI to work faster and make better decisions.
          </p>
        </div>
      ),
      content: (
        <div className="flex h-full w-full items-center justify-center p-12">
          <Image
            src="/AI marketing icon.png"
            alt="AI-Driven Marketing Support"
            width={350}
            height={350}
            className="h-auto w-full max-w-[350px] object-contain"
          />
        </div>
      ),
    },
  ];
  
  // Typewriter effect words for section headers
  const aboutWords = [
    { text: "Who" },
    { text: "We" },
    { text: "Are", className: "text-blue-500 dark:text-blue-500" },
  ];

  const servicesWords = [
    { text: "Our" },
    { text: "Services", className: "text-blue-500 dark:text-blue-500" },
  ];

  const contactWords = [
    { text: "Contact" },
    { text: "Us", className: "text-blue-500 dark:text-blue-500" },
  ];
  
  const links = [
    {
      label: "Home",
      href: "#home",
      icon: (
        <IconBrandTabler className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "About",
      href: "#about",
      icon: (
        <IconUserBolt className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Services",
      href: "#services",
      icon: (
        <IconSettings className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Contact",
      href: "#contact",
      icon: (
        <IconArrowLeft className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
  ];

  return (
    <div className="flex h-screen w-full overflow-hidden bg-gray-100 dark:bg-neutral-800">
      {/* Persistent Sidebar */}
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            <Logo />
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Worksthal Team",
                href: "#",
                icon: (
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-neutral-200 dark:bg-neutral-700">
                    <span className="text-xs font-bold text-neutral-700 dark:text-neutral-200">W</span>
                  </div>
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>

      {/* Main Content Area - Scrollable */}
      <div className="flex flex-1 flex-col overflow-y-auto scroll-smooth">
        {/* Hero Section with Ripple Effect */}
        <section id="home" className="relative flex min-h-screen w-full flex-col items-start justify-start overflow-hidden">
          <BackgroundRippleEffect />
          <div className="mt-60 w-full">
            <h2 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-neutral-900 md:text-4xl lg:text-7xl dark:text-neutral-50">
              Worksthal - Your Trusted Partner in Technology Solutions
            </h2>
            <p className="relative z-10 mx-auto mt-4 max-w-xl text-center text-neutral-700 dark:text-neutral-400">
              Hover over the boxes above and click. To be used on backgrounds of hero
              sections OR Call to Action sections. I beg you don&apos;t use it
              everywhere.
            </p>
            <p className="relative z-10 mx-auto mt-4 max-w-xl text-center text-neutral-700 dark:text-neutral-400">
              <EncryptedText
                text="Welcome to Worksthal"
                encryptedClassName="text-neutral-500 dark:text-neutral-600"
                revealedClassName="text-emerald-700 dark:text-emerald-400"
                revealDelayMs={50}
              />
            </p>
          </div>
        </section>




        {/* About Section */}
        <section id="about" className="flex w-full flex-col items-center justify-start p-4 py-20 md:p-10 md:py-20">
          <div className="mx-auto w-full max-w-7xl">
            <div className="mb-12 flex items-center justify-center">
              <TypewriterEffectSmooth words={aboutWords} />
            </div>
            <p className="mx-auto mb-12 max-w-3xl text-center text-lg leading-relaxed text-neutral-700 md:text-xl dark:text-neutral-400">
              Worksthal is a modern digital agency built around practical AI and clean execution.
            We don’t sell big promises or complicated systems. We focus on doing useful work that helps businesses move forward, one step at a time.
          </p>
            <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-md space-y-4">
          <h2 className="text-left text-balance text-2xl font-bold tracking-tight text-white md:text-3xl lg:text-4xl">
            Who We Build For
          </h2>
          <p className="text-left text-base font-semibold text-pink-100 md:text-lg">
            Built for founders, teams, and growing businesses
          </p>
          <p className="text-left text-sm leading-relaxed text-pink-50/90 md:text-base">
            We work best with people who want clean solutions and honest communication. If you value clarity, efficiency, and steady improvement, you'll feel at home working with us.
          </p>
        </div>
        <Image
          src="/website image.png"
          width={500}
          height={500}
          alt="Website Design & Development"
          className="absolute -right-4 top-1/2 -translate-y-1/2 object-contain lg:-right-[15%]"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-emerald-900">
        <div className="space-y-4">
          <h2 className="text-left text-balance text-2xl font-bold tracking-tight text-emerald-50 md:text-3xl lg:text-4xl">
            How We Work
          </h2>
          <p className="text-left text-base font-semibold text-emerald-100 md:text-lg">
            Simple, transparent, and collaborative
          </p>
          <p className="text-left text-sm leading-relaxed text-emerald-50/90 md:text-base">
            No jargon, no confusion. We explain what we're doing, why we're doing it, and what you can expect at every stage.
          </p>
        </div>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-md space-y-4">
          <h2 className="text-left text-balance text-2xl font-bold tracking-tight text-blue-50 md:text-3xl lg:text-4xl">
            Why AI (The Right Way !!)
          </h2>
          <p className="text-left text-base font-semibold text-blue-100 md:text-lg">
            AI as a tool, not a buzzword
          </p>
          <p className="text-left text-sm leading-relaxed text-blue-50/90 md:text-base">
            We use it to reduce effort, improve clarity, and speed up execution—not to overcomplicate things or replace common sense.
          </p>
        </div>
        <Image
          src="/erasebg-transformed.webp"
          width={900}
          height={900}
          alt="AI Technology"
          className="absolute -right-2 -bottom-40 object-contain md:-right-4 md:-bottom-48 lg:-right-8 lg:-bottom-56"
        />
      </WobbleCard>
    </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="flex w-full flex-col items-center justify-start p-4 py-20 md:p-10 md:py-20">
          <div className="mx-auto w-full max-w-7xl">
            <div className="mb-12 flex items-center justify-center">
              <TypewriterEffectSmooth words={servicesWords} />
            </div>
            <p className="mx-auto mb-16 max-w-3xl text-center text-lg leading-relaxed text-neutral-700 md:text-xl dark:text-neutral-400">
              Explore our range of services designed to elevate your business with cutting-edge technology and innovative solutions.
            </p>
            
            {/* Comet Cards Row */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10 xl:gap-12">
              {/* Card 1 - Web Development */}
              <div className="flex items-center justify-center">
                <CometCard>
                  <button
                    type="button"
                    className="flex w-full cursor-pointer flex-col items-stretch rounded-[24px] border-0 bg-[#1F2121] p-6 saturate-0 transition-all hover:saturate-100 md:p-8 lg:p-10"
                    aria-label="AI Workflow Automation"
                    style={{
                      transformStyle: "preserve-3d",
                      transform: "none",
                      opacity: 1,
                    }}
                  >
                    <div className="mx-3 flex-1 md:mx-4 lg:mx-6">
                      <div className="relative mt-3 aspect-[3/4] w-full md:mt-4 lg:mt-6">
                        <Image
                          loading="lazy"
                          className="absolute inset-0 h-full w-full rounded-[24px] object-cover"
                          alt="AI Workflow Automation"
                          src="/ai icon.png"
                          width={1200}
                          height={1600}
                          style={{
                            opacity: 1,
                          }}
                        />
                      </div>
                    </div>
                    <div className="mt-3 flex flex-shrink-0 items-center justify-center px-6 py-4 text-white md:mt-4 md:px-8 md:py-6 lg:mt-6 lg:px-10 lg:py-8">
                      <div className="w-full text-center text-base font-semibold leading-snug tracking-tight md:text-lg lg:text-xl">
                        AI Workflow<br />Automation
                      </div>
                    </div>
                  </button>
                </CometCard>
              </div>

              {/* Card 2 - AI Solutions */}
              <div className="flex items-center justify-center">
                <CometCard>
                  <button
                    type="button"
                    className="flex w-full cursor-pointer flex-col items-stretch rounded-[24px] border-0 bg-[#1F2121] p-6 saturate-0 transition-all hover:saturate-100 md:p-8 lg:p-10"
                    aria-label="AI Solutions Service"
                    style={{
                      transformStyle: "preserve-3d",
                      transform: "none",
                      opacity: 1,
                    }}
                  >
                    <div className="mx-3 flex-1 md:mx-4 lg:mx-6">
                      <div className="relative mt-3 aspect-[3/4] w-full md:mt-4 lg:mt-6">
                        <Image
                          loading="lazy"
                          className="absolute inset-0 h-full w-full rounded-[24px] object-cover"
                          alt="Website Design & Development"
                          src="/Website icon.png"
                          width={1200}
                          height={1600}
                          style={{
                            opacity: 1,
                          }}
                        />
                      </div>
                    </div>
                    <div className="mt-3 flex flex-shrink-0 items-center justify-center px-6 py-4 text-white md:mt-4 md:px-8 md:py-6 lg:mt-6 lg:px-10 lg:py-8">
                      <div className="w-full text-center text-base font-semibold leading-snug tracking-tight md:text-lg lg:text-xl">
                        Website Design<br />& Development
                      </div>
                    </div>
                  </button>
                </CometCard>
              </div>

              {/* Card 3 - Mobile Apps */}
              <div className="flex items-center justify-center">
                <CometCard>
                  <button
                    type="button"
                    className="flex w-full cursor-pointer flex-col items-stretch rounded-[24px] border-0 bg-[#1F2121] p-6 saturate-0 transition-all hover:saturate-100 md:p-8 lg:p-10"
                    aria-label="AI-Optimized Search & Visibility"
                    style={{
                      transformStyle: "preserve-3d",
                      transform: "none",
                      opacity: 1,
                    }}
                  >
                    <div className="mx-3 flex-1 md:mx-4 lg:mx-6">
                      <div className="relative mt-3 aspect-[3/4] w-full md:mt-4 lg:mt-6">
                        <Image
                          loading="lazy"
                          className="absolute inset-0 h-full w-full rounded-[24px] object-cover"
                          alt="AI-Optimized Search & Visibility"
                          src="/AEO icon.png"
                          width={1200}
                          height={1600}
                          style={{
                            opacity: 1,
                          }}
                        />
                      </div>
                    </div>
                    <div className="mt-3 flex flex-shrink-0 items-center justify-center px-6 py-4 text-white md:mt-4 md:px-8 md:py-6 lg:mt-6 lg:px-10 lg:py-8">
                      <div className="w-full text-center text-base font-semibold leading-snug tracking-tight md:text-lg lg:text-xl">
                        AI Optimized<br />Search & Visibility
                      </div>
                    </div>
                  </button>
                </CometCard>
              </div>

              {/* Card 4 - Cloud Services */}
              <div className="flex items-center justify-center">
                <CometCard>
                  <button
                    type="button"
                    className="flex w-full cursor-pointer flex-col items-stretch rounded-[24px] border-0 bg-[#1F2121] p-6 saturate-0 transition-all hover:saturate-100 md:p-8 lg:p-10"
                    aria-label="AI-Driven Marketing Support"
                    style={{
                      transformStyle: "preserve-3d",
                      transform: "none",
                      opacity: 1,
                    }}
                  >
                    <div className="mx-3 flex-1 md:mx-4 lg:mx-6">
                      <div className="relative mt-3 aspect-[3/4] w-full md:mt-4 lg:mt-6">
                        <Image
                          loading="lazy"
                          className="absolute inset-0 h-full w-full rounded-[24px] object-cover"
                          alt="AI-Driven Marketing Support"
                          src="/AI marketing icon.png"
                          width={1200}
                          height={1600}
                          style={{
                            opacity: 1,
                          }}
                        />
                      </div>
                    </div>
                    <div className="mt-3 flex flex-shrink-0 items-center justify-center px-6 py-4 text-white md:mt-4 md:px-8 md:py-6 lg:mt-6 lg:px-10 lg:py-8">
                      <div className="w-full text-center text-base font-semibold leading-snug tracking-tight md:text-lg lg:text-xl">
                        AI Driven<br />Marketing Support
                      </div>
                    </div>
                  </button>
                </CometCard>
              </div>
            </div>
          </div>
          
          {/* StickyScroll Section - Full Width - COMMENTED OUT */}
          {/* <div className="mt-32 w-full md:mt-40 lg:mt-48">
            <StickyScroll content={servicesContent} />
          </div> */}

          {/* Tabs Section - Replacing StickyScroll */}
          <div className="mt-32 w-full md:mt-40 lg:mt-48">
            <TabsDemo />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="flex w-full flex-col items-center justify-start p-4 py-20 md:p-10 md:py-20">
          <div className="mx-auto w-full max-w-7xl">
            {/* Contact Us Title - Separate and Centered */}
            <div className="mb-16 flex items-center justify-center">
              <TypewriterEffectSmooth words={contactWords} />
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Left Side - Contact Info */}
              <div className="flex flex-col">
                <h2 className="mb-6 text-3xl font-bold text-neutral-900 md:text-4xl dark:text-neutral-50">
                  Get in Touch with Us
                </h2>
                
                <p className="mb-8 text-lg leading-relaxed text-neutral-700 dark:text-neutral-400">
                  We're here to help. Whether you're interested in learning more about our services or need support, we're happy to assist you.
                </p>

                {/* Feature List */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2 border-emerald-700 dark:border-emerald-400">
                      <svg className="h-3 w-3 text-emerald-700 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-base text-neutral-800 md:text-lg dark:text-neutral-200">Fast Response Time</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2 border-emerald-700 dark:border-emerald-400">
                      <svg className="h-3 w-3 text-emerald-700 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-base text-neutral-800 md:text-lg dark:text-neutral-200">Expert AI Consultation</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2 border-emerald-700 dark:border-emerald-400">
                      <svg className="h-3 w-3 text-emerald-700 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-base text-neutral-800 md:text-lg dark:text-neutral-200">Customized Solutions</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2 border-emerald-700 dark:border-emerald-400">
                      <svg className="h-3 w-3 text-emerald-700 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-base text-neutral-800 md:text-lg dark:text-neutral-200">Ongoing Support & Maintenance</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2 border-emerald-700 dark:border-emerald-400">
                      <svg className="h-3 w-3 text-emerald-700 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-base text-neutral-800 md:text-lg dark:text-neutral-200">Transparent Communication</span>
                  </div>
                </div>

                {/* Contact Details */}
                <div className="mt-12 space-y-4">
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">General Contact Info</h3>
                  <p className="text-base leading-relaxed text-neutral-700 dark:text-neutral-400">
                    We're here to help. Whether you're interested in learning more about our services or need support, we're happy to assist you.
                  </p>
                  
                  <div className="space-y-2 pt-4">
                    <p className="text-base text-neutral-800 dark:text-neutral-300">
                      <span className="font-semibold text-neutral-900 dark:text-neutral-200">Phone:</span> <span className="text-neutral-700 dark:text-neutral-400">+91 63098219055</span>
                    </p>
                    <p className="text-base text-neutral-800 dark:text-neutral-300">
                      <span className="font-semibold text-neutral-900 dark:text-neutral-200">Email:</span> <span className="text-neutral-700 dark:text-neutral-400">contact@worksthal.com</span>
                    </p>
                    <p className="text-base text-neutral-800 dark:text-neutral-300">
                      <span className="font-semibold text-neutral-900 dark:text-neutral-200">Location:</span> <span className="text-neutral-700 dark:text-neutral-400">Hyderabad, India</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side - Contact Form */}
              <div className="flex flex-col">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* First Name & Last Name */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="Albert"
                        required
                        className="w-full rounded-lg border border-neutral-300 bg-neutral-100 px-4 py-3 text-neutral-800 placeholder-neutral-500 transition-colors focus:border-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:placeholder-neutral-500 dark:focus:border-neutral-400"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Susanto"
                        required
                        className="w-full rounded-lg border border-neutral-300 bg-neutral-100 px-4 py-3 text-neutral-800 placeholder-neutral-500 transition-colors focus:border-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:placeholder-neutral-500 dark:focus:border-neutral-400"
                      />
                    </div>
                  </div>

                  {/* Email Address */}
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="albert@susanto.com"
                      required
                      className="w-full rounded-lg border border-neutral-300 bg-neutral-100 px-4 py-3 text-neutral-800 placeholder-neutral-500 transition-colors focus:border-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:placeholder-neutral-500 dark:focus:border-neutral-400"
                    />
                  </div>

                  {/* Company Name */}
                  <div>
                    <label htmlFor="company" className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Name company"
                      className="w-full rounded-lg border border-neutral-300 bg-neutral-100 px-4 py-3 text-neutral-800 placeholder-neutral-500 transition-colors focus:border-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:placeholder-neutral-500 dark:focus:border-neutral-400"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      placeholder="Write your message..."
                      required
                      className="w-full rounded-lg border border-neutral-300 bg-neutral-100 px-4 py-3 text-neutral-800 placeholder-neutral-500 transition-colors focus:border-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:placeholder-neutral-500 dark:focus:border-neutral-400"
                    />
                  </div>

                  {/* Terms & Privacy */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="terms"
                      name="terms"
                      checked={formData.terms}
                      onChange={handleInputChange}
                      required
                      className="mt-1 h-4 w-4 rounded border-neutral-300 bg-neutral-100 text-neutral-800 focus:ring-2 focus:ring-neutral-500/20 dark:border-neutral-700 dark:bg-neutral-800"
                    />
                    <label htmlFor="terms" className="text-sm text-neutral-600 dark:text-neutral-400">
                      I agree to Fireside <span className="text-neutral-800 underline dark:text-neutral-100">Terms of Use</span> and <span className="text-neutral-800 underline dark:text-neutral-100">Privacy Policy</span> *
                    </label>
                  </div>

                  {/* Status Messages */}
                  {submitStatus.type && (
                    <div
                      className={`rounded-lg p-4 ${
                        submitStatus.type === 'success'
                          ? 'bg-emerald-50 text-emerald-800 border border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-300 dark:border-emerald-800'
                          : 'bg-red-50 text-red-800 border border-red-200 dark:bg-red-900/20 dark:text-red-300 dark:border-red-800'
                      }`}
                    >
                      <p className="text-sm font-medium">{submitStatus.message}</p>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-lg bg-emerald-600 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-emerald-500 dark:hover:bg-emerald-600"
                  >
                    {isSubmitting ? 'Sending...' : 'Submit'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Text Hover Effect Section */}
        <section className="flex h-[60rem] w-full items-center justify-center px-4 py-2 md:h-[75rem] md:px-10">
          <div className="w-full">
            <TextHoverEffect text="WORKSTHAL" />
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full border-t border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950">
          <div className="mx-auto max-w-7xl px-4 py-12 md:px-10 md:py-16">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
              {/* Company Info */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100">
                  Worksthal
                </h3>
                <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  Empowering businesses with AI-driven solutions. From workflow automation to web development, we transform ideas into reality.
                </p>
                <div className="flex gap-4">
                  {/* Social Media Icons */}
                  <a
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-200 text-neutral-700 transition-colors hover:bg-neutral-300 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
                    aria-label="Twitter"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-200 text-neutral-700 transition-colors hover:bg-neutral-300 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
                    aria-label="LinkedIn"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-200 text-neutral-700 transition-colors hover:bg-neutral-300 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
                    aria-label="GitHub"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Services */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100">
                  Services
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#services" className="text-sm text-neutral-600 transition-colors hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200">
                      AI Workflow Automation
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="text-sm text-neutral-600 transition-colors hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200">
                      Website Design & Development
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="text-sm text-neutral-600 transition-colors hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200">
                      AI-Optimized Search & Visibility
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="text-sm text-neutral-600 transition-colors hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200">
                      AI-Driven Marketing Support
                    </a>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100">
                  Company
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#about" className="text-sm text-neutral-600 transition-colors hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="text-sm text-neutral-600 transition-colors hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200">
                      Our Services
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="text-sm text-neutral-600 transition-colors hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-neutral-600 transition-colors hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200">
                      Careers
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100">
                  Get in Touch
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-neutral-600 dark:text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-sm text-neutral-600 dark:text-neutral-400">
                      +91 63098219055
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-neutral-600 dark:text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm text-neutral-600 dark:text-neutral-400">
                      contact@worksthal.com
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-neutral-600 dark:text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm text-neutral-600 dark:text-neutral-400">
                      Hyderabad, India
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-12 border-t border-neutral-200 pt-8 dark:border-neutral-800">
              <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  © {new Date().getFullYear()} Worksthal. All rights reserved.
                </p>
                <div className="flex gap-6">
                  <a href="#" className="text-sm text-neutral-600 transition-colors hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200">
                    Privacy Policy
                  </a>
                  <a href="#" className="text-sm text-neutral-600 transition-colors hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200">
                    Terms of Service
                  </a>
                  <a href="#" className="text-sm text-neutral-600 transition-colors hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200">
                    Cookie Policy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
