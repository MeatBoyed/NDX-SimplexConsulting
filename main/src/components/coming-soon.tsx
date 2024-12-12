"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Settings } from "lucide-react"

const spinAnimation = `
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

const pulseAnimation = `
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`

export default function ComingSoon() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    console.log("Submitted email:", email)
    setEmail("")
    alert("Thank you for your interest! We'll keep you updated.")
  }

  return (
    <div className="mx-auto w-full max-w-4xl text-center">
      <style>{spinAnimation + pulseAnimation}</style>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          // backgroundImage: "url('/placeholder.svg?height=600&width=1200')",
          backgroundImage: `url("./background.webp")`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative w-full ">
        <motion.header
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="z-30 mb-8"
        >
          <h1 className="text-4xl font-bold transition-colors duration-300 hover:text-blue-600">
            Simplex Consulting
          </h1>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <Settings
            className="mx-auto h-32 w-32 animate-spin text-blue-600"
            style={{ animation: "spin 10s linear infinite" }}
          />
        </motion.div>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="mb-4 text-3xl font-semibold transition-colors duration-300 hover:text-blue-500">
            Coming Soon
          </h2>
          <p
            className="mb-8 animate-pulse text-xl"
            style={{ animation: "pulse 3s infinite" }}
          >
            Innovative, tailored solutions to empower your business in the
            digital age. Simplex Consulting is launching soon—stay tuned for
            transformation.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <motion.input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full rounded-md border border-gray-300 px-4 py-2 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 sm:w-auto"
              whileFocus={{ scale: 1.05 }}
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full rounded-md bg-blue-600 px-6 py-2 text-white shadow-md transition-colors duration-300 hover:bg-blue-700 hover:shadow-lg sm:w-auto"
            >
              Notify Me
            </motion.button>
          </form>
        </motion.section>
      </div>
    </div>
  )
}
