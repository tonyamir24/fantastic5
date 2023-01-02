const express = require("express");
var path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const Search =["bali","rome","inca","annapurna","santorini","paris"];
const Account ={Username:"admin" , Password:"admin"};
var session=require('express-session');
app.use(session({
      
    
      resave:false,
      saveUninitialized:true,
      secret:'ssh!..',
     
     
     
    }));



// var MongoClient = require('mongodb').MongoClient;



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/Home',(req,res)=>{
    if (req.session.user)
    res.render('home')
    else 
    res.redirect('/');
})
app.get('/Hiking',(req,res)=>{
    if (req.session.user)
    res.render('hiking')
    else 
    res.redirect('/');
})
app.get('/Cities',(req,res)=>{
    if (req.session.user)
    res.render('cities')
    else 
    res.redirect('/');
})
app.get('/Islands',(req,res)=>{
    if (req.session.user)
    res.render('islands')
    else 
    res.redirect('/');
})

app.get('/wanttogo',async(req,res)=>{

 

    if (req.session.user){


      res.render('wanttogo',{ourlist:[]})
//       MongoClient.connect("mongodb://127.0.0.1:27017",function(err,client){
//           if(err) throw err;
//           var db =client.db('myDB')

//           db.collection('myCollection').findOne({Username:req.session.user }).then((user) => {
//             if(user){
//               const wantToGo= user.WantToGo
//               res.render('wanttogo',{ourlist:user.WantToGo})
             
//              } 
                      
//                   });

//  })
}
    else 
    res.redirect('/');
})
app.get('/inca',(req,res)=>{
    if (req.session.user)
    res.render('inca',{mssg:""})
    else 
    res.redirect('/');
})
app.get('/annapurna',(req,res)=>{
    if (req.session.user)
    res.render('annapurna',{mssg:""})
    else 
    res.redirect('/');
})
app.get('/paris',(req,res)=>{
    if (req.session.user)
    res.render('paris',{mssg:""})
    else 
    res.redirect('/');
})
app.get('/rome',(req,res)=>{
    if (req.session.user)
    res.render('rome',{mssg:""})
    else 
    res.redirect('/');
})
app.get('/bali',(req,res)=>{
    if (req.session.user)
    res.render('bali',{mssg:""})
    else 
    res.redirect('/');
})
app.get('/santorini',(req,res)=>{
    if (req.session.user)
    res.render('santorini',{mssg:""})
    else 
    res.redirect('/');
})

app.get('/',function(req,res){
    if (req.session.user)
    res.render('home')
    else
    res.render('login',{mssg:""})
  });

app.get('/search',(req,res)=>{
    if (!req.session.user)
    res.redirect('/');
    else 
    res.render('searchresults',{ourlist:[],added:""});
})
app.get('/registration',(req,res)=>{
    if (!req.session.user)
  res.render('registration',{mssg:""})
  else 
  res.render('home')
})
app.get('/register',(req,res)=>{
    if (!req.session.user)
  res.render('registration',{mssg:""})
  else 
  res.render('home')
})



app.post('/bali',async (req,res)=>{
   if(req.session.user){


  //   MongoClient.connect("mongodb://127.0.0.1:27017",function(err,client){
  //     if(err) throw err;
  //     var db =client.db('myDB')
  
  //     db.collection('myCollection').findOne({Username:req.session.user }).then((user) => {
  //       if(user){
  //         const wantToGo= user.WantToGo
     
  //          if(!wantToGo || !wantToGo.find(({ City }) => City === 'bali' )){
     
            
  //           db.collection('myCollection').findOneAndUpdate({Username:req.session.user},{$push:{ WantToGo:{'City':'bali'}}});
     
  //            res.render('bali',{mssg:"Added!!"})}
            
  //            else{
  //              res.render('bali',{mssg:"Already Added!!"})
     
  //            }
           
           
              
  //            }
                  
  //             });
  
  // })
  

  res.render('bali',{mssg:"Cannot add with no DataBase"})

    }

   else{
       res.redirect('/');
     }


})



