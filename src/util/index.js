const getResponseKey = (path, response) => {
  if (Array.isArray(path)) {
    return path.reduce((obj, key) => (obj && obj[key]) ? obj[key] : null, response)
  }
  return null
}
export default getResponseKey
// import _ from 'lodash'
// import React from 'react'
// import AppConstants from './constant'
// import RSAConstants from '../../common/constants/activateRSA.constant'
// import PayAnyoneConstants from '../../common/constants/payanyone.constant'
// import { P, H2 } from '../components/typography'
// import ProductConstants from '../../common/constants/products.constant'
// import HomeConstants from '../../common/constants/home.constants'

// export const areEligibleCardsAvailable = (cards) => {
//   let eligibleCardsAvailable = false
//   if (cards.length > 0) {
//     _.forEach(cards, (card) => {
//       if (card.eligibleFor && card.eligibleFor.indexOf('SET_PIN') !== -1) {
//         eligibleCardsAvailable = true
//         return eligibleCardsAvailable
//       }
//     })
//   }
//   return eligibleCardsAvailable
// }
// export const formatAmountWithK = (num) => {
//   let formattedNumber = ''
//   let isNegative = false
//   if (num < 0) {
//     isNegative = true
//   }
//   num = Math.abs(num)
//   if (num >= 1000000000) {
//     formattedNumber = (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G'
//   } else if (num >= 1000000) {
//     formattedNumber = (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M'
//   } else if (num >= 1000) {
//     formattedNumber = (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K'
//   } else {
//     formattedNumber = num
//   }
//   if (isNegative) { formattedNumber = '-' + formattedNumber }
//   return '$' + formattedNumber
// }
// export const formatMobileNumber = (mobileNumber) => {
//   if (mobileNumber && mobileNumber.length > 0) {
//     const formattedNumber = mobileNumber.slice(mobileNumber.length - 3, mobileNumber.length)
//     return <span>&#8226;&#8226;&#8226;&#8226;&nbsp;&#8226;&#8226;&#8226;&nbsp;{formattedNumber}</span>
//   }
// }
// export const checkMenuIdAvailiable = (menuEntitelmentArray, menuID) => {
//   if (menuEntitelmentArray.find(data => data.menuId === menuID)) {
//     return true
//   } else {
//     return false
//   }
// }
// export const tableObject = ['Fee Description', 'Qty', 'Amount(GST Excl.)', 'GST Payable', 'Amount(GST Incl.)']

// export const rewardPointsFirstColumn = ['Qantas Frequent Flyer points earned this period', 'Bonus Qantas Frequent Flyer points earned this period', 'Bonus & promotional Qantas Frequent Flyer points earned this period',
//   'Points adjusted this period']

// export const formatCreditCardNumber = (cardNumber) => {
//   if (cardNumber && cardNumber.length > 15) {
//     const formattedNumber = cardNumber.split('')
//     formattedNumber.splice(4, 0, ' ')
//     formattedNumber.splice(9, 0, ' ')
//     formattedNumber.splice(14, 0, ' ')
//     return formattedNumber.concat()
//   }
// }

// export const handleLogOut = () => {
//   window.location.href = AppConstants.IB_URL_LOGOUT
// }

// const handleNavigationToExternalUrlOth = () => {
//   try {
//     var request = new window.ActiveXObject('Microsoft.XMLHTTP')
//   } catch (e) {
//     // console.log('external navigation failed')
//   }
//   return request
// }

// export const handleNavigationToExternalUrl = (url) => {
//   // window.location.href = url
//   var request

//   if (window.XMLHttpRequest) { // Mozilla, Safari, ...
//     request = new window.XMLHttpRequest()
//   } else if (window.ActiveXObject) { // IE
//     try {
//       request = new window.ActiveXObject('Msxml2.XMLHTTP')
//     } catch (e) {
//       handleNavigationToExternalUrlOth()
//     }
//   }
//   request.open('GET', url)
//   request.setRequestHeader('Token', AppConstants.jSessionId)
//   // request.setRequestHeader('Authorization', 'Basic ' + AppConstants.jSessionId)
//   request.send()
// }

// export const updateIBDomainURL = (domianName) => {
//   const ibUrl = 'https://' + domianName + '/IBAU/BANKAWAYTRAN;jsessionid=0000'
//   AppConstants.IB_URL_DOMAIN = ibUrl
// }

// export const updateURL = (nonceCookie, accLinkageNumber, reorderRenameSuccess, refreshFlag) => {
//   const nonceValue = nonceCookie && '&extParam=' + nonceCookie
//   const urlSettings = AppConstants.IB_URL_DOMAIN + AppConstants.jSessionId + AppConstants.IB_URL_PROFILE_SFX + nonceValue
//   const urlHome = AppConstants.IB_URL_DOMAIN + AppConstants.jSessionId + AppConstants.IB_URL_HOME_SFX + nonceValue
//   const urlPayment = AppConstants.IB_URL_DOMAIN + AppConstants.jSessionId + AppConstants.IB_URL_PAYMENT_SFX + nonceValue
//   const urlApply = AppConstants.IB_URL_DOMAIN + AppConstants.jSessionId + AppConstants.IB_URL_APPLY_SFX + nonceValue
//   const urlLogout = AppConstants.IB_URL_DOMAIN + AppConstants.jSessionId + AppConstants.IB_URL_LOGOUT_SFX + nonceValue
//   const urlContactus = AppConstants.IB_URL_DOMAIN + AppConstants.jSessionId + AppConstants.IB_URL_CONTACTUS_SFX + nonceValue
//   const urlMail = AppConstants.IB_URL_DOMAIN + AppConstants.jSessionId + AppConstants.IB_URL_MAIL_SFX + nonceValue
//   const urlSecuremail = AppConstants.IB_URL_DOMAIN + AppConstants.jSessionId + AppConstants.IB_URL_CREATEMESSAGE_SFX + nonceValue
//   const urlMLE = AppConstants.IB_URL_DOMAIN + AppConstants.jSessionId + AppConstants.IB_URL_MLE_SFX + nonceValue
//   const urlBack = AppConstants.IB_URL_DOMAIN + AppConstants.jSessionId + AppConstants.IB_URL_CSO_BACK_SFX + nonceValue
//   const urlSIlogin = AppConstants.IB_URL_DOMAIN + AppConstants.jSessionId + AppConstants.IB_URL_SI_Login_SFX + nonceValue
//   const urlSIJoin = AppConstants.IB_URL_DOMAIN + AppConstants.jSessionId + AppConstants.IB_URL_SI_Join_SFX + nonceValue
//   const urlProfileSecurity = AppConstants.IB_URL_DOMAIN + AppConstants.jSessionId + AppConstants.IB_URL_PROFILE_SECURITY_SFX + nonceValue
//   const urlProfileAddress = AppConstants.IB_URL_DOMAIN + AppConstants.jSessionId + AppConstants.IB_URL_PROFILE_ADDRESS_SFX + nonceValue
//   const urlProfileBusinessAddress = AppConstants.IB_URL_DOMAIN + AppConstants.jSessionId + AppConstants.IB_URL_PROFILE_BUSINESS_ADDRESS_SFX + nonceValue
//   const urlProfileUpdateName = AppConstants.IB_URL_DOMAIN + AppConstants.jSessionId + AppConstants.IB_URL_PROFILE_UPDATE_PROFILE_NAME_SFX + nonceValue
//   const urlProfileChallengeQuestions = AppConstants.IB_URL_DOMAIN + AppConstants.jSessionId + AppConstants.IB_URL_PROFILE_CHALLENGE_QUESTIONS_SFX + nonceValue
//   const urlProfileAnzSheild = AppConstants.IB_URL_DOMAIN + AppConstants.jSessionId + AppConstants.IB_URL_PROFILE_ANZSHIELD_SFX + nonceValue
//   const urlProfileAnzSheildSecurityDevice = AppConstants.IB_URL_DOMAIN + AppConstants.jSessionId + AppConstants.IB_URL_PROFILE_ANZSHIELD_SECURITYDEVICE_SFX + nonceValue
//   const urlAccView = AppConstants.IB_URL_DOMAIN + AppConstants.jSessionId + AppConstants.IB_URL_ACCVIEW_SFX + AppConstants.IB_RENAME_ACCOUNT_URL_SFX + accLinkageNumber + nonceValue
//   const urlTabs = AppConstants.IB_URL_DOMAIN + AppConstants.jSessionId + AppConstants.IB_URL_FROMPAGE + nonceValue
//   const urlBNTDApply = AppConstants.IB_URL_DOMAIN + AppConstants.jSessionId + AppConstants.IB_URL_APPLY_BNTD_SFX + nonceValue
//   const accountActions = AppConstants.IB_URL_DOMAIN + AppConstants.jSessionId + AppConstants.IB_URL_APPLY_BNTD_SFX + nonceValue
//   const prevSavedTempPayroll = AppConstants.IB_URL_DOMAIN + AppConstants.jSessionId + AppConstants.IB_URL_PREV_SAVED_TEMPLATE_PAYROLL_SFX + nonceValue
//   const manageEmptemplates = AppConstants.IB_URL_DOMAIN + AppConstants.jSessionId + AppConstants.IB_URL_MANAGE_EMP_TEMPLATES_SFX + nonceValue
//   const bpayViewBillerList = AppConstants.IB_URL_DOMAIN + AppConstants.jSessionId + AppConstants.IB_URL_BPAY_VIEW_BILLER_LIST_SFX + nonceValue

