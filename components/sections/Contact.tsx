"use client";

import { useState, useId } from "react";
import { motion } from "motion/react";
import { LightRays } from "@/components/ui/light-rays";
import {
  ExpandableScreen,
  ExpandableScreenContent,
  ExpandableScreenTrigger,
} from "@/components/ui/expandable-screen";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import {
  trackContactFormStart,
  trackContactFormSubmit,
  trackEmailClick,
  trackPhoneClick,
} from "@/lib/analytics";

export function Contact() {
  const nameId = useId();
  const emailId = useId();
  const serviceId = useId();
  const budgetId = useId();
  const messageId = useId();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [formStarted, setFormStarted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    if (!formStarted && value.length > 0) {
      setFormStarted(true);
      trackContactFormStart();
    }
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({
        type: "error",
        message: "Please fill in all required fields.",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        trackContactFormSubmit(formData.service || "General Inquiry");
        
        setSubmitStatus({
          type: "success",
          message:
            "Thank you for contacting us! We'll get back to you within 24-48 hours.",
        });
        setFormData({
          name: "",
          email: "",
          company: "",
          service: "",
          budget: "",
          message: "",
        });
        setFormStarted(false);
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative w-full px-4 pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Animated background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent" />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      {/* Floating orbs */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [-20, 20, -20],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/20 rounded-full blur-3xl"
      />

      {/* Background with Light Rays from bottom */}
      <div className="absolute inset-0 z-0 rotate-180 opacity-30">
        <LightRays
          count={5}
          color="rgba(161, 161, 170, 0.06)"
          blur={50}
          speed={24}
          length="60vh"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <ExpandableScreen 
          layoutId="contact-form" 
          triggerRadius="12px" 
          contentRadius="20px"
          lockScroll={true}
        >
          {/* Trigger Section */}
          <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 backdrop-blur-xl px-5 py-2.5 text-xs font-bold text-primary shadow-xl shadow-primary/20 tracking-wide uppercase"
            >
              Get In Touch
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
              className="mb-6 font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl tracking-tight"
            >
              Let's Build{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Something Great
              </span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
              className="mb-12 max-w-2xl text-lg leading-relaxed text-muted-foreground"
            >
              Tell us about your project and we'll show you how automation and modern technology can transform your business.
            </motion.p>

            <ExpandableScreenTrigger>
              <motion.button 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-lg bg-primary px-8 py-3 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
              >
                Schedule Free Consultation
              </motion.button>
            </ExpandableScreenTrigger>

            {/* Contact Info */}
            <address className="mt-16 not-italic grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "shubham@worksthal.com",
                  href: "mailto:shubham@worksthal.com",
                  onClick: trackEmailClick,
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+91 6309821905",
                  href: "tel:+916309821905",
                  onClick: trackPhoneClick,
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "India",
                },
              ].map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-card/50 backdrop-blur-xl p-6 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-center">
                    <p className="mb-1 text-sm font-medium text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a 
                        href={item.href}
                        onClick={item.onClick}
                        className="text-sm font-semibold text-foreground transition-colors hover:text-primary"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-foreground">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </address>
          </div>

          {/* Expandable Form Content */}
          <ExpandableScreenContent 
            className="bg-neutral-200 dark:bg-neutral-200"
            showCloseButton={true}
            closeButtonClassName="text-neutral-900 bg-neutral-300/80 hover:bg-neutral-400/80 hover:text-neutral-900"
          >
            <div className="relative z-10 flex w-full items-center justify-center p-4 pt-6 sm:p-6 sm:pt-8 lg:p-8 lg:pt-8 light-form-override">
              <div className="grid w-full max-w-6xl grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
                {/* Left Side - Content */}
                <div className="flex flex-col justify-center space-y-4">
                  <div>
                    <h2 className="mb-2 font-serif text-2xl font-bold !text-neutral-900 md:text-3xl lg:text-4xl">
                      Let's Transform Your Business
                    </h2>
                    <p className="text-sm !text-neutral-700">
                      Schedule a free consultation and discover how AI automation can revolutionize your workflow.
                    </p>
                  </div>

                  {/* Benefits List */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 group">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-neutral-400">
                        <svg className="h-2.5 w-2.5 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-[13px] font-normal text-neutral-600 leading-snug">
                        Save hours per week with intelligent automation
                      </p>
                    </div>

                    <div className="flex items-center gap-3 group">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-neutral-400">
                        <svg className="h-2.5 w-2.5 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-[13px] font-normal text-neutral-600 leading-snug">
                        Custom solutions tailored to your business
                      </p>
                    </div>

                    <div className="flex items-center gap-3 group">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-neutral-400">
                        <svg className="h-2.5 w-2.5 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-[13px] font-normal text-neutral-600 leading-snug">
                        Transparent guidance on next steps
                      </p>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="rounded-xl border border-neutral-300 bg-white/50 p-4">
                    <p className="mb-2.5 text-xs italic text-neutral-800 leading-snug">
                      "Worksthal automated our entire lead qualification process. We went from spending 15 hours a week on manual data entry to having everything handled automatically. Game changer."
                    </p>
                  </div>
                </div>

                {/* Right Side - Form */}
                <div className="flex flex-col justify-center">
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                      <Label 
                        htmlFor={nameId} 
                        className="mb-1.5 block text-[10px] font-semibold uppercase tracking-wider text-neutral-800 dark:text-neutral-800"
                        style={{ color: '#262626' }}
                      >
                        Your Name *
                      </Label>
                      <Input
                        type="text"
                        id={nameId}
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        required
                        className="w-full rounded-lg border border-neutral-300 dark:border-neutral-300 bg-white dark:bg-white px-3 py-2 text-sm text-neutral-900 dark:text-neutral-900 placeholder:text-neutral-400 dark:placeholder:text-neutral-400 focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900 transition-all shadow-sm hover:border-neutral-400"
                        style={{ color: '#171717', backgroundColor: '#ffffff' }}
                      />
                    </div>

                    <div>
                      <Label 
                        htmlFor={emailId} 
                        className="mb-1.5 block text-[10px] font-semibold uppercase tracking-wider text-neutral-800 dark:text-neutral-800"
                        style={{ color: '#262626' }}
                      >
                        Work Email *
                      </Label>
                      <Input
                        type="email"
                        id={emailId}
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@company.com"
                        required
                        className="w-full rounded-lg border border-neutral-300 dark:border-neutral-300 bg-white dark:bg-white px-3 py-2 text-sm text-neutral-900 dark:text-neutral-900 placeholder:text-neutral-400 dark:placeholder:text-neutral-400 focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900 transition-all shadow-sm hover:border-neutral-400"
                        style={{ color: '#171717', backgroundColor: '#ffffff' }}
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <div>
                        <Label 
                          htmlFor={serviceId} 
                          className="mb-1.5 block text-[10px] font-semibold uppercase tracking-wider text-neutral-800 dark:text-neutral-800"
                          style={{ color: '#262626' }}
                        >
                          Service Interested In
                        </Label>
                        <Select
                          name="service"
                          value={formData.service}
                          onValueChange={(value) => handleSelectChange("service", value)}
                        >
                          <SelectTrigger 
                            id={serviceId} 
                            className="w-full rounded-lg border border-neutral-300 dark:border-neutral-300 bg-white dark:bg-white px-3 py-2 text-sm text-neutral-900 dark:text-neutral-900 focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900 transition-all shadow-sm hover:border-neutral-400 [&>span]:text-neutral-900 dark:[&>span]:text-neutral-900"
                            style={{ color: '#171717', backgroundColor: '#ffffff' }}
                          >
                            <SelectValue placeholder="Select a service" style={{ color: '#737373' }} />
                          </SelectTrigger>
                          <SelectContent className="!bg-white border-neutral-300 rounded-lg">
                            <SelectItem value="automation" className="!text-neutral-900 !focus:bg-neutral-100 focus:!bg-neutral-100 focus:!text-neutral-900 hover:!bg-neutral-100 data-[highlighted]:!bg-neutral-100 data-[highlighted]:!text-neutral-900 text-sm">AI Workflow Automation</SelectItem>
                            <SelectItem value="web-dev" className="!text-neutral-900 !focus:bg-neutral-100 focus:!bg-neutral-100 focus:!text-neutral-900 hover:!bg-neutral-100 data-[highlighted]:!bg-neutral-100 data-[highlighted]:!text-neutral-900 text-sm">Website Development</SelectItem>
                            <SelectItem value="aeo" className="!text-neutral-900 !focus:bg-neutral-100 focus:!bg-neutral-100 focus:!text-neutral-900 hover:!bg-neutral-100 data-[highlighted]:!bg-neutral-100 data-[highlighted]:!text-neutral-900 text-sm">AEO & Search Visibility</SelectItem>
                            <SelectItem value="marketing" className="!text-neutral-900 !focus:bg-neutral-100 focus:!bg-neutral-100 focus:!text-neutral-900 hover:!bg-neutral-100 data-[highlighted]:!bg-neutral-100 data-[highlighted]:!text-neutral-900 text-sm">AI Marketing</SelectItem>
                            <SelectItem value="multiple" className="!text-neutral-900 !focus:bg-neutral-100 focus:!bg-neutral-100 focus:!text-neutral-900 hover:!bg-neutral-100 data-[highlighted]:!bg-neutral-100 data-[highlighted]:!text-neutral-900 text-sm">Multiple Services</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label 
                          htmlFor={budgetId} 
                          className="mb-1.5 block text-[10px] font-semibold uppercase tracking-wider text-neutral-800 dark:text-neutral-800"
                          style={{ color: '#262626' }}
                        >
                          Company Size
                        </Label>
                        <Select
                          name="budget"
                          value={formData.budget}
                          onValueChange={(value) => handleSelectChange("budget", value)}
                        >
                          <SelectTrigger 
                            id={budgetId} 
                            className="w-full rounded-lg border border-neutral-300 dark:border-neutral-300 bg-white dark:bg-white px-3 py-2 text-sm text-neutral-900 dark:text-neutral-900 focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900 transition-all shadow-sm hover:border-neutral-400 [&>span]:text-neutral-900 dark:[&>span]:text-neutral-900"
                            style={{ color: '#171717', backgroundColor: '#ffffff' }}
                          >
                            <SelectValue placeholder="Select size" style={{ color: '#737373' }} />
                          </SelectTrigger>
                          <SelectContent className="!bg-white border-neutral-300 rounded-lg">
                            <SelectItem value="1-10" className="!text-neutral-900 focus:!bg-neutral-100 focus:!text-neutral-900 hover:!bg-neutral-100 data-[highlighted]:!bg-neutral-100 data-[highlighted]:!text-neutral-900 text-sm">1-10 employees</SelectItem>
                            <SelectItem value="11-50" className="!text-neutral-900 focus:!bg-neutral-100 focus:!text-neutral-900 hover:!bg-neutral-100 data-[highlighted]:!bg-neutral-100 data-[highlighted]:!text-neutral-900 text-sm">11-50 employees</SelectItem>
                            <SelectItem value="51-200" className="!text-neutral-900 focus:!bg-neutral-100 focus:!text-neutral-900 hover:!bg-neutral-100 data-[highlighted]:!bg-neutral-100 data-[highlighted]:!text-neutral-900 text-sm">51-200 employees</SelectItem>
                            <SelectItem value="200+" className="!text-neutral-900 focus:!bg-neutral-100 focus:!text-neutral-900 hover:!bg-neutral-100 data-[highlighted]:!bg-neutral-100 data-[highlighted]:!text-neutral-900 text-sm">200+ employees</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label 
                        htmlFor={messageId} 
                        className="mb-1.5 block text-[10px] font-semibold uppercase tracking-wider text-neutral-800 dark:text-neutral-800"
                        style={{ color: '#262626' }}
                      >
                        Tell Us About Your Project *
                      </Label>
                      <Textarea
                        id={messageId}
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={3}
                        placeholder="What challenges are you facing? What are your goals?"
                        required
                        className="w-full rounded-lg border border-neutral-300 dark:border-neutral-300 bg-white dark:bg-white px-3 py-2 text-sm text-neutral-900 dark:text-neutral-900 placeholder:text-neutral-400 dark:placeholder:text-neutral-400 focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900 transition-all shadow-sm hover:border-neutral-400 resize-none"
                        style={{ color: '#171717', backgroundColor: '#ffffff' }}
                      />
                    </div>

                    {submitStatus.type && (
                      <div
                        className={`flex items-center gap-2 rounded-lg p-3 text-xs ${
                          submitStatus.type === "success"
                            ? "bg-green-100 text-green-800 border border-green-200"
                            : "bg-red-100 text-red-800 border border-red-200"
                        }`}
                      >
                        {submitStatus.type === "success" && (
                          <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                        )}
                        <p className="font-medium">{submitStatus.message}</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full rounded-lg bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-neutral-800 hover:shadow-lg disabled:opacity-50"
                    >
                      {isSubmitting ? "Sending..." : "Schedule Free Consultation"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </ExpandableScreenContent>
        </ExpandableScreen>
      </div>
    </section>
  );
}
