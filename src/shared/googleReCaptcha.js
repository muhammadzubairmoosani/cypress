import React, { forwardRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { SITE_KEY } from "../utils/constant";

const GoogleReCaptch = forwardRef((props, ref) => (
  <ReCAPTCHA sitekey={SITE_KEY} size="invisible" ref={ref} />
));

export default GoogleReCaptch;
