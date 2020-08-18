const { validation } = require(`./validation/document-validation`);

exports["cloud-document-vaidation"] = (req, res) => {

   res.status(validation(req.query.document, req.query.type) ? 200 : 400);

}
