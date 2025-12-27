import React, { useState } from 'react';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';

// Your first name - Change this to your name or set to empty string
const firstName = "Sarah";

const App = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isButtonHovering, setIsButtonHovering] = useState(false);

  return (
    <div style={{ 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh',
      padding: '40px 20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    }}>
      <div style={{ 
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <div style={{
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          {/* Product Card */}
          <div 
            style={{ 
              backgroundColor: 'white',
              borderRadius: '12px',
              boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
              overflow: 'hidden',
              transition: 'transform 0.3s ease',
              transform: isHovering ? 'translateY(-10px)' : 'translateY(0)',
              cursor: 'pointer'
            }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <Image />
            <div style={{ padding: '30px' }}>
              <Name />
              <Price />
              <Description />
              <button 
                style={{
                  backgroundColor: isButtonHovering ? '#764ba2' : '#667eea',
                  color: 'white',
                  border: 'none',
                  padding: '12px 30px',
                  borderRadius: '25px',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  width: '100%',
                  transform: isButtonHovering ? 'scale(1.05)' : 'scale(1)'
                }}
                onMouseEnter={() => setIsButtonHovering(true)}
                onMouseLeave={() => setIsButtonHovering(false)}
              >
                Add to Cart
              </button>
            </div>
          </div>

          {/* Greeting Section */}
          <div style={{ 
            textAlign: 'center',
            marginTop: '30px',
            padding: '30px',
            backgroundColor: 'rgba(255,255,255,0.95)',
            borderRadius: '12px',
            boxShadow: '0 5px 20px rgba(0,0,0,0.2)'
          }}>
            <h3 style={{ 
              color: '#2c3e50',
              fontSize: '1.8rem',
              marginBottom: '15px',
              fontWeight: 'bold'
            }}>
              {firstName ? `Hello, ${firstName}!` : "Hello, there!"}
            </h3>
            
            {/* Display image if firstName is provided */}
            {firstName && (
              <div style={{ marginTop: '20px' }}>
                <img 
                  src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?w=400&h=300&fit=crop"
                  alt="Welcome"
                  style={{ 
                    borderRadius: '12px',
                    width: '100%',
                    maxWidth: '400px',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
                  }}
                />
                <p style={{ 
                  marginTop: '15px',
                  color: '#555',
                  fontSize: '1.1rem',
                  fontWeight: '500'
                }}>
                  Welcome back! Thanks for shopping with us! 🎉
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;


