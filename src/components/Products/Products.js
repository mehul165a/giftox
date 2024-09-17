import React, { useState } from 'react';
import './Products.css'; // Import the CSS file for styling
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap for modal styles

const products = [
  {
    name: 'Artisan Bottle (1L)',
    description: 'Experience elegance with our Handcrafted Luxury Bottle. Each piece is meticulously crafted by skilled artisans and features a ceramic cap adorned with intricate hand-painted designs. This exquisite bottle not only elevates your collection but also serves as a stunning statement of sophistication. Perfect for showcasing your finest spirits or as a luxurious decorative accent.',
    image: 'bottle.jpg' // Example image URL, replace with actual
  },
  {
    name: 'Elegance Elite Pen',
    description: 'Elevate your writing experience with our Elegant Pen. Featuring a sleek, refined design with a polished finish, this pen combines sophistication with functionality. Its smooth, consistent ink flow ensures effortless writing, while the comfortable grip provides ease during extended use. Perfect for making a statement in meetings or as a luxurious gift, this pen brings a touch of elegance to every word.',
    image: 'pen.jpg' // Example image URL, replace with actual
  },
  {
    name: 'Stylish Keychain',
    description: 'Add touch of elegance to your essentials with our Stylish Hook Keychain. Crafted from high-quality materials, this sleek keychain features a chic design with a durable hook for secure attachment. Whether used to hold your keys or as a stylish accessory for your bag, its modern aesthetic and functional design make it a practical and fashionable choice for everyday use.',
    image: 'keychain.jpg' // Example image URL, replace with actual
  }
];

const Products = () => {
  const [modalContent, setModalContent] = useState(null);

  const handleShowModal = (product) => {
    setModalContent(product);
    document.body.classList.add('modal-open'); // Add class to body for blur effect
  };

  const handleCloseModal = () => {
    setModalContent(null);
    document.body.classList.remove('modal-open'); // Remove class to remove blur effect
  };

  return (
    <>
      <section id="products" className="container py-5">
        <h2 className="mb-4 text-center text-white">Our Products</h2>
        <div className="row justify-content-center">
          {products.map((product, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card text-center">
                <div className="image">
                  <img src={product.image} alt={product.name} width="300" />
                </div>
                <div className="about-product text-center">
                  <h3>{product.name}</h3>
                  <button
                    className="btn btn-success buy-now"
                    onClick={() => handleShowModal(product)}
                  >
                    Know More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {modalContent && (
        <div
          className="modal fade show"
          tabIndex="-1"
          role="dialog"
          style={{ display: 'block' }} // Ensure modal is visible
          aria-labelledby="productModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="productModalLabel">{modalContent.name}</h5>
                <button
                  type="button"
                  className="close"
                  onClick={handleCloseModal}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="modal-body-content">
                  <div className="modal-body-image">
                    <img src={modalContent.image} alt={modalContent.name} className="img-fluid" />
                  </div>
                  <div className="modal-body-description">
                    <p>{modalContent.description}</p>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
