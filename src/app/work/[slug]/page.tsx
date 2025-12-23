import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { caseStudies } from "@/lib/content/case-studies";
import { Container } from "@/components/layout/Container";
import { CaseStudyContent } from "@/components/work/CaseStudyContent";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.id === slug);
  
  if (!study) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${study.title} | Case Study`,
    description: study.shortDescription,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.id === slug);

  if (!study) {
    notFound();
  }

  const studyIndex = caseStudies.findIndex((s) => s.id === slug);
  const prevStudy = studyIndex > 0 ? caseStudies[studyIndex - 1] : null;
  const nextStudy = studyIndex < caseStudies.length - 1 ? caseStudies[studyIndex + 1] : null;

  return (
    <main className="pt-24 pb-16">
      <Container>
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to Work
        </Link>

        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium rounded-full bg-sky/10 text-sky"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-foreground mb-4">
            {study.title}
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl">
            {study.shortDescription}
          </p>

          <div className="mt-8 flex flex-wrap gap-8">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Client</p>
              <p className="font-medium text-foreground">{study.client}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Industry</p>
              <p className="font-medium text-foreground">{study.industry}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Tech Stack</p>
              <p className="font-medium text-foreground">{study.stack.join(", ")}</p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
          {study.metrics.map((metric) => (
            <div
              key={metric.label}
              className="p-6 rounded-2xl border border-border bg-card text-center"
            >
              <p className="text-3xl sm:text-4xl font-bold text-sky mb-2">
                {metric.value}
              </p>
              <p className="text-sm text-muted-foreground">{metric.label}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-16">
          {study.images.map((image, index) => (
            <div key={index} className="relative group">
              <div className="aspect-video rounded-xl bg-gradient-to-br from-sky/20 to-sky/5 border border-border overflow-hidden flex items-center justify-center">
                <div className="text-center p-4">
                  <ExternalLink className="w-8 h-8 text-sky/40 mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">{image.alt}</p>
                </div>
              </div>
              {image.caption && (
                <p className="mt-2 text-sm text-muted-foreground text-center">
                  {image.caption}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-[1fr_300px] gap-12">
          <CaseStudyContent content={study.content} />
          
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="p-6 rounded-2xl border border-border bg-card">
              <h3 className="font-semibold text-foreground mb-4">Project Summary</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Challenge</p>
                  <p className="text-sm text-foreground">{study.challenge}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Solution</p>
                  <p className="text-sm text-foreground">{study.solution}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Outcome</p>
                  <p className="text-sm text-foreground">{study.outcome}</p>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <nav className="mt-16 pt-8 border-t border-border">
          <div className="flex justify-between">
            {prevStudy ? (
              <Link
                href={`/work/${prevStudy.id}`}
                className="group"
              >
                <p className="text-sm text-muted-foreground mb-1">Previous</p>
                <p className="font-medium text-foreground group-hover:text-sky transition-colors">
                  {prevStudy.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
            
            {nextStudy ? (
              <Link
                href={`/work/${nextStudy.id}`}
                className="group text-right"
              >
                <p className="text-sm text-muted-foreground mb-1">Next</p>
                <p className="font-medium text-foreground group-hover:text-sky transition-colors">
                  {nextStudy.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </nav>
      </Container>
    </main>
  );
}