//   AppConstants.IB_URL_HOME = urlHome
//   AppConstants.IB_URL_PAYMENT = urlPayment
//   AppConstants.IB_URL_APPLY = urlApply
//   AppConstants.IB_URL_SETTINGS = urlSettings
//   AppConstants.IB_URL_LOGOUT = urlLogout
//   AppConstants.IB_URL_CONTACTUS = urlContactus
//   AppConstants.IB_URL_MAIL = urlMail
//   AppConstants.IB_URL_Securemail = urlSecuremail
//   AppConstants.IB_URL_MLE = urlMLE
//   AppConstants.IB_URL_CSO_BACK = urlBack
//   AppConstants.IB_URL_SI_LOGIN = urlSIlogin
//   AppConstants.IB_URL_SI_JOIN = urlSIJoin
//   AppConstants.IB_URL_PROFILE_SECURITY = urlProfileSecurity
//   AppConstants.IB_URL_PROFILE_ADDRESS = urlProfileAddress
//   AppConstants.IB_URL_PROFILE_BUSINESS_ADDRESS = urlProfileBusinessAddress
//   AppConstants.IB_URL_PROFILE_UPDATE_PROFILE_NAME = urlProfileUpdateName
//   AppConstants.IB_URL_PROFILE_CHALLENGE_QUESTIONS = urlProfileChallengeQuestions
//   AppConstants.IB_URL_PROFILE_ANZSHIELD = urlProfileAnzSheild
//   AppConstants.IB_URL_PROFILE_ANZSHIELD_SECURITYDEVICE = urlProfileAnzSheildSecurityDevice
//   AppConstants.IB_URL_BPAY_VIEW_BILLER_LIST = bpayViewBillerList
//   AppConstants.IB_URL_ACCVIEW = urlAccView
//   AppConstants.IB_URL_ACCOVW_SAVE = urlAccView
//   AppConstants.IB_URL_TABS = urlTabs
//   AppConstants.IB_URL_APPLY_BNTD = urlBNTDApply
//   AppConstants.IB_URL_ACCOUNT_ACTIONS = accountActions
//   AppConstants.IB_URL_USE_PREV_SAVED_TEMPLATE_PAYROLL = prevSavedTempPayroll
//   AppConstants.IB_URL_MANAGE_EMP_TEMPLATES = manageEmptemplates

//   reorderRenameSuccess && refreshURL()
//   refreshFlag && renameSuccessURl(false, true)
// }

// export const refreshURL = (refresh) => {
//   if (refresh) {
//     AppConstants.IB_REFRESH_URL_SFX = refresh
//   }
//   AppConstants.IB_URL_HOME = AppConstants.IB_URL_HOME + AppConstants.IB_REFRESH_URL_SFX
//   AppConstants.IB_URL_PAYMENT = AppConstants.IB_URL_PAYMENT + AppConstants.IB_REFRESH_URL_SFX
//   AppConstants.IB_URL_APPLY = AppConstants.IB_URL_APPLY + AppConstants.IB_REFRESH_URL_SFX
//   AppConstants.IB_URL_SETTINGS = AppConstants.IB_URL_SETTINGS + AppConstants.IB_REFRESH_URL_SFX
//   AppConstants.IB_URL_LOGOUT = AppConstants.IB_URL_LOGOUT + AppConstants.IB_REFRESH_URL_SFX
//   AppConstants.IB_URL_CONTACTUS = AppConstants.IB_URL_CONTACTUS + AppConstants.IB_REFRESH_URL_SFX
//   AppConstants.IB_URL_MAIL = AppConstants.IB_URL_MAIL + AppConstants.IB_REFRESH_URL_SFX
//   AppConstants.IB_URL_Securemail = AppConstants.IB_URL_Securemail + AppConstants.IB_REFRESH_URL_SFX
//   AppConstants.IB_URL_PROFILE_SECURITY = AppConstants.IB_URL_PROFILE_SECURITY + AppConstants.IB_REFRESH_URL_SFX
//   AppConstants.IB_URL_PROFILE_ADDRESS = AppConstants.IB_URL_PROFILE_ADDRESS + AppConstants.IB_REFRESH_URL_SFX
//   AppConstants.IB_URL_PROFILE_BUSINESS_ADDRESS = AppConstants.IB_URL_PROFILE_BUSINESS_ADDRESS + AppConstants.IB_REFRESH_URL_SFX
//   AppConstants.IB_URL_PROFILE_UPDATE_PROFILE_NAME = AppConstants.IB_URL_PROFILE_UPDATE_PROFILE_NAME + AppConstants.IB_REFRESH_URL_SFX
//   AppConstants.IB_URL_PROFILE_CHALLENGE_QUESTIONS = AppConstants.IB_URL_PROFILE_CHALLENGE_QUESTIONS + AppConstants.IB_REFRESH_URL_SFX
//   AppConstants.IB_URL_PROFILE_ANZSHIELD = AppConstants.IB_URL_PROFILE_ANZSHIELD + AppConstants.IB_REFRESH_URL_SFX
//   AppConstants.IB_URL_PROFILE_ANZSHIELD_SECURITYDEVICE = AppConstants.IB_URL_PROFILE_ANZSHIELD_SECURITYDEVICE + AppConstants.IB_REFRESH_URL_SFX
//   AppConstants.IB_URL_TABS = AppConstants.IB_URL_TABS + AppConstants.IB_REFRESH_URL_SFX
//   AppConstants.IB_URL_APPLY_BNTD = AppConstants.IB_URL_APPLY_BNTD + AppConstants.IB_REFRESH_URL_SFX
//   AppConstants.IB_URL_BPAY_VIEW_BILLER_LIST = AppConstants.IB_URL_BPAY_VIEW_BILLER_LIST + AppConstants.IB_REFRESH_URL_SFX
// }

// export const csoURLUpdate = (nonceCookie) => {
//   const nonceValue = nonceCookie && '&extParam=' + nonceCookie
//   const urlIbStarBack = AppConstants.IB_URL_DOMAIN + AppConstants.jSessionId + AppConstants.IB_STAR_URL_BACK_SFX + nonceValue
//   AppConstants.IB_STAR_URL_BACK = urlIbStarBack
// }

// export const renameSuccessURl = (successFlag, isSuccess) => {
//   let RENAME_BACK_URL = ''
//   if (!successFlag && isSuccess) {
//     RENAME_BACK_URL = AppConstants.IB_REFRESH_URL_SFX
//     AppConstants.IB_URL_ACCVIEW = AppConstants.IB_URL_ACCOVW_SAVE
//   }

//   AppConstants.IB_URL_ACCVIEW = AppConstants.IB_URL_ACCVIEW + RENAME_BACK_URL
// }

// const validateFormElementIfNotText = (currentContext, name, formELement, textAreaErrorExists, radioErrorExists) => {
//   const emptyArray = []
//   if (formELement.length > 1) {
//     let currentRadioHasError = true
//     currentContext.setState({ [name]: true })
//     emptyArray.forEach.call(formELement, function (formElementInstance) {
//       if (formElementInstance.checked || formElementInstance.getAttribute('data-required') === 'false') {
//         currentRadioHasError = false
//         currentContext.updateState([name], true)
//       }
//     })
//     radioErrorExists = (currentRadioHasError && !radioErrorExists) ? true : radioErrorExists
//   } else {
//     if ((formELement[0].getAttribute('data-required') !== null && formELement[0].getAttribute('data-required') !== undefined) && formELement[0].value === '') {
//       textAreaErrorExists = true
//       currentContext.updateState({ [name]: true })
//     }
//   }
//   return { textAreaErrorExists, radioErrorExists }
// }

