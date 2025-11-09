<template>
  <div class="w-full">
    <h2 class="text-3xl font-bold text-center mb-8">Physics Skill Demo</h2>
    
    <div ref="scene" class="w-full h-[500px] border border-indigo-500 rounded-lg">
      </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { 
  Engine, 
  Render, 
  Bodies, 
  Composite, 
  Runner 
} from 'matter-js'

// Create a ref for the scene element
const scene = ref<HTMLDivElement | null>(null)

// We need to keep track of the engine and renderer
let engine: Engine
let render: Render
let runner: Runner

onMounted(() => {
  if (!scene.value) return

  // --- 1. Create the Engine ---
  engine = Engine.create()
  
  // Set gravity. We'll make it weaker just for fun.
  engine.gravity.y = 0.5

  // --- 2. Create the Renderer ---
  // This will draw the physics world onto our 'scene' div
  render = Render.create({
    element: scene.value,
    engine: engine,
    options: {
      width: scene.value.clientWidth,
      height: 500,
      wireframes: false, // Set to true for a 'dev' look
      background: 'transparent',
    }
  })

  // --- 3. Create Bodies (Objects) ---
  // A simple red box
  const boxA = Bodies.rectangle(400, 200, 80, 80, {
    render: { fillStyle: '#E94F37' }
  })
  
  // A blue circle
  const ballA = Bodies.circle(300, 100, 40, {
    restitution: 0.7, // Make it bouncy
    render: { fillStyle: '#4F86C6' }
  })

  // --- 4. Create Walls (Static Bodies) ---
  const ground = Bodies.rectangle(400, 490, 810, 20, { 
    isStatic: true, // Makes it unmovable
    render: { fillStyle: '#ffffff' } 
  })
  const leftWall = Bodies.rectangle(5, 250, 10, 500, { isStatic: true, render: { fillStyle: '#ffffff' } })
  const rightWall = Bodies.rectangle(scene.value.clientWidth - 5, 250, 10, 500, { isStatic: true, render: { fillStyle: '#ffffff' } })
  const topWall = Bodies.rectangle(400, 5, 810, 10, { isStatic: true, render: { fillStyle: '#ffffff' } })


  // --- 5. Add all bodies to the world ---
  Composite.add(engine.world, [boxA, ballA, ground, leftWall, rightWall, topWall])

  // --- 6. Run the Engine & Renderer ---
  // Runner is a game loop, keeps the engine ticking
  runner = Runner.create()
  Runner.run(runner, engine)
  
  Render.run(render)
});

// --- 7. Clean up ---
// Important to stop the engine when the component is unmounted
onUnmounted(() => {
  if (render) {
    Render.stop(render)
  }
  if (runner) {
    Runner.stop(runner)
  }
  if (render) {
    render.canvas.remove()
    render.textures = {}
  }
  if (engine) {
    Engine.clear(engine)
  }
})
</script>