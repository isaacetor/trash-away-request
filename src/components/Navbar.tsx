
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Trash2, User, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Trash2 className="h-6 w-6 text-waste-green-500" />
          <span className="text-xl font-bold bg-gradient-to-r from-waste-green-500 to-waste-blue-500 bg-clip-text text-transparent">
            TrashAway
          </span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/dashboard" className="text-gray-700 hover:text-waste-green-500 transition-colors">
            Dashboard
          </Link>
          <Link to="/request" className="text-gray-700 hover:text-waste-green-500 transition-colors">
            Request Pickup
          </Link>
          <Link to="/profile" className="text-gray-700 hover:text-waste-green-500 transition-colors">
            Profile
          </Link>
          <Link to="/signin">
            <Button variant="ghost" className="gap-2">
              <User size={16} />
              Sign In
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-waste-green-500 hover:bg-waste-green-600">Sign Up</Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-3 flex flex-col gap-4">
            <Link 
              to="/dashboard" 
              className="text-gray-700 hover:text-waste-green-500 py-2 transition-colors"
              onClick={toggleMenu}
            >
              Dashboard
            </Link>
            <Link 
              to="/request" 
              className="text-gray-700 hover:text-waste-green-500 py-2 transition-colors"
              onClick={toggleMenu}
            >
              Request Pickup
            </Link>
            <Link 
              to="/profile" 
              className="text-gray-700 hover:text-waste-green-500 py-2 transition-colors"
              onClick={toggleMenu}
            >
              Profile
            </Link>
            <div className="flex gap-2">
              <Link to="/signin" className="flex-1" onClick={toggleMenu}>
                <Button variant="outline" className="w-full">Sign In</Button>
              </Link>
              <Link to="/signup" className="flex-1" onClick={toggleMenu}>
                <Button className="w-full bg-waste-green-500 hover:bg-waste-green-600">Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
