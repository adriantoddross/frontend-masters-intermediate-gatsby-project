import * as React from "react"; // React doesn't require global import anymore but Gatsby hasn' updated yet.

export default function Custom({ pageContext }) {
  return (
    <div>
      <h1>{pageContext.title}</h1>
      <pre>{JSON.stringify(pageContext, null, 2)}</pre>
    </div>
  );
}