import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Test App',
  description: 'This is next pizza test app'
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <main className='min-h-screen'>
        {children}
      </main>
  )
}
