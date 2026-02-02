"use client";

import { useState, useId } from "react";
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

export function Contact() {
  const nameId = useId();
  const emailId = useId();
  const companyId = useId();
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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
    <section id="contact" className="relative w-full px-4 py-20 md:py-32">
      {/* Background with Light Rays from bottom */}
      <div className="absolute inset-0 z-0 rotate-180 opacity-50">
        <LightRays
          count={5}
          color="rgba(161, 161, 170, 0.06)"
          blur={50}
          opacity={0.35}
          speed={24}
          length="60vh"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <ExpandableScreen 
          layoutId="contact-form" 
          triggerRadius="12px" 
          contentRadius="0px"
          lockScroll={true}
        >
          {/* Trigger Section */}
          <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
              Get In Touch
            </div>
            <h2 className="mb-6 font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              Let's Build Something Great
            </h2>
            <p className="mb-12 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Tell us about your project and we'll show you how automation and modern technology can transform your business.
            </p>

            <ExpandableScreenTrigger>
              <button className="rounded-lg bg-primary px-8 py-3 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20">
                Schedule Free Consultation
              </button>
            </ExpandableScreenTrigger>

            {/* Contact Info */}
            <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="mb-1 text-sm font-medium text-muted-foreground">Email</p>
                  <p className="text-sm font-semibold text-foreground">contact@worksthal.com</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <p className="mb-1 text-sm font-medium text-muted-foreground">Phone</p>
                  <p className="text-sm font-semibold text-foreground">+91 63098219055</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="mb-1 text-sm font-medium text-muted-foreground">Location</p>
                  <p className="text-sm font-semibold text-foreground">Hyderabad, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Expandable Form Content */}
          <ExpandableScreenContent 
            className="bg-neutral-200 dark:bg-neutral-200"
            showCloseButton={true}
            closeButtonClassName="text-neutral-900 hover:text-neutral-700"
          >
            <div className="relative z-10 flex h-full w-full items-start justify-center overflow-y-auto p-6 sm:p-10 lg:p-16">
              <div className="grid w-full max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
                {/* Left Side - Content */}
                <div className="flex flex-col justify-center space-y-8">
                  <div>
                    <h2 className="mb-4 font-serif text-4xl font-bold text-neutral-900 md:text-5xl lg:text-6xl">
                      Let's Transform Your Business
                    </h2>
                    <p className="text-lg text-neutral-700">
                      Schedule a free consultation and discover how AI automation can revolutionize your workflow.
                    </p>
                  </div>

                  {/* Benefits List */}
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-neutral-300">
                        <svg className="h-6 w-6 text-neutral-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="mb-1 text-lg font-semibold text-neutral-900">
                          Save 20+ hours per week with intelligent automation workflows
                        </h3>
                        <p className="text-sm text-neutral-600">
                          Eliminate repetitive tasks and focus on what matters most
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-neutral-300">
                        <svg className="h-6 w-6 text-neutral-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="mb-1 text-lg font-semibold text-neutral-900">
                          Get a custom solution tailored to your specific business needs
                        </h3>
                        <p className="text-sm text-neutral-600">
                          No cookie-cutter templates, just results that work for you
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-neutral-300">
                        <svg className="h-6 w-6 text-neutral-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="mb-1 text-lg font-semibold text-neutral-900">
                          See ROI within 90 days or get transparent guidance on next steps
                        </h3>
                        <p className="text-sm text-neutral-600">
                          We focus on measurable results, not vanity metrics
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="rounded-3xl border-2 border-neutral-300 bg-white/50 p-8">
                    <p className="mb-6 text-lg italic text-neutral-800">
                      "Worksthal automated our entire lead qualification process. We went from spending 15 hours a week on manual data entry to having everything handled automatically. Game changer."
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-teal-500 to-teal-600"></div>
                      <div>
                        <p className="font-semibold text-neutral-900">Sarah Chen</p>
                        <p className="text-sm text-neutral-600">Marketing Director, TechFlow</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Form */}
                <div className="flex flex-col justify-center">
                  <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Label htmlFor={nameId} className="mb-2 block text-xs font-medium uppercase tracking-wide text-neutral-600">
                      Your Name *
                    </Label>
                    <Input
                      type="text"
                      id={nameId}
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder=""
                      required
                      className="w-full rounded-xl border-0 bg-neutral-900 px-4 py-3.5 text-white placeholder:text-neutral-500 focus:ring-2 focus:ring-neutral-700"
                    />
                  </div>

                  <div>
                    <Label htmlFor={emailId} className="mb-2 block text-xs font-medium uppercase tracking-wide text-neutral-600">
                      Work Email *
                    </Label>
                    <Input
                      type="email"
                      id={emailId}
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder=""
                      required
                      className="w-full rounded-xl border-0 bg-neutral-900 px-4 py-3.5 text-white placeholder:text-neutral-500 focus:ring-2 focus:ring-neutral-700"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <Label htmlFor={serviceId} className="mb-2 block text-xs font-medium uppercase tracking-wide text-neutral-600">
                        Service Interested In
                      </Label>
                      <Select
                        name="service"
                        value={formData.service}
                        onValueChange={(value) => handleSelectChange("service", value)}
                      >
                        <SelectTrigger id={serviceId} className="w-full rounded-xl border-0 bg-neutral-900 px-4 py-3.5 text-white focus:ring-2 focus:ring-neutral-700">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent className="bg-neutral-900 border-neutral-800">
                          <SelectItem value="automation" className="text-white focus:bg-neutral-800">AI Workflow Automation</SelectItem>
                          <SelectItem value="web-dev" className="text-white focus:bg-neutral-800">Website Development</SelectItem>
                          <SelectItem value="aeo" className="text-white focus:bg-neutral-800">AEO & Search Visibility</SelectItem>
                          <SelectItem value="marketing" className="text-white focus:bg-neutral-800">AI Marketing</SelectItem>
                          <SelectItem value="multiple" className="text-white focus:bg-neutral-800">Multiple Services</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor={budgetId} className="mb-2 block text-xs font-medium uppercase tracking-wide text-neutral-600">
                        Company Size
                      </Label>
                      <Select
                        name="budget"
                        value={formData.budget}
                        onValueChange={(value) => handleSelectChange("budget", value)}
                      >
                        <SelectTrigger id={budgetId} className="w-full rounded-xl border-0 bg-neutral-900 px-4 py-3.5 text-white focus:ring-2 focus:ring-neutral-700">
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent className="bg-neutral-900 border-neutral-800">
                          <SelectItem value="1-10" className="text-white focus:bg-neutral-800">1-10 employees</SelectItem>
                          <SelectItem value="11-50" className="text-white focus:bg-neutral-800">11-50 employees</SelectItem>
                          <SelectItem value="51-200" className="text-white focus:bg-neutral-800">51-200 employees</SelectItem>
                          <SelectItem value="200+" className="text-white focus:bg-neutral-800">200+ employees</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor={messageId} className="mb-2 block text-xs font-medium uppercase tracking-wide text-neutral-600">
                      Tell Us About Your Project *
                    </Label>
                    <Textarea
                      id={messageId}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      placeholder="What challenges are you facing? What are your goals?"
                      required
                      className="w-full rounded-xl border-0 bg-neutral-900 px-4 py-3.5 text-white placeholder:text-neutral-500 focus:ring-2 focus:ring-neutral-700"
                    />
                  </div>

                  {submitStatus.type && (
                    <div
                      className={`flex items-center gap-3 rounded-xl p-4 ${
                        submitStatus.type === "success"
                          ? "bg-green-100 text-green-800 border border-green-200"
                          : "bg-red-100 text-red-800 border border-red-200"
                      }`}
                    >
                      {submitStatus.type === "success" && (
                        <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                      )}
                      <p className="text-sm font-medium">{submitStatus.message}</p>
                    </div>
                  )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full rounded-xl bg-neutral-900 px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-neutral-800 disabled:opacity-50"
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
