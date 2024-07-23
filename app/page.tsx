import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function Home() {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <img src="/logo.svg" alt="Logo" className="h-12" />
          <a href="/dashboard" className="inline-block text-sky-50 bg-primary px-6 py-2 rounded-lg hover:text-sky-200 transition">
            Get Started
          </a>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold mb-6">
          <span className="text-black">AI Content</span> <span className="text-purple-500">Generator</span>
        </h1>
        <p className="text-lg mb-8">Create amazing content with the power of AI in just a few clicks!</p>
        <a href="/dashboard" className="inline-block bg-primary text-white px-6 py-3 rounded-lg shadow hover:bg-purple-600 transition">
          Get Started
        </a>
      </div>

      <div className="mt-16 container mx-auto px-4 flex flex-wrap justify-between">
        <div className="w-full md:w-1/4 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <img src="https://cdn-icons-png.flaticon.com/128/6863/6863985.png" alt="Feature Four" className="h-16 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">25+ Templates</h2>
            <p className="text-gray-600">Responsive, and mobile-first project on the web.</p>
          </div>
        </div>
        <div className="w-full md:w-1/4 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            
            <img src="https://cdn-icons-png.flaticon.com/128/16949/16949334.png" alt="Feature Four" className="h-16 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Customizable</h2>
            <p className="text-gray-600">Components are easily customized and extendable.</p>
          </div>
        </div>
        <div className="w-full md:w-1/4 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <img src="https://cdn-icons-png.flaticon.com/128/2643/2643707.png" alt="Feature Four" className="h-16 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Free to Use</h2>
            <p className="text-gray-600">Every component and plugin is well documented.</p>
          </div>
        </div>
        <div className="w-full md:w-1/4 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <img src="https://cdn-icons-png.flaticon.com/128/4230/4230867.png" alt="Feature Four" className="h-16 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">24/7 Support</h2>
            <p className="text-gray-600">Contact us 24 hours a day, 7 days a week.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
