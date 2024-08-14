import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import oip from '../../assets/images/OIP.jpg';
// Define CSS animations
const fadeIn = {
  animation: 'fadeIn 1s ease-out forwards',
};

const hoverEffect = {
  transition: 'transform 0.3s, box-shadow 0.3s, background-color 0.3s',
};

const profileHoverStyle = {
  ...hoverEffect,
  transform: 'scale(1.05)',
  boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)',
  backgroundColor: '#f0f4f8',
};

const containerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '20px',
  justifyContent: 'center',
  maxWidth: '1200px',
  margin: 'auto',
  padding: '20px',
  backgroundColor: '#f4f7f6',
};

const profileStyle = {
  width: '280px',
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
  padding: '20px',
  textAlign: 'center',
  margin: '10px',
  border: '1px solid #ddd',
  cursor: 'pointer',
  ...fadeIn,
};

const avatarStyle = {
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  margin: '0 auto 15px',
  border: '4px solid #3498db',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const nameStyle = {
  fontSize: '24px',
  fontWeight: '700',
  color: '#333',
  marginBottom: '5px',
};

const roleStyle = {
  color: '#555',
  fontSize: '18px',
  marginBottom: '15px',
};

const detailsStyle = {
  marginBottom: '15px',
  textAlign: 'left',
};

const detailLabelStyle = {
  display: 'flex',
  alignItems: 'center',
  fontSize: '14px',
  color: '#555',
  marginBottom: '5px',
};

const detailValueStyle = {
  fontSize: '16px',
  fontWeight: '500',
  color: '#333',
};

const iconStyle = {
  marginRight: '10px',
  color: '#3498db',
};

const descriptionStyle = {
  marginTop: '15px',
  fontSize: '14px',
  color: '#666',
  lineHeight: '1.5',
  textAlign: 'left',
};

const generalDescriptionStyle = {
  marginTop: '40px',
  maxWidth: '1200px',
  margin: 'auto',
  padding: '40px',
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
  position: 'relative',
  ...fadeIn,
};

const generalDescriptionBackground = {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  background: 'linear-gradient(to bottom, #3498db, #ffffff)',
  borderRadius: '8px',
  zIndex: '-1',
};

const titleStyle = {
  fontSize: '28px',
  fontWeight: '700',
  color: '#333',
  marginBottom: '20px',
};

const textStyle = {
  fontSize: '16px',
  color: '#666',
  lineHeight: '1.6',
  margin: '0 auto',
  maxWidth: '800px',
};

const extraTextStyle = {
  margin: '20px auto',
  fontSize: '18px',
  color: '#444',
  lineHeight: '1.6',
  maxWidth: '900px',
};

// Define keyframes for fade-in animation
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`, styleSheet.cssRules.length);

const AdminProfile = () => {
  const profiles = [
    {
      id: 1,
      name: 'KRISHNITHA K',
      role: 'owner',
      email: '727822tucy021@skct.edu.in',
      phone: '+1 (123) 456-7890',
      location: 'San Francisco, CA',
    },
    {
      id: 2,
      name: 'HARINI C M',
      role: 'Manager',
      email: '727822tucy017@skct.edu.in',
      phone: '+1 (987) 654-3210',
      location: 'New York, NY',
    },
    {
      id: 3,
      name: 'SWEATHI',
      role: 'Co-ordinator',
      email: '727822tucy059@skct.edu.in',
      phone: '+1 (555) 555-5555',
      location: 'Los Angeles, CA',
    },
  ];

  return (
    <div>
      <div style={containerStyle}>
        {profiles.map(profile => (
          <div
            key={profile.id}
            style={{ ...profileStyle, ...profileHoverStyle }}
          >
            <img src="https://th.bing.com/th/id/OIP.-swUfQbnBOJsKEquPtHthgHaHa?w=193&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Profile Avatar" style={avatarStyle} />
            <div style={nameStyle}>{profile.name}</div>
            <div style={roleStyle}>{profile.role}</div>
            <div style={detailsStyle}>
              <div style={detailLabelStyle}>
                <Mail style={iconStyle} />
                <span>Email:</span>
              </div>
              <div style={detailValueStyle}>{profile.email}</div>
            </div>
            <div style={detailsStyle}>
              <div style={detailLabelStyle}>
                <Phone style={iconStyle} />
                <span>Phone:</span>
              </div>
              <div style={detailValueStyle}>{profile.phone}</div>
            </div>
            <div style={detailsStyle}>
              <div style={detailLabelStyle}>
                <MapPin style={iconStyle} />
                <span>Location:</span>
              </div>
              <div style={detailValueStyle}>{profile.location}</div>
            </div>
          </div>
        ))}
        {/* Add an image here */}
        {/* <img src="path-to-your-image.jpg" alt="Additional Visual" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} /> */}
      </div>
      {/* <div style={generalDescriptionStyle}>
        <div style={generalDescriptionBackground}></div>
        <h2 style={titleStyle}>About Our Team</h2>
        <p style={textStyle}>
          Our team is composed of highly skilled and dedicated professionals who are committed to delivering exceptional results. Each member brings unique strengths and experiences, making us a diverse and dynamic group. We strive for excellence and work collaboratively to achieve our goals.
        </p>
        <p style={textStyle}>
          We value innovation, integrity, and teamwork. Our focus is on creating solutions that drive success and exceed expectations. Learn more about our team and how we can help you reach your objectives.
        </p>
        <p style={extraTextStyle}>
          We foster a culture of continuous learning and growth, encouraging each member to expand their knowledge and skills. Our collaborative approach ensures that we are always on the cutting edge of industry trends and technologies. By working closely with our clients and partners, we aim to create lasting, positive impacts in the communities we serve.
        </p>
        <p style={extraTextStyle}>
          Together, we are more than just a team; we are a family committed to achieving greatness. Join us on our journey as we continue to innovate and lead in our field.
        </p>
      </div> */}
    </div>
  );
};

export default AdminProfile;
