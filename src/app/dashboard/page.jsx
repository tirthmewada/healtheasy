import React from 'react';
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const DashboardPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold">Healtheasy</h1>
            </div>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink className="p-2 hover:bg-gray-100 rounded">
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="p-2 hover:bg-gray-100 rounded">
                    About
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="p-2 hover:bg-gray-100 rounded">
                    Contact
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Side Content */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">
                Welcome to Healtheasy
              </h2>
              <p className="text-lg text-gray-600">
                We at Healtheasy makes you understand your insurance policy 
                more easily and provide  in depth information of your policy in simplier 
                and understandable form.
              </p>
              <Button size="lg">
                Get Started
              </Button>
            </div>

            {/* Right Side Image */}
            <div className="flex justify-center">
              <img
                src="https://media.istockphoto.com/id/1388146104/vector/health-insurance-contract-vector-illustration-of-insurance-concept.jpg?s=612x612&w=0&k=20&c=gjFpcqbtdWV5PXzj9ZLANekZ17ul6kFTqluOQvN82pI="
                alt="Dashboard Preview"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">About Us</h3>
              <p className="text-gray-600">
                We makes your insurance policy understandablein simplier form. 
      
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Home</li>
                <li>Services</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <p className="text-gray-600">
                Email: info@example.com<br />
                Phone: 987654321
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-gray-600">
            <p>© 2025 Healtheasy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DashboardPage;