import React from 'react';
import { arrayOf, shape } from 'prop-types';
import * as Elements from './Elements';

const Layout = ({ layoutItems }) => (
  <div className="layout">
    {
      layoutItems.map((layoutItem, index) => {
        const ElementComponent = Elements[layoutItem.name].Component;
        return <ElementComponent key={index.toString()} item={layoutItem} />;
      })
    }
  </div>
  );

Layout.propTypes = {
  layoutItems: arrayOf(shape).isRequired
};
export default Layout;
