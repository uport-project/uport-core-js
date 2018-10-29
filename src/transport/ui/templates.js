import SVG from './assets'
import modalCSS from './style.css'

const appleStoreLink = 'https://itunes.apple.com/us/app/uport-id/id1123434510?mt=8'
const googleStoreLink = 'https://play.google.com/store/apps/details?id=com.uportMobile'

/**
 * Skeleton for a modal popup, styled with css imported from './style.css'
 *
 * @param    {String}   innerHTML    html string defining content of modal
 * @returns  {String}   html string for the populated modal
 */
export const uportModal = innerHTML => `
  <div id="uport__modal-bg">
    <div id="uport__modal-content" class="animated fadeIn">
      <div id="uport__modal-header">
        <div id="uport__modal-x">
          <img src="${SVG.close}" />
        </div>
      </div>
      ${innerHTML}
    </div>
    <style>
      ${modalCSS}
    </style>
  </div>
`

/**
 * Format a modal with a QR code and a custom message, as well as links to
 * the uport mobile app on the app store and play store
 *
 *  @param    {String}    qrImageUri    data uri defining the QR code to be displayed
 *  @param    {String}    [modalText]   message to be displayed above the QR code
 *  @return   {Object}    populated modal
 */
export const qrModal = (qrImageUri, modalText = '') => uportModal(`
  <div id="uport__modal-main">
    <h2 id="uport__qr-text">${modalText}</h2>
    <div class="uport__modal-section">
      <img src="${qrImageUri}" />
      <p>Scan QR code with uPort Mobile App</p>
    </div>
  </div>

  <div class="uport__modal-section uport__grey">
    <p>Don't have uPort? Get it here!</p>
    <div>
      <a href="${googleStoreLink}" target="_blank"><img src="${SVG.androidApp}"/></a>
      <a href="${appleStoreLink}" target="_blank"><img src="${SVG.appleApp}"/></a>
    </div>
  </div>
`)

/**
 * Html string for a modal notifying a user that a push notification has been
 * sent to their phone
 */
export const pushModal = uportModal(`
  <div id="uport__modal-main">
    <h2>Check Your Device</h2>
    <div class="uport__modal-section">
      <img src="${SVG.push}" style=""/>
    </div>
    <div class="uport__modal-section">
      <a href="#" id="uport__push-not-received">Not Receiving the Request?</a>
    </div>
  </div>
`)

/**
 * Html string for a modal displaying a success message
 */
export const successModal = uportModal(`
  <div id="uport__modal-main">
    <div class="uport__modal-section">
      Success!
    </div>
    <div class="uport__modal-section">
      <img src="${SVG.success}" />
    </div>
  </div>
`)

/**
 * Html string for a modal displaying a failure message
 */
export const failureModal = uportModal(`
  <div id="uport__modal-main">
    <div class="uport__modal-section">
      Hmm, something went wrong...
    </div>
    <div class="uport__modal-section">
      <img src="${SVG.failure}" />
    </div>
    <div class="uport__modal-section">
      <button id="uport__failure-retry">Try again?</button>
    </div>
  </div>
`)

/**
 * HTML string for a modal displaying a spinner
 */
export const spinnerModal = uportModal(`
  <div id="uport__spinner-box">
    <img id="uport__spinner" src="${SVG.spinner}" />
  </div>
`)

/**
 * HTML string for a modal displaying a provider dialog
 */
export const providerModal = uportModal(`
  <div id="uport__modal-main">
    <h2> Injected Provider Detected </h2>
    <div class="uport__modal-section">
      <p>This browser contains an injected Web3 provider which can be used to serve ethereum requests.</p>
    </div>
    <div class="uport__modal-section">
      <img src="${SVG.eth}" height="100" width="100" />
      <img src="${SVG.metamask}" height="100" width="100" />
    </div>
    <div class="uport__modal-section">
      <p>Would you like to continue with uPort, or use the injected provider?</p>
    </div>
    <div class="uport__modal-section">
      <button id="uport__provider-yes" class="uport__button">Use Injected Provider</button>
      <button id="uport__provider-no"  class="uport__button">Use uPort</button>
    </div>
  </div>
`)