import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { FiCamera, FiCheckCircle, FiX } from 'react-icons/fi';

// Styled components
const Container = styled.div`
  width: 60%;
  max-width: 800px;
  margin: 50px auto;
  background: linear-gradient(135deg, #f0f4f8, #d9e2ec);
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  font-family: 'Roboto', sans-serif;
  color: #333;
  box-sizing: border-box;
  animation: bounceIn 1s ease;

  @media (max-width: 768px) {
    width: 90%;
    padding: 20px;
  }

  @keyframes bounceIn {
    0% {
      transform: scale(0.8);
      opacity: 0;
    }
    50% {
      transform: scale(1.05);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  font-size: 2.5em;
  color: #333;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  animation: fadeIn 1s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Section = styled.div`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  font-size: 1.8em;
  margin-bottom: 20px;
  color: #444;
  border-bottom: 2px solid #007bff;
  padding-bottom: 5px;
  animation: fadeIn 1s ease;
`;

const FormGroup = styled.div`
  margin-bottom: 25px;

  label {
    display: block;
    margin-bottom: 10px;
    font-weight: bold;
    color: #333;
  }

  input,
  textarea {
    width: 100%;
    padding: 14px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1em;
    box-sizing: border-box;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;

    &:focus {
      border-color: #007bff;
      outline: none;
      box-shadow: 0 0 6px rgba(0, 123, 255, 0.3);
    }

    &:hover {
      border-color: #0056b3;
    }
  }

  span {
    display: block;
    margin-top: 8px;
    font-size: 0.85em;
    color: #777;
  }
`;

const PhotoUpload = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const PhotoSlot = styled.div`
  border: 2px dashed #ccc;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 15px;
  cursor: pointer;
  transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
  width: 150px;
  height: 150px;

  &:hover {
    border-color: #007bff;
    background-color: #f0f4f8;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    transform: scale(1.05);
  }
`;

const AddPhotoIcon = styled(FiCamera)`
  font-size: 2.5em;
  color: #007bff;
  transition: color 0.3s ease;

  ${PhotoSlot}:hover & {
    color: #0056b3;
  }
`;

const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const Button = styled.button`
  display: block;
  width: 100%;
  padding: 14px;
  font-size: 1.1em;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const ModalBackground = styled.div`
  display: ${({ show }) => (show ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  animation: fadeIn 0.5s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Modal = styled.div`
  background-color: #ffffff;
  padding: 40px;
  border-radius: 12px;
  text-align: center;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  position: relative;
  animation: scaleUp 0.5s ease;

  @keyframes scaleUp {
    from {
      transform: scale(0.9);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const ModalTitle = styled.h2`
  font-size: 1.8em;
  color: #333;
  margin-bottom: 20px;
`;

const ModalButton = styled(Button)`
  margin-top: 20px;
  background-color: #28a745;

  &:hover {
    background-color: #218838;
  }
`;

const ModalIcon = styled(FiCheckCircle)`
  font-size: 4em;
  color: #00cb75;
  margin-bottom: 20px;
`;

const ModalCloseButton = styled(FiX)`
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 1.8em;
  cursor: pointer;
  color: #999;
  transition: color 0.3s ease;

  &:hover {
    color: #333;
  }
`;

const ErrorText = styled.p`
  color: red;
  margin-top: 10px;
  font-size: 0.9em;
`;

const Jobs = () => {
  const [formData, setFormData] = useState({
    adTitle: '',
    description: '',
    location: '',
    price: '',
    mobileNumber: '',
  });

  const [file, setFile] = useState(null);
  const [base64Image, setBase64Image] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState('');

  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result.split(',')[1]; // Get base64 string without metadata
        setBase64Image(base64String);
      };
      reader.readAsDataURL(file);
      setFile(file);
    }
  };

  const handleSlotClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!formData.adTitle || !formData.description || !formData.location || !formData.price || !formData.mobileNumber) {
      setError('Please fill in all the required fields.');
      return;
    }

    // Prepare JSON data
    const jsonData = {
      productTitle: formData.adTitle,
      productDesc: formData.description,
      location: formData.location,
      price: formData.price,
      mobileNumber: formData.mobileNumber,
      productImage: base64Image, // send a single base64 image
    };

    try {
      // console.log('Sending data:', jsonData); // Log the data to ensure it's correct

      // Submit JSON data
      const response = await fetch('http://localhost:8088/product/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
      });
      

      if (response.ok) {
        console.log(jsonData);
        setShowModal(true);
      } else {
        const responseText = await response.text();
        setError(`Failed to submit the form. Server responded with: ${responseText}`);
      }
    } catch (err) {
      setError('An error occurred while submitting the form.');
      console.error('Submission error:', err); // Log the error for debugging
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <Container>
      <Title>Post a Job Ad</Title>
      <form onSubmit={handleSubmit}>
        <Section>
          <SectionTitle>Job Details</SectionTitle>
          <FormGroup>
            <label htmlFor="adTitle">Job Title *</label>
            <input
              type="text"
              id="adTitle"
              name="adTitle"
              value={formData.adTitle}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="description">Description *</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
            <span>Provide a brief description of the job.</span>
          </FormGroup>
        </Section>
        <Section>
          <SectionTitle>Location & Pricing</SectionTitle>
          <FormGroup>
            <label htmlFor="location">Location *</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="price">Price *</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
            <span>Enter the price in USD.</span>
          </FormGroup>
        </Section>
        <Section>
          <SectionTitle>Contact Information</SectionTitle>
          <FormGroup>
            <label htmlFor="mobileNumber">Mobile Number *</label>
            <input
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
            />
            <span>Enter a valid mobile number.</span>
          </FormGroup>
        </Section>
        <Section>
          <SectionTitle>Upload Photo</SectionTitle>
          <PhotoUpload>
            <PhotoSlot onClick={handleSlotClick}>
              {file ? (
                <ImagePreview src={URL.createObjectURL(file)} alt="Uploaded Photo" />
              ) : (
                <AddPhotoIcon />
              )}
              <HiddenFileInput
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
              />
            </PhotoSlot>
          </PhotoUpload>
        </Section>
        {error && <ErrorText>{error}</ErrorText>}
        <Button type="submit">Submit Ad</Button>
      </form>

      <ModalBackground show={showModal}>
        <Modal>
          <ModalCloseButton onClick={handleModalClose} />
          <ModalIcon />
          <ModalTitle>Success!</ModalTitle>
          <p>Your job ad has been posted successfully.</p>
          <ModalButton onClick={handleModalClose}>Close</ModalButton>
        </Modal>
      </ModalBackground>
    </Container>
  );
};

export default Jobs;
