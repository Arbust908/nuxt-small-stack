export default function (req, res, next) {
  // Detecting if cloudflare is send the correct country
  if (req.headers['cf-ipcountry']) {
    req.headers.country = req.headers['cf-ipcountry']
  } else {
    // We set Argentina as the default country
    req.headers.country = 'AR'
  }

  next()
}
