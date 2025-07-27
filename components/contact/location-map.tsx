export function LocationMap() {
  return (
    <section className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">RRL Corporate Office Location Map</h2>
          <p className="text-xl text-slate-600">Visit our office for personalized consultation and property tours</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="aspect-video bg-slate-100 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Interactive Map</h3>
                <p className="text-slate-600">RRL Towers, 4th Floor, Sampige Jala, Sarjapur, Attibele Rd, Bengaluru</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
