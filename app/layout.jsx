import './globals.css';

export const metadata = {
  title: 'FundBridge India — Business Funding Partner for Growth',
  description: 'India\'s most trusted business funding consultancy. Get funding for your startup, MSME, or enterprise with expert guidance.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
