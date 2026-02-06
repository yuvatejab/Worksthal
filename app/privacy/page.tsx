import type { Metadata } from "next";
import Link from "next/link";

const baseUrl = "https://worksthal.vercel.app";

export const metadata: Metadata = {
  title: "Privacy Policy — Worksthal",
  description:
    "Worksthal's privacy policy explains how we collect, use, and protect your personal information when you use our services or visit our website.",
  alternates: {
    canonical: `${baseUrl}/privacy`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-20">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Back to Home
        </Link>

        <h1 className="mb-4 font-serif text-4xl font-bold text-foreground md:text-5xl">
          Privacy Policy
        </h1>
        <p className="mb-8 text-sm text-muted-foreground">
          Last updated: February 6, 2026
        </p>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="mb-4 font-serif text-2xl font-semibold text-foreground">
              1. Introduction
            </h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Worksthal ("we," "our," or "us") is committed to protecting your privacy. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your information when you
              visit our website (worksthal.vercel.app) or use our services.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              By using our website or services, you agree to the collection and use of information in
              accordance with this policy. If you do not agree with our policies and practices, please
              do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 font-serif text-2xl font-semibold text-foreground">
              2. Information We Collect
            </h2>
            <h3 className="mb-3 text-xl font-semibold text-foreground">
              2.1 Personal Information
            </h3>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Fill out a contact form or request a consultation</li>
              <li>Subscribe to our newsletter or marketing communications</li>
              <li>Engage with our services</li>
              <li>Communicate with us via email or phone</li>
            </ul>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              This information may include: name, email address, phone number, company name, job
              title, and any other information you choose to provide.
            </p>

            <h3 className="mb-3 text-xl font-semibold text-foreground">
              2.2 Automatically Collected Information
            </h3>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              When you visit our website, we may automatically collect certain information about your
              device and usage, including:
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>IP address and browser type</li>
              <li>Operating system and device information</li>
              <li>Pages visited, time spent on pages, and referring URLs</li>
              <li>Click data and interaction with website elements</li>
            </ul>
            <p className="leading-relaxed text-muted-foreground">
              We use cookies and similar tracking technologies to collect this information. You can
              control cookies through your browser settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 font-serif text-2xl font-semibold text-foreground">
              3. How We Use Your Information
            </h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              We use the information we collect for the following purposes:
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>To respond to your inquiries and provide customer support</li>
              <li>To deliver services you have requested</li>
              <li>To send you marketing communications (with your consent)</li>
              <li>To improve our website and services</li>
              <li>To analyze usage patterns and optimize user experience</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and prevent fraud</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 font-serif text-2xl font-semibold text-foreground">
              4. Information Sharing and Disclosure
            </h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              We do not sell, trade, or rent your personal information to third parties. We may share
              your information in the following circumstances:
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                <strong>Service Providers:</strong> We may share information with trusted third-party
                service providers who assist us in operating our website, conducting business, or
                serving our clients (e.g., hosting providers, email services, analytics tools).
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose information if required by law,
                court order, or government regulation.
              </li>
              <li>
                <strong>Business Transfers:</strong> If Worksthal is involved in a merger,
                acquisition, or sale of assets, your information may be transferred as part of that
                transaction.
              </li>
              <li>
                <strong>With Your Consent:</strong> We may share information with your explicit
                consent for specific purposes.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 font-serif text-2xl font-semibold text-foreground">
              5. Data Security
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              We implement appropriate technical and organizational security measures to protect your
              personal information against unauthorized access, alteration, disclosure, or
              destruction. However, no method of transmission over the internet or electronic storage
              is 100% secure. While we strive to protect your information, we cannot guarantee its
              absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 font-serif text-2xl font-semibold text-foreground">
              6. Data Retention
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              We retain your personal information only for as long as necessary to fulfill the
              purposes outlined in this Privacy Policy, unless a longer retention period is required
              or permitted by law. When we no longer need your information, we will securely delete or
              anonymize it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 font-serif text-2xl font-semibold text-foreground">
              7. Your Rights
            </h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Depending on your location, you may have the following rights regarding your personal
              information:
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                <strong>Access:</strong> Request a copy of the personal information we hold about you
              </li>
              <li>
                <strong>Correction:</strong> Request correction of inaccurate or incomplete
                information
              </li>
              <li>
                <strong>Deletion:</strong> Request deletion of your personal information
              </li>
              <li>
                <strong>Objection:</strong> Object to processing of your personal information
              </li>
              <li>
                <strong>Portability:</strong> Request transfer of your information to another service
              </li>
              <li>
                <strong>Withdraw Consent:</strong> Withdraw consent for marketing communications at
                any time
              </li>
            </ul>
            <p className="leading-relaxed text-muted-foreground">
              To exercise these rights, please contact us at contact@worksthal.com.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 font-serif text-2xl font-semibold text-foreground">
              8. Third-Party Links
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              Our website may contain links to third-party websites. We are not responsible for the
              privacy practices or content of these external sites. We encourage you to review the
              privacy policies of any third-party sites you visit.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 font-serif text-2xl font-semibold text-foreground">
              9. Children's Privacy
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              Our services are not directed to individuals under the age of 18. We do not knowingly
              collect personal information from children. If you believe we have collected information
              from a child, please contact us immediately so we can delete it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 font-serif text-2xl font-semibold text-foreground">
              10. Changes to This Privacy Policy
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              We may update this Privacy Policy from time to time. We will notify you of any changes
              by posting the new Privacy Policy on this page and updating the "Last updated" date. We
              encourage you to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 font-serif text-2xl font-semibold text-foreground">
              11. Contact Us
            </h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              If you have any questions about this Privacy Policy or our privacy practices, please
              contact us:
            </p>
            <div className="rounded-lg border border-border bg-card p-6">
              <p className="mb-2 text-foreground">
                <strong>Worksthal</strong>
              </p>
              <p className="mb-1 text-muted-foreground">Email: contact@worksthal.com</p>
              <p className="mb-1 text-muted-foreground">Phone: +91 63098 21905</p>
              <p className="text-muted-foreground">Location: Hyderabad, Telangana, India</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
