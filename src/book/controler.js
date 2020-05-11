import Bugalt from "./model"

const bugaltControler = {
    //отримати всі
    async get: function (request, response) {
        try {
            const list = await Bugalt.find(makeQueryObject(req.query));
            response.send(list);
        }
            catch(error){
            response.status(500).send(error);
        }
    
    },
    
    async getByCountOfChildsAndPosada(req,res){
        function makeQueryObject(query){
            let result = {};        
            if (query.data){
                result.data = {"$lte":(query.countOfChilds),"$eq":(query.posada)};
            }   
            return result; 
        }
        try {
            const list = await Neww.findByData.findByData(makeQueryObject(req.params.count));
            response.send(list);
        }
            catch(error){
            response.status(500).send(error);
        }
    },

    async post (req, res) {
    try {
        const bugalt = new bugalt(req.body);
        await bugalt.save();
        res.send(bugalt);

        } catch (error) {
        res.status(500).send(error);
        }
    },
    async delete (req, res) {
        try {
            const bugalt = await Bugalt.findByIdAndDelete(req.params.id);
            if (!bugalt)
                res.status(404).send("Not found");
            res.send(bugalt);
        } catch (error) {
            res.status(500).send(error);
        }
    },

    async patch(req, res) {
        try {
            const bugalt = await Bugalt.findByIdAndUpdate(req.params.id, req.body,  {new: true});
            if (!bugalt)
                res.status(404).send("Not found");
            await Bugalt.save();
            res.send(bugalt);
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

export default bugaltControler;