// export const validateAllElements = (containerId, currentContext) => {
//   let textErrorExists = false
//   const radioErrorExists = false
//   const textAreaErrorExists = false
//   const elements = document.querySelectorAll(`#${containerId} input`)
//   const emptyArray = []
//   emptyArray.forEach.call(elements, function (element) {
//     if (element.getAttribute('name')) {
//       const name = element.getAttribute('name')
//       const type = element.getAttribute('type')
//       const formELement = document.getElementsByName(name)
//       if (type === 'text') {
//         if (formELement[0].getAttribute('data-required') === 'true' && (formELement[0].value === '' || formELement[0].value === null)) {
//           textErrorExists = true
//           currentContext.updateState([name], true)
//         }
//       } else {
//         validateFormElementIfNotText(currentContext, name, formELement, textAreaErrorExists)
//       }
//     }
//   })
//   return !(textErrorExists || radioErrorExists || textAreaErrorExists)
// }

// const getImageForPCP3 = (productSubCode) => {
//   if (productSubCode === '060' || productSubCode === '061' || productSubCode === '062') {
//     return 'BaseProd_2_IMG_19.png'
//   } else if (productSubCode === '048') {
//     return 'BaseProd_2_IMG_15.png'
//   } else if (productSubCode === '031') {
//     return 'BaseProd_2_IMG_14.png'
//   } else if (productSubCode === '030') {
//     return 'BaseProd_2_IMG_12.png'
//   } else if (productSubCode === '021') {
//     return 'BaseProd_2_IMG_11.png'
//   } else if (productSubCode === '020') {
//     return 'BaseProd_2_IMG_13.png'
//   } else if (productSubCode === '012') {
//     return 'BaseProd_2_IMG_16.png'
//   }
// }

// const getImageForPCP2 = (productSubCode) => {
//   switch (productSubCode) {
//     case '001':
//     case '009': {
//       return 'BaseProd_2_IMG_19.png'
//     }
//     case '002': {
//       return 'BaseProd_2_IMG_7.png'
//     }
//     case '003': {
//       return 'BaseProd_2_IMG_8.png'
//     }
//     case '005': {
//       return 'BaseProd_2_IMG_74.png'
//     }
//     case '006': {
//       return 'BaseProd_2_IMG_75.png'
//     }
//     case '007': {
//       return 'BaseProd_2_IMG_9.png'
//     }
//     case '008': {
//       return 'BaseProd_2_IMG_17.png'
//     }
//     default: {
//       return getImageForPCP3(productSubCode)
//     }
//   }
// }

// const getImageForPCP1 = (productSubCode) => {
//   switch (productSubCode) {
//     case '010': {
//       return 'BaseProd_2_IMG_11.png'
//     }
//     case '011': {
//       return 'BaseProd_2_IMG_12.png'
//     }
//     case '990':
//     case '991': {
//       return 'BaseProd_2_IMG_19.png'
//     }
//     case '032': {
//       return 'BaseProd_2_IMG_NEW.png'
//     }
//     default: {
//       return getImageForPCP2(productSubCode)
//     }
//   }
// }

// const getImageForPCP = (productSubCode) => {
//   switch (productSubCode) {
//     case '012': {
//       return 'BaseProd_2_IMG_16.png'
//     }
//     case '020': {
//       return 'BaseProd_2_IMG_13.png'
//     }
//     case '021': {
//       return 'BaseProd_2_IMG_11.png'
//     }
//     case '030': {
//       return 'BaseProd_2_IMG_12.png'
//     }
//     case '031': {
//       return 'BaseProd_2_IMG_14.png'
//     }
//     case '048': {
//       return 'BaseProd_2_IMG_15.png'
//     }
//     case '060':
//     case '061':
//     case '062': {
//       return 'BaseProd_2_IMG_19.png'
//     }
//     default: {
//       return getImageForPCP1(productSubCode)
//     }
//   }
// }

// const getImageForPCV1 = (productSubCode) => {
//   if (productSubCode === '032') {
//     return 'BaseProd_2_IMG_22.png'
//   } else if (productSubCode === '034') {
//     return 'BaseProd_2_IMG_Lowrate.png'
//   } else if (productSubCode === '049') {
//     return 'BaseProd_2_IMG_23.png'
//   }
// }

// const getImageForPCV = (productSubCode) => {
//   if (productSubCode === '046' || productSubCode === '045' || productSubCode === '044') {
//     return 'BaseProd_2_IMG_11.png'
//   } else if (productSubCode === '043' || productSubCode === '042' || productSubCode === '041' || productSubCode === '040') {
//     return 'BaseProd_2_IMG_11.png'
//   } else if (productSubCode === '047') {
//     return 'BaseProd_2_IMG_17.png'
//   } else {
//     return getImageForPCV1(productSubCode)
//   }
// }

// const getImageForPCB = (productSubCode) => {
//   if (productSubCode === '051') {
//     return 'BaseProd_2_IMG_80.png'
//   } else if (productSubCode === '080') {
//     return 'BaseProd_2_IMG_81.png'
//   } else {
//     return 'BaseProd_2_IMG_19.png'
//   }
// }

// const getImageForPDB = (productSubCode) => {
//   if (productSubCode === '001') {
//     return 'BaseProd_2_IMG_67.png'
//   } else {
//     return null
//   }
// }

// const getImageForDDA2 = (productSubCode) => {
//   if (productSubCode === 'PS' || productSubCode === 'PT') {
//     return 'BaseProd_2_IMG_blue.png'
//   } else if (productSubCode === 'ET') {
//     return 'BaseProd_2_IMG_19.png'
//   } else if (productSubCode === 'HI') {
//     return 'BaseProd_2_IMG_3HI.png'
//   } else if (productSubCode === 'HS') {
//     return 'BaseProd_2_IMG_3HS.png'
//   } else {
//     return 'BaseProd_2_IMG_3.png'
//   }
// }

// const getImageForDDA1 = (productSubCode) => {
//   if (productSubCode === 'CC' || productSubCode === 'CE' || productSubCode === 'CF') {
//     return 'BaseProd_2_IMG_blue.png'
//   } else if (productSubCode === 'CG' || productSubCode === 'CH') {
//     return 'BaseProd_2_IMG_blue.png'
//   } else if (productSubCode === 'M1' || productSubCode === 'PC' || productSubCode === 'PG' || productSubCode === 'PH') {
//     return 'BaseProd_2_IMG_blue.png'
//   } else {
//     return getImageForDDA2(productSubCode)
//   }
// }

// const getImageForDDA = (productSubCode) => {
//   if (productSubCode === 'CB' || productSubCode === 'CD' || productSubCode === 'FB') {
//     return 'BaseProd_2_IMG_aqua-business.png'
//   } else if (productSubCode === 'I3' || productSubCode === 'I1') {
//     return 'BaseProd_2_IMG_aqua-business.png'
//   } else if (productSubCode === 'NE' || productSubCode === 'NF' || productSubCode === 'NG' || productSubCode === 'NH') {
//     return 'BaseProd_2_IMG_aqua-business.png'
//   } else {
//     return getImageForDDA1(productSubCode)
//   }
// }

// const getImageForILS1 = (productSubCode) => {
//   if (AppConstants.ILS_IMAGE_CARD_ARR.includes(productSubCode)) {
//     return 'BaseProd_2_IMG_4.png'
//   } else if (productSubCode === 'HBB' || productSubCode === 'IBB') {
//     return 'BaseProd_2_IMG_6.png'
//   } else {
//     return 'BaseProd_2_IMG_5.png'
//   }
// }

// const getImageForILS = (productSubCode) => {
//   if (productSubCode === 'TAB' || productSubCode === 'TFB' || productSubCode === 'TRB') {
//     return 'BaseProd_2_IMG_19.png'
//   } else if (productSubCode === 'TVB' || productSubCode === 'TVC') {
//     return 'BaseProd_2_IMG_19.png'
//   } else if (productSubCode === 'TAB' || productSubCode === 'TFB') {
//     return 'BaseProd_2_IMG_6.png'
//   } else {
//     return getImageForILS1(productSubCode)
//   }
// }

