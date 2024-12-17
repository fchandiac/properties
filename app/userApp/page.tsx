import SliderImages from '@/components/slider/SliderImages'
import React from 'react'

const imagesList = [
  {
    imageUrl: "https://via.placeholder.com/600x300/87CEEB/FFFFFF?text=Mountain+Landscape",
    linkUrl: "https://example.com/mountain"
  },
  {
    imageUrl: "https://placehold.co/600x400/FF6347/FFFFFF?text=Flower+Field",
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
  },
  {
    imageUrl: "https://via.placeholder.com/600x300/800080/FFFFFF?text=Lavender+Field",
    linkUrl: "https://example.com/lavender"
  },
  {
    imageUrl: "https://via.placeholder.com/600x300/FF4500/FFFFFF?text=Volcanic+Region",
    linkUrl: "https://example.com/volcanic"
  },
  {
    imageUrl: "https://via.placeholder.com/600x300/32CD32/FFFFFF?text=Tropical+Rainforest",
    linkUrl: "https://example.com/rainforest"
  },
  {
    imageUrl: "https://via.placeholder.com/600x300/DAA520/FFFFFF?text=Golden+Fields",
    linkUrl: "https://example.com/golden-fields"
  },
  {
    imageUrl: "https://via.placeholder.com/600x300/FF1493/FFFFFF?text=Pink+Lagoon",
    linkUrl: "https://example.com/pink-lagoon"
  }
];



export default function UserPage() {
  return (
   <SliderImages images={imagesList} />
  )
}
