import Link from "next/link";

function Homepage() {
  return (
    <h1>
      This is the homepage of the demo app. This page is not localized. You can
      go to the{" "}
      <Link className="text-red-500 underline" href="/lingui-demo">
        Lingui demo
      </Link>
      .
    </h1>
  );
}

export default Homepage;