// const getCardName1 = (productCode, productSubCode) => {
//   if (productCode === 'DDA') {
//     return getImageForDDA(productSubCode)
//   } else if (productCode === 'PCQ') {
//     return 'BaseProd_2_IMG_3.png'
//   } else if (productCode === 'PCB') {
//     return getImageForPCB(productSubCode)
//   } else if (productCode === 'CDA') {
//     return 'BaseProd_2_IMG_1.png'
//   } else if (productCode === 'ILS') {
//     return getImageForILS(productSubCode)
//   } else if (productCode === 'PDB') {
//     return getImageForPDB(productSubCode)
//   } else {
//     return 'BaseProd_2_IMG_1.png'
//   }
// }

// export const getCardName = (productCode, productSubCode) => {
//   if (productCode === 'FMM') {
//     return 'BaseProd_2_IMG_19.png'
//   } else if (productCode === 'PCP') {
//     return getImageForPCP(productSubCode)
//   } else if (productCode === 'PCV') {
//     return getImageForPCV(productSubCode)
//   } else if (productCode === 'IIP' || productCode === 'FM') {
//     return 'BaseProd_2_IMG_19.png'
//   } else if (productCode === 'RSV') {
//     return 'BaseProd_2_IMG_19.png'
//   } else if (productCode === 'SSI') {
//     return 'BaseProd_2_IMG_20.png'
//   } else {
//     return getCardName1(productCode, productSubCode)
//   }
// }

// export const getErrorUiFragment = (statusCode) => {
//   switch (statusCode) {
//     case 400: {
//       return (<React.Fragment><H2>{AppConstants.UNABLE_PROCESS_REQUEST_400_1}</H2><P>{AppConstants.UNABLE_PROCESS_REQUEST_400_2}</P></React.Fragment>)
//     }
//     case 401:
//     case 403:
//     case 405: {
//       return (<React.Fragment><H2>{AppConstants.NOT_AUTHORIZED_401_1}</H2><P>{AppConstants.NOT_AUTHORIZED_401_2}</P></React.Fragment>)
//     }
//     case 404:
//     case 500: {
//       return (<React.Fragment><H2>{AppConstants.UNAVAILABLE_404_500_1}</H2><P>{AppConstants.UNAVAILABLE_404_500_2}</P></React.Fragment>)
//     }
//     case 409: {
//       return (<H2>{AppConstants.CHECK_NPP}</H2>)
//     }
//     default: {
//       return (<React.Fragment><H2>{AppConstants.SERVICE_UNAVAILABLE}</H2><P>{AppConstants.SERVICE_UNAVAILABLE_DESCRIPTION}</P></React.Fragment>)
//     }
//   }
// }

// export const getFeedbackId = (screenid) => {
//   const screenIdObj1 = {
//     'Account overview': 'Account Overview',
//     'DONATE_TO_CHARITY': 'Donate to Charity',
//     'Download Transaction History BTR': 'Download Transaction History',
//     'View account': 'View account',
//     'View estatements': 'ESTAT',
//     'Personalise accounts': 'Personalise Accounts',
//     'Travel notification': 'Travel Notification',
//     'Rename Account': 'Rename Account',
//     'cheque reconciliation': 'cheque reconciliation'
//   }

//   const screenIdObj2 = {
//     'Change personal': 'Update Details',
//     'Apply for': 'Apply for',
//     'IMT': 'IMT',
//     'PayAnyone': 'PAN',
//     'PayBill': 'BPAY',
//     'Transfer': 'FIX'
//   }

//   if (screenIdObj1.hasOwnProperty(screenid)) {
//     return screenIdObj1[screenid]
//   } else {
//     for (const id in screenIdObj2) {
//       if (screenid.startsWith(id)) {
//         return screenIdObj2[id]
//       }
//     }
//   }
// }

// const onBackBtnClick = (showAlert) => {
//   if (window.history && window.history.pushState) {
//     window.history.pushState({ page: 1 }, '', '')
//   }
//   window.onpopstate = function (event) {
//     if (event && (AppConstants.PREV_LOCATION === window.location.href)) {
//       if (event.state && event.state.page !== 1) {
//         return null
//       }
//       window.history.pushState({ page: null }, '', '')
//       if (showAlert) {
//         return this.alert(AppConstants.BROWSER_BACK_MSG)
//       }
//     }
//     AppConstants.PREV_LOCATION = window.location.href
//     return false
//   }
// }

// const onBackBtnClickIeSf = (showAlert, appScope, initialLoad) => {
//   window.onbeforeunload = function () {
//     window.history.pushState(null, '', window.location.href.toString())
//     window.history.pushState(null, '', window.location.href.toString())
//   }
//   if (window.history && window.history.pushState && (!initialLoad || AppConstants.BROWSER_BACK_APP_LOADED)) {
//     window.history.pushState({}, '', window.location.href.toString())
//     window.history.pushState({}, '', window.location.href.toString())
//   }
//   window.onpopstate = function (event) {
//     const findJSession = window.location.hash.indexOf('?')
//     const windowRoute = findJSession !== -1 ? window.location.hash.substr(2, findJSession) : window.location.hash.substr(2)

//     if (appScope && (windowRoute !== (appScope.props.history.location.pathname.slice(1)))) {
//       return true
//     } else {
//       AppConstants.BROWSER_BACK_APP_LOADED = true
//       if (showAlert && event.state !== null) {
//         if (navigator.vendor.match(/apple/i) && navigator.vendor.match(/apple/i)[0] === 'Apple') {
//           window.alert(AppConstants.BROWSER_BACK_MSG_SAFARI)
//         } else {
//           window.alert(AppConstants.BROWSER_BACK_MSG)
//         }
//       }
//       window.history.pushState({}, '', window.location.href.toString())
//       window.history.pushState({}, '', window.location.href.toString())
//       return false
//     }
//   }
// }

// export const onBrowserBackBtnClick = (showAlert, appScope) => {
//   if (navigator.userAgent.indexOf('Trident') !== -1) {
//     onBackBtnClickIeSf(showAlert, appScope)
//   } else if (navigator.userAgent.indexOf('Edge') !== -1) {
//     onBackBtnClickIeSf(showAlert, appScope, true)
//   } else if (navigator.vendor.match(/apple/i) && navigator.vendor.match(/apple/i)[0] === 'Apple') {
//     onBackBtnClickIeSf(showAlert, appScope)
//   } else if (navigator.userAgent.indexOf('Chrome') !== -1 || navigator.userAgent.indexOf('Firefox') !== -1) {
//     onBackBtnClick(showAlert)
//   }
//   return true
// }

// const getCustomOSName = () => {
//   const operatingSystem = navigator.userAgent
//   if (operatingSystem.indexOf(AppConstants.FEEDBACK_OSNAME_WIN1) !== -1) {
//     return AppConstants.FEEDBACK_OSNAME_WIN
//   }
//   if (operatingSystem.indexOf(AppConstants.FEEDBACK_OSNAME_MAC1) !== -1) {
//     return AppConstants.FEEDBACK_OSNAME_MAC
//   }
//   if (operatingSystem.indexOf(AppConstants.FEEDBACK_OSNAME_X11) !== -1) {
//     return AppConstants.FEEDBACK_OSNAME_X12
//   }
//   if (operatingSystem.indexOf(AppConstants.FEEDBACK_OSNAME_LINUX) !== -1) {
//     return AppConstants.FEEDBACK_OSNAME_LINUX
//   } else {
//     return AppConstants.FEEDBACK_OSNAME
//   }
// }

// export const getOSName = () => {
//   const osVersions = {
//     'windows nt 4.0': 'Windows nt 4',
//     'windows nt 5.0': 'Windows 2000',
//     'windows nt 5.1': 'Windows XP',
//     'windows nt 5.2': 'Windows Server 2003/XP 64-bit',
//     'windows nt 6.0': 'Windows Vista/Server 2008',
//     'windows nt 6.1': 'Windows 7/Server 2008 R2',
//     'windows nt 6.2': 'Windows 8/Server 2012',
//     'windows nt 6.3': 'Windows 8.1/Server 2012 R2',
//     'windows nt 10.0': 'Windows 10/Server 2016',
//     'windows 98': 'Windows 98',
//     'windows 95': 'Windows 95',
//     'windows 16': 'Windows 3.11',

