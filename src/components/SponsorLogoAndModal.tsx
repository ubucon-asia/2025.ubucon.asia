import { useState } from "react";

type SponsorLogoAndModalProps = {
  name: string;
  level: string;
  partnerTag?:string;
  logoImageSrc: string;
  description: string;
  url: string;
  showPopup: Boolean;
};
export default function SponsorLogoAndModal(props: SponsorLogoAndModalProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const closeHandler = () => setModalOpen(false);
  return (
    <>
      <img
        src={props.logoImageSrc}
        alt={props.name}
        onClick={() => {
          if (props.showPopup) {
            setModalOpen(true);
          }
        }}
      />

      <div
        className="p-modal"
        id="modal"
        style={{ display: modalOpen && props.showPopup ? "flex" : "none" }}
      >
        <section
          className="p-modal__dialog"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <header className="p-modal__header">
            <h2 className="p-modal__title" id="modal-title">
              About the sponsor
            </h2>
            <button
              className="p-modal__close"
              aria-label="Close active modal"
              aria-controls="modal"
              onClick={closeHandler}
            >
              Close
            </button>
          </header>
          <img src={props.logoImageSrc} alt={props.name} />
          <h1>{props.name}</h1>
          <b>{props.level} </b>
          <b>{props.partnerTag}</b>
          <p>{props.description}</p>
          <footer className="p-modal__footer">
            <a href={props.url}>
              <button className="p-button--positive u-no-margin--bottom">
                Visit website
              </button>
            </a>
          </footer>
        </section>
      </div>
    </>
  );
}
