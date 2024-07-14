export default function Footer() {
  return (
    <footer className='py-4'>
      <div className='container'>
        <p className='text-center text-sm'>
          &copy; {new Date().getFullYear()} Vinir íslenskrar náttúru (VÍN).
          Under development
        </p>
      </div>
    </footer>
  );
}
