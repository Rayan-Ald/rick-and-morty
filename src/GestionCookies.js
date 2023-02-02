import Cookies from "js-cookie";

export default class Acceuil {
  addFavoris(id) {
    const cookieValue = Cookies.get('favorisCookies');
    if (!cookieValue) return Cookies.set('favorisCookies', id)
    let cookies = cookieValue.split(',')
    cookies.push(id)
    Cookies.set('favorisCookies', Array.from(new Set(cookies)))

  }
}