
function LandingPage() {
  return (
    <div className="flex flex-col md:flex-row  ">
      {/* Navigation */}
      <nav className="bg-red-500 w-screen h-14 md:w-1/5 md:h-screen" >
        navigtion
      </nav>
      {/* children pages */}
      <div className="bg-blue-400 min-h-screen w-full md:min-h-full">
        something
      </div>
      
    </div>
  )
}

export default LandingPage