import { Calendar, Clock } from "lucide-react";
import { ARTICLES } from "@/data/internwise";
import { SectionHeading } from "./SectionHeading";

export function CareerAdvice() {
  return (
    <section className="bg-secondary/40 py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Latest Career Advice" linkLabel="View All Articles" linkHref="/blog" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ARTICLES.map((article, i) => (
            <article
              key={article.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-card"
            >
              <a href={article.href} className="block">
                <div className="relative aspect-[16/10] bg-gradient-to-br from-primary/10 via-card to-accent/10">
                  <span className="absolute left-3 top-3 rounded-md bg-card/90 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-primary">
                    {article.category}
                  </span>
                </div>
              </a>
              <div className="flex flex-1 flex-col p-4">
                <h3 className="text-sm font-bold leading-snug text-foreground">
                  <a href={article.href} className="hover:text-primary">{article.title}</a>
                </h3>
                <div className="mt-auto flex items-center gap-4 pt-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    {article.readingTime}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
