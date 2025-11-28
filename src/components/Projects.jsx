import React, { useState, useEffect, useRef } from 'react'
import siteConfig from '../data/siteConfig'
import correlationheatmap from '../assets/correlationheatmap.png'

// ... then in projects: images: [correlationheatmap]

// Modal Component for Swipeable Image Gallery
function ImageModal({ images, initialIndex, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const modalRef = useRef(null);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Touch swipe handling
  const handleTouchStart = (e) => {
    const touchStartX = e.touches[0].clientX;
    modalRef.current.touchStartX = touchStartX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = modalRef.current.touchStartX - touchEndX;
    if (Math.abs(diff) > 50) { // Threshold for swipe
      if (diff > 0) nextImage();
      else prevImage();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevImage();
      else if (e.key === 'ArrowRight') nextImage();
      else if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close on backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === modalRef.current) onClose();
  };

  return (
    <div className="modal-backdrop" ref={modalRef} onClick={handleBackdropClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>&times;</button>
        <div className="modal-carousel" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          <button className="modal-btn prev" onClick={prevImage}>&lt;</button>
          <img src={images[currentIndex]} alt={`Project screenshot ${currentIndex + 1}`} className="modal-image" />
          <button className="modal-btn next" onClick={nextImage}>&gt;</button>
          <div className="modal-indicators">
            {images.map((_, index) => (
              <span key={index} className={`modal-indicator ${index === currentIndex ? 'active' : ''}`} onClick={() => setCurrentIndex(index)}></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Updated Image Display (No Carousel in Card, Just Clickable Image)
function ImageDisplay({ images, onImageClick }) {
  if (!images || images.length === 0) return <div className="no-images">No images available</div>;

  return (
    <img
      src={images[0]} // Show first image as thumbnail
      alt="Project screenshot"
      className="project-image"
      onClick={() => onImageClick(0)} // Click to open modal at first image
    />
  );
}

export default function Projects() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalInitialIndex, setModalInitialIndex] = useState(0);
  const projectRef = useRef(null);
  const projects = siteConfig.projects;

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Touch swipe for projects
  const handleTouchStart = (e) => {
    const touchStartX = e.touches[0].clientX;
    projectRef.current.touchStartX = touchStartX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = projectRef.current.touchStartX - touchEndX;
    if (Math.abs(diff) > 50) { // Threshold for swipe
      if (diff > 0) nextProject();
      else prevProject();
    }
  };

  // Keyboard navigation for projects
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (modalOpen) return; // Disable project nav when modal is open
      if (e.key === 'ArrowLeft') prevProject();
      else if (e.key === 'ArrowRight') nextProject();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalOpen]);

  const currentProject = projects[currentProjectIndex];

  const openModal = (initialIndex) => {
    setModalInitialIndex(initialIndex);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="projects container">
      <h2>Projects</h2>
      <div className="projects-carousel" ref={projectRef} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <article className="card">
          <h3 className="project-title">{currentProject.title}</h3>
          <ImageDisplay images={currentProject.images} onImageClick={openModal} />
          <div className="card-body">
            <p>{currentProject.desc}</p>
            <div className="tech">{currentProject.tech.join(' · ')}</div>
            <div className="card-actions">
              <a href={currentProject.github} target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </article>
        {/* Navigation Controls */}
        <button className="project-nav-btn prev" onClick={prevProject} disabled={projects.length === 1}>&lt;</button>
        <button className="project-nav-btn next" onClick={nextProject} disabled={projects.length === 1}>&gt;</button>
        <div className="project-indicators">
          {projects.map((_, index) => (
            <span key={index} className={`project-indicator ${index === currentProjectIndex ? 'active' : ''}`} onClick={() => setCurrentProjectIndex(index)}></span>
          ))}
        </div>
      </div>
      {modalOpen && <ImageModal images={currentProject.images} initialIndex={modalInitialIndex} onClose={closeModal} />}
    </div>
  );
}