'use client';

import { useEffect, useRef, useState, useMemo } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const dimensionsRef = useRef({ width: 0, height: 0 });
  const animationFrameRef = useRef<number>();
  const [isVisible, setIsVisible] = useState(true);
  
  // performance tuning
  const PARTICLE_COUNT = useMemo(() => {
    const width = window.innerWidth;
    if (width < 768) return 120;
    if (width < 1200) return 180;
    return 220; // big screen big # particles
  }, []);
  
  const CONNECTION_DISTANCE = useMemo(() => {
    // adjust connection distance to create more connections
    const width = window.innerWidth;
    if (width < 768) return 160;
    if (width < 1200) return 220;
    return 250; // big screen big connect
  }, []);
  
  const MOUSE_INFLUENCE_RADIUS = 150; // big screen big mouse
  const PARTICLE_COLOR = "#627C85"; //dots
  
  // initialize canvas and particles
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current && containerRef.current) {
        const width = containerRef.current.clientWidth;
        const height = containerRef.current.clientHeight;
        
        canvasRef.current.width = width;
        canvasRef.current.height = height;
        dimensionsRef.current = { width, height };
        
        // particles when dimensions set
        if (!particlesRef.current.length) {
          const newParticles: Particle[] = [];
          for (let i = 0; i < PARTICLE_COUNT; i++) {
            newParticles.push({
              x: Math.random() * width,
              y: Math.random() * height,
              vx: (Math.random() - 0.5) * 0.6,
              vy: (Math.random() - 0.5) * 0.6,
              radius: Math.random() * 1.3 + 1.3
            });
          }
          particlesRef.current = newParticles;
        } else {
            // adjust existing particles to fit new dimensions
          particlesRef.current = particlesRef.current.map(particle => ({
            ...particle,
            x: (particle.x / dimensionsRef.current.width) * width,
            y: (particle.y / dimensionsRef.current.height) * height
          }));
        }
      }
    };
    
    // handle visibility change to pause anime when cant see
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [PARTICLE_COUNT]);
  
  // mouse movement tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const canvas = canvasRef.current;
      if (canvas) {
        const rect = canvas.getBoundingClientRect();
        mousePositionRef.current = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        };
      }
    };
    
    // touch  mobile
    const handleTouchMove = (e: TouchEvent) => {
      const canvas = canvasRef.current;
      if (canvas && e.touches[0]) {
        const rect = canvas.getBoundingClientRect();
        mousePositionRef.current = {
          x: e.touches[0].clientX - rect.left,
          y: e.touches[0].clientY - rect.top
        };
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);
  
  // anime loop
  useEffect(() => {
    if (!canvasRef.current || !isVisible) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const devicePixelRatio = window.devicePixelRatio || 1;
    if (devicePixelRatio > 1) {
      canvas.width = dimensionsRef.current.width * devicePixelRatio;
      canvas.height = dimensionsRef.current.height * devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio);
    }
    
    let lastUpdateTime = performance.now();
    const FPS_LIMIT = 240; // REMEMBER LIMIT POO POO
    const FRAME_TIME = 1000 / FPS_LIMIT;
    
    // precalcnearest neighbours for each particle to improve performance
    const updateNearestNeighbors = () => {
      const particles = particlesRef.current;
      const nearestNeighbors = new Map();
      
      for (let i = 0; i < particles.length; i++) {
        const neighbors = [];
        for (let j = 0; j < particles.length; j++) {
          if (i !== j) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < CONNECTION_DISTANCE) {
              neighbors.push({
                index: j,
                distance: distance
              });
            }
          }
        }
        
        neighbors.sort((a, b) => a.distance - b.distance);
        nearestNeighbors.set(i, neighbors.slice(0, 10)); // keep 10 near
      }
      
      return nearestNeighbors;
    };
    
    let nearestNeighbors = updateNearestNeighbors();
    let neighborUpdateCounter = 0;
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - lastUpdateTime;
      
      // skip
      if (elapsed > FRAME_TIME) {
        lastUpdateTime = currentTime - (elapsed % FRAME_TIME);
        
        // update neigh every 30
        neighborUpdateCounter++;
        if (neighborUpdateCounter >= 30) {
          nearestNeighbors = updateNearestNeighbors();
          neighborUpdateCounter = 0;
        }
        
        ctx.clearRect(0, 0, dimensionsRef.current.width, dimensionsRef.current.height);
        
        ctx.fillStyle = 'rgba(255, 255, 255, 0.02)';
        ctx.fillRect(0, 0, dimensionsRef.current.width, dimensionsRef.current.height);
        
        // update
        particlesRef.current.forEach(particle => {
          // mouse infl
          const dx = mousePositionRef.current.x - particle.x;
          const dy = mousePositionRef.current.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // m repulsion effect strong
          if (distance < MOUSE_INFLUENCE_RADIUS) {
            const force = (MOUSE_INFLUENCE_RADIUS - distance) / MOUSE_INFLUENCE_RADIUS;
            particle.x -= dx * force * 0.08;
            particle.y -= dy * force * 0.08;
          }
          
          particle.x += particle.vx;
          particle.y += particle.vy;
          
          // boundary check w/ bounce effect
          if (particle.x < 0 || particle.x > dimensionsRef.current.width) {
            particle.vx *= -1;
            // natural
            particle.vx += (Math.random() - 0.5) * 0.04;
          }
          
          if (particle.y < 0 || particle.y > dimensionsRef.current.height) {
            particle.vy *= -1;
            // natural
            particle.vy += (Math.random() - 0.5) * 0.04;
          }
          
          // ocasional small random v change
          if (Math.random() < 0.01) {
            particle.vx += (Math.random() - 0.5) * 0.1;
            particle.vy += (Math.random() - 0.5) * 0.1;
            
            // limit
            const maxVelocity = 0.8;
            const velocity = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
            if (velocity > maxVelocity) {
              particle.vx = (particle.vx / velocity) * maxVelocity;
              particle.vy = (particle.vy / velocity) * maxVelocity;
            }
          }
        });
        
        // connect 1zt, part on top
        for (let i = 0; i < particlesRef.current.length; i++) {
          const neighbors = nearestNeighbors.get(i) || [];
          
          for (const neighbor of neighbors) {
            const j = neighbor.index;
            if (j > i) { // only draw each once
              const p1 = particlesRef.current[i];
              const p2 = particlesRef.current[j];
              const distance = neighbor.distance;
              
              // opacity based on distance
              const opacity = Math.max(0.15, 1 - (distance / CONNECTION_DISTANCE));
              ctx.strokeStyle = `rgba(163, 193, 218, ${opacity})`;
              ctx.lineWidth = 0.6;
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }
        
        // draw
        ctx.fillStyle = PARTICLE_COLOR;
        particlesRef.current.forEach(particle => {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
          ctx.fill();
        });
      }
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    animationFrameRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isVisible, CONNECTION_DISTANCE]);
  
  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-auto opacity-90"
      />
    </div>
  );
};

export default ParticleBackground; 