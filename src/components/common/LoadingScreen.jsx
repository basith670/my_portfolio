import { motion } from "framer-motion";
function LoadingScreen() {
  return <motion.div className="fixed inset-0 z-[9999] grid place-items-center bg-[#070a0f] text-white" initial={{opacity:1}} animate={{opacity:1}} exit={{opacity:0}}><div className="text-center"><motion.div animate={{opacity:[.4,1,.4]}} transition={{duration:1.2,repeat:Infinity}} className="font-mono text-xs uppercase tracking-[.35em] text-blue-400">initializing portfolio</motion.div><motion.div animate={{scale:[1,1.04,1]}} transition={{duration:1.2,repeat:Infinity}} className="mt-5 text-6xl font-black tracking-[-.08em]">MB<span className="text-blue-400">.</span></motion.div><div className="mx-auto mt-6 h-px w-32 overflow-hidden bg-white/10"><motion.div animate={{x:[-128,128]}} transition={{duration:1.1,repeat:Infinity,ease:"easeInOut"}} className="h-full w-full bg-blue-500" /></div></div></motion.div>;
}
export default LoadingScreen;
