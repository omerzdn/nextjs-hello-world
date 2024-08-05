import Link from "next/link";

export default function Home() {
  return (
    <div>
      omer poc{" "}
      <Link href="/about">
        About
      </Link>
    </div>
  );
}
