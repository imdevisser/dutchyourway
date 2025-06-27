import Image from "next/image";

export const MDXComponents = {
  h1: (props) => (
    <h1
      className="text-xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent"
      {...props}
    />
  ),
  h2: (props) => (
    <h2 className="text-xl font-bold mb-6 mt-12 text-gray-800" {...props} />
  ),
  h3: (props) => (
    <h3 className="text-2xl font-semibold mb-4 mt-8 text-gray-800" {...props} />
  ),
  h4: (props) => (
    <h4 className="text-xl font-semibold mb-3 mt-6 text-gray-800" {...props} />
  ),
  h5: (props) => (
    <h5 className="text-lg font-semibold mb-2 mt-4 text-gray-800" {...props} />
  ),
  h6: (props) => (
    <h6
      className="text-base font-semibold mb-2 mt-4 text-gray-800"
      {...props}
    />
  ),
  p: (props) => (
    <p
      className="mb-6 leading-relaxed text-gray-700 text-md md:text-lg"
      {...props}
    />
  ),
  ul: (props) => (
    <ul
      className="list-disc list-inside mb-6 space-y-2 text-gray-700 ml-4 text-md md:text-lg"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="list-decimal list-inside mb-6 space-y-3 text-gray-700 ml-4"
      {...props}
    />
  ),
  li: (props) => <li className="leading-relaxed" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="border-l-4 border-red-500 pl-6 italic my-8 bg-gradient-to-r from-red-50 to-blue-50 p-6 rounded-r-2xl text-gray-700 font-medium shadow-sm"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="bg-gray-100 px-3 py-1 rounded-lg text-sm font-mono text-red-600 border"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="bg-gray-900 text-white p-6 rounded-2xl overflow-x-auto mb-8 shadow-lg border border-gray-700"
      {...props}
    />
  ),
  a: (props) => (
    <a
      className="text-transparent bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text hover:from-red-700 hover:to-blue-700 font-semibold border-b-2 border-transparent hover:border-red-300 transition-all duration-300"
      target={props.href?.startsWith("http") ? "_blank" : undefined}
      rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      {...props}
    />
  ),
  img: ({ src, alt = "", width, height, ...rest }) => (
    <div className="relative my-8 w-full rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
      <Image
        src={src}
        alt={alt}
        width={width || 400}
        height={height || 250}
        className="w-full h-auto object-cover"
        {...rest}
      />
    </div>
  ),
  hr: (props) => (
    <hr
      className="my-12 border-0 h-px bg-gradient-to-r from-red-200 via-gray-300 to-blue-200"
      {...props}
    />
  ),
  table: (props) => (
    <div className="overflow-x-auto my-8">
      <table
        className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm"
        {...props}
      />
    </div>
  ),
  th: (props) => (
    <th
      className="px-6 py-3 bg-gradient-to-r from-red-50 to-blue-50 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b border-gray-200"
      {...props}
    />
  ),
  td: (props) => (
    <td
      className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-b border-gray-200"
      {...props}
    />
  ),
  strong: (props) => <strong className="font-bold text-gray-800" {...props} />,
  em: (props) => <em className="italic text-gray-700" {...props} />,
};
