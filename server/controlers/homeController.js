// GET Index
exports.homepage = async (req, res) => {
    const locals = {
        title: 'WorkOutApp',
        description: 'Free NodeJs Notes App'
    }
    res.render ('index', {
        locals,
        layout: '../views/layouts/home'
    })
}