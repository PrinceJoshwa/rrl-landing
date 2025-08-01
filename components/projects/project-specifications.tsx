interface ProjectSpecificationsProps {
  specifications: {
    civil: string[]
    architecture: string[]
    services: string[]
  }
}

export function ProjectSpecifications({ specifications }: ProjectSpecificationsProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-slate-900 mb-4">Specifications</h2>
          <p className="text-xl text-slate-600">
            How we build the most affordable yet valuable homes in the heart of Bengaluru
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Civil */}
          <div className="bg-slate-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-6 text-center border-b border-slate-200 pb-4">CIVIL</h3>
            <ul className="space-y-4">
              {specifications.civil.map((item, index) => (
                <li key={index} className="text-sm text-slate-700">
                  <strong className="text-slate-900">{item.split(":")[0]}:</strong>
                  {item.split(":").slice(1).join(":")}
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture */}
          <div className="bg-slate-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-6 text-center border-b border-slate-200 pb-4">
              ARCHITECTURE
            </h3>
            <ul className="space-y-4">
              {specifications.architecture.map((item, index) => (
                <li key={index} className="text-sm text-slate-700">
                  <strong className="text-slate-900">{item.split(":")[0]}:</strong>
                  {item.split(":").slice(1).join(":")}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="bg-slate-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-6 text-center border-b border-slate-200 pb-4">
              SERVICES
            </h3>
            <ul className="space-y-4">
              {specifications.services.map((item, index) => (
                <li key={index} className="text-sm text-slate-700">
                  <strong className="text-slate-900">{item.split(":")[0]}:</strong>
                  {item.split(":").slice(1).join(":")}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
