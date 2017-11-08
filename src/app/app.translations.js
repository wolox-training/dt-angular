angular.module('wbooks').config(function($translateProvider) {
  const spanish = {
    WBOOKS_TITLE: 'Wbooks!',
    SEARCH_PLACEHOLDER: 'Buscar...',
    SELECT_FILTER: 'Seleccionar filtro',
    NAME: 'Nombre',
    AUTHOR: 'Autor',
    RETURN: 'Volver',
    SUGESTIONS: 'Sugerencias',
    COMMENTS: 'Comentarios',
    ADD_COMMENT: 'Agregar comentario',
    SEND: 'Enviar',
    RENT: 'Alquilar',
    LOGIN: 'Iniciar sesi\u00F3n',
    EMAIL: 'Email',
    PASSWORD: 'Contrase\u00F1a',
    CANCEL: 'Cancelar',
    ACCEPT: 'Aceptar',
    WRONG_EMAIL: 'El email debe tener un formato valido',
    WRONG_PASSWORD: 'La contrase\u00F1a debe tener por lo menos una letra y un numero',
    SHORT_PASSWORD: 'La contrase\u00F1a debe tener por lo menos 8 caracteres',
    LONG_PASSWORD: 'La contrase\u00F1a debe tener menos de 52 caracteres',
    LOGOUT: 'Cerrar sesion',
    REGISTER: 'Registrarse',
    SURNAME: 'Apellido',
    WRONG_SURNAME: 'El apellido solo puede tener letras',
    WRONG_NAME: 'El nombre solo puede tener letras',
  }
  const english = {
    WBOOKS_TITLE: 'Wbooks!',
    SEARCH_PLACEHOLDER: 'Search...',
    SELECT_FILTER: 'Select filter',
    NAME: 'Name',
    AUTHOR: 'Author',
    RETURN: 'Return',
    SUGESTIONS: 'Sugestions',
    COMMENTS: 'Comments',
    ADD_COMMENT: 'Add comment',
    SEND: 'Send',
    RENT: 'Rent',
    LOGIN: 'Login',
    EMAIL: 'Email',
    PASSWORD: 'Password',
    CANCEL: 'Cancel',
    ACCEPT: 'Accept',
    WRONG_EMAIL: 'Email should have a valid format',
    WRONG_PASSWORD: 'Password should have at least one letter and one number',
    SHORT_PASSWORD: 'Password should have at least 8 characters',
    LONG_PASSWORD: 'Password should have less than 52 characters',
    LOGOUT: 'Logout',
    REGISTER: 'Register',
    SURNAME: 'Surname',
    WRONG_SURNAME: 'Surname should have only letters',
    WRONG_NAME: 'Name should have only letters',
  }
  $translateProvider.translations('es', spanish);
  $translateProvider.translations('en', english);
  $translateProvider.preferredLanguage('es');
});