app.post('/annapurna',async (req,res)=>{
  if(req.session.user){
    res.render('annapurna',{mssg:"Cannot add with no DataBase"})

  //   MongoClient.connect("mongodb://127.0.0.1:27017",function(err,client){
  //     if(err) throw err;
  //     var db =client.db('myDB')
  
  //     db.collection('myCollection').findOne({Username:req.session.user }).then((user) => {
  //       if(user){
  //         const wantToGo= user.WantToGo
     
  //          if(!wantToGo || !wantToGo.find(({ City }) => City === 'annapurna' )){
     
            
  //           db.collection('myCollection').findOneAndUpdate({Username:req.session.user},{$push:{ WantToGo:{'City':'annapurna'}}});
     
  //            res.render('annapurna',{mssg:"Added!!"})}
            
  //            else{
  //              res.render('annapurna',{mssg:"Already Added!!"})
     
  //            }
           
           
              
  //            }
                  
  //             });
  
  // })
  



    }

   else{
       res.redirect('/');
     }

})
app.post('/inca',async(req,res)=>{
  if(req.session.user){
    
    res.render('inca',{mssg:"Cannot add with no DataBase"})

  //   MongoClient.connect("mongodb://127.0.0.1:27017",function(err,client){
  //     if(err) throw err;
  //     var db =client.db('myDB')
  
  //     db.collection('myCollection').findOne({Username:req.session.user }).then((user) => {
  //       if(user){
  //         const wantToGo= user.WantToGo
     
  //          if(!wantToGo || !wantToGo.find(({ City }) => City === 'inca' )){
     
            
  //           db.collection('myCollection').findOneAndUpdate({Username:req.session.user},{$push:{ WantToGo:{'City':'inca'}}});
     
  //            res.render('inca',{mssg:"Added!!"})}
            
  //            else{
  //              res.render('inca',{mssg:"Already Added!!"})
     
  //            }
           
           
              
  //            }
                  
  //             });
  
  // })
    }

   else{
       res.redirect('/');
     }

})
app.post('/rome',async(req,res)=>{
  if(req.session.user){

    res.render('rome',{mssg:"Cannot add with no DataBase"})

  //   MongoClient.connect("mongodb://127.0.0.1:27017",function(err,client){
  //     if(err) throw err;
  //     var db =client.db('myDB')
  
  //     db.collection('myCollection').findOne({Username:req.session.user }).then((user) => {
  //       if(user){
  //         const wantToGo= user.WantToGo
     
  //          if(!wantToGo || !wantToGo.find(({ City }) => City === 'rome' )){
     
            
  //           db.collection('myCollection').findOneAndUpdate({Username:req.session.user},{$push:{ WantToGo:{'City':'rome'}}});
     
  //            res.render('rome',{mssg:"Added!!"})}
            
  //            else{
  //              res.render('rome',{mssg:"Already Added!!"})
     
  //            }
           
           
              
  //            }
                  
  //             });
  
  // })
    }

   else{
       res.redirect('/');
     }
})
app.post('/santorini',async(req,res)=>{
  if(req.session.user){
    res.render('santorini',{mssg:"Cannot add with no DataBase"})


  //   MongoClient.connect("mongodb://127.0.0.1:27017",function(err,client){
  //     if(err) throw err;
  //     var db =client.db('myDB')
  
  //     db.collection('myCollection').findOne({Username:req.session.user }).then((user) => {
  //       if(user){
  //         const wantToGo= user.WantToGo
     
  //          if(!wantToGo || !wantToGo.find(({ City }) => City === 'santorini' )){
     
            
  //           db.collection('myCollection').findOneAndUpdate({Username:req.session.user},{$push:{ WantToGo:{'City':'santorini'}}});
     
  //            res.render('santorini',{mssg:"Added!!"})}
            
  //            else{
  //              res.render('santorini',{mssg:"Already Added!!"})
     
  //            }
           
           
              
  //            }
                  
  //             });
  
  // })
    }

   else{
       res.redirect('/');
     }
})

app.post('/paris',async(req,res)=>{
  if(req.session.user){

    res.render('paris',{mssg:"Cannot add with no DataBase"})

  //   MongoClient.connect("mongodb://127.0.0.1:27017",function(err,client){
  //     if(err) throw err;
  //     var db =client.db('myDB')
  
  //     db.collection('myCollection').findOne({Username:req.session.user }).then((user) => {
  //       if(user){
  //         const wantToGo= user.WantToGo
     
  //          if(!wantToGo || !wantToGo.find(({ City }) => City === 'paris' )){
     
            
  //           db.collection('myCollection').findOneAndUpdate({Username:req.session.user},{$push:{ WantToGo:{'City':'paris'}}});
     
  //            res.render('paris',{mssg:"Added!!"})}
            
  //            else{
  //              res.render('paris',{mssg:"Already Added!!"})
     
  //            }
           
           
              
  //            }
                  
  //             });
  
  // })
    }

   else{
       res.redirect('/');
     }
})




app.post('/',async (req,res,next)=>{
    var username = req.body.username;
    var password = req.body.password;



    // MongoClient.connect("mongodb://127.0.0.1:27017",function(err,client){
    //   if(err) throw err;
    //   var db =client.db('myDB')

    //   db.collection('mycollection').findOne({Username:username , Password:password}).then((user) => {
        
        
        // if(!user)
        if(!(Account.Username===username && Account.Password===password))
        res.render('login',{mssg:"Username or password incorrect!"});
        
        
        else{
          
          req.session.user=username;
          // req.session.id=user._id;
          res.render('home');
      }


  //     })

  // });
})
 
  app.post('/register',async (req,res)=> {
    var username = req.body.username;
    var password = req.body.password;
    if(username==='' || password===''){
        res.render('registration',{mssg:"Please fill all the requirments"});

    }
    else{

      res.render('registration',{mssg:"Cannot add with no DataBase"});
      // MongoClient.connect("mongodb://127.0.0.1:27017",function(err,client){
      //     if(err) throw err;
      //     var db =client.db('myDB')

      //     db.collection('myCollection').findOne({Username:username }).then((user) => {
      //                // if(err) throw err;    
      //                // console.log(user);    
      //                if(!user){
      //                    db.collection('myCollection').insertOne({ Username:username, Password:password});
      //                  res.redirect('/')
      //                  }
      //                    else{
      //                      res.render('registration',{mssg:"Username already exists"});
      //                  }  
                      
      //             });

//  })

      


        
    }
    
  });



 

  app.post('/search',async (req,res)=>{

    if(req.session.user){


    const Res=(req.body.Search).toLowerCase();

      
      const search = Search.filter(s => s.includes(Res));
             // console.log(search)
            if(!Res){
              res.render('searchresults',{ourlist:[] ,mssg:"Please enter a destination"})
      
          }
          else if(search.length !==0){
              res.render('searchresults',{ourlist:search ,mssg:""})
          }else{
              res.render('searchresults',{ourlist:[] ,mssg:"Destination is not found"})
          }
      



        
          
                      
                

  }

                  else{
                    res.redirect('/');
                  }
  });
  


  app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
  });