'use client'
import { useState } from "react"
import type { MouseEventHandler } from "react"
import { LazyImage } from "@/components/LazyImage"

const random = () => Math.floor(Math.random() * 123) + 1
const generateId = () => Math.random().toString(36).substr(2,9)

type ImageItems = { id: string; url: string }

export default function Home() {
  const [images, setImages] = useState<Array<ImageItems>>([])

  const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => { 
    const newImageItem: ImageItems = { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` }
    setImages([...images, newImageItem])
  }

  return (
    <main>
      <h1 className="text-orange-400">Random images</h1>
      <button onClick={addNewFox}>Add new fox</button>

      {images.map(({ id, url }) => (
        <div className="p-4" key={id}>
          <LazyImage image={url} alt="img random fox"/>
        </div>
      ))}
    </main>
  )
}