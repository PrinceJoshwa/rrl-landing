// You should extract the FAQSection component from your page.tsx to a reusable file.
// For now, I am assuming it's available to be imported.
// Let's assume you moved the FAQSection component from `page.tsx` to a new file: `components/sections/FAQSection.tsx`

import { FAQSection } from "@/components/faq/faq-section"; // Hypothetical path

export default function FAQPage() {
  return (
    <FAQSection 
      title="All Your Questions Answered"
      subtitle="Find detailed information about RRL Groups, our projects, and processes."
    />
  );
}

// NOTE: You would need to create the file `components/sections/FAQSection.tsx` and move the FAQ component code from `page.tsx` into it.