//     'Mac OS 7': 'Mac OS',
//     'Mac OS 8': 'Mac OS 8 Tempo',
//     'Mac OS 9': 'Mac OS 9 Sonata',
//     'Mac OS X 10.0': 'Mac OS X 10.0 Cheetah',
//     'Mac OS X 10.1': 'Mac OS X 10.1 Puma',
//     'Mac OS X 10.2': 'Mac OS X 10.2 Jaguar',
//     'Mac OS X 10.3': 'Mac OS X 10.3 Panther',
//     'Mac OS X 10.4': 'Mac OS X 10.4 Tiger',
//     'Mac OS X 10.5': 'Mac OS X 10.5 Leopard',
//     'Mac OS X 10.6': 'Mac OS X 10.6 Snow Leopard',
//     'Mac OS X 10.7': 'Mac OS X 10.7 Lion',
//     'Mac OS X 10.8': 'Mac OS X 10.8 Mountain Lion',
//     'Mac OS X 10.9': 'Mac OS X 10.9 Mavericks',
//     'OS X 10.10': 'Mac OS X 10.10 Yosemite',
//     'Mac OS X 10.11': 'Mac OS X 10.11 El Capitan',

//     'X11': 'Unix',
//     'Linux': 'Linux',

//     'Android 1.1': 'Android Alpha',
//     'Android 1.2 ': 'Android Beta',
//     'Android 1.5': 'Android Cupcake',
//     'Android 1.6': 'Android Donut',
//     'Android 2.0': 'Android Eclair',
//     'Android 2.1': 'Android Eclair',
//     'Android 2.2': 'Android Frozen Yogurt',
//     'Android 2.3': 'Android Ginger Bread',
//     'Android 3': 'Android Honeycomb',
//     'Android 4.0': 'Android Ice Cream Sandwich',
//     'Android 4.1': 'Android Jelly Bean',
//     'Android 4.2': 'Android Jelly Bean',
//     'Android 4.3': 'Android Jelly Bean',
//     'Android 4.4.4': 'Android KitKat',
//     'Android 5.0.1': 'Android Lollipop',
//     'Android 5.1.1': 'Android Lollipop',
//     'Android 6.0': 'Android Marshmallow',

//     'CyanogenMod 3': 'CyanogenMod 3',
//     'CyanogenMod 4': 'CyanogenMod 4',
//     'CyanogenMod 5': 'CyanogenMod 5',
//     'CyanogenMod 6': 'CyanogenMod 6',
//     'CyanogenMod 7': 'CyanogenMod 7',
//     'CyanogenMod 9': 'CyanogenMod 9',
//     'CyanogenMod 10': 'CyanogenMod 10',
//     'CyanogenMod 11': 'CyanogenMod 11',
//     'CyanogenMod 12': 'CyanogenMod 12',
//     'Cyanogen OS 11s': 'Cyanogen OS 11s',
//     'Cyanogen OS 12': 'Cyanogen OS 12',

//     'iPhone OS 1.x': 'iPhone OS 1.x',
//     'iPhone OS 2.x': 'iPhone OS 2.x',
//     'iPhone OS 3.x': 'iPhone OS 3.x',
//     'iOS 4.x': 'iOS 4.x',
//     'iOS 5.x': 'iOS 5.x',
//     'iOS 6.x': 'iOS 6.x',
//     'iOS 7.x': 'iOS 7.x',
//     'iOS 8.x': 'iOS 8.x',
//     'iOS 9.x': 'iOS 9.x',

//     'Windows Phone 7': 'Windows Phone 7',
//     'Windows Phone 7.5': 'Windows Phone 7.5',
//     'Windows Phone 7.8': 'Windows Phone 7.8',
//     'Windows Phone 8': 'Windows Phone 8',
//     'Windows Phone 8.1': 'Windows Phone 8.1',
//     'Windows Phone 10': 'Windows Phone 10',

//     'BlackBerry 10.0': 'BlackBerry 10.0',
//     'BlackBerry 10.1': 'BlackBerry 10.1',
//     'BlackBerry 10.2': 'BlackBerry 10.2',
//     'BlackBerry 10.3': 'BlackBerry 10.3'
//   }

//   for (const key in osVersions) {
//     if (navigator.userAgent.toLowerCase().indexOf(key) >= 0) {
//       return osVersions[key]
//     }
//   }
//   return getCustomOSName()
// }

// export const cookieHandler = {
//   readCookie: (cookieName) => {
//     const name = cookieName + '='
//     const decodedCookie = decodeURIComponent(document.cookie)
//     var ca = decodedCookie.split(';')
//     for (let i = 0; i < ca.length; i++) {
//       let c = ca[i]
//       while (c.charAt(0) === ' ') {
//         c = c.substring(1)
//       }
//       if (c.indexOf(name) === 0) {
//         return c.substring(name.length, c.length)
//       }
//     }
//     return ''
//   },
//   deleteCookie: (cookieName) => {
//     const subDomain = '.' + window.location.hostname
//     const currentDateTime = new Date()
//     currentDateTime.setTime(currentDateTime.getTime() + (0 * 60 * 1000))
//     document.cookie = cookieName + '=;expires=' + currentDateTime + ';domain=' + subDomain + ';path=/'
//   }
// }
// const MLEuser = (MLEUsersLink) => {
//   return (MLEUsersLink === 'I') || (MLEUsersLink === 'L')
// }
// const businessAccnt = (AccntType) => {
//   return (AccntType === 'B') || (AccntType === 'Y')
// }
// const personalAccnt = (AccntType) => {
//   return (AccntType === 'P') || (AccntType === 'Y')
// }
// const retailUserList = (AccntType, MLEUsersLink, OAAMavailable, SecurityReg, isCSOProxyLogin) => {
//   const PROFILE_LIST = []
//   const profileItem = (linkingName, link) => ({ linkingName, link })
//   PROFILE_LIST.push(profileItem(AppConstants.PROFILE_SECURITY, AppConstants.IB_URL_PROFILE_SECURITY))
//   const pushMyAddress = (AccntType, PROFILE_LIST) => {
//     personalAccnt(AccntType) && PROFILE_LIST.push(profileItem(AppConstants.MY_ADDRESS, AppConstants.IB_URL_PROFILE_ADDRESS))
//   }
//   pushMyAddress(AccntType, PROFILE_LIST)
//   const pushBusinessAdd = (AccntType, PROFILE_LIST) => {
//     businessAccnt(AccntType) && PROFILE_LIST.push(profileItem(AppConstants.BUSINESS_ADDRESS, AppConstants.IB_URL_PROFILE_BUSINESS_ADDRESS))
//   }
//   const pushUpdateProfName = (MLEUsersLink, isCSOProxyLogin, PROFILE_LIST) => {
//     MLEuser(MLEUsersLink) && isCSOProxyLogin === 'N' && PROFILE_LIST.push(profileItem(AppConstants.UPDATE_PROFILE_NAME, AppConstants.IB_URL_PROFILE_UPDATE_PROFILE_NAME))
//   }
//   const pushCQAnzshield = (OAAMavailable, SecurityReg, isCSOProxyLogin, MLEUsersLink, PROFILE_LIST) => {
//     if (OAAMavailable === 'Y' && isCSOProxyLogin === 'N') {
//       if (!MLEUsersLink || (MLEUsersLink && MLEUsersLink === 'I')) {
//         PROFILE_LIST.push(profileItem(AppConstants.CHALLENGE_QUESTIONS, AppConstants.IB_URL_PROFILE_CHALLENGE_QUESTIONS))
//         SecurityReg === 'Y' && PROFILE_LIST.push(profileItem(AppConstants.ANZ_SHIELD, AppConstants.IB_URL_PROFILE_ANZSHIELD))
//       }
//     }
//   }
//   pushBusinessAdd(AccntType, PROFILE_LIST)
//   pushUpdateProfName(MLEUsersLink, isCSOProxyLogin, PROFILE_LIST)
//   pushCQAnzshield(OAAMavailable, SecurityReg, isCSOProxyLogin, MLEUsersLink, PROFILE_LIST)
//   return PROFILE_LIST
// }
// const businessUserList = (MLEUsersLink, OAAMavailable, isCSOProxyLogin, AccntType) => {
//   const PROFILE_LIST = []
//   const profileItem = (linkingName, link) => ({ linkingName, link })
//   PROFILE_LIST.push(profileItem(AppConstants.PROFILE_SECURITY, AppConstants.IB_URL_PROFILE_SECURITY))
//   const pushBusinessAddIB4B = (AccntType, PROFILE_LIST) => {
//     businessAccnt(AccntType) && PROFILE_LIST.push(profileItem(AppConstants.BUSINESS_ADDRESS, AppConstants.IB_URL_PROFILE_BUSINESS_ADDRESS))
//   }
//   const pushUpdateProfNameIB4B = (MLEUsersLink, isCSOProxyLogin, PROFILE_LIST) => {
//     MLEuser(MLEUsersLink) && isCSOProxyLogin === 'N' && PROFILE_LIST.push(profileItem(AppConstants.UPDATE_PROFILE_NAME, AppConstants.IB_URL_PROFILE_UPDATE_PROFILE_NAME))
//   }
//   const pushCQIB4B = (OAAMavailable, isCSOProxyLogin, MLEUsersLink, PROFILE_LIST) => {
//     if (OAAMavailable === 'Y' && isCSOProxyLogin === 'N') {
//       if (!MLEUsersLink || (MLEUsersLink && MLEUsersLink === 'I')) {
//         PROFILE_LIST.push(profileItem(AppConstants.CHALLENGE_QUESTIONS, AppConstants.IB_URL_PROFILE_CHALLENGE_QUESTIONS))
//       }
//     }
//   }
//   pushBusinessAddIB4B(AccntType, PROFILE_LIST)
//   pushUpdateProfNameIB4B(MLEUsersLink, isCSOProxyLogin, PROFILE_LIST)
//   pushCQIB4B(OAAMavailable, isCSOProxyLogin, MLEUsersLink, PROFILE_LIST)
//   PROFILE_LIST.push(profileItem(AppConstants.ANZ_SHIELD_SECURITY, AppConstants.IB_URL_PROFILE_ANZSHIELD_SECURITYDEVICE))
//   return PROFILE_LIST
// }

