import { useRouter } from "next/router";
import { useEffect } from "react";


export const IndexPage = () => {
  const router = useRouter()
  useEffect(() => {
    router.replace("/login")
  }, [router])
  return (
    <div>
    Index Page
    </div>
  )
}

export default IndexPage;
