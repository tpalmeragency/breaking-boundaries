export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="container">
        <p>© {year} Breaking Boundaries — Built with Next.js</p>
      </div>
    </footer>
  )
}
