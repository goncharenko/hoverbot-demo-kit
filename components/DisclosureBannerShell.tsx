import type { ReactNode } from "react"

/*
 * The visual chrome for a demo site's fiction-disclosure banner: colour, layout, the warning
 * icon. Every HoverBot industry demo uses this exact chrome; only the sentence naming the
 * fictional company and what it invented differs per site, and that sentence stays in each
 * demo repo's own components/disclosure-banner.tsx so that repo's
 * scripts/verify-fiction-disclosure.mjs (which greps that file's literal text) keeps working
 * unchanged.
 *
 * This sits in NORMAL FLOW at the top of the page, directly under the fixed demo bar, and the
 * site header below it must NOT be sticky. A sticky header on a sibling demo once covered its
 * disclosure banner completely, invisibly: the element was present, rendered, and never seen.
 * Check it on a real viewport, not in the markup.
 */
export default function DisclosureBannerShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative z-20 border-b border-[#4a3a15] bg-[#2a2010]">
      <div className="mx-auto flex max-w-6xl items-start gap-3 px-5 py-3 sm:px-8">
        <span aria-hidden className="mt-0.5 text-base leading-none">&#9888;</span>
        <p className="text-sm leading-relaxed text-[#f0d9a8]">{children}</p>
      </div>
    </div>
  )
}
