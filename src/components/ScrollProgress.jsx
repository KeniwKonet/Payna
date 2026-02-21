import { useScrollProgress } from '../hooks/useScrollReveal'
import { motion } from 'framer-motion'

export default function ScrollProgress() {
  const progress = useScrollProgress()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[9999] origin-left"
      style={{
        scaleX: progress,
        background: 'linear-gradient(90deg, #1A5C2A, #C9A84C, #F0C96B)',
        transformOrigin: '0%',
      }}
    />
  )
}
