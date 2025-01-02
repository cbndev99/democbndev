import { useEffect, useRef } from "react";
import {
  useMotionValue,
  motion,
  animate,
  useTransform,
  useInView,
} from "motion/react";

function CounterSection({ counterTitle, counterScore }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, counterScore, { duration: 3 });
      return controls.stop;
    }
  }, [isInView]);

  return (
    <div ref={ref} className="my-5 md:self-center flex flex-col gap-4">
      <h2 className="font-semibold text-6xl font-mono text-gray-800">
        <motion.span>{rounded}</motion.span>+
      </h2>
      <h2 className="font-bold bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent text-l">
        {counterTitle}
      </h2>
    </div>
  );
}

export default CounterSection;
