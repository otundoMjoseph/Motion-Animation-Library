import { motion } from 'framer-motion'

const App = () => {
  return (
    <motion.div className= "box"
    initial={{x:0}}
      animate={{
        x: 100, rotate: [0, 270, 260, 200, 250, 250, 0, 270, 200, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"]
     }}
    transition={{ duration: 20, repeat: Infinity }}  
      
    />
  )
}

export default App
