import Link from "next/link";

function CtaAfrikaans() {
  return (
    <div className="text-center">
      <div className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-r from-red-600 to-blue-600 p-8 text-white md:p-12">
        <h3 className="mb-4 text-3xl font-bold">
          Are you ready to speak Dutch?
        </h3>
        <p className="mb-8 text-xl opacity-90">
          Choose the best learning method for you - online course or private
          lessons.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Online Course Option */}
          <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
            <h4 className="mb-3 text-xl font-semibold">Aanlyn Video Kursus</h4>
            <p className="mb-4 text-sm opacity-90">
              Spesifiek ontwerp vir Afrikaanssprekendes
            </p>
            <ul className="mb-6 space-y-2 text-left text-sm">
              <li>✓ Bekostigbaar</li>
              <li>✓ Leer in jou eie tyd</li>
              <li>✓ Altyd WhatsApp ondersteuning van my</li>
            </ul>
            <a
              href="https://udemy.com/course/dutch-for-afrikaans-speakers"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full transform rounded-full bg-white px-6 py-3 font-semibold text-red-600 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Besoek Kursus
            </a>
          </div>

          {/* Private Lessons Option */}
          <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
            <h4 className="mb-3 text-xl font-semibold">Private Lesse</h4>
            <p className="mb-4 text-sm opacity-90">
              Een-tot-een persoonlike onderrig
            </p>
            <ul className="mb-6 space-y-2 text-left text-sm">
              <li>✓ Aangepaste leerplan</li>
              <li>✓ Persoonlike aandag</li>
              <li>✓ Buigsame skedule</li>
            </ul>
            <Link
              href="/contact"
              className="inline-block w-full transform rounded-full border-2 border-white bg-transparent px-6 py-3 font-semibold transition-all duration-300 hover:scale-105 hover:bg-white hover:text-red-600"
            >
              Boek &apos;n Les
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CtaAfrikaans;
