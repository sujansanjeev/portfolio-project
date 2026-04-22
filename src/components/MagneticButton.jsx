import { motion } from 'framer-motion';
import { useMagneticEffect } from '../hooks/useMagneticEffect';
import PropTypes from 'prop-types';

const MagneticButton = ({ 
  children, 
  className = '', 
  strength = 0.3,
  onClick,
  href,
  ...props 
}) => {
  const { ref, handleMouseMove, handleMouseLeave } = useMagneticEffect(strength);

  const baseClasses = `inline-block transition-transform duration-200 ease-out ${className}`;

  const content = (
    <motion.div
      ref={ref}
      className={baseClasses}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
        {content}
      </a>
    );
  }

  return content;
};

MagneticButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  strength: PropTypes.number,
  onClick: PropTypes.func,
  href: PropTypes.string,
};

export default MagneticButton;
