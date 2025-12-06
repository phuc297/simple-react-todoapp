function Header() {
  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          Nội dung Header
        </div>
      </header>
    </>
  );
}

function Footer() {
  return (
    <>
      <footer className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          Nội dung Footer
        </div>
      </footer>
    </>
  );
}

export default function Layout({ children }) {
  return (
    <>
      <main className="min-h-screen flex flex-col">
        {/* <Header /> */}
        <main className="bg-white grow">{children}</main>
        {/* <Footer /> */}
      </main>
    </>
  );
}