// export const getIbUserType = (IbUserType, AccntType, OAAMavailable, MLEUsersLink, SecurityReg, isCSOProxyLogin) => {
//   let PROFILE_LIST = []
//   const profileItem = (linkingName, link) => ({ linkingName, link })
//   const retailUser = AppConstants.RETAIL_USERS
//   const businessUser = AppConstants.BUSINESS_AUTH_ADMIN
//   const businessOperator = AppConstants.BUSINESS_OPERATOR

//   if (retailUser.includes(IbUserType)) {
//     PROFILE_LIST = retailUserList(AccntType, MLEUsersLink, OAAMavailable, SecurityReg, isCSOProxyLogin)
//     return PROFILE_LIST
//   } else if (businessUser.includes(IbUserType)) {
//     PROFILE_LIST = businessUserList(MLEUsersLink, OAAMavailable, isCSOProxyLogin, AccntType)
//     return PROFILE_LIST
//   } else if (IbUserType === businessOperator) {
//     PROFILE_LIST.push(profileItem(AppConstants.PROFILE_SECURITY, AppConstants.IB_URL_PROFILE_SECURITY))
//     return PROFILE_LIST
//   }
// }



// export const getTodayDate = () => {
//   const today = new Date()
//   let mm = today.getMonth() + 1
//   const yyyy = today.getFullYear()
//   mm = mm < 10 && '0' + mm
//   var todayDate = mm + '/' + yyyy
//   return todayDate
// }

// export const formatDates = (value) => {
//   const date = new Date(value)
//   const year = date.getFullYear()

//   let month = (1 + date.getMonth()).toString()
//   month = month.length > 1 ? month : '0' + month

//   let day = date.getDate().toString()
//   day = day.length > 1 ? day : '0' + day

//   return day + '/' + month + '/' + year
// }

// export const formatDateDDMMYY = (dateToFormat) => {
//   if (!dateToFormat || dateToFormat.length < 10) {
//     return null
//   }
//   const date = dateToFormat.substring(0, 10)
//   const dateArray = date.split('-')
//   if (dateArray.length < 3) {
//     return null
//   }
//   return `${dateArray[2]}/${dateArray[1]}/${dateArray[0]}`
// }

// export const getActiveTab = (routeLocation) => {
//   /* -- register all the routes here -- */
//   const matchRoute = {
//     [AppConstants.HOME]: [AppConstants.HOME_LANDING, AppConstants.DLPLANDING, AppConstants.MANAGE_DLP, AppConstants.CUSTOMER_AUTHORISATION, AppConstants.CUSTOMER_CONFIRMATION, AppConstants.DLP_IMP_INFO],
//     [AppConstants.SETTINGS]: [AppConstants.PERSONALISEACCOUNTS, AppConstants.MANAGEPIN, AppConstants.SMSLANDING, AppConstants.MANAGECARDPIN, AppConstants.TRAVELNOTIFICATION, AppConstants.ADD_PAYEE_CQ],
//     [AppConstants.PRODUCTS_OFFERS]: [ProductConstants.PRODUCTS_OFFERS, ProductConstants.PERSONALLOANS, ProductConstants.CREDIT_CARDS, ProductConstants.INSURANCE, ProductConstants.SUPERANNUATION, ProductConstants.BUSINESS_ACCOUNTS, ProductConstants.BUSINESS_CREDIT_CARDS, ProductConstants.BUSINESS_LOANS, ProductConstants.HOME_LOANS, ProductConstants.MERCHANTS_AND_PAYMENTS, ProductConstants.BANK_ACCOUNTS, ProductConstants.BUSINESS_ACCOUNTS],
//     [AppConstants.PAYMENTS]: [AppConstants.FUND_TRANSFER, AppConstants.PAY_ANYONE, AppConstants.BPAY, AppConstants.MULTIPLE_FUND_TRANSFERS, AppConstants.MANAGE_PAYEES, AppConstants.MANAGE_BILLERS, AppConstants.MULTI_PAY_ANYONE, AppConstants.MULTIPAYBILL, AppConstants.MULTIPAYBILLLODGEMENT, AppConstants.MANAGE_FUTURE_PAYMENTS, AppConstants.VIEW_BPAY, AppConstants.VIEW_FUND_TRANSFER, AppConstants.PAY_EMPLOYEES, AppConstants.CREATE_PAYROLL_PAYMENTS, AppConstants.PENDING_APPROVALS, AppConstants.REPAIR_PAYMENTS, AppConstants.VIEW_AUTHORISE_BPAY, AppConstants.VIEW_BPAY, AppConstants.VIEW_REPAIR_BPAY, AppConstants.VIEW_REPAIR_PAYROLL, AppConstants.VIEW_PAYROLL, AppConstants.MANAGE_INTERNATIONAL_PAYEE, AppConstants.PAYROLL_EMPLOYEE, AppConstants.VIEW_AUTHORISE_PAYROLL, AppConstants.SUCCESS_AUTHORISE_BPAY, AppConstants.SUCCESS_AUTHORISE_PAYROLL]
//   }

//   for (const route in matchRoute) {
//     if (matchRoute.hasOwnProperty(route)) {
//       const value = matchRoute[route]
//       if (value.includes(routeLocation.toUpperCase())) {
//         return route
//       }
//     }
//   }
//   return AppConstants.HOME
// }

// export const getMonthName = (monthNumber, isFullMonth) => {
//   const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
//   const FullMonthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

//   return (isFullMonth ? FullMonthNames[monthNumber - 1] : monthNames[monthNumber - 1])
// }

// export const formatDate = (dateToFormat, isFullMonth) => {
//   if (!dateToFormat || dateToFormat.length < 10) {
//     return null
//   }
//   const date = dateToFormat.substring(0, 10)
//   const dateArray = date.split('-')
//   if (dateArray.length < 3) {
//     return null
//   }
//   return `${dateArray[2]} ${getMonthName(dateArray[1], isFullMonth)} ${dateArray[0]}`
// }

// export const todayDateInDateMonthYear = () => {
//   const today = new Date()
//   let dd = today.getDate()
//   dd = (dd < 10 && '0' + dd) || dd
//   let mm = today.getMonth() + 1
//   const yyyy = today.getFullYear()
//   mm = (mm < 10 && '0' + mm) || mm
//   return `${dd} ${getMonthName(mm, true)} ${yyyy}`
// }

