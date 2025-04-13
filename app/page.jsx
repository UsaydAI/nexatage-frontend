import Hero from "../components/sections/Hero";
import Gradient from "../components/ui/Gradient";

export default function page() {
  return (
    <div  className="relative w-full h-screen">
      
      <Gradient
          width="w-40"
          height="h-40"
          padding = "p-40"
          className = " bg-[radial-gradient(circle,_#854CFF,_transparent_90%)] blur-3xl opacity-40 rounded-full"
          top="top-0"
          right = "-right-3"
      />
      <Gradient
          width="w-40"
          height="h-40"
          padding = "p-40"
          className = " bg-[radial-gradient(circle,_#504CFF,_transparent_90%)] blur-3xl opacity-40 rounded-full"
          top="top-6"
          left="-left-6"
           bottom = "bottom-4"
      />
      <Hero text ="Building Tomorrow's Digital Solutions Today" />
    </div>
  )
}

