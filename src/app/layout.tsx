import Footer from './components/Footer';
import Nav from './components/Nav';
import './styles/global.css';

export const metadata = {
  title: 'Adoção de Pets',
  description: 'Trainee Byron Solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}