import Card from '../Cards/CardsIU'
import React, { useEffect ,useState} from 'react'
import firebaseDb from "../../firebase";
import { MDBCol, MDBIcon } from "mdbreact";
import '../test.css'
import "mdbreact/dist/css/mdb.css";
const Formations = () =>  {
    
    
    const [formations, setformations] = useState([]);
    const [filtre, setfiltre] = useState("");
    const [pic, setpic] = useState("");
    useEffect(() => {
      var tab = []

      firebaseDb.firestore().collection("Formations").get().then(snapshot => {

          if (snapshot.empty) {
              // console.log("empty")
              setformations({
              })
          } else {
              // console.log(snapshot)
              var dat;
              snapshot.forEach(doc => {
                  dat = {...doc.data(), id: doc.id};
                  let storageRef = firebaseDb.storage().ref("images Formations/"+dat.obj.Image);
                  storageRef.getDownloadURL()
                      .then(url => {setpic(url) 
                      })
                      .catch(e=>{console.log(e);})
                  tab = [
                      ...tab,
                      dat,
                      
                  ]

                  
              });
             
              setformations(
                  {
                      ...formations,
                      tab: tab
                  }
              )
          }
      


      }).catch(error => console.log(error))

  }, [])
   
        return (
            <>
             <MDBCol md="6" className="search-marg">
      <div className="input-group md-form form-sm form-1 pl-0">
        <div className="input-group-prepend">
          <span className="input-group-text blue lighten-3" id="basic-text1">
            <MDBIcon className="text-white" icon="search" />
          </span>
        </div>
        <input className="form-control my-0 py-1" type="text" placeholder="Search" aria-label="Search"  onChange={(event) =>{
        setfiltre(event.target.value);
    }}/>
     </div>
    </MDBCol>
            <div className="container-fluid d-flex justify-content-center">
               <div className="row">
               {  Object.entries(Object.assign({}, formations.tab)).map((key, value) => { 
                   return(
               <div className="col-md-6" key={key[1].id}>
                 <div className="card text-center shadow" >
        <div className="overflow">
        <Link to={"/afficheformation/"+key[1].id} ><img height="190"
         src={"https://firebasestorage.googleapis.com/v0/b/firsttest-b7475.appspot.com/o/images%20Formations%2F"+key[1].obj.Image+"?alt=media&token=39971314-3f2c-4b25-b0d1-7c820b12489c"} 
        alt="logo" className="card-img-top" /></Link>
        </div>
        <div className="card-body text-dark">
            <h4 className="card-title"> <Link to={"/afficheformation/"+key[1].id} style={linkstyle}>{key[1].obj.Domaine}</Link></h4>
            <p className="card-text text-dark">
             {key[1].obj.Nom}<br/>
             {key[1].obj.DateDebut}<br/>
             <hr/>
             { Object.keys(key[1].obj.Tags).map(num => {
               return (
                 <input key={key[1].obj.Tags[num].id} type="button" className="myinput" value={'#'+key[1].obj.Tags[num].title}  />);
             })}
            </p>
            <p className="card-text"></p>
           
           
        </div>
    </div>
                    
                </div>
                   );
               })} 
               </div>
            </div>
            </>
        )
    }

export default  Formations;