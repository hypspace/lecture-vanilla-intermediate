class Booking {
  constructor(show, date) {
    this._show = show
    this._date = date
  }

  get hasTailback() {
    return this._show.hasOwnProperty('tailback') && !this.isPeakDay
  }

  get basePrice() {
    let result = this._show.price

    if (this.isPeakDay) {
      result += Math.round(result * 0.15)
    }

    return result
  }
}

class PremiumBooking extends Booking {
  constructor(show, date, extras) {
    super(show, date)
    this._extras = extras
  }

  get hasTailback() {
    return this._show.hasOwnProperty('tailback')
  }

  get basePrice() {
    return Math.round(super.basePrice + this._extras.PremiumFee)
  }

  get hasDinner() {
    return this._extras.hasOwnProperty('dinner') && !this.isPeakDay
  }
}

const booking = new Booking(show, date)
const premiumBooking = new PremiumBooking(show, date, extras)
