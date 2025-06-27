// Since styling is handled by MDXComponents in getPostBySlug,
// this component can be very simple
export default function MDXContent({ source }) {
  return <div className="max-w-none">{source}</div>;
}
