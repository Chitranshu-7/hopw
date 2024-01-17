import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import {
  faYoutube,
  faInstagram,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <>
      <footer>
        <div>
          <FontAwesomeIcon icon={faEnvelope} className="bg-red-800" size="2x" />
          <FontAwesomeIcon icon={faYoutube} size="2x" className="text-red-500 bg-white" />
          <FontAwesomeIcon icon={faInstagram} size="2x" className="text-" />
          <FontAwesomeIcon icon={faSquareXTwitter} size="2x" className="text-gray-800" />
        </div>
      </footer>
    </>
  );
}
