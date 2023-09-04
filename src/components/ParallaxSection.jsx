import { Parallax } from 'react-parallax';

function ParallaxSection({ imagePath, height, offset, children }) {
    return (
        <Parallax
            // bgImage={image_path}
            strength={-500}  // Adjust this to change the parallax effect strength
            renderLayer={percentage => (
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        backgroundImage: `url(${imagePath})`,
                        backgroundSize: '100% auto',
                        backgroundPosition: 'center ' + (percentage * 50 + offset) + '%', /* Adjust this as needed */
                    }}
                />
            )}
        >
            <div style={{ height: height }}>
                {children}
            </div>
        </Parallax>
    );
}

export default ParallaxSection;