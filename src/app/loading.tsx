import { Container } from "@/components/layout/Container";

export default function Loading() {
  return (
    <main className="min-h-screen flex items-center justify-center pt-20">
      <Container>
        <div className="flex flex-col items-center justify-center space-y-8">
          {/* Logo Animation */}
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 border-4 border-sky/20 rounded-full animate-pulse" />
            <div className="absolute inset-0 border-4 border-sky border-t-transparent rounded-full animate-spin" />
          </div>
          
          <div className="space-y-4 text-center">
            <h1 className="text-2xl font-bold font-heading text-foreground animate-pulse">
              Loading
            </h1>
            <div className="flex gap-1.5 justify-center">
              <div className="w-2 h-2 rounded-full bg-sky animate-bounce [animation-delay:-0.3s]" />
              <div className="w-2 h-2 rounded-full bg-sky animate-bounce [animation-delay:-0.15s]" />
              <div className="w-2 h-2 rounded-full bg-sky animate-bounce" />
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
