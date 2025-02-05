"use client";
import React, { useState, useRef, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface SpotlightCardProps extends React.ComponentProps<typeof Card> {
  children: React.ReactNode
  spotlightSize?: number
}

export function SpotlightCard({ 
  children, 
  className = "", 
  spotlightSize = 400,
  ...props 
}: SpotlightCardProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)
  const cardRef = useRef<HTMLDivElement>(null)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const updateSpotlightPosition = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      setPosition({ x, y })
    }

    const updateSpotlightOpacity = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      const isInside = (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      )
      setOpacity(isInside ? 1 : 0)
    }

    card.addEventListener('mousemove', updateSpotlightPosition)
    card.addEventListener('mouseenter', updateSpotlightOpacity)
    card.addEventListener('mouseleave', updateSpotlightOpacity)

    return () => {
      card.removeEventListener('mousemove', updateSpotlightPosition)
      card.removeEventListener('mouseenter', updateSpotlightOpacity)
      card.removeEventListener('mouseleave', updateSpotlightOpacity)
    }
  }, [])

  const spotlightColor = resolvedTheme === 'dark' ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, .05)'

  return (
    <Card 
      ref={cardRef}
      className={`relative overflow-hidden bg-card text-card-foreground ${className}`.trim()}
      {...props}
    >
      <div
        className="absolute inset-0 transition duration-300 pointer-events-none"
        style={{
          opacity,
          background: `radial-gradient(${spotlightSize}px circle at ${position.x}px ${position.y}px, 
            ${spotlightColor}, transparent 80%)`,
        }}
      />
      <div className="relative z-10 flex flex-col h-full">
        {children}
      </div>
    </Card>
  )
}

SpotlightCard.Header = CardHeader
SpotlightCard.Title = CardTitle
SpotlightCard.Description = CardDescription
SpotlightCard.Content = CardContent
SpotlightCard.Footer = CardFooter
