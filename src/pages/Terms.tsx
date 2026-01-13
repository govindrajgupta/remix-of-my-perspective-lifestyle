import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <SEO 
        title="Terms of Service"
        url="/terms"
        description="Read the Terms of Service for using Nyaya Alamban's website and services. Understand your rights and obligations when accessing our legal aid resources."
        keywords="terms of service, terms and conditions, user agreement, Nyaya Alamban terms, legal aid terms"
        noindex={true}
      />
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight animate-slide-down">
            Terms of Service
          </h1>
          <p className="text-muted-foreground animate-slide-up stagger-1">
            Last updated: January 13, 2026
          </p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
            <p className="text-muted-foreground">
              By accessing or using Nyaya Alamban's website and services, you agree to be bound by these 
              Terms of Service. If you disagree with any part of these terms, you may not access our services. 
              These terms apply to all visitors, users, and others who access or use our website and legal aid services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground mb-4">
              Nyaya Alamban is a non-governmental organization dedicated to providing free legal aid and 
              support to marginalized communities. Our services include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Free legal consultation and advice</li>
              <li>Legal representation for eligible individuals</li>
              <li>Legal awareness and education programs</li>
              <li>Community outreach and empowerment initiatives</li>
              <li>Referrals to appropriate legal resources and authorities</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Eligibility for our free legal services is determined based on financial need and the nature 
              of the legal matter. We reserve the right to decline representation at our discretion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">No Attorney-Client Relationship</h2>
            <p className="text-muted-foreground">
              Merely accessing our website or contacting us does not create an attorney-client relationship. 
              Such a relationship is only established when we have formally agreed to represent you in a 
              legal matter and you have signed an engagement letter or agreement with us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">User Responsibilities</h2>
            <p className="text-muted-foreground mb-4">
              When using our services, you agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Provide accurate and truthful information about your case and circumstances</li>
              <li>Respond promptly to requests for information or documentation</li>
              <li>Attend scheduled appointments and court dates</li>
              <li>Treat our staff and volunteers with respect and dignity</li>
              <li>Not use our services for fraudulent or illegal purposes</li>
              <li>Keep confidential any information shared with you during the course of representation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Website Use</h2>
            <p className="text-muted-foreground mb-4">
              You may use our website for lawful purposes only. You agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Violate any applicable laws or regulations</li>
              <li>Transmit harmful code, viruses, or malware</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with the proper functioning of the website</li>
              <li>Collect or harvest user information without consent</li>
              <li>Use the website for commercial solicitation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
            <p className="text-muted-foreground">
              All content on the Nyaya Alamban website, including text, graphics, logos, images, and 
              educational materials, is the property of Nyaya Alamban or its content creators and is 
              protected by copyright laws. You may use our educational materials for personal, 
              non-commercial purposes with proper attribution. Any other use requires our prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Disclaimer of Legal Information</h2>
            <p className="text-muted-foreground">
              The information provided on our website is for general informational purposes only and does 
              not constitute legal advice. Legal situations are fact-specific, and the information on 
              our website may not apply to your particular circumstances. Always consult with a qualified 
              legal professional for advice regarding your specific legal issues.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
            <p className="text-muted-foreground">
              Nyaya Alamban provides services on a pro bono basis and to the best of our abilities. 
              We shall not be liable for any indirect, incidental, special, or consequential damages 
              arising out of or in connection with our services. Our liability is limited to the extent 
              permitted by applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Termination of Services</h2>
            <p className="text-muted-foreground">
              We reserve the right to terminate our representation or services at any time if:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
              <li>You provide false or misleading information</li>
              <li>You fail to cooperate with our legal team</li>
              <li>There is a conflict of interest</li>
              <li>Continuing representation would be unethical or unlawful</li>
              <li>You engage in abusive or threatening behavior towards our staff</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Donations</h2>
            <p className="text-muted-foreground">
              Donations to Nyaya Alamban are voluntary and non-refundable. All donations are used to 
              support our mission of providing free legal aid to those in need. Tax receipts will be 
              issued in accordance with applicable laws and regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Modifications</h2>
            <p className="text-muted-foreground">
              Nyaya Alamban may revise these Terms of Service at any time without prior notice. 
              By continuing to use our website after any changes, you agree to be bound by the 
              revised terms. Please review these terms periodically for updates.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
            <p className="text-muted-foreground">
              These terms shall be governed by and construed in accordance with the laws of India. 
              Any disputes arising from these terms or our services shall be subject to the exclusive 
              jurisdiction of the courts in New Delhi, India.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="text-muted-foreground">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p className="text-muted-foreground mt-4">
              <strong>Nyaya Alamban</strong><br />
              Email: legal@nyayaalamban.org<br />
              Phone: +91 98765 43210<br />
              Address: New Delhi, India
            </p>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
