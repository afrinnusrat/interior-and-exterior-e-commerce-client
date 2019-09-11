import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { RouteComponentProps } from 'react-router-dom';

import { DetailsWrapper, Description, MainInfo, Info } from './Details.styles';

import { Gallery } from './details/Gallery.component';
import { Button } from '../../components/Button/Button.component';
import { Product } from '../../modules/shop/shop.interfaces';
import { GlobalSpinner } from '../../components/GlobalSpinner/GlobalSpinner.component';

type Params = { id: string };

interface IProps extends RouteComponentProps<Params> {}

export const Details: React.FC<IProps> = ({
  match: {
    params: { id }
  }
}) => {
  const [productData, setProductData] = useState<Product | null>(null);

  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        const { data } = await axios.get(`/products/${id}`);
        setProductData(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchSingleProduct();
  }, [id]);

  return !productData ? (
    <GlobalSpinner />
  ) : (
    <DetailsWrapper>
      <Gallery imageUrls={productData.images} />
      <Description>
        <MainInfo>{productData.name}</MainInfo>
        <MainInfo>
          <strong>$ {productData.price}</strong>
        </MainInfo>
        <Info>{productData.description}</Info>
        <Button>Add to cart</Button>
      </Description>
    </DetailsWrapper>
  );
};
