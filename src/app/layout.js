import './globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Header } from '@/components/Cabecalho/Header'
import { Suspense } from 'react'
import Loading from './loading'

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>
        <div>
          <Suspense fallback={<div><Loading/></div>}>
            <Header />
          </Suspense>

          {children}
        </div>

      </body>
    </html>
  )
}
