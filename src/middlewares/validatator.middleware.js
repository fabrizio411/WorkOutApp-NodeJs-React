export const validateSchema = (schema) => (req, res, next) => {
    try {
        // Compara el req.body con el schema 
        schema.parse(req.body)
        next()
    } catch (error) {
        return res.status(400).json({ error: error.errors.map(error => error.message) })
    }

}