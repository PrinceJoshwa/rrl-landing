import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function ContactHero() {
  return (
    <section className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Contact RRL</h1>

              <p className="text-xl text-slate-600 leading-relaxed">
                Let's Discuss Your Property Needs. Get in touch with our expert team for personalized real estate
                assistance.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Call Us</h3>
                  <p className="text-slate-600">+91-8068352626</p>
                  <p className="text-slate-600">+91-73378 16991</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Email Us</h3>
                  <p className="text-slate-600">enquiry@rrlbuildersanddevelopers.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Visit Us</h3>
                  <p className="text-slate-600">
                    RRL Towers, 4th Floor, Sampige Jala, Sarjapur, Attibele Rd, Bengaluru, Karnataka 561113
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Business Hours</h3>
                  <p className="text-slate-600">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                  <p className="text-slate-600">Sunday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Ready to Connect?</h3>
                  <p className="text-slate-600">We're here to help you find your dream property</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
