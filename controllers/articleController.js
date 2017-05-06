// Application modules.
const apiMessages = require('./../shared/apiMessages');
const { Article } = require('./../models/models');

// The controller itself.
const articleController = {

    addArticle: (req, res) => {

      // First step: create new article object.
      const newArticle = new Article({
        id = 
      });

      // Saving the audio clip into the db.
      newArticle.save((errSaveAudioClip, audioClip) => {
        if (errSaveAudioClip) {
          console.log(errSaveAudioClip)
          const ret = apiMessages.getResponseByCode(1);
          res.status(ret.status).json(ret);
        }

        res.status(200).json(audioClip);
      })

    }
};

module.exports = articleController;
