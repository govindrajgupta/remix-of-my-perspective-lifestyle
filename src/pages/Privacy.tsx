import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <SEO 
        title="Privacy Policy"
        url="/privacy"
        description="Learn how Nyaya Alamban collects, uses, and protects your personal information. Read our privacy policy for details on data security and your rights."
        keywords="privacy policy, data protection, personal information, Nyaya Alamban privacy, legal aid privacy"
        noindex={true}
      />
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight animate-slide-down">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground animate-slide-up stagger-1">
            Last updated: January 13, 2026
          </p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-muted-foreground">
              Nyaya Alamban ("we," "our," or "us") is committed to protecting your privacy and ensuring 
              the confidentiality of your personal information. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you visit our website, use our legal aid 
              services, or engage with our organization.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <h3 className="text-xl font-semibold mb-3 mt-6">Personal Information</h3>
            <p className="text-muted-foreground mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Request legal aid or consultation services</li>
              <li>Fill out intake forms or case assessment questionnaires</li>
              <li>Contact us through our website, phone, or in person</li>
              <li>Subscribe to our newsletter or updates</li>
              <li>Participate in our community outreach programs</li>
              <li>Make donations to support our mission</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              This information may include your name, email address, phone number, address, and any 
              case-related details you choose to share with us.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Sensitive Legal Information</h3>
            <p className="text-muted-foreground">
              Given the nature of our legal aid services, we may collect sensitive information related 
              to your legal matters. This information is treated with the highest level of confidentiality 
              and is protected under attorney-client privilege where applicable.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Automatically Collected Information</h3>
            <p className="text-muted-foreground">
              When you visit our website, we may automatically collect certain information about your device, 
              including information about your web browser, IP address, time zone, and some of the cookies 
              installed on your device.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Provide legal aid services and case representation</li>
              <li>Assess eligibility for our free legal assistance programs</li>
              <li>Communicate with you about your case or inquiry</li>
              <li>Send you updates about our programs and services</li>
              <li>Process donations and issue tax receipts</li>
              <li>Improve our website and service delivery</li>
              <li>Comply with legal and regulatory requirements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Attorney-Client Privilege</h2>
            <p className="text-muted-foreground">
              All communications between you and our legal team regarding legal advice are protected 
              by attorney-client privilege. We will not disclose any privileged information without 
              your express written consent, except as required by law or court order.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Data Security</h2>
            <p className="text-muted-foreground">
              We implement appropriate technical and organizational security measures to protect your 
              personal information. This includes encrypted storage, secure access controls, and regular 
              security audits. However, please note that no method of transmission over the Internet 
              or method of electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <p className="text-muted-foreground mb-4">
              You have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>The right to access your personal information</li>
              <li>The right to rectification of inaccurate information</li>
              <li>The right to erasure of your personal information (subject to legal retention requirements)</li>
              <li>The right to withdraw consent</li>
              <li>The right to receive copies of your case files</li>
              <li>The right to lodge a complaint with a supervisory authority</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Data Retention</h2>
            <p className="text-muted-foreground">
              We retain your personal information for as long as necessary to fulfill the purposes 
              outlined in this policy, unless a longer retention period is required by law. Legal 
              case files are retained in accordance with bar association guidelines and applicable 
              legal requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
            <p className="text-muted-foreground">
              We may share your information with trusted third parties who assist us in operating our 
              organization, such as case management software providers, communication platforms, and 
              payment processors. These parties are bound by confidentiality agreements and are 
              prohibited from using your information for any other purpose.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground">
              We may update our Privacy Policy from time to time. We will notify you of any changes by 
              posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy or wish to exercise your rights, 
              please contact us at:
            </p>
            <p className="text-muted-foreground mt-4">
              <strong>Nyaya Alamban</strong><br />
              Email: privacy@nyayaalamban.org<br />
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

export default Privacy;
