import React, { JSX } from "react";

export default function Contact(): JSX.Element {
  return (
    <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center py-16 px-6">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-10 border border-gray-200">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-3">
          Get in Touch
        </h1>
        <p className="text-gray-600 text-center mb-10 max-w-xl mx-auto">
          Have a question or want to work together? Fill out the form and I&apos;ll respond as soon as possible.
        </p>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <label className="text-gray-700 font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="mt-2 w-full p-3 rounded-lg border border-gray-300 bg-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-600 outline-none transition"
              />
            </div>

            <div>
              <label className="text-gray-700 font-medium">Email Address</label>
              <input
                type="email"
                placeholder="yourname@example.com"
                className="mt-2 w-full p-3 rounded-lg border border-gray-300 bg-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-600 outline-none transition"
              />
            </div>

            <div>
              <label className="text-gray-700 font-medium">Message</label>
              <textarea
                rows={5}
                placeholder="Type your message..."
                className="mt-2 w-full p-3 rounded-lg border border-gray-300 bg-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-600 outline-none transition"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all"
            >
              Send Message
            </button>
          </form>

          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Contact Information</h2>
              <p className="text-gray-600">
                You can also contact me directly through the details below.
              </p>
            </div>

            <div className="space-y-4 text-gray-700">
              <p><span className="font-medium">Phone:</span> +91 7907265303</p>
              <p><span className="font-medium">Email:</span> vishakhcs51@gmail.com</p>
              <p>
                <span className="font-medium">LinkedIn:</span>{" "}
                <a
                  href="https://linkedin.com/in/vishakh-cs"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  linkedin.com/in/vishakh-cs
                </a>
              </p>
              <p>
                <span className="font-medium">GitHub:</span>{" "}
                <a
                  href="https://github.com/vishakh-cs"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  github.com/vishakh-cs
                </a>
              </p>
              <p>
                <span className="font-medium">Portfolio:</span>{" "}
                <a
                  href="https://my-portfolio-olive-beta.vercel.app"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  my-portfolio-olive-beta.vercel.app
                </a>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
