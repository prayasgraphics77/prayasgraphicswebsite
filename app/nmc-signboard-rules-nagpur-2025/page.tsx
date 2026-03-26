import BlogPostLayout from "@/components/blog/BlogPostLayout";
import { StepBox, Callout } from "@/components/blog/shared";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NMC Signboard Rules Nagpur 2025 — What Every Shop Owner Must Know",
  description:
    "Planning to install a signboard or hoarding in Nagpur? Know the NMC signboard regulations, size limits, fee structure, and permission process.",
};

export default function NmcRulesPage() {
  return (
    <BlogPostLayout
      title="NMC Signboard Rules Nagpur 2025 — What Every Shop Owner Must Know Before Installing"
      metaDescription={metadata.description as string}
      eyebrow="Legal Guide · NMC Regulations"
      slug="nmc-signboard-rules-nagpur-2025"
      date="2025-03-24T00:00:00.000Z"
      readTime="9 min read"
      lede="NMC can fine and forcibly remove unauthorised signboards in Nagpur. Before your signage is installed, understand the permission process, size limits, and annual licence requirements."
      keywords={[
        "NMC signboard rules Nagpur",
        "signboard permission Nagpur",
        "hoarding permission NMC Nagpur",
        "signboard license Nagpur",
        "NMC advertisement tax Nagpur",
      ]}
      toc={[
        { title: "Signs that Require Permission", id: "require-permission" },
        { title: "General Size Guidelines", id: "size-guidelines" },
        { title: "NMC Permission Process", id: "permission-process" },
      ]}
    >
      <p>
        Nagpur Municipal Corporation (NMC) is the governing body that regulates all outdoor advertising, hoardings, and commercial signboards within Nagpur city limits. Installing a sign without NMC approval exposes your business to fines and forced removal — costing you both money and downtime. Yet most signboard vendors in Nagpur don't guide clients through this process.
      </p>
      <p>
        At Prayas Graphics, NMC compliance is part of every installation consultation we do. Here's what you need to know.
      </p>

      <Callout variant="red" icon="⚠️" title="Important Disclaimer">
        <p>NMC signboard regulations are updated periodically. The information below reflects general guidelines as understood by Prayas Graphics in 2025. Always verify current requirements directly with NMC's Advertisement Department or consult with us before proceeding. We are not legal advisors.</p>
      </Callout>

      <h2 id="require-permission">What Types of Signage Require NMC Permission?</h2>
      <ul>
        <li>Signboards on any building facing a public road within NMC limits</li>
        <li>Hoardings (flex on frame) of any size on private or public property</li>
        <li>Illuminated signs of any kind (backlit, LED, neon)</li>
        <li>Signboards projecting beyond the building line</li>
        <li>Banners on poles or scaffolding visible from public roads</li>
        <li>Painted wall advertisements (murals) visible from public roads</li>
      </ul>

      <h2 id="size-guidelines">General Size and Placement Guidelines</h2>
      <div className="overflow-x-auto my-6 border border-zinc-200 rounded-xl bg-white shadow-sm">
        <table className="w-full text-left text-sm text-zinc-600">
          <thead className="bg-zinc-950 text-white font-medium text-[13px] tracking-wide">
            <tr>
              <th className="px-5 py-3.5">Signboard Type</th>
              <th className="px-5 py-3.5">Typical Size Limit</th>
              <th className="px-5 py-3.5">Projection Limit</th>
              <th className="px-5 py-3.5">Permission Required</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100">
            <tr className="hover:bg-stone-50 transition-colors">
              <td className="px-5 py-4 font-semibold text-zinc-900">Shop name board</td>
              <td className="px-5 py-4">Width of shop frontage, max 3 ft height</td>
              <td className="px-5 py-4">Max 1 ft from wall</td>
              <td className="px-5 py-4 font-bold text-red-600">Yes</td>
            </tr>
            <tr className="hover:bg-stone-50 transition-colors">
              <td className="px-5 py-4 font-semibold text-zinc-900">Large illuminated fascia</td>
              <td className="px-5 py-4">As per road width and building setback</td>
              <td className="px-5 py-4">Varies by zone</td>
              <td className="px-5 py-4 font-bold text-red-600">Yes</td>
            </tr>
            <tr className="hover:bg-stone-50 transition-colors">
              <td className="px-5 py-4 font-semibold text-zinc-900">Wall hoarding (unipole)</td>
              <td className="px-5 py-4">Regulated by area and road class</td>
              <td className="px-5 py-4">N/A (flush)</td>
              <td className="px-5 py-4 font-bold text-red-600">Yes</td>
            </tr>
            <tr className="hover:bg-stone-50 transition-colors">
              <td className="px-5 py-4 font-semibold text-zinc-900">Flex roll-up standee</td>
              <td className="px-5 py-4">Max 6 ft height typical</td>
              <td className="px-5 py-4">N/A</td>
              <td className="px-5 py-4 font-medium text-amber-500">May require</td>
            </tr>
            <tr className="hover:bg-stone-50 transition-colors">
              <td className="px-5 py-4 font-semibold text-zinc-900">Interior signage</td>
              <td className="px-5 py-4">No restriction</td>
              <td className="px-5 py-4">N/A</td>
              <td className="px-5 py-4 font-bold text-emerald-600">Generally No</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="permission-process">The NMC Permission Process (Step by Step)</h2>
      <div className="mt-8">
        <StepBox
          num={1}
          title="Prepare Your Application"
          desc="You'll need: Property documents or rental agreement, architect/engineer drawing of the proposed signboard with dimensions, site photographs, and identity proof."
        />
        <StepBox
          num={2}
          title="Calculate Licence Fee"
          desc="NMC charges an annual licence fee based on signboard size, type (illuminated or non-illuminated), and the road category. Illuminated signs have higher fee rates."
        />
        <StepBox
          num={3}
          title="Submit to NMC Advertisement Department"
          desc="Submit your application at the NMC Mahanagar Palika building, Nagpur. The Advertisement Department processes approvals, typically within 15–30 working days for straightforward applications."
        />
        <StepBox
          num={4}
          title="Receive Permission & Display Certificate"
          desc="Once approved, NMC issues a permission certificate with a unique registration number. Display this prominently on your signboard or keep it available at the premises."
        />
        <StepBox
          num={5}
          title="Renew Annually"
          desc="NMC signboard licences are typically renewed annually. Set a reminder — lapsed licences can result in penalties and the same removal risk as no licence at all."
        />
      </div>

      <Callout variant="gold" icon="💡" title="Prayas Graphics NMC Support">
        <p>We assist all our Nagpur clients in understanding the NMC signboard requirements specific to their installation address and road category. While we cannot act as legal agents, we ensure every sign we fabricate is designed within compliant dimensions. Ask us about NMC compliance during your initial consultation.</p>
      </Callout>
    </BlogPostLayout>
  );
}
