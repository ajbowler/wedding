import React, { useEffect } from "react";
import PageContainer from "../core/PageContainer";
import Blazy from "blazy";
import "./Registry.css";

const RegistryLink = ({ img, href }) => (
  <div className="column">
    <div className="registry-image">
      <img
        alt="Target"
        className="b-lazy"
        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
        data-src={img}
      />
    </div>
    <div className="registry-link">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <i>View Registry</i>
      </a>
    </div>
  </div>
);

const Registry = () => {
  useEffect(() => {
    window.bLazy = new Blazy();
  });

  return (
    <PageContainer hasBackground>
      <div className="section registry">
        <div className="container">
          <div className="columns is-centered">
            <div className="column headline">
              <p className="venue-heading">REGISTRY</p>
            </div>
          </div>
          <div className="columns is-centered is-vcentered">
            <RegistryLink
              href="https://www.potterybarn.com/registry/5jjnzzn78d/registry-list.html"
              img="pottery_barn.png"
            />
            <RegistryLink
              href="https://www.williams-sonoma.com/registry/n2js2vzpkl/registry-list.html"
              img="williams_sonoma.png"
            />
            <RegistryLink
              href="https://www.target.com/gift-registry/giftgiver?registryId=2666d171bc1543c19ce0d5577077b948&type=WEDDING"
              img="target.png"
            />
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Registry;
