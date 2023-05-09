import SideBar from "@/components/SideBar"
import "./globals.css"
import { SessionProvider } from "@/components/SessionProvider"
import { getServerSession } from "next-auth";
import Login from "@/components/Login";
import ClientProvider from "@/components/ClientProvider";
import { authOptions } from "./api/auth/[...nextauth]/authOptions";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions);

  return (
    <html>
      <head>
        <title>ChatGPT Clone</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/src/app/favicon.ico" />
      </head>
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ): (
            <div className="flex">
            {/* SideBar */}
              <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
                <SideBar />
              </div>

              <ClientProvider />

              <div className="bg-[#343541] flex-1">
                {children}
              </div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  )
}