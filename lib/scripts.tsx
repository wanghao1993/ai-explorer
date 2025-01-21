import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
export default function Scripts() {
  return process.env.NODE_ENV !== "production" ? null : (
    <>
      <SpeedInsights />
      <Analytics />
    </>
  );
}
