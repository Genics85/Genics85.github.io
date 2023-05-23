import Navigation from "./Navigation"

function LandingPage() {
  return (
    <div className="flex flex-col md:flex-row  ">
      <Navigation/>
      <div className="bg-darkPrimary min-h-screen w-full md:min-h-full">
        something
      </div>
      
    </div>
  )
}

export default LandingPage