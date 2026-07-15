import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Startup Support Advisory — Business Funding Partner for Growth',
  description: 'India\'s most trusted business funding consultancy. Get funding for your startup, MSME, or enterprise with expert guidance from Startup Support Advisory.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
