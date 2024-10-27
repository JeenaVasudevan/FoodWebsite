import { Button, Checkbox, Label, TextInput, Textarea, Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

export function FooterComponent() {
  return (
    <Footer bgDark>
      <div className="w-full bg-gray-800 text-white">
        <h1 className="text-2xl font-bold mb-4 text-center">Contact Us</h1>
        <div className="flex flex-col max-w-md gap-4 px-6 py-8 mx-auto mt-8 bg-gray-700 rounded-lg shadow-md">
          <div>
            <Label htmlFor="email1" value="Your email" className="mb-2" />
            <TextInput 
              id="email1" 
              type="email" 
              placeholder="name@flowbite.com" 
              required 
              className="text-gray-800"
            />
          </div>
          <div>
            <Label htmlFor="password1" value="Your password" className="mb-2" />
            <TextInput 
              id="password1" 
              type="password" 
              required 
              className="text-gray-800"
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" className="text-gray-300" />
            <Label htmlFor="remember" className="text-gray-300">Remember me</Label>
          </div>
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-lg">Submit</Button>
          <div>
            <Label htmlFor="comment" value="Your message" className="mb-2" />
            <Textarea 
              id="comment" 
              placeholder="Leave a comment..." 
              required 
              rows={4} 
              className="text-gray-800"
            />
          </div>
        </div>
        <div className="w-full bg-gray-900 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Zestora" year={2024} className="text-gray-300" />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} className="text-gray-400 hover:text-white" />
            <Footer.Icon href="#" icon={BsInstagram} className="text-gray-400 hover:text-white" />
            <Footer.Icon href="#" icon={BsTwitter} className="text-gray-400 hover:text-white" />
            <Footer.Icon href="#" icon={BsGithub} className="text-gray-400 hover:text-white" />
            <Footer.Icon href="#" icon={BsDribbble} className="text-gray-400 hover:text-white" />
          </div>
        </div>
      </div>
    </Footer>
  )
}
