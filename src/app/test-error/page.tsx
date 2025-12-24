"use client";

import { useEffect } from "react";

export default function TestErrorPage() {
  useEffect(() => {
    throw new Error("This is a test error triggered for verification.");
  }, []);

  return (
    <div className="p-20 text-center">
      <h1 className="text-2xl font-bold">Triggering error...</h1>
    </div>
  );
}
