"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
      <p className="text-foreground/60 mb-4">
        {error.message || "An unexpected error occurred"}
      </p>
      {error.digest && (
        <p className="text-sm text-foreground/40 mb-4">
          Error ID: {error.digest}
        </p>
      )}
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
      >
        Try again
      </button>
    </div>
  );
}
