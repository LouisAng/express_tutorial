module.exports = function(app, fs)
{
    app.get('/',function(req,res){
        res.render('index', {
        	title: "MY HOMEPAGE",
        	length: 5
        })
     });

    app.get('/list', function (req, res) {
    	fs.readFile( __dirname + "/../data/" + "user.json", 'utf8', function (err, data) {
           console.log( data );
           res.end( data );
       });
    })
    
    app.get('/chart_bar', function (req, res) {
    	res.render('chartBar', {
    		title: "chart_bar"
    	})
    })

    app.get('/chart_line', function (req, res) {
    	res.render('chartLine', {
    		title: "chart_line"
    	})
    })

    app.get('/chart_pie', function (req, res) {
    	res.render('chartPie', {
    		title: "chart_pie"
    	})
    })

}