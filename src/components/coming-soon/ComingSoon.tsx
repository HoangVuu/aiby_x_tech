import './ComingSoon.css';
import { motion } from 'framer-motion';
import { getMotionFadeInAndSlideUpAnimation } from '@/utils/animation';

const ComingSoon = (props: { title: string }) => {
  const { title } = props;

  return (
    <div className="min-h-[40vh] md:min-h-[100vh] flex flex-col justify-center items-center mx-10 my-12 md:my-0">
      {title && (
        <div className="text-white text-3xl md:text-7xl font-bold mb-7 md:mb-14">
          {title}
        </div>
      )}
      <motion.div
        className="font-extrabold coming-soon-text text-center"
        {...getMotionFadeInAndSlideUpAnimation()}
      >
        COMING SOON
      </motion.div>

      <div className="StarParticles_particles !z-[1]">
        <div className="StarParticles_particles__particle StarParticles_particles__particle--1"></div>
        <div className="StarParticles_particles__particle StarParticles_particles__particle--2"></div>
      </div>
    </div>
  );
};

export default ComingSoon;
