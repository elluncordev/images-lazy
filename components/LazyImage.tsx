import { useEffect, useRef, useState } from "react"

type Props = {
    image: string;
    alt?:string;
}
export const LazyImage = ({ image, alt }: Props): JSX.Element => {
    const node = useRef<HTMLImageElement>(null)
    const [Src, setSrc] = useState("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=")

    useEffect(() => {
        if (node.current) {
            observer.observe(node.current)
        }

        return () => {
            observer.disconnect()
        }
    },[])

    //nuevo observador
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setSrc(image)
            }
        })
    })
    
    return <img className="w-96 h-auto rounded-md" ref={node} src={Src} alt={alt} />
}