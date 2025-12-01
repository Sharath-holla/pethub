import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ThemeRegistry from '@/components/ThemeRegistry'; 
import AuthProvider from '@/components/AuthProvider'; // Import this
import { CartProvider } from '@/context/CartContext';
import { CssBaseline } from '@mui/material';
import './globals.css';

export const metadata = { title: 'PetHub', description: 'Your one-stop shop for pets' };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider> {/* Add this */}
          <ThemeRegistry>
            <CartProvider>
              <CssBaseline />
              <Navbar />
              <main style={{ minHeight: '80vh' }}>{children}</main>
              <Footer />
            </CartProvider>
          </ThemeRegistry>
        </AuthProvider>
      </body>
    </html>
  );
}