import { SignUpButton, SignInButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Link2, BarChart3, Shield, Zap, Globe, Copy } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Shortening",
    description:
      "Paste any long URL and get a clean, shareable short link in milliseconds.",
  },
  {
    icon: BarChart3,
    title: "Click Analytics",
    description:
      "Track how many times your links are clicked and monitor their performance over time.",
  },
  {
    icon: Copy,
    title: "One-Click Copy",
    description:
      "Copy your shortened link to clipboard instantly — no selecting, no fuss.",
  },
  {
    icon: Globe,
    title: "Shareable Anywhere",
    description:
      "Short links work across email, social media, SMS, or anywhere you share content.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description:
      "Your links are tied to your account. Only you can manage and delete them.",
  },
  {
    icon: Link2,
    title: "Link History",
    description:
      "Access all your previously created links from your personal dashboard anytime.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-24 md:py-36 gap-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-sm text-muted-foreground">
          <Link2 className="size-3.5" />
          Simple · Fast · Reliable
        </div>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-foreground">
          Shorten your links.{" "}
          <span className="text-primary">Amplify your reach.</span>
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
          Create clean, memorable short links in seconds. Track clicks, manage
          your history, and share confidently — all from one dashboard.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 mt-2">
          <SignUpButton mode="modal">
            <Button size="lg" className="px-8">
              Get started free
            </Button>
          </SignUpButton>
          <SignInButton mode="modal">
            <Button size="lg" variant="outline" className="px-8">
              Sign in
            </Button>
          </SignInButton>
        </div>
      </section>

      {/* Demo URL preview */}
      <section className="flex justify-center px-4 pb-16">
        <div className="w-full max-w-2xl rounded-xl border border-border bg-muted/40 p-5 flex flex-col sm:flex-row items-center gap-4 text-sm font-mono">
          <div className="flex-1 truncate text-muted-foreground">
            https://www.example.com/very/long/url/that/nobody/wants/to/share
          </div>
          <div className="text-muted-foreground/50 hidden sm:block">→</div>
          <div className="text-primary font-semibold">lnk.sh/x9k2p</div>
        </div>
      </section>

      {/* Features grid */}
      <section className="container mx-auto px-4 pb-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-foreground">
            Everything you need, nothing you don&apos;t
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            A focused tool built for speed and simplicity.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-xl border border-border bg-muted/30 p-6 flex flex-col gap-3 hover:bg-muted/50 transition-colors"
            >
              <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon className="size-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-muted/20">
        <div className="container mx-auto px-4 py-20 flex flex-col items-center text-center gap-6">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-foreground">
            Ready to shorten your first link?
          </h2>
          <p className="text-muted-foreground max-w-md">
            Sign up for free — no credit card required. Start shortening and
            sharing in under a minute.
          </p>
          <SignUpButton mode="modal">
            <Button size="lg" className="px-10">
              Create your free account
            </Button>
          </SignUpButton>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Link Shortener. All rights reserved.
      </footer>
    </div>
  );
}
