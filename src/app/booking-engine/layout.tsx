export default function BookingEngineLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link rel="preload" href="https://foxesapp.netlify.app/widget/foxes-booking-modal.js" as="script" />
      <link rel="preload" href="https://foxesapp.netlify.app/widget/foxes-product-page.js" as="script" />
      {children}
    </>
  );
}
