const { validation } = require(`./validation/document-validation`);

exports["cloud-document-validation"] = (req, res) => {

   res.status(validation(req.query.document, req.query.type) ? 200 : 400).send("");

}
