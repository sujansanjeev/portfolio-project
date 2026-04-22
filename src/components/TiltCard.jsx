import { useTilt } from '../hooks/useTilt';
import PropTypes from 'prop-types';

const TiltCard = ({ children, className = '', tiltAmount = 10, glare = true }) => {
  const { ref, handleMouseMove, handleMouseLeave } = useTilt(tiltAmount);

  return (
    <div
      ref={ref}
      className={`perspective-1000 group ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
        transition: 'transform 0.1s ease-out',
        transformStyle: 'preserve-3d',
      }}
    >
      {children}
      {glare && (
        <div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: 'linear-gradient(105deg, transparent 40%, rgba(255, 255, 255, 0.1) 45%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.1) 55%, transparent 60%)',
          }}
        />
      )}
    </div>
  );
};

TiltCard.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  tiltAmount: PropTypes.number,
  glare: PropTypes.bool,
};

export default TiltCard;
