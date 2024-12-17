import SliderImages from '@/components/slider/SliderImages'
import React from 'react'

const imagesList = [
  {
    imageUrl: "https://via.placeholder.com/600x300/87CEEB/FFFFFF?text=Mountain+Landscape",
    linkUrl: "https://example.com/mountain"
  },
  {
    imageUrl: "https://placehold.co/600x400",
    linkUrl: "https://example.com/flower-field"
  },
  {
    imageUrl: "https://via.placeholder.com/600x300/00BFFF/FFFFFF?text=Beach+Sunset",
    linkUrl: "https://example.com/beach"
  },
  {
    imageUrl: "https://via.placeholder.com/600x300/228B22/FFFFFF?text=Forest+Landscape",
    linkUrl: "https://example.com/forest"
  },
  {
    imageUrl: "https://via.placeholder.com/600x300/FFD700/FFFFFF?text=Desert+Landscape",
    linkUrl: "https://example.com/desert"
  }
];


export default function UserPage() {
  return (
   <SliderImages images={imagesList} />
  )
}
