const PhotoGallery = () => {
  const photos = [
    {
      src: "/images/Citrus2026.jpg",
      alt: "Hackathon photo 1",
    },
    {
      src: "/images/CitrusHackGRLogo-1.png",
      alt: "Hackathon photo 2",
    },
    {
      src: "/images/closingceremony46.jpg",
      alt: "Hackathon photo 3",
    },
  ];

  return (
    <section className="projects-section">
      <div className="section-heading mt-8">
        <div>
          <h2>Photo Gallery</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <div
            key={photo.src}
            className="overflow-hidden rounded-xl border bg-white"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotoGallery;
