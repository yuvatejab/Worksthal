import type { Metadata } from "next";
import Link from "next/link";

const baseUrl = "https://worksthal.vercel.app";

export const metadata: Metadata = {
  title: "Terms of Service — Worksthal",
  description:
    "Worksthal's terms of service outline the rules and regulations for using our website and services. Read our terms before engaging with Worksthal.",
  alternates: {
    canonical: `${baseUrl}/terms`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
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
          Terms of Service
        </h1>
        <p className="mb-8 text-sm text-muted-foreground">
          Last updated: February 6, 2026
        </p>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="mb-4 font-serif text-2xl font-semibold text-foreground">
              1. Agreement to Terms
            </h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              These Terms of Service ("Terms") govern your access to and use of Worksthal's website
              (worksthal.vercel.app) and services. By accessing or using our website or services, you
              agree to be bound by these Terms and our Privacy Policy.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              If you do not agree to these Terms, you may not access or use our website or services.
              We reserve the right to modify these Terms at any time. Your continued use of our
              services after changes are posted constitutes acceptance of the modified Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 font-serif text-2xl font-semibold text-foreground">
              2. Services Provided
            </h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Worksthal provides the following services:
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>AI workflow automation development and implementation</li>
              <li>Website design and development using modern frameworks</li>
              <li>AI Engine Optimization (AEO) and SEO services</li>
              <li>AI-driven marketing and digital strategy consulting</li>
            </ul>
            <p className="leading-relaxed text-muted-foreground">
              The specific scope, deliverables, timeline, and pricing for services are defined in
              individual project proposals and agreements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 font-serif text-2xl font-semibold text-foreground">
              3. User Obligations
            </h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              When using our website or services, you agree to:
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Provide accurate and complete information</li>
              <li>Maintain the confidentiality of any account credentials</li>
              <li>Use our services only for lawful purposes</li>
              <li>Not interfere with or disrupt our website or services</li>
              <li>Not attempt to gain unauthorized access to our systems</li>
              <li>Not use our services to transmit harmful code or malicious content</li>
              <li>Respect intellectual property rights</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 font-serif text-2xl font-semibold text-foreground">
              4. Intellectual Property Rights
            </h2>
            <h3 className="mb-3 text-xl font-semibold text-foreground">4.1 Our Content</h3>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              All content on our website, including text, graphics, logos, images, code, and design,
              is the property of Worksthal and is protected by copyright, trademark, and other
              intellectual property laws. You may not reproduce, distribute, modify, or create
              derivative works without our express written permission.
            </p>

            <h3 className="mb-3 text-xl font-semibold text-foreground">4.2 Client Work</h3>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Upon full payment for services, clients receive ownership of the final deliverables as
              specified in the project agreement. Worksthal retains the right to use completed
              projects in our portfolio and marketing materials unless otherwise agreed in writing.
            </p>

            <h3 className="mb-3 text-xl font-semibold text-foreground">4.3 Client Materials</h3>
            <p className="leading-relaxed text-muted-foreground">
              Clients retain ownership of any materials, content, or intellectual property they
              provide to Worksthal. By providing these materials, clients grant Worksthal a license to
              use them solely for the purpose of delivering the agreed-upon services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 font-serif text-2xl font-semibold text-foreground">
              5. Payment Terms
            </h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Payment terms are specified in individual project proposals. Generally:
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                Project-based work typically requires a deposit (usually 30%) before work begins
              </li>
              <li>Milestone payments are due upon completion of specified project phases</li>
              <li>Final payment is due upon project completion before final deliverables are released</li>
              <li>Ongoing services (maintenance, marketing) are billed monthly in advance</li>
              <li>Invoices are due within 15 days of issuance unless otherwise specified</li>
              <li>Late payments may incur interest charges and suspension of services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 font-serif text-2xl font-semibold text-foreground">
              6. Project Timelines and Deliverables
            </h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Worksthal makes reasonable efforts to meet agreed-upon timelines. However, timelines are
              estimates and may be affected by:
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Delays in client feedback or approval</li>
              <li>Changes to project scope or requirements</li>
              <li>Unavailability of required third-party services or integrations</li>
              <li>Force majeure events beyond our control</li>
            </ul>
            <p className="leading-relaxed text-muted-foreground">
              We will communicate any anticipated delays promptly and work with clients to adjust
              timelines as needed.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 font-serif text-2xl font-semibold text-foreground">
              7. Revisions and Changes
            </h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Project proposals include a specified number of revision rounds. Additional revisions or
              changes to project scope may incur additional fees. Significant scope changes may
              require a new proposal and timeline adjustment.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Clients must provide feedback and approval within agreed-upon timeframes. Delayed
              feedback may impact project timelines and deliverables.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 font-serif text-2xl font-semibold text-foreground">
              8. Warranties and Disclaimers
            </h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Worksthal warrants that services will be performed with reasonable skill and care.
              However:
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                We do not guarantee specific business results, rankings, traffic, or revenue outcomes
              </li>
              <li>
                We are not responsible for third-party services, platforms, or API changes beyond our
                control
              </li>
              <li>
                Websites and applications are provided "as is" after final delivery and payment
              </li>
              <li>
                Ongoing maintenance and support are available through separate service agreements
              </li>
            </ul>
            <p className="leading-relaxed text-muted-foreground">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, WORKSTHAL DISCLAIMS ALL IMPLIED WARRANTIES,
              INCLUDING MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 font-serif text-2xl font-semibold text-foreground">
              9. Limitation of Liability
            </h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, WORKSTHAL'S TOTAL LIABILITY FOR ANY CLAIMS
              ARISING FROM OUR SERVICES SHALL NOT EXCEED THE TOTAL AMOUNT PAID BY THE CLIENT FOR THE
              SPECIFIC SERVICE GIVING RISE TO THE CLAIM.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              WORKSTHAL SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, OR
              PUNITIVE DAMAGES, INCLUDING LOST PROFITS, LOST REVENUE, OR LOST DATA, EVEN IF ADVISED OF
              THE POSSIBILITY OF SUCH DAMAGES.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 font-serif text-2xl font-semibold text-foreground">
              10. Confidentiality
            </h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Both parties agree to keep confidential any proprietary or sensitive information shared
              during the course of the engagement. This obligation survives termination of the
              agreement.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Confidential information does not include information that is publicly available,
              independently developed, or required to be disclosed by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 font-serif text-2xl font-semibold text-foreground">
              11. Termination
            </h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Either party may terminate a project agreement with written notice. Upon termination:
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Client is responsible for payment for all work completed up to the termination date</li>
              <li>Worksthal will deliver all completed work upon receipt of payment</li>
              <li>Deposits and payments for completed work are non-refundable</li>
              <li>Both parties' confidentiality obligations remain in effect</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 font-serif text-2xl font-semibold text-foreground">
              12. Governing Law and Disputes
            </h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              These Terms are governed by the laws of India. Any disputes arising from these Terms or
              our services shall be resolved through good-faith negotiation. If negotiation fails,
              disputes shall be subject to the exclusive jurisdiction of the courts in Hyderabad,
              Telangana, India.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 font-serif text-2xl font-semibold text-foreground">
              13. Changes to Terms
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              We reserve the right to modify these Terms at any time. Changes will be posted on this
              page with an updated "Last updated" date. Your continued use of our services after
              changes are posted constitutes acceptance of the modified Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 font-serif text-2xl font-semibold text-foreground">
              14. Contact Information
            </h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              If you have any questions about these Terms of Service, please contact us:
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
