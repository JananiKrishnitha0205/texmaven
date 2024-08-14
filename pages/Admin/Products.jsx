import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Jobs = () => {
  const [formData, setFormData] = useState({
    adTitle: '',
    description: '',
    location: '',
    price: '',
    mobileNumber: '',
  });

  const [uploadedImages, setUploadedImages] = useState(Array(12).fill(null));
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fileInputRefs = useRef([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const newImages = [...uploadedImages];
      newImages[index] = file;
      setUploadedImages(newImages);
    }
  };

  const uploadImages = async (images) => {
    const formData = new FormData();
    images.forEach((image) => {
      if (image) {
        formData.append('images', image);
      }
    });

    try {
      const response = await axios.post('http://localhost:8088/images/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data.urls; // Assuming the backend returns image URLs
    } catch (err) {
      console.error('Error uploading images:', err);
      setError('Error uploading images');
      return [];
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { adTitle, description, location, price, mobileNumber } = formData;
    if (!adTitle || !description || !location || !price || !mobileNumber) {
      alert('Please fill in all mandatory fields.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const imageUrls = await uploadImages(uploadedImages);

      const productData = {
        adTitle,
        description,
        location,
        price: parseFloat(price),
        mobileNumber,
        imageUrls,
      };

      await axios.post('http://localhost:8088/product/add', productData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setShowModal(true);
    } catch (err) {
      console.error('Error posting the ad:', err);
      setError('Error posting the ad');
    } finally {
      setLoading(false);
    }
  };

  const handleSlotClick = (index) => {
    fileInputRefs.current[index].click();
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Container>
      <Title>Post Your Ad</Title>
      <Section>
        <SectionTitle>Include Some Details</SectionTitle>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <label htmlFor="adTitle">Ad Title *</label>
            <input
              type="text"
              id="adTitle"
              name="adTitle"
              maxLength="70"
              placeholder="Mention the key features of your item (e.g., brand, model, age, type)"
              value={formData.adTitle}
              onChange={handleChange}
              required
            />
            <span>{formData.adTitle.length} / 70</span>
          </FormGroup>
          <FormGroup>
            <label htmlFor="description">Description *</label>
            <textarea
              id="description"
              name="description"
              maxLength="4096"
              placeholder="Include condition, features, and reason for selling"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
            <span>{formData.description.length} / 4096</span>
          </FormGroup>

          <Section>
            <SectionTitle>Upload Up to 12 Photos</SectionTitle>
            <PhotoUpload>
              {uploadedImages.map((image, index) => (
                <PhotoSlot key={index} onClick={() => handleSlotClick(index)}>
                  {image ? <ImagePreview src={URL.createObjectURL(image)} alt={`Uploaded ${index + 1}`} /> : <AddPhotoIcon />}
                  <HiddenFileInput
                    type="file"
                    accept="image/*"
                    ref={(el) => (fileInputRefs.current[index] = el)}
                    onChange={(e) => handleFileChange(e, index)}
                  />
                </PhotoSlot>
              ))}
            </PhotoUpload>
          </Section>

          <Section>
            <SectionTitle>Set A Price</SectionTitle>
            <FormGroup>
              <label htmlFor="price">Price *</label>
              <input
                type="number"
                id="price"
                name="price"
                placeholder="Enter price"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </FormGroup>
          </Section>

          <Section>
            <SectionTitle>Contact Information</SectionTitle>
            <FormGroup>
              <label htmlFor="location">Location *</label>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="Enter location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="mobileNumber">Mobile Number *</label>
              <input
                type="text"
                id="mobileNumber"
                name="mobileNumber"
                placeholder="Enter mobile number"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
              />
            </FormGroup>
          </Section>

          {error && <ErrorText>{error}</ErrorText>}

          <Button type="submit" disabled={loading}>
            {loading ? 'Posting...' : 'Post Now'}
          </Button>
        </form>
      </Section>

      {showModal && (
        <ModalBackground>
          <Modal>
            <ModalTitle>Ad Posted Successfully!</ModalTitle>
            <ModalButton onClick={handleCloseModal}>Close</ModalButton>
          </Modal>
        </ModalBackground>
      )}
    </Container>
  );
};

export default Jobs;

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  margin-bottom: 10px;
`;

const FormGroup = styled.div`
  margin-bottom: 10px;
`;

const PhotoUpload = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const PhotoSlot = styled.div`
  width: 100px;
  height: 100px;
  margin-right: 10px;
  margin-bottom: 10px;
  border: 2px dashed #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ImagePreview = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 5px;
`;

const ModalTitle = styled.h3`
  margin-bottom: 20px;
`;

const ModalButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const ErrorText = styled.p`
  color: red;
`;
