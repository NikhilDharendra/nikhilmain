const Item = ({ amount, title, description, img, price }) => {
  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={img} alt="image1" />
        </div>

        <div className="title">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className="add-minus-quantity">
          <i className="fas fa-minus minus"></i>
          <input type="text" placeholder="2" />
          <i className="fas fa-plus plus"></i>
        </div>

        <div className="price">
          <h3>{price}</h3>
        </div>

        <div className="remove-item">
          <i className="fas fa-trash-alt remove"></i>
        </div>
      </div>

      <hr />
    </>
  );
};
export default Item;
