class HomeController{
    index(req, res){
        res.json({
            message: "tudo ok",
        });
    }
}

export default new HomeController();