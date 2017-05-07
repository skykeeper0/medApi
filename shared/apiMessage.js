// #########################################
// RESPONSE CODES MESSAGES.
// #########################################
// # 1-49   = System messages.
// # 50-999 = Application error messages.
// # 1000-N = Application success messages.
// #########################################

module.exports = {
  RESPONSE_CODES_MESSAGES: {
    1: {
      message: 'Internal server error',
      status: 500,
      type: 'system_error',
    },
    2: {
      message: 'Unauthorized',
      status: 401,
      type: 'system_error',
    },
    3: {
      message: 'Forbidden',
      status: 403,
      type: 'system_error',
    },
    4: {
      message: 'Not found',
      status: 404,
      type: 'system_error',
    },
    50: { // wishListController
      message: 'The requested video already has audio description',
      status: 400,
      type: 'error',
    },
    52: { // wishListController
      message: 'The requested wish list item does not exist',
      status: 400,
      type: 'error',
    },
    53: { // audioClipController
      message: 'You are trying to add an audio clip to an existent video',
      status: 400,
      type: 'error',
    },
    54: { // wishListController
      message: 'Error saving data',
      status: 400,
      type: 'error',
    },
    55: { // videoController
      message: 'The requested video was not found',
      status: 400,
      type: 'error',
    },
    56: { // videoController
      message: 'The video you are trying to create already exists',
      status: 400,
      type: 'error',
    },
    57: { // videoController
      message: 'You are trying to update a video that does not exist',
      status: 400,
      type: 'error',
    },
    58: {
    },
    59: { // videoController
      message: 'No videos to delivery at this time',
      status: 400,
      type: 'error',
    },
    60: { // audioClipsController
      message: 'The audioclip just accepts requests with a file attached',
      status: 400,
      type: 'error',
    },
    61: { // wishListController
      message: 'No wish list items to delivery at this time',
      status: 400,
      type: 'error',
    },
    62: { // wishListController
      message: 'The wish list item you are trying to update does not exist',
      status: 400,
      type: 'error',
    },
    63: { // ALL
      message: 'The token is invalid',
      status: 400,
      type: 'error',
    },
    1000: { // articleController
      message: 'Article  successfully retrieved',
      status: 200,
      type: 'success',
    },
    1001: { // topicController
      message: 'Topic was saved successfully',
      status: 200,
      type: 'success',
    },
    1002: { // testController
      message: 'Test was saved successfully',
      status: 200,
      type: 'success',
    }
  },

  getResponseByCode: function(code) {
    const content = this.RESPONSE_CODES_MESSAGES[code];
    const type = content.type;
    const ret = {
      type,
      code,
      status: this.RESPONSE_CODES_MESSAGES[code].status,
      message: this.RESPONSE_CODES_MESSAGES[code].message,
    };
    if (type === 'success') {
      ret.result = null;
    }
    return ret;
  },
};