// export const clearAnalyticsData = () => {
//   window.digitalData.page.pageInfo.pageName = ''
//   window.digitalData.page.pageInfo.type = ''
//   window.digitalData.page.pageInfo.version = ''
//   window.digitalData.page.pageInfo.effectiveDate = ''
//   window.digitalData.product = []
//   window.digitalData.error = []
// }

// const getKeyvalueForArrowUp = (rating) => {
//   switch (rating) {
//     case '2':
//       document.querySelector('[id*="1-star-"]').focus()
//       break
//     case '3':
//       document.querySelector('[id*="2-star-"]').focus()
//       break
//     case '4':
//       document.querySelector('[id*="3-star-"]').focus()
//       break
//     case '5':
//       document.querySelector('[id*="4-star-"]').focus()
//       break
//     default:
//       break
//   }
// }

// export const getKeyvalueForArrowDown = (e, rating) => {
//   switch (e.keyCode) {
//     case 40:
//       if (rating === '1') {
//         document.querySelector('[id*="2-star-"]').focus()
//       } else if (rating === '2') {
//         document.querySelector('[id*="3-star-"]').focus()
//       } else if (rating === '3') {
//         document.querySelector('[id*="4-star-"]').focus()
//       } else if (rating === '4') {
//         document.querySelector('[id*="5-star-"]').focus()
//       }
//       break
//     case 38:
//       getKeyvalueForArrowUp(rating)
//       break
//     default:
//       break
//   }
// }

// export const checkBusinessAccount = (productCode, productSubCode) => {
//   if (productCode === 'DDA') {
//     const eligibleBusinessAccounts = 'BC|BO|BP|CB|CD|CI|DR|FB|FM|GS|GT|HA|HB|HC|HD|IA|I1|I2|I3|JR|LA|L4|L5|MB|M3|M4|NE|NF|NG|NH|NI|NJ|NP|SB|SC|SD|SE|ST|SU|SV|SW|XE|XY'
//     const eligibleBusinessAccountsArr = eligibleBusinessAccounts.split('|')
//     return !!eligibleBusinessAccountsArr.find(code => code === productSubCode)
//   }
//   return false
// }

// export const formatAmount = (amountToFormat) => {
//   /* --
//   1. toLocaleString is used to format the number as 1,000,00
//   2. Requirement - must have 2 digits after decimal
//   hence maximumFractionDigits, minimumFractionDigits properties is used to forcefully add two digits even when there are no decimal point.
//   3. return the amount as $1,000,00.00
//   4. if the parameter passed to function is not of type number, return null.
//   -- */
//   if (!isNaN(amountToFormat)) {
//     if (amountToFormat >= 0) {
//       const formattedAmount = Number(amountToFormat).toLocaleString('en-AU', { style: 'decimal', maximumFractionDigits: 2, minimumFractionDigits: 2 })
//       return `$${formattedAmount}`
//     } else {
//       const formattedAmount = Number(Math.abs(amountToFormat)).toLocaleString('en-AU', { style: 'decimal', maximumFractionDigits: 2, minimumFractionDigits: 2 })
//       return `-$${formattedAmount}`
//     }
//   }
//   return null
// }

// export const formatAmtOptionalDecimal = (amount) => {
//   const amountVal = amount.split('.')
//   const amountValArr = amountVal[0].split('')
//   let index = 3
//   while (index < amountValArr.length) {
//     amountValArr.splice(amountValArr.length - index, 0, ',')
//     index += 4
//   }
//   amountVal[0] = amountValArr.join('')
//   amount = amountVal.join('.')
//   return amount
// }

// export const checkErrors = (...errors) => errors.some(error => error === true)

// export const checkConditions = (...conditions) => conditions.every(condition => condition === true)

// export const handleLock = (userType) => {
//   window.location.href = AppConstants.BUSINESS_AUTH_ADMIN.includes(userType) ? RSAConstants.LOCK_IB4B : RSAConstants.LOCK_IB
// }
// export const decodeSpecialChars = (str) => {
//   if (str) {
//     return str.replace(/(&#(\d+);)/g, function (match, capture, charCode) {
//       return String.fromCharCode(charCode)
//     })
//   }
// }

// /* str means original string, exp means part(s) of sring need to be bols ex: str: Hello exp: e|l */
// export const partOfStringBold = (str, exp) => {
//   if (!exp) {
//     return str
//   }
//   const boldListExp = new RegExp(exp, 'gi')
//   return str.replace(boldListExp, item => `<strong>${item}</strong>`)
// }

// export const formatDatewithHMS = (value) => {
//   if (value) {
//     const date = new Date(value)
//     const dateTime = date.toLocaleString({ hour: '2-digit', minute: 'numeric', second: 'numeric' })
//     let month = date.getMonth() + 1
//     if (month.toString().length === 1) {
//       month = `0${month}`
//     }
//     let day = date.getDate()
//     if (day.toString().length === 1) {
//       day = `0${day}`
//     }
//     return `${date.getFullYear()}-${month}-${day}T${dateTime.split(',')[1].trim()}`
//   }
// }

// export const checkForProfaneWords = content => {
//   const profaneWords = AppConstants.PROFANE_WORDS.split('|')
//   return content.split(' ').some(eachWord => !profaneWords.every(profaneWord => eachWord.toLowerCase() !== profaneWord.toLowerCase()))
// }

// /** appending accessType flag for corporate users */
// export const corporateUserCheckForPayees = (payload, userType) => {
//   if (!AppConstants.RETAIL_USERS.includes(userType)) {
//     return ({ ...payload, accessType: AppConstants.LETTER_G })
//   }
//   return payload
// }

// /* Check if the user account is eligible for NPP payments  */
// export const checkAccountNPPEligible = (account) => {
//   const isNPPEligible = Array.isArray(account.extraAttributes) && account.extraAttributes.find(attirbute => attirbute.key === PayAnyoneConstants.PAN_ACCOUNT_NPP_DEBIT_FLAG)
//   return isNPPEligible.value === 'Y'
// }

// export const detectIEorEdge = () => {
//   var ua = window.navigator.userAgent
//   var msie = ua.indexOf('MSIE ')
//   if (msie > 0) {
//     return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10)
//   }

//   var trident = ua.indexOf('Trident/')
//   if (trident > 0) {
//     var rv = ua.indexOf('rv:')
//     return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10)
//   }
//   var edge = ua.indexOf('Edge/')
//   if (edge > 0) {
//     return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10)
//   }
//   return false
// }

// export const generateLinks = reactSuffix => {
//   const urlSubstr = AppConstants.IB_URL_ACCOUNT_ACTIONS.split('?fromReactApp=')
//   const link = urlSubstr[0].concat('?fromReactApp=', reactSuffix, urlSubstr[1])
//   window.location.href = link
// }

// const getCardsAvailableFunds = (availableFunds) => {
//   let availableAmount
//   if (availableFunds < 0) {
//     availableAmount = formatAmount(0)
//   } else {
//     availableAmount = `${formatAmount(availableFunds)} +`
//   }
//   return availableAmount
// }

// const getIlsAvaliableFunds = (currentBalance, availableFunds) => {
//   let resultLoanFunds
//   if (availableFunds > 0) {
//     resultLoanFunds = `${formatAmount(availableFunds)} +`
//   } else if (availableFunds <= 0 && currentBalance < 0) {
//     resultLoanFunds = formatAmount(0)
//   } else if (availableFunds <= 0 && currentBalance >= 0) {
//     resultLoanFunds = `${formatAmount(0)} +`
//   }
//   return resultLoanFunds
// }

// const getLoansAvaliableFunds = (currentBalance, availableFunds) => {
//   let resultFunds
//   if (currentBalance >= 0) {
//     resultFunds = `${formatAmount(currentBalance)} +`
//   } else if (availableFunds <= 0 && currentBalance < 0) {
//     resultFunds = formatAmount(0)
//   } else if (availableFunds > 0 && currentBalance < 0) {
//     resultFunds = `${formatAmount(availableFunds)} +`
//   }
//   return resultFunds
// }

// const getNonLoansAndCardFunds = (availableFunds) => {
//   let availableAmount
//   if (availableFunds < 0) {
//     availableAmount = formatAmount(0)
//   } else {
//     availableAmount = `${formatAmount(availableFunds)}`
//   }
//   return availableAmount
// }

