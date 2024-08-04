namespace my.bookshop;

entity Books {
  key ID          : Integer;
      title       : String;
      stock       : Integer;

      @validation: {
        message: 'i18n>releaseDate',
        handler: 'srv/handlers/DateChecks.js'
      }
      @mandatory
      releaseDate : Date
}
