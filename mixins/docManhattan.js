export default {
  methods: {
    /**
     * Formatea cualquier fecha con Moment
     * Se le puede pazar 'humanize' para obtener fecha legible
     * @param {*} date una fecha a transformar
     * @param {String} format el formato en devolver 'DD-MM-YYYY hh:mm' como default
     */
    clockwork(date, format = 'DD-MM-YYYY hh:mm') {
      if (format === 'humanize') {
        return this.$moment(date).fromNow()
        // return this.$moment(date)
        //     .locale('es')
        //     .fromNow();
      }
      return this.$moment(date).format(format)
    },
    /**
     * Devuelve la fecha humanizada
     * Proxy de clockwork con formato 'humanize'
     * @param {*} date fecha a transformar
     */
    humanizeDate(date) {
      return this.clockwork(date, 'humanize')
    },
    compareDate(date1, date2 = 'now') {
      date2 = date2 === 'now' ? this.$moment() : date2
      if (date1 > date2) {
        return -1
      } else if (date2 > date1) {
        return 1
      }
      return 0
    },
  },
}
