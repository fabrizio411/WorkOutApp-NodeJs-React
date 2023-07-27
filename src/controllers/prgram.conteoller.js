import Program from '../models/program.model.js'
import Routine from '../models/routine.model.js'

export const getProgram = async (req, res) => {
    try {
        const program = await Program.findOne({ user: req.user.id })
        if (!program) res.sendStatus(404).json({message: "Program not found"})
    
        // En caso de que no haya rutinas para el dia
        const restDayObject = {
            name: 'RestDay'
        }
    
        // Por cada dia de la semana
        for (let i = 0; i < program.week.length; i++) {
            if (program.week[i].length === 0) program.week[i] = [restDayObject]
            else {
                const routinesArray = []
                // Por cada rutina del dia
                for (let x = 0; x < program.week[i].length; x++) {
                    const routine = await Routine.findById(program.week[i][x])
                    routinesArray.push(routine)
                }
    
                // Se cambian los datos de ID por el objeto de la rutina
                program.week[i] = routinesArray
            }
        }
    
    
        res.json(program)
    } catch (error) {
        res.status(500).json({message: error.message})
    }


}

export const updateProgram = async (req, res) => {
    // Estructura de datos esperada: { week: [[], [], [], [], [], [], []] }
    try {
        const { week } = req.body
        const updatedProgram = await Program.findByIdAndUpdate(
            req.params.id,
            {
                week: week
            }
        )
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}