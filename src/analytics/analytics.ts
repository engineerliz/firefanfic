import firebase from 'firebase/compat/app';
import 'firebase/compat/analytics';
import { PageData } from './models/AnalyticModels';

const hashRegex = /#.*$/

export const trackPageView = (pageName: string) => {
  firebase.analytics().logEvent('page_view', {
    name: pageName,
  });
}

// function canonicalUrl() {
//   const tags = document.getElementsByTagName('link')
//   for (let i = 0, tag; tag = tags[i]; i++) {
//     if (tag.getAttribute('rel') === 'canonical') {
//       return tag.getAttribute('href')
//     }
//   }
// }

// function currentUrl(search: string) {
//   const canonical = canonicalUrl()
//   if (!canonical) return window.location.href.replace(hashRegex, '')
//   return canonical.match(/\?/) ? canonical : canonical + search
// }

export const getPageData = (pageData = {}): PageData => {
  const { title, referrer } = document
  const { location, innerWidth, innerHeight } = window
  const { hash, search, href, pathname } = location
  const page: PageData = {
    title: title,
    url: href,
    path: pathname,
    hash: hash,
    search: search,
    width: innerWidth,
    height: innerHeight,
  }
  if (referrer && referrer !== '') {
    page.referrer = referrer
  }

  return {
    ...page,
    /* .page() user overrrides */
    ...pageData
  }
}