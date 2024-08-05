import Link from "next/link";

export default function Home() {
  return (
    <div>
      Hello World.omer{" "}
      <Link href="/about">
        About
      </Link>
    </div>
  );
}
