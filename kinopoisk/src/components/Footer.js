import React from "react";
import AppleLogo from "../img/AppleLogo.svg";
import GoogleLogo from "../img/google_play.png";

const Footer = () => {
  return (
    <>
      <div className="container-fluid">
        <ul className="footer__ul d-flex pb-4">
          <li>
            <a
              target="_blank"
              href="https://yandex.ru/jobs/vacancies?services=kinopoisk"
            >
              Vacancies
            </a>
          </li>
          <li>
            <a target="_blank" href="https://ya.ru/funtech-sales/portal">
              Advertising
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.yandex.ru/legal/kinopoisk_termsofuse/"
            >
              Agreement
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.kinopoisk.ru/legal/recommendations/ru/"
            >
              Recommendation rules
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://yandex.ru/support/kinopoisk/index.html"
            >
              Reference
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.kinopoisk.ru/media/rubric/19/">
              Blog
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.kinopoisk.ru/special/index/#/?dateFrom=2024-04-01&dateTo=2024-04-07"
            >
              Kinopoisk PRO
            </a>
          </li>
          <li>
            <a target="_blank" href="https://kinopoisk.userecho.com/">
              Offers
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.kinopoisk.ru/lists/movies/?b=films"
            >
              All films
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.kinopoisk.ru/lists/movies/?b=series"
            >
              All series
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.kinopoisk.ru/lists/movies/genre--animation/?ss_subscription=ANY"
            >
              All cartoons
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.kinopoisk.ru/lists/movies/genre--reality-tv/?b=series"
            >
              Programs and shows
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.kinopoisk.ru/lists/movies/recommendation/"
            >
              Movie recommendations
            </a>
          </li>
        </ul>

        <div className="d-flex  footer__install mb-5">
          <div className="d-flex">
            <a
              className="d-flex "
              target="_blank"
              href="https://apps.apple.com/ru/app/%D0%BA%D0%B8%D0%BD%D0%BE%D0%BF%D0%BE%D0%B8%D1%81%D0%BA-%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D1%8B-%D0%B8-%D1%81%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D1%8B/id477718890?amp%253Bat=1000lqjf&amp%253Bct=mobile&amp%253Buo=4&referrer=appmetrica_tracking_id%3D170895231946863928%26ym_tracking_id%3D6943277058066181632%26appmetrica_deep_link%3Dkp%253A%252F%252FmainView%253Futm_campaign%253D%25257Cutm_medium%25253D%2526utm_source%2526utm_content%2526utm_term"
            >
              <img src={AppleLogo} alt="Apple logo" />
              <p>App Store</p>
            </a>
          </div>
          <div className="d-flex">
            <a
              className="d-flex "
              target="_blank"
              href="https://play.google.com/store/apps/details?id=ru.kinopoisk&referrer=appmetrica_tracking_id%3D603240792315703184%26ym_tracking_id%3D5632652311504968811%26appmetrica_deep_link%3Dkp%253A%252F%252FmainView%253Futm_campaign%253D%25257Cutm_medium%25253D%2526utm_source%2526utm_content%2526utm_term"
            >
              <img src={GoogleLogo} alt="Google Play" />
              <p>Google Play</p>
            </a>
          </div>
        </div>

        <hr></hr>

        <div className="d-flex container-fluid justify-content-between">
          <div className="footer__left__info">
            <p>
              © 2003 — 2024, Kinopoisk <span>18+</span>
            </p>
          </div>
          <div className="footer__prog__list">
            <ul className="d-flex ">
              <li>
                <a target="_blank" href="https://tv.yandex.ru/">
                  TV program
                </a>
              </li>
              <li>
                <a target="_blank" href="https://music.yandex.kz/home">
                  Music
                </a>
              </li>
              <li>
                <a target="_blank" href="https://afisha.yandex.kz/almaty">
                  Poster
                </a>
              </li>
              <li>
                <a target="_blank" href="https://bookmate.ru/?bm_sso=1">
                  Bookmate
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__right__info">
            <p>
              Company project{" "}
              <a target="_blank" href="https://yandex.ru/all">
                Yandex
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
