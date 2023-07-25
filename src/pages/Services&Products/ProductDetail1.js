import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductDetail } from "../../services/apis/products";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProDuct = async () => {
      const res = await getProductDetail(id);
      setProduct(res.Object);
    };
    getProDuct();
  }, [id]);

  return (
    <div>
      <div>{product?.ProductName}</div>
      <div>
        {product?.AverageRating}&nbsp;{product?.QuantityRating}
      </div>
      <div>{(product?.Price * (100 - product?.Discount)) / 100}</div>
      <div>{product?.Price}</div>
    </div>
  );
};

export default ProductDetail;
