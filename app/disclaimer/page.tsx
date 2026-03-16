import LegalContent from "@/components/LegalContent";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Disclaimer – Prayas Graphics",
  description: "Read our full disclaimer regarding the use of the Prayas Graphics website and products.",
};

const sections = [
  {
    heading: "General Disclaimer",
    body: "The information provided on this website is for general informational purposes only. While we strive to keep all information accurate and up to date, Prayas Graphics makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the information, products, or services referenced on this site.",
  },
  {
    heading: "Product Colours & Representation",
    body: "We make every effort to display the colours and textures of our posters as accurately as possible on screen. However, due to variations in monitors, devices, and individual colour calibration settings, we cannot guarantee that the colours displayed are perfectly accurate representations of the physical product. Slight variations may occur.",
  },
  {
    heading: "Third-Party Links",
    body: "Our website may contain links to third-party websites for your convenience and additional information. Prayas Graphics has no control over the content of those sites and accepts no responsibility for them or for any loss or damage that may arise from your use of such sites.",
  },
  {
    heading: "Limitation of Liability",
    body: "To the fullest extent permitted by applicable law, Prayas Graphics shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of this website or the purchase of our products, even if we have been advised of the possibility of such damages.",
  },
  {
    heading: "Intellectual Property",
    body: "All content on this website — including text, imagery, graphics, logos, and artwork — is the intellectual property of Prayas Graphics or its licensors. Reproduction or redistribution without prior written consent is strictly prohibited.",
  },
  {
    heading: "Changes to This Disclaimer",
    body: "We reserve the right to update or modify this disclaimer at any time without prior notice. Continued use of the website after changes are made constitutes your acceptance of the revised disclaimer.",
  },
  {
    heading: "Contact",
    body: "If you have any questions about this disclaimer, please contact us at support@prayasgraphics.com.",
  },
];

export default function DisclaimerPage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-stone-50 pb-20 overflow-x-hidden">
      <LegalContent
        tag="Legal"
        title="Disclaimer"
        subtitle="Please read the following disclaimer carefully before using our website or purchasing our products."
        lastUpdated="March 2026"
        sections={sections}
      />
      <Footer />
    </main>
  );
}
