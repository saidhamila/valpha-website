"use client";

import Error from "../error";

export default function ErrorDemo() {
  // Pass a dummy error object for demonstration
  const dummyError = new Error("This is a demonstration error message.");
  (dummyError as any).digest = "DEMO-12345";
  
  return <Error error={dummyError} reset={() => window.location.reload()} />;
}
