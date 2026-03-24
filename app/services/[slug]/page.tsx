import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { servicesData, getServiceBySlug } from "@/lib/services-data";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const p = await params;
  const service = getServiceBySlug(p.slug);
  if (!service) return { title: "Not Found" };
  return {
    title: `${service.title} | Prayas Graphics`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const p = await params;
  const service = getServiceBySlug(p.slug);

  if (!service) {
    notFound();
  }

  // Suggest 3 other services
  const otherServices = servicesData.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <main className="flex min-h-screen flex-col items-center bg-stone-50 pb-20 pt-24 overflow-x-hidden">
      {/* Hero Section */}
      <section className="w-full max-w-7xl px-4 md:px-6 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 flex flex-col items-start">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800 mb-6">
              {service.tag}
            </div>
            <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-zinc-950 md:text-5xl lg:text-6xl mb-6">
              {service.title}
            </h1>
            <p className="text-lg text-zinc-600 mb-8 leading-relaxed max-w-xl">
              {service.longDescription}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link
                href={`/quote?service=${service.slug}`}
                className="w-full sm:w-auto flex h-14 items-center justify-center rounded-full bg-blue-600 px-8 font-semibold text-white transition-all hover:bg-blue-700 hover:scale-[1.02] shadow-lg shadow-blue-500/20"
              >
                Get a Quote for This
              </Link>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative aspect-[4/3] w-full overflow-hidden rounded-[32px] bg-zinc-100 shadow-xl">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="w-full max-w-7xl px-4 md:px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-[24px] bg-white p-8 shadow-sm border border-zinc-100">
            <h3 className="font-heading text-xl font-bold text-zinc-900 mb-4">Pricing</h3>
            <p className="text-2xl font-semibold text-blue-600 mb-2">{service.pricing}</p>
            <p className="text-sm text-zinc-500">Estimates may vary based on installation complexity, size, and material tier.</p>
          </div>
          
          <div className="rounded-[24px] bg-white p-8 shadow-sm border border-zinc-100">
            <h3 className="font-heading text-xl font-bold text-zinc-900 mb-4">Common Use Cases</h3>
            <ul className="space-y-3">
              {service.useCases.map((useCase, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-zinc-600 font-medium">{useCase}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[24px] bg-white p-8 shadow-sm border border-zinc-100">
            <h3 className="font-heading text-xl font-bold text-zinc-900 mb-4">Materials & Finish</h3>
            <ul className="space-y-3">
              {service.materials.map((material, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-blue-400 shrink-0 mt-2" />
                  <span className="text-zinc-600 font-medium">{material}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Bottom CTA & Related Services */}
      <section className="w-full max-w-7xl px-4 md:px-6 relative">
        <div className="rounded-[32px] bg-zinc-950 px-8 py-16 text-center text-white md:p-20 relative overflow-hidden flex flex-col items-center">
            {/* Background glowing gradients */}
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-blue-500/20 blur-[80px]" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-indigo-500/20 blur-[80px]" />

            <h2 className="font-heading text-3xl font-extrabold tracking-tight md:text-5xl max-w-2xl text-center relative z-10">
              Ready to elevate your brand presence?
            </h2>
            <p className="mt-6 text-lg text-zinc-400 font-medium max-w-xl text-center relative z-10 mb-8">
              Send us your requirements, and we'll provide a custom quote for your {service.title} project within 14 hours.
            </p>
            <Link
                href={`/quote?service=${service.slug}`}
                className="inline-flex h-14 items-center justify-center rounded-full bg-white px-8 font-bold text-zinc-950 transition-all hover:bg-zinc-200 hover:scale-[1.02] relative z-10"
              >
                Request Custom Quote
            </Link>
        </div>
      </section>

      {/* Related Services */}
      <section className="w-full max-w-7xl px-4 md:px-6 mt-20">
        <h3 className="font-heading text-2xl font-bold text-zinc-900 mb-8">Explore Other Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {otherServices.map((relatedService) => (
            <Link href={`/services/${relatedService.slug}`} key={relatedService.slug}>
              <div className="group flex flex-col justify-between rounded-[20px] bg-white p-6 shadow-sm border border-zinc-100 transition-all hover:shadow-md hover:border-blue-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex relative h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <relatedService.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-zinc-900 group-hover:text-blue-600 transition-colors">{relatedService.title}</h4>
                  </div>
                </div>
                <p className="text-sm text-zinc-500 line-clamp-2">{relatedService.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
