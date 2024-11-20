import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions"
export default async function Home() {
  // const session = await getServerSession(authOptions);
  return (
   <div className="flex items-center justify-center flex-col min-h-screen">
    <h1 className="text-4xl">Hello</h1>
    <Link className="my-4 underline" href="/register-farmer">Become a farmer</Link>
   </div>
  );
}
