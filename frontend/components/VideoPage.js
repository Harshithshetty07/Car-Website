'use client'

import React, { useState, useEffect ,useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Minimize2, Maximize2 } from 'lucide-react';

const VideoPage = ({ onToggleFullScreen, isFullScreen }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(null);
  
  useEffect(() => {
    const updateProgress = () => {
      if (videoRef.current) {
        const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
        setProgress(currentProgress);
      }
    };
    
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('timeupdate', updateProgress);
      return () => videoElement.removeEventListener('timeupdate', updateProgress);
    }
  }, []);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  const handleProgressClick = (e) => {
    if (progressRef.current && videoRef.current) {
      const rect = progressRef.current.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      videoRef.current.currentTime = pos * videoRef.current.duration;
    }
  };

  const videoContainerVariants = {
    normal: { scale: 1, borderRadius: "12px" },
    fullScreen: { scale: 1, borderRadius: "0px" }
  };

  const controlsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className={`relative ${isFullScreen ? 'fixed top-0 left-0 w-full h-screen z-50 bg-black' : 'w-full rounded-xl overflow-hidden'}`}
      initial={false}
      animate={isFullScreen ? "fullScreen" : "normal"}
      variants={videoContainerVariants}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="w-full h-full relative">
        <video
          ref={videoRef}
          className={`w-full object-cover ${isFullScreen ? 'h-screen' : 'h-96 md:h-[40rem]'}`}
          autoPlay
          loop
          muted
        >
          <source src="/images/Wax-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Video Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
        
        {/* Progress Bar */}
        <div 
          ref={progressRef}
          className="absolute bottom-16 left-0 w-full h-1 bg-gray-700 cursor-pointer px-8"
          onClick={handleProgressClick}
        >
          <motion.div 
            className="h-full bg-blue-500"
            style={{ width: `${progress}%` }}
            initial={{ width: "0%" }}
          >
            <div className="absolute -right-2 -top-1 w-3 h-3 bg-white rounded-full"></div>
          </motion.div>
        </div>
        
        {/* Video Controls */}
        <motion.div 
          className="absolute bottom-4 left-0 w-full px-8 flex justify-between items-center"
          initial="hidden"
          animate={isHovering || !isPlaying ? "visible" : "hidden"}
          variants={controlsVariants}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={togglePlayPause}
            className="bg-white bg-opacity-20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-opacity-30 transition-all duration-200"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6" />
            ) : (
              <Play className="w-6 h-6" />
            )}
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onToggleFullScreen}
            className="bg-white bg-opacity-20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-opacity-30 transition-all duration-200"
          >
            {isFullScreen ? (
              <Minimize2 className="w-6 h-6" />
            ) : (
              <Maximize2 className="w-6 h-6" />
            )}
          </motion.button>
        </motion.div>
        
        {/* Center Play/Pause Button */}
        {!isPlaying && (
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={togglePlayPause}
              className="bg-white bg-opacity-20 backdrop-blur-md text-white p-8 rounded-full border-2 border-white border-opacity-50"
            >
              <Play className="w-12 h-12" />
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default VideoPage;