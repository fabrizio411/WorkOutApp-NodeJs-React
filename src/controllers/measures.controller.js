import Measure from "../models/measure.model"

export const getMeasures = async (req, res) => {
    try {
        const measures = await Measure.find({ user: req.user.id })

        res.json(measures)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const createMeasure = async (req, res) => {
    const { data } = req.body

    try {
        const newMeasure = new Measure({
            data
        })
        const savedMeasure = await newMeasure.save()

        res.json(savedMeasure)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const updateMeasure = async (req, res) => {
    const { data } = req.body

    try {
        const measure = await Measure.findByIdAndUpdate(
            req.params.id, 
            { data },
            {new: true}
        ).where({ user: req.user.id })

        if (!measure) return res.status(404).json({message: 'Measure not found'})

        res.json(measure)
    } catch (error) {
        res.status(500).json({message: error.message})
    } 
}

export const deleteMeasure = async (req, res) => {
    try {
        const measure = await Measure.findByIdAndDelete(req.params.id).where({ user: req.params.id })

        if (!measure) return res.status(404).json({message: 'Measure not found'})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

