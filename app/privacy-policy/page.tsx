import LegalContent from "@/components/LegalContent";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy & Policy – Prayas Graphics",
  description: "Learn how Prayas Graphics collects, uses, and protects your personal information.",
};

const sections = [
  {
    heading: "Information We Collect",
    body: [
      "Personal identification information (name, email address, phone number) provided when you place an order or contact us.",
      "Payment information — processed securely through our payment provider. We do not store full card details.",
      "Shipping address and order history needed to fulfil your purchases.",
      "Device and usage data (browser type, pages visited, IP address) collected automatically via cookies to improve our site.",
    ],
  },
  {
    heading: "How We Use Your Information",
    body: [
      "To process and fulfil your orders, including shipping and customer communications.",
      "To send transactional emails (order confirmations, shipping updates).",
      "To send promotional emails if you have opted in — you may unsubscribe at any time.",
      "To improve our website, detect technical issues, and understand how visitors use our site.",
    ],
  },
  {
    heading: "Cookies",
    body: "We use cookies to personalise your experience and analyse traffic. You may disable cookies in your browser settings; however, some functionality may be affected. By continuing to use our site, you consent to our use of cookies.",
  },
  {
    heading: "Data Sharing",
    body: "We do not sell or rent your personal data to third parties. We may share necessary information with trusted service providers (payment processors, shipping carriers) solely to complete your order. These partners are obligated to protect your data.",
  },
  {
    heading: "Data Retention",
    body: "We retain your personal data for as long as necessary to fulfil the purposes outlined in this policy or as required by law. You may request deletion of your data at any time by contacting us.",
  },
  {
    heading: "Your Rights",
    body: [
      "Access the personal data we hold about you.",
      "Request correction of inaccurate or incomplete data.",
      "Request deletion of your personal data (right to be forgotten).",
      "Object to or restrict certain processing of your data.",
      "Withdraw consent to marketing communications at any time.",
    ],
  },
  {
    heading: "Security",
    body: "We implement industry-standard security measures including SSL encryption to protect your data. Despite these safeguards, no internet transmission is 100% secure, and we cannot guarantee absolute security.",
  },
  {
    heading: "Children's Privacy",
    body: "Our website is not directed at children under 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us and we will promptly delete it.",
  },
  {
    heading: "Changes to This Policy",
    body: "We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page with an updated date.",
  },
  {
    heading: "Contact Us",
    body: "For any privacy-related questions or to exercise your rights, please email us at prayasgraphics77@gmail.com or visit us at Madhuvatsalya Apartment Shop no 3 Tukdoji Sqr, Manewada Rd, opp. MSEB Office, appt, Nagpur, Maharashtra 440027.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-stone-50 pb-20 overflow-x-hidden">
      <LegalContent
        tag="Legal"
        title="Privacy & Policy"
        subtitle="Your privacy matters to us. This policy explains exactly what data we collect, why we collect it, and how we protect it."
        lastUpdated="March 2026"
        sections={sections}
      />
      <Footer />
    </main>
  );
}
