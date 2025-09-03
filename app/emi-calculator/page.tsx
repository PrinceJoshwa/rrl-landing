"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Calculator, BarChart2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export default function EMICalculatorPage() {
  const [propertyPrice, setPropertyPrice] = useState(5000000)
  const [downPayment, setDownPayment] = useState(1000000)
  const [interestRate, setInterestRate] = useState(8.5)
  const [loanTerm, setLoanTerm] = useState(20)

  const [emi, setEmi] = useState(0)
  const [totalInterest, setTotalInterest] = useState(0)
  const [totalPayment, setTotalPayment] = useState(0)
  const loanAmount = propertyPrice - downPayment > 0 ? propertyPrice - downPayment : 0

  useEffect(() => {
    if (loanAmount > 0 && interestRate > 0 && loanTerm > 0) {
      const monthlyRate = interestRate / 12 / 100
      const numberOfMonths = loanTerm * 12
      const calculatedEmi =
        (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfMonths)) /
        (Math.pow(1 + monthlyRate, numberOfMonths) - 1)

      setEmi(calculatedEmi)
      const totalPaid = calculatedEmi * numberOfMonths
      setTotalPayment(totalPaid)
      setTotalInterest(totalPaid - loanAmount)
    } else {
      setEmi(0)
      setTotalPayment(0)
      setTotalInterest(0)
    }
  }, [propertyPrice, downPayment, interestRate, loanTerm, loanAmount])

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <motion.section
        className="relative py-24 sm:py-32 bg-light-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            className="mb-6 inline-flex items-center space-x-2 rounded-full px-6 py-3 text-gold-300 border border-gold-700 bg-gold-900/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Calculator className="h-5 w-5" />
            <span className="font-semibold">Financial Planning Tool</span>
          </motion.div>
          <motion.h1
            className="text-4xl font-bold font-playfair sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Home Loan EMI <span className="text-gold-400">Calculator</span>
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Estimate your monthly home loan payments and understand the costs involved before you purchase your dream property in India.
          </motion.p>
        </div>
      </motion.section>

      {/* Calculator Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Inputs */}
            <div className="lg:col-span-3">
              <Card className="bg-gray-900/50 border-gold-800">
                <CardHeader>
                  <CardTitle className="text-gold-400 text-2xl">Enter Loan Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-8 pt-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Property Price</label>
                    <Input
                      type="number"
                      value={propertyPrice}
                      onChange={(e) => setPropertyPrice(Number(e.target.value))}
                      className="h-12 bg-black/30 text-white placeholder-gray-400 border-gold-700 focus:border-gold-500 text-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Down Payment</label>
                    <Input
                      type="number"
                      value={downPayment}
                      onChange={(e) => setDownPayment(Number(e.target.value))}
                      className="h-12 bg-black/30 text-white placeholder-gray-400 border-gold-700 focus:border-gold-500 text-lg"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-sm font-medium text-gray-300">Interest Rate</label>
                      <span className="text-lg font-semibold text-gold-400">{interestRate.toFixed(2)} %</span>
                    </div>
                    <Slider
                      value={[interestRate]}
                      onValueChange={(value) => setInterestRate(value[0])}
                      max={20}
                      step={0.05}
                      className="[&>span:first-child]:h-3 [&>span:first-child]:w-3"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-sm font-medium text-gray-300">Loan Term</label>
                      <span className="text-lg font-semibold text-gold-400">{loanTerm} Years</span>
                    </div>
                    <Slider
                      value={[loanTerm]}
                      onValueChange={(value) => setLoanTerm(value[0])}
                      max={30}
                      step={1}
                      className="[&>span:first-child]:h-3 [&>span:first-child]:w-3"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Results */}
            <div className="lg:col-span-2">
              <div className="sticky top-24">
                <Card className="bg-gold-900/20 border-gold-700 text-white">
                  <CardHeader>
                    <CardTitle className="text-2xl">Loan Summary</CardTitle>
                    <CardDescription className="text-gray-400">Your estimated monthly payments.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="text-center py-6 border-y border-gold-800">
                      <p className="text-gray-400 text-lg">Monthly EMI</p>
                      <p className="text-4xl lg:text-5xl font-bold text-gold-400 tracking-tight">{formatCurrency(emi)}</p>
                    </div>
                    <div className="space-y-4 text-lg">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Loan Amount</span>
                        <span className="font-semibold">{formatCurrency(loanAmount)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Total Interest</span>
                        <span className="font-semibold">{formatCurrency(totalInterest)}</span>
                      </div>
                       <div className="flex justify-between font-bold border-t border-gold-800 pt-4">
                        <span className="text-gray-300">Total Payment</span>
                        <span className="text-gold-400">{formatCurrency(totalPayment)}</span>
                      </div>
                    </div>
                    
                    {loanAmount > 0 && (
                      <div className="pt-4">
                          <div className="relative h-4 w-full rounded-full overflow-hidden bg-gray-700">
                              <div className="absolute h-full bg-gold-500" style={{ width: `${(loanAmount / totalPayment) * 100}%` }}></div>
                              <div className="absolute h-full bg-red-500" style={{ left: `${(loanAmount / totalPayment) * 100}%`, width: `${(totalInterest / totalPayment) * 100}%` }}></div>
                          </div>
                          <div className="flex justify-between mt-2 text-xs">
                              <div className="flex items-center"><span className="w-2 h-2 rounded-full bg-gold-500 mr-2"></span>Principal</div>
                              <div className="flex items-center"><span className="w-2 h-2 rounded-full bg-red-500 mr-2"></span>Interest</div>
                          </div>
                      </div>
                    )}

                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-16 sm:py-24 bg-light-black">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold font-playfair sm:text-4xl lg:text-5xl">
              Understanding Your <span className="text-gold-400">Mortgage</span>
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-gray-400 md:text-xl">
              Key terms to help you navigate the home loan process with confidence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-6 bg-gray-900/50 rounded-2xl border border-gold-800">
                  <h3 className="font-bold text-gold-400 text-lg mb-2">Property Price [cite: 29]</h3>
                  <p className="text-gray-400 text-sm">The total price of the property you intend to purchase. [cite: 30] Be sure to account for additional charges like GST, registration fees, and stamp duty. [cite: 30]</p>
              </div>
              <div className="p-6 bg-gray-900/50 rounded-2xl border border-gold-800">
                  <h3 className="font-bold text-gold-400 text-lg mb-2">Down Payment [cite: 31]</h3>
                  <p className="text-gray-400 text-sm">The initial amount you pay upfront, typically between 4% and 20% of the property price. [cite: 32] A payment of at least 20% often helps avoid additional mortgage insurance. [cite: 34]</p>
              </div>
              <div className="p-6 bg-gray-900/50 rounded-2xl border border-gold-800">
                  <h3 className="font-bold text-gold-400 text-lg mb-2">Mortgage Term [cite: 35]</h3>
                  <p className="text-gray-400 text-sm">The duration over which you plan to repay the home loan. [cite: 36] Common options in India include 15-year and 30-year fixed-rate plans. [cite: 36]</p>
              </div>
              <div className="p-6 bg-gray-900/50 rounded-2xl border border-gold-800">
                  <h3 className="font-bold text-gold-400 text-lg mb-2">Interest Rate [cite: 38]</h3>
                  <p className="text-gray-400 text-sm">The percentage charged by the lender for the loan. [cite: 39] This can vary depending on your credit score, down payment, and lender policies. [cite: 40]</p>
              </div>
          </div>
        </div>
      </section>
    </div>
  )
}