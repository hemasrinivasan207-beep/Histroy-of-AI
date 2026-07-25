let lastCapturedError: Error | undefined;

export function captureError(error: Error) {
  lastCapturedError = error;
}

export function consumeLastCapturedError(): Error | undefined {
  const error = lastCapturedError;
  lastCapturedError = undefined;
  return error;
}

if (typeof window !== "undefined") {
  window.addEventListener("error", (event) => {
    captureError(new Error(event.message, { cause: event.error }));
  });
  window.addEventListener("unhandledrejection", (event) => {
    const reason = event.reason;
    if (reason instanceof Error) {
      captureError(reason);
    } else {
      captureError(new Error(String(reason)));
    }
  });
}
