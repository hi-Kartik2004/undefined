import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Hello there!</h1>
      <div className="flex flex-col gap-2">
        <Link href="/login">login</Link>
        <Link href="/register">sign Up</Link>
        <Link href="/validate-otp">Validate-otp</Link>
      </div>
    </main>
  );
}
