import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function Cursor() {
  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);

  const dotX = useSpring(mx, { stiffness: 600, damping: 35 });
  const dotY = useSpring(my, { stiffness: 600, damping: 35 });
  const ringX = useSpring(mx, { stiffness: 160, damping: 20 });
  const ringY = useSpring(my, { stiffness: 160, damping: 20 });

  useEffect(() => {
    const move = (e) => { mx.set(e.clientX); my.set(e.clientY); };
    const enterHover = (e) => {
      if (e.target.closest('[data-hover], a, button, [role="button"]')) {
        document.querySelector('.cursor-ring')?.classList.add('hover');
      }
    };
    const leaveHover = () => {
      document.querySelector('.cursor-ring')?.classList.remove('hover');
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', enterHover);
    window.addEventListener('mouseout', leaveHover);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', enterHover);
      window.removeEventListener('mouseout', leaveHover);
    };
  }, []);

  return (
    <>
      <motion.div className="cursor-main" style={{ x: dotX, y: dotY }} />
      <motion.div className="cursor-ring" style={{ x: ringX, y: ringY }} />
    </>
  );
}
