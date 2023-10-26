import { Col, Container, Row } from "react-bootstrap";
import logo from "../../assets/images/logo.png";

function Footer() {
  return (
    <div className="mt-4 text-center">
      <Container>
        <Row>
          <div
            className="w-50 bg-dark"
            style={{ height: "1.8px", margin: ".5% auto" }}
          ></div>
        </Row>
        <Row>
          <Col
            lg={6}
            className="d-flex flex-column align-items-center justify-content-between pt-4"
          >
            <img src={logo} alt="logo" width={"70rem"} />
            <h5 className="mt-2">FOLLOW OUR SOCIALS</h5>
            {/* Icons */}
            <div className="d-flex justify-content-between w-50 px-4 w-lg-50 w-xl-25 mt-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="50"
                viewBox="0 0 45 50"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.2249 6.0869C15.0988 6.06482 14.9707 6.06146 14.8439 6.0769C12.3209 6.38023 8.48086 7.89356 6.21286 9.26023C6.06306 9.35101 5.92898 9.47065 5.81686 9.61356C4.87486 10.8102 4.01986 12.7602 3.35086 14.6069C2.66086 16.5002 2.09086 18.5002 1.76986 19.9469C0.707858 24.6469 0.128858 30.2902 0.050858 35.6436C0.0483765 35.9107 0.106133 36.1743 0.218858 36.4102C1.11886 38.3202 3.05986 40.0902 5.00386 41.3836C6.96886 42.6936 9.26386 43.7269 11.1119 43.9269C11.3333 43.9504 11.5566 43.9165 11.7643 43.8281C11.9719 43.7396 12.1583 43.5988 12.3089 43.4169C12.7709 42.8602 13.5569 41.5602 14.1509 40.5502C14.4209 40.0902 14.6759 39.6502 14.8739 39.3002C16.8599 39.7002 19.3499 39.9336 22.4999 39.9336C25.6439 39.9336 28.1339 39.7002 30.1199 39.3002C30.3179 39.6536 30.5699 40.0902 30.8399 40.5469C31.4339 41.5602 32.2199 42.8602 32.6849 43.4169C32.8354 43.5988 33.0218 43.7396 33.2295 43.8281C33.4371 43.9165 33.6604 43.9504 33.8819 43.9269C35.7299 43.7269 38.0219 42.6936 39.9869 41.3836C41.9309 40.0902 43.8719 38.3202 44.7749 36.4102C44.8865 36.174 44.9433 35.9104 44.9399 35.6436C44.8649 30.2902 44.2829 24.6436 43.2269 19.9436C42.8025 18.1283 42.2724 16.3457 41.6399 14.6069C40.9709 12.7602 40.1159 10.8069 39.1769 9.61356C39.0638 9.47033 38.9287 9.35068 38.7779 9.26023C36.5129 7.89356 32.6729 6.38023 30.1469 6.0769C30.021 6.06175 29.8939 6.06512 29.7689 6.0869C29.2035 6.2078 28.6731 6.48011 28.2239 6.88023C27.2175 7.78034 26.4039 8.91778 25.8419 10.2102C24.73 10.1133 23.6151 10.0655 22.4999 10.0669C21.2939 10.0669 20.1779 10.1169 19.1489 10.2069C18.5864 8.91565 17.7728 7.77939 16.7669 6.88023C16.3185 6.4806 15.7892 6.20831 15.2249 6.0869ZM33.0539 38.4602C33.4761 39.1827 33.9091 39.8972 34.3529 40.6036C35.5409 40.3036 37.0559 39.6036 38.5079 38.6369C40.1369 37.5536 41.4299 36.3036 42.0539 35.2469C41.9549 30.2269 41.3969 25.0136 40.4339 20.7202C40.0416 19.048 39.5526 17.4057 38.9699 15.8036C38.3699 14.1436 37.7249 12.7369 37.1639 11.9302C35.2139 10.8069 32.1389 9.62023 30.1349 9.2969C30.0746 9.33753 30.0165 9.38205 29.9609 9.43023C29.7123 9.64752 29.485 9.89332 29.2829 10.1636C29.1646 10.32 29.0515 10.4813 28.9439 10.6469C29.8589 10.8336 30.6749 11.0569 31.3979 11.3036C33.4499 12.0036 34.9289 12.9702 35.6519 14.0402C35.881 14.3797 35.9794 14.8064 35.9254 15.2265C35.8714 15.6466 35.6694 16.0256 35.3639 16.2802C35.2126 16.4063 35.0404 16.498 34.8572 16.5502C34.6741 16.6023 34.4834 16.6139 34.2962 16.5841C33.9181 16.5241 33.577 16.2997 33.3479 15.9602C33.1709 15.7002 32.3999 14.9936 30.5519 14.3602C28.7669 13.7536 26.1419 13.2669 22.4999 13.2669C18.8579 13.2669 16.2299 13.7536 14.4479 14.3636C12.5999 14.9969 11.8289 15.6969 11.6519 15.9602C11.5384 16.1283 11.3962 16.2699 11.2335 16.377C11.0708 16.484 10.8907 16.5544 10.7035 16.5841C10.3254 16.6442 9.94139 16.5348 9.63586 16.2802C9.48457 16.1542 9.35712 15.9962 9.26077 15.8154C9.16443 15.6346 9.10107 15.4345 9.07433 15.2265C9.02032 14.8064 9.11871 14.3797 9.34786 14.0402C10.0709 12.9669 11.5499 12.0069 13.6019 11.3069C14.3219 11.0569 15.1379 10.8369 16.0499 10.6502C15.942 10.4828 15.8279 10.3204 15.7079 10.1636C15.5066 9.8935 15.2804 9.6477 15.0329 9.43023C14.9763 9.38195 14.9172 9.33743 14.8559 9.2969C12.8549 9.62023 9.77986 10.8069 7.82986 11.9302C7.26586 12.7402 6.62386 14.1436 6.02086 15.8036C5.38186 17.5702 4.85086 19.4269 4.55986 20.7202C3.59386 25.0136 3.03586 30.2269 2.93986 35.2469C3.56386 36.3069 4.85386 37.5536 6.48286 38.6402C7.93786 39.6069 9.44986 40.3069 10.6409 40.6036C11.0891 39.9006 11.5222 39.186 11.9399 38.4602C9.58486 37.5302 8.32186 36.2536 7.49986 34.8869C7.39506 34.7118 7.32233 34.5155 7.28582 34.3092C7.24931 34.1028 7.24973 33.8905 7.28706 33.6844C7.32439 33.4782 7.39789 33.2823 7.50338 33.1077C7.60887 32.9331 7.74427 32.7833 7.90186 32.6669C8.05944 32.5505 8.23613 32.4696 8.42182 32.4291C8.60752 32.3885 8.79858 32.389 8.98412 32.4305C9.16965 32.4719 9.34601 32.5536 9.50313 32.6708C9.66026 32.788 9.79506 32.9385 9.89986 33.1136C10.6799 34.4202 12.7319 36.7336 22.4999 36.7336C32.2709 36.7336 34.3199 34.4202 35.0999 33.1136C35.3115 32.7599 35.6409 32.5142 36.0156 32.4305C36.3903 32.3467 36.7796 32.4317 37.0979 32.6669C37.4161 32.9021 37.6373 33.2681 37.7127 33.6844C37.788 34.1007 37.7115 34.5333 37.4999 34.8869C36.6779 36.2536 35.4119 37.5336 33.0539 38.4602ZM12.2399 23.3736C12.9719 22.5002 13.9649 22.0069 14.9999 22.0002C16.0349 22.0069 17.0279 22.5002 17.7599 23.3736C18.4889 24.2502 18.8999 25.4336 18.8999 26.6669C18.8999 27.9002 18.4889 29.0836 17.7599 29.9602C17.0279 30.8336 16.0349 31.3269 14.9999 31.3336C14.4796 31.3275 13.966 31.2024 13.4912 30.9661C13.0164 30.7298 12.5904 30.3874 12.2399 29.9602C11.5007 29.0608 11.0936 27.8849 11.0999 26.6669C11.0999 25.4336 11.5109 24.2502 12.2399 23.3736ZM29.9999 22.0002C28.9649 22.0069 27.9719 22.5002 27.2399 23.3736C26.5109 24.2502 26.0999 25.4336 26.0999 26.6669C26.0999 27.9002 26.5109 29.0836 27.2399 29.9602C27.9719 30.8336 28.9649 31.3269 29.9999 31.3336C31.0349 31.3269 32.0279 30.8336 32.7599 29.9602C33.4889 29.0836 33.8999 27.9002 33.8999 26.6669C33.8999 25.4336 33.4889 24.2502 32.7599 23.3736C32.4093 22.9464 31.9834 22.604 31.5085 22.3677C31.0337 22.1314 30.5201 22.0063 29.9999 22.0002Z"
                  fill="black"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="46"
                height="44"
                viewBox="0 0 46 44"
                fill="none"
              >
                <path
                  d="M13.2111 0.175781L32.3444 0.175781C39.6333 0.175781 45.5556 5.81537 45.5556 12.7564L45.5556 30.9766C45.5556 34.3132 44.1637 37.5131 41.6861 39.8725C39.2086 42.2318 35.8483 43.5572 32.3444 43.5572L13.2111 43.5572C5.92222 43.5572 0 37.9177 0 30.9766L0 12.7564C0 9.41982 1.39188 6.21989 3.86945 3.86056C6.34701 1.50124 9.70731 0.175781 13.2111 0.175781ZM12.7556 4.51393C10.5808 4.51393 8.49508 5.33662 6.95728 6.80103C5.41948 8.26544 4.55556 10.2516 4.55556 12.3226L4.55556 31.4104C4.55556 35.7269 8.22278 39.2191 12.7556 39.2191L32.8 39.2191C34.9748 39.2191 37.0605 38.3964 38.5983 36.932C40.1361 35.4676 41 33.4814 41 31.4104L41 12.3226C41 8.00614 37.3328 4.51393 32.8 4.51393L12.7556 4.51393ZM34.7361 7.76754C35.4912 7.76754 36.2155 8.0532 36.7494 8.56167C37.2834 9.07015 37.5833 9.75979 37.5833 10.4789C37.5833 11.198 37.2834 11.8876 36.7494 12.3961C36.2155 12.9046 35.4912 13.1902 34.7361 13.1902C33.981 13.1902 33.2568 12.9046 32.7228 12.3961C32.1889 11.8876 31.8889 11.198 31.8889 10.4789C31.8889 9.75979 32.1889 9.07015 32.7228 8.56167C33.2568 8.0532 33.981 7.76754 34.7361 7.76754ZM22.7778 11.0211C25.7983 11.0211 28.6951 12.1638 30.8309 14.1977C32.9668 16.2316 34.1667 18.9901 34.1667 21.8665C34.1667 24.7429 32.9668 27.5014 30.8309 29.5353C28.6951 31.5693 25.7983 32.7119 22.7778 32.7119C19.7573 32.7119 16.8605 31.5693 14.7246 29.5353C12.5888 27.5014 11.3889 24.7429 11.3889 21.8665C11.3889 18.9901 12.5888 16.2316 14.7246 14.1977C16.8605 12.1638 19.7573 11.0211 22.7778 11.0211ZM22.7778 15.3593C20.9655 15.3593 19.2274 16.0449 17.9459 17.2652C16.6644 18.4856 15.9444 20.1407 15.9444 21.8665C15.9444 23.5923 16.6644 25.2475 17.9459 26.4678C19.2274 27.6882 20.9655 28.3737 22.7778 28.3737C24.5901 28.3737 26.3282 27.6882 27.6097 26.4678C28.8912 25.2475 29.6111 23.5923 29.6111 21.8665C29.6111 20.1407 28.8912 18.4856 27.6097 17.2652C26.3282 16.0449 24.5901 15.3593 22.7778 15.3593Z"
                  fill="black"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="47"
                height="45"
                viewBox="0 0 47 45"
                fill="none"
              >
                <path
                  d="M26.2357 39.3697L26.2357 24.0022H31.6505L32.4554 17.9853L26.2357 17.9853V14.1528C26.2357 12.4166 26.7409 11.2278 29.3436 11.2278H32.6414V5.86344C31.0368 5.6988 29.4239 5.6193 27.8102 5.62532C23.024 5.62532 19.7379 8.42282 19.7379 13.5584V17.9741H14.3584L14.3584 23.9909H19.7497L19.7497 39.3697H26.2357Z"
                  fill="black"
                />
              </svg>
            </div>
          </Col>
          <Col lg={6} className="d-flex flex-column mt-4 align-items-center" id="footerContent">
            <h5>COME VISIT US</h5>
            <p
              style={{ textTransform: "uppercase", width: "75%" }}
              className="mx-auto text-center"
            >
              10700 Academy Rd NE, Albuquerque, New York, UNITED STATES (505)
              299-5051
            </p>
            <p
              style={{ textTransform: "uppercase", width: "75%" }}
              className="mx-auto text-center"
            >
              1481 Front, Windsor Ontario, CANADA (519) 734-6500
            </p>
          </Col>
        </Row>
        <Row>
          <div
            className="w-50 bg-dark"
            style={{ height: "1.8px", margin: "1% auto" }}
          ></div>
        </Row>
        <Row className="text-center w-100">
          <div className="mb-4">
            @2023 MOhamed basyoni Inc. All Rights Reserved.
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