// const getAvailableFunds = (homeData) => {
//   let availableFunds
//   if (HomeConstants.NON_COMMERCIAL_CARD_TYPES.includes(getResponseKey(['parentAccountType', 'cmCode'], homeData)) ||
//     (getResponseKey(['parentAccountType', 'cmCode'], homeData) === 'PCP' && getResponseKey(['accountType', 'cmCode'], homeData) !== '990')) {
//     availableFunds = getResponseKey(['balances', 1, 'amountDetails', 'amount'], homeData)
//     availableFunds = getCardsAvailableFunds(availableFunds)
//   } else if (getResponseKey(['parentAccountType', 'cmCode'], homeData) === 'ILS' &&
//     (HomeConstants.ILS_SUB_PRODUCT_CODES.includes(getResponseKey(['accountType', 'cmCode'], homeData)))) {
//     availableFunds = getResponseKey(['balances', 1, 'amountDetails', 'amount'], homeData)
//     availableFunds = getIlsAvaliableFunds(getResponseKey(['balances', 0, 'amountDetails', 'amount'], homeData), availableFunds)
//   } else if (getResponseKey(['parentAccountType', 'cmCode'], homeData) === 'ILS' &&
//     !(HomeConstants.ILS_SUB_PRODUCT_CODES.includes(getResponseKey(['accountType', 'cmCode'], homeData)))) {
//     availableFunds = getResponseKey(['balances', 1, 'amountDetails', 'amount'], homeData)
//     availableFunds = getLoansAvaliableFunds(getResponseKey(['balances', 0, 'amountDetails', 'amount'], homeData), availableFunds)
//   } else if (checkConditions(getResponseKey(['parentAccountType', 'cmCode'], homeData) !== 'ILS',
//     !HomeConstants.CARD_TYPES.includes(getResponseKey(['parentAccountType', 'cmCode'], homeData)))) {
//     availableFunds = getResponseKey(['balances', 1, 'amountDetails', 'amount'], homeData)
//     availableFunds = getNonLoansAndCardFunds(availableFunds)
//   }
//   return availableFunds || 'N/A'
// }

// export const availableFundsDisplay = (homeData, selectedAccountId) => {
//   let Balence = ''
//   homeData.map((data) => {
//     if (data.accountId === selectedAccountId) {
//       Balence = getAvailableFunds(data)
//     }
//   })
//   return Balence
// }

// export const handleTableNoDisplay = (no) => {
//   let finalNo = ''
//   if (no < 10) {
//     finalNo = '000' + no
//   } else if (no > 9 < 100) {
//     finalNo = '00' + no
//   } else if (no > 99 < 999) {
//     finalNo = '0' + no
//   } else {
//     finalNo = no
//   }
//   return finalNo
// }

// const checkForTransferIcon = (paymentType) => ((paymentType.includes('transfer') || paymentType.includes('Transfer')) && !(paymentType.includes('international') || paymentType.includes('International')))

// const checkForBpayIcon = (paymentType) => (paymentType.includes('bill') || paymentType.includes('Bill'))

// const checkForPANIcon = (paymentType) => (paymentType.includes('pay anyone') || paymentType.includes('Pay Anyone'))

// const checkForInternationalIcon = (paymentType) => (checkErrors(paymentType.includes('international'), paymentType.includes('International'), paymentType.includes('travel card'), paymentType.includes('Travel Card'), paymentType.includes('Foreign'), paymentType.includes('foreign')))

// const checkForCreditCardIcon = (paymentType) => (paymentType.includes('credit card') || paymentType.includes('travel card') || paymentType.includes('Credit Card') || paymentType.includes('Travel Card'))

// const checkForCharityIcon = (paymentType) => (paymentType.includes('charity') || paymentType.includes('Charity'))

// const checkForTaxIcon = (paymentType) => (paymentType.includes('tax') || paymentType.includes('Tax'))

// const checkForDebitIcon = (paymentType) => (paymentType.includes('direct debit') || paymentType.includes('Direct Debit'))

// const getPayrollAndIMTIcons = (paymentType) => {
//   let iconName = ''
//   if (paymentType.includes('payroll') || paymentType.includes('Payroll')) {
//     iconName = 'Pay Employees JSP'
//   } else if (paymentType.includes('imt') || paymentType.includes('IMT')) {
//     iconName = 'Global International'
//   } else {
//     iconName = 'Past Payments JSP'
//   }
//   return iconName
// }

// export const getPaymentQueueIcon = (paymentType) => {
//   let sPaymentTypeIcon = ''
//   if (paymentType.includes('Multiple')) {
//     sPaymentTypeIcon = 'Multiple Payment'
//   } else if (checkForTransferIcon(paymentType)) {
//     sPaymentTypeIcon = 'Transfer'
//   } else if (checkForBpayIcon(paymentType)) {
//     sPaymentTypeIcon = 'Bill Payment JSP'
//   } else if (checkForPANIcon(paymentType)) {
//     sPaymentTypeIcon = 'Pay Anyone'
//   } else if (checkForInternationalIcon(paymentType)) {
//     sPaymentTypeIcon = 'Global International'
//   } else if (checkForCreditCardIcon(paymentType)) {
//     sPaymentTypeIcon = 'Credit Debit Cards'
//   } else if (checkForCharityIcon(paymentType)) {
//     sPaymentTypeIcon = 'Charity'
//   } else if (checkForTaxIcon(paymentType)) {
//     sPaymentTypeIcon = 'Ato JSP'
//   } else if (checkForDebitIcon(paymentType)) {
//     sPaymentTypeIcon = 'Direct Debit JSP'
//   } else {
//     sPaymentTypeIcon = getPayrollAndIMTIcons(paymentType)
//   }
//   return sPaymentTypeIcon
// }

// export const accountNameDisplay = (item) => item.accountNickName === null ? item.accountName : item.accountNickName

// export const getAccountData = (homeaccounts) => {
//   let accounts = ['All accounts']
//   let accountPair = []
//   homeaccounts && homeaccounts.map((account) => {
//     const name = account.accountId.length === 16 ? `${accountNameDisplay(account)} (${formatCardNumber(account.accountId).join('')})` : `${accountNameDisplay(account)} (${account.branchCode} ${account.accountId})`
//     accountPair[name] = account.accountId
//     accounts.push(name)
//   })
//   return { accountNames: accounts, accountIdData: accountPair }
// }

// export const formatCardNumber = (cardNumber) => {
//   if (cardNumber !== undefined) {
//     const formattedNumber = cardNumber.split('')
//     formattedNumber.splice(4, 0, ' ')
//     formattedNumber.splice(9, 0, ' ')
//     formattedNumber.splice(14, 0, ' ')
//     return formattedNumber.concat()
//   }
// }

// export const isEqualIgnoreCase = (value1, value2) => {
//   return !!value1 && !!value2 && value1.toUpperCase() === value2.toUpperCase()
// }

// const Util = {
//   handleLogOut,
//   getCardName,
//   areEligibleCardsAvailable,
//   handleNavigationToExternalUrl,
//   updateURL,
//   formatMobileNumber,
//   getFeedbackId,
//   refreshURL,
//   formatCreditCardNumber,
//   formatCardNumber,
//   getErrorUiFragment,
//   validateAllElements,
//   onBrowserBackBtnClick,
//   getOSName,
//   cookieHandler,
//   getResponseKey,
//   getIbUserType,
//   getActiveTab,
//   renameSuccessURl,
//   getMonthName,
//   formatDates,
//   getTodayDate,
//   updateIBDomainURL,
//   csoURLUpdate,
//   clearAnalyticsData,
//   getKeyvalueForArrowDown,
//   checkBusinessAccount,
//   formatAmount,
//   formatAmtOptionalDecimal,
//   checkErrors,
//   checkConditions,
//   handleLock,
//   decodeSpecialChars,
//   partOfStringBold,
//   formatDatewithHMS,
//   checkForProfaneWords,
//   corporateUserCheckForPayees,
//   checkAccountNPPEligible,
//   detectIEorEdge,
//   generateLinks,
//   availableFundsDisplay,
//   handleTableNoDisplay,
//   checkMenuIdAvailiable,
//   getPaymentQueueIcon,
//   formatAmountWithK,
//   accountNameDisplay,
//   getAccountData,
//   isEqualIgnoreCase
// }

// export default Util
