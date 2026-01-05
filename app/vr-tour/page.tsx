// // import { redirect } from "next/navigation"

// // export default function VRTourPage() {
// //   redirect("http://palmaltezze.s3-website-us-east-1.amazonaws.com/")
// // }
// "use client"

import { useEffect } from "react"

export default function VRTourPage() {
  useEffect(() => {
    window.location.href =
      "http://palmaltezze.s3-website-us-east-1.amazonaws.com/"
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      Redirecting to VR Tour…
    </div>
  )
}

// "use client"

// export default function VRTourPage() {
//   return (
//     <div className="w-full h-screen bg-black">
//       <iframe
//         src="https://palmaltezze.s3-website-us-east-1.amazonaws.com/"
//         title="Palm Altezze VR Tour"
//         className="w-full h-full border-0"
//         allow="fullscreen; autoplay; xr-spatial-tracking"
//       />
//     </div>
//   )
// }
