import { Info } from "lucide-react";

export default function Philosophy() {
  return (
    <div className="mx-auto mt-16 max-w-4xl rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 p-8 md:p-12">
      <div className="text-center">
        <h3 className="mb-4 text-2xl font-bold text-gray-800">
          My Teaching Philosophy
        </h3>
        <blockquote className="text-lg leading-relaxed text-gray-700 italic">
          Every student is unique, and so should be their learning journey. I
          believe in creating a supportive, engaging environment where mistakes
          are celebrated as learning opportunities.
          <br />
          <br />I also believe that learning a language happens primarily
          through{" "}
          <span className="group relative inline-flex items-center">
            Comprehensible Input
            <Info className="ml-1 h-4 w-4 text-blue-500" />
            <span className="absolute bottom-full mb-2 hidden w-64 rounded-lg bg-gray-800 px-3 py-2 text-sm text-white group-hover:block">
              Language you understand just enough to follow. It&apos;s the key
              to natural, effective language learning!{" "}
            </span>
          </span>
          . With my help and guidance, you will achieve this. But, and this is a{" "}
          <strong>big BUT</strong>, you will also have to put in a lot of time
          and effort outside of class. Don&apos;t worry, it&apos;s fun! 🥳 I
          will provide plenty of support and materials to guide you through the
          process.
        </blockquote>
        <div className="mt-6 flex justify-center">
          <div className="rounded-full bg-white p-3 shadow-lg">
            <span className="text-2xl">💙</span>
          </div>
        </div>
      </div>
    </div>
  );
}
