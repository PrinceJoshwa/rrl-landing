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
            <div className="aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0234567890123!2d77.6234567890123!3d12.9234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1234567890ab%3A0x1234567890abcdef!2sRRL%20Towers%2C%20Sampige%20Jala%2C%20Sarjapur%20Attibele%20Rd%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="RRL Corporate Office Location"
                className="rounded-2xl"
              ></iframe>
            </div>
            
            {/* Address details below the map */}
            <div className="p-6 bg-slate-50">
              <div className="text-center">
                <h3 className="text-xl font-bold text-slate-900 mb-2">RRL Corporate Office</h3>
                <p className="text-slate-600 mb-2">RRL Towers, 4th Floor, Sampige Jala, Sarjapur, Attibele Rd, Bengaluru, Karnataka 561113</p>
                <div className="flex justify-center space-x-6 text-sm text-slate-500">
                  <span>📞 +91-8068352626</span>
                  <span>✉️ info@rrl.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
