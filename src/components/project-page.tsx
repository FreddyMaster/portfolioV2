"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, ExternalLink, Github, CheckCircle2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

interface ProjectPageProps {
  title: string
  date: string
  description: string
  overview: string[]
  achievements: string[]
  responsibilities: string[]
  technologies: string[]
  images: string[]
  liveDemo?: string
  github?: string
}

export default function ProjectPage({
  title,
  date,
  description,
  overview,
  achievements,
  responsibilities,
  technologies,
  images,
  liveDemo,
  github
}: ProjectPageProps) {
  const [currentSlide, setCurrentSlide] = useState(1)
  const totalSlides = images.length

  return (
    <div className="mx-auto px-4 py-8 container">
      {/* Hero Section with Image Slider */}
      <div className="relative bg-background mb-8 rounded-xl overflow-hidden aspect-video">
        <motion.img
          src={images[currentSlide - 1]}
          alt={`Project Screenshot ${currentSlide}`}
          className="w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Navigation Controls */}
        <div className="absolute inset-0 flex justify-between items-center p-4">
          <Button
            variant="ghost"
            size="icon"
            className="bg-black/50 hover:bg-black/70 rounded-full w-12 h-12 text-white"
            onClick={() => setCurrentSlide((prev) => Math.max(1, prev - 1))}
            disabled={currentSlide === 1}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="bg-black/50 hover:bg-black/70 rounded-full w-12 h-12 text-white"
            onClick={() => setCurrentSlide((prev) => Math.min(totalSlides, prev + 1))}
            disabled={currentSlide === totalSlides}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        {/* Slide Counter */}
        <div className="right-4 bottom-4 absolute bg-black/50 px-3 py-1 rounded-full text-sm">
          {currentSlide} / {totalSlides}
        </div>
      </div>

      {/* Project Details */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 font-bold text-4xl text-transparent">
            {title}
          </h2>
          <p className="mt-2 text-muted-foreground">{date}</p>
        </div>
        <div className="flex gap-2">
          {liveDemo && (
            <a href={liveDemo} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </Button>
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="flex items-center gap-2">
              <Github className="w-4 h-4" />
              GitHub
            </Button>
            </a>
          )}
        </div>
      </div>

      <p className="mb-8 text-lg text-muted-foreground leading-relaxed">{description}</p>

      {/* Project Details Tabs */}
      <Tabs defaultValue="overview" className="mb-8">
        <TabsList className="border-zinc-200 dark:border-zinc-800 dark:bg-zinc-900">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="responsibilities">Responsibilities</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card className="border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 min-h-60">
            <CardContent className="pt-6">
              <div className="max-w-none dark:prose-invert prose">
                {overview.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="achievements">
          <Card className="border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 min-h-60">
            <CardContent className="pt-6">
              <ul className="space-y-4">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="flex-shrink-0 mt-1 w-5 h-5 text-green-500" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="responsibilities">
            <Card className="border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 min-h-60">
            <CardContent className="pt-6">
              <ul className="space-y-4">
              {responsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="flex-shrink-0 mt-1 w-5 h-5 text-blue-500" />
                <span>{responsibility}</span>
                </li>
              ))}
              </ul>
            </CardContent>
            </Card>
        </TabsContent>
      </Tabs>

      {/* Technologies */}
      <div className="mb-8">
        <h2 className="mb-4 font-semibold text-xl">Technologies Used</h2>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}
