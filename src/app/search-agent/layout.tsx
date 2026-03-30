export default function SearchAgentLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link rel="preload" href="https://ai-search-agent.netlify.app/widget/foxes-widget.js" as="script" />
      <link rel="preload" href="https://ai-search-agent.netlify.app/widget/foxes-core.js" as="script" />
      {children}
    </>
  );
